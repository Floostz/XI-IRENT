import { Component } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import styles from '../../styles/Navbar.module.css';

const Navbar: Component = () => {
  const location = useLocation();

  return (
    <nav class={styles.navbar}>
    <div class={styles.logo}>
      {location.pathname === "/product" ? (
        <div class={styles.searchContainer}>
          <img src="/src/assets/search-normal.svg" alt="Search" class={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search products..."
            class={styles.searchInput}
          />
        </div>
      ) : (
        <img src="src/assets/fonts/logo1.png" alt="XIIRENT" />
      )}
    </div>
      
      <div class={styles.navLinks}>
        <A href="/" class={location.pathname === "/" ? styles.active : ""}>Home</A>
        <A href="/price" class={location.pathname === "/price" ? styles.active : ""}>Pricelist</A>
        <A href="/product" class={location.pathname === "/product" ? styles.active : ""}>Product</A>
        <A href="/contact" class={location.pathname === "/contact" ? styles.active : ""}>Contact</A>
      </div>
      
      <div class={styles.buttonGroup}>
        <A href="/login" class={styles.loginButton}>LOGIN</A>
      </div>
    </nav>
  );
};

export default Navbar;