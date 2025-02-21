import { Component, createSignal, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { toast } from 'solid-toast';
import styles from './logins.module.css';
import Logo from '../../assets/xirents.png';
import { FaSolidUser, FaSolidLock } from 'solid-icons/fa';

const LoginComponent: Component = () => {
  const navigate = useNavigate();

  // State untuk input username & password
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');

  // Cek apakah user sudah login saat halaman dimuat
  onMount(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/landing'); // Redirect ke halaman utama jika sudah login
    }
  });

  const handleLogin = (e: Event) => {
    e.preventDefault();

    const user = username().trim();
    const pass = password().trim();

    if (!user || !pass) {
      toast.error('Username dan password tidak boleh kosong!', {
        position: 'top-center',
        duration: 3000,
      });
      return;
    }

    // Ambil semua user dari localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Cek apakah ada akun yang cocok
    const foundUser = storedUsers.find(
      (u: { username: string; password: string }) => u.username === user && u.password === pass
    );

    if (foundUser) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser)); 

      toast.success(`Selamat datang, ${user}!`, {
        position: 'top-center',
        duration: 2000,
      });

      setTimeout(() => navigate('/landing'), 2000);
    } else {
      toast.error('Username atau password salah!', {
        position: 'top-center',
        duration: 3000,
      });
    }
  };

  return (
    <div class={styles.container}>
      <div class={styles.leftSection}>
        <div class={styles.logo}>
          <img src={Logo} alt="XIIRENT Logo" class={styles.logoImage} />
        </div>
      </div>

      <div class={styles.rightSection}>
        <h2 class={styles.welcome}>WELCOME!!</h2>

        <form class={styles.form} onSubmit={handleLogin}>
          <div class={styles.inputContainer}>
            <FaSolidUser class={styles.inputIcon} />
            <input
              type="text"
              placeholder="Username"
              class={styles.input}
              value={username()}
              onInput={(e) => setUsername(e.currentTarget.value)}
            />
          </div>

          <div class={styles.inputContainer}>
            <FaSolidLock class={styles.inputIcon} />
            <input
              type="password"
              placeholder="Password"
              class={styles.input}
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
            />
          </div>

          <div class={styles.links}>
            <a href="/register" class={styles.link}>Belum punya akun? Register</a>
            <a href="/reset" class={styles.link}>Lupa kata sandi? Reset</a>
          </div>

          <button type="submit" class={styles.loginButton}>LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
