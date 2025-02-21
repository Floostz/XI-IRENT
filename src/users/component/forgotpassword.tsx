import { createSignal } from 'solid-js';
import Swal from 'sweetalert2';
import styles from './logins.module.css';
import { FaSolidEnvelope } from 'solid-icons/fa';
import { useNavigate } from '@solidjs/router';
import Logo from '../../assets/xirents.png'

const ForgotPassword = () => {
  const [email, setEmail] = createSignal('');
  const navigate = useNavigate();

  const sendOTP = (e: Event) => {
    e.preventDefault();
    if (!email()) {
      Swal.fire('Error', 'Masukkan email terlebih dahulu!', 'error');
      return;
    }

    // Simulasi pengiriman OTP
    localStorage.setItem('resetEmail', email());
    Swal.fire('OTP Terkirim!', 'Silakan cek email Anda.', 'success');
    setTimeout(() => navigate('/otp'), 2000);
  };

  return (
    <div class={styles.container}>
        <div class={styles.leftSection}>
        <div class={styles.logo}>
          <img src={Logo} alt="XIIRENT Logo" class={styles.logoImage} />
        </div>
      </div>
      
      <div class={styles.rightSection}>
        <h2 class={styles.welcome}>Reset Password</h2>
        <form class={styles.form} onSubmit={sendOTP}>
          <div class={styles.inputContainer}>
            <FaSolidEnvelope class={styles.inputIcon} />
            <input
              type="email"
              placeholder="Masukkan Email"
              class={styles.input}
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <button type="submit" class={styles.loginButton}>Kirim OTP</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
