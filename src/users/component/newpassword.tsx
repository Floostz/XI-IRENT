import { createSignal } from 'solid-js';
import Swal from 'sweetalert2';
import styles from './logins.module.css';
import { FaSolidLock } from 'solid-icons/fa';
import { useNavigate } from '@solidjs/router';
import Logo from '../../assets/xirents.png'


const ResetPassword = () => {
  const [password, setPassword] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('');
  const navigate = useNavigate();

  const resetPassword = (e: Event) => {
    e.preventDefault();
    if (!password() || !confirmPassword()) {
      Swal.fire('Error', 'Semua field harus diisi!', 'error');
      return;
    }
    if (password() !== confirmPassword()) {
      Swal.fire('Error', 'Password tidak cocok!', 'error');
      return;
    }

    Swal.fire('Berhasil!', 'Password Anda telah diubah.', 'success');
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
        <h2 class={styles.welcome}>Buat Password Baru</h2>
        <form class={styles.form} onSubmit={resetPassword}>
          <div class={styles.inputContainer}>
            <FaSolidLock class={styles.inputIcon} />
            <input
              type="password"
              placeholder="Password Baru"
              class={styles.input}
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div class={styles.inputContainer}>
            <FaSolidLock class={styles.inputIcon} />
            <input
              type="password"
              placeholder="Konfirmasi Password"
              class={styles.input}
              value={confirmPassword()}
              onInput={(e) => setConfirmPassword(e.currentTarget.value)}
            />
          </div>
          <button type="submit" class={styles.loginButton}>Simpan Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
