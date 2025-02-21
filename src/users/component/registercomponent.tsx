import { Component, createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { toast } from 'solid-toast';
import styles from './register.module.css';
import Logo from '../../assets/xirents.png';
import { FaSolidUser, FaSolidLock, FaSolidEnvelope } from 'solid-icons/fa';

const RegisterComponent: Component = () => {
  const navigate = useNavigate();

  const [username, setUsername] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('');

  const handleRegister = (e: Event) => {
    e.preventDefault();

    const user = username().trim();
    const mail = email().trim();
    const pass = password().trim();
    const confirmPass = confirmPassword().trim();

    if (!user || !mail || !pass || !confirmPass) {
      toast.error('Semua field harus diisi!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      toast.error('Format email tidak valid!');
      return;
    }

    if (pass !== confirmPass) {
      toast.error('Password dan Confirm Password harus sama!');
      return;
    }

    // Ambil akun lama dari localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // Cek apakah username sudah dipakai
    if (storedUsers.some((u: { username: string }) => u.username === user)) {
      toast.error('Username sudah digunakan!');
      return;
    }

    // Simpan akun baru ke dalam array user
    storedUsers.push({ username: user, email: mail, password: pass });
    localStorage.setItem('users', JSON.stringify(storedUsers));

    toast.success('Registrasi Berhasil! Silakan login dengan akun Anda.');
    
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <div class={styles.container}>
      <div class={styles.leftSection}>
        <div class={styles.logo}>
          <img src={Logo} alt="XIIRENT Logo" class={styles.logoImage} />
        </div>
      </div>

      <div class={styles.rightSection}>
        <h2 class={styles.welcome}>Buat akun dengan username, email, dan password</h2>

        <form class={styles.form} onSubmit={handleRegister}>
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
            <FaSolidEnvelope class={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email"
              class={styles.input}
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
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

          <div class={styles.inputContainer}>
            <FaSolidLock class={styles.inputIcon} />
            <input
              type="password"
              placeholder="Confirm Password"
              class={styles.input}
              value={confirmPassword()}
              onInput={(e) => setConfirmPassword(e.currentTarget.value)}
            />
          </div>

          <div class={styles.links}>
            <a href="/login" class={styles.link}>Sudah punya akun? Login</a>
          </div>

          <button type="submit" class={styles.loginButton}>REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
  