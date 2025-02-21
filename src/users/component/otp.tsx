import { createSignal } from 'solid-js';
import Swal from 'sweetalert2';
import styles from './logins.module.css';
import { FaSolidKey } from 'solid-icons/fa';
import { useNavigate } from '@solidjs/router';
import Logo from '../../assets/xirents.png'



const OtpVerification = () => {
  const [otp, setOtp] = createSignal('');
  const navigate = useNavigate();

  const verifyOTP = (e: Event) => {
    e.preventDefault();
    if (otp() === '123456') { // Contoh OTP, di real case ambil dari backend
      Swal.fire('Berhasil!', 'OTP valid, lanjut ke reset password.', 'success');
      setTimeout(() => navigate('/new-password'), 2000);
    } else {
      Swal.fire('Error', 'OTP salah, coba lagi!', 'error');
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
        <h2 class={styles.welcome}>Masukkan OTP</h2>
        <form class={styles.form} onSubmit={verifyOTP}>
          <div class={styles.inputContainer}>
            <FaSolidKey class={styles.inputIcon} />
            <input
              type="text"
              placeholder="Masukkan OTP"
              class={styles.input}
              value={otp()}
              onInput={(e) => setOtp(e.currentTarget.value)}
            />
          </div>
          <button type="submit" class={styles.loginButton}>Verifikasi OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
