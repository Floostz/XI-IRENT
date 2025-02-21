import { Component, createSignal, onMount } from 'solid-js';
import { A, useNavigate, useLocation } from '@solidjs/router';
import Swal from 'sweetalert2';
import styles from '../../styles/Navbar.module.css';

const Navbar: Component = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);

  onMount(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');

  });
  const handleLogout = () => {
    Swal.fire({
      title: 'Logout?',
      text: 'Anda yakin ingin keluar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Logout',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loggedInUser');  // Menghapus data pengguna
        setIsLoggedIn(false);
        Swal.fire('Logout Berhasil!', 'Anda telah keluar.', 'success');
        setTimeout(() => navigate('/login'), 2000);
      }
    });
  };
  

  return (
    <nav class={styles.navbar}>
      {/* Logo */}
      <div class={styles.logo}>
        {location.pathname.startsWith("/product") ? (
          <div class={styles.searchContainer}>
            <img src="/src/assets/search-normal.svg" alt="Search" class={styles.searchIcon} />
            <input type="text" placeholder="Search products..." class={styles.searchInput} />
          </div>
        ) : (
          <img src="/src/assets/fonts/logo1.png" alt="XIIRENT" loading="lazy" />
        )}
      </div>

      {/* Nav Links */}
      <div class={styles.navLinks}>
        <A href="/landing" class={location.pathname === "/landing" ? styles.active : ""}>Home</A>
        <A href="/price" class={location.pathname === "/price" || location.pathname === "/warnet" ? styles.active : ""}>Pricelist</A>
        <A href="/product" class={location.pathname.startsWith("/product") ? styles.active : ""}>Product</A>
        <A href="/contact" class={location.pathname === "/contact" ? styles.active : ""}>Contact</A>
      </div>

      {/* Tombol Login / Logout */}
      {isLoggedIn() ? (
        <button class={styles.loginButton} onClick={handleLogout}>LOGOUT</button>
      ) : (
        <A href="/login" class={styles.loginButton}>LOGIN</A>
      )}
    </nav>
  );
};

export default Navbar;
