// LoginScreen.tsx
import { Component, createSignal } from 'solid-js';
import styles from './logins.module.css';

const LoginScreen: Component = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [confirmPassword, setConfirmPassword] = createSignal('');
  const [isRegistering, setIsRegistering] = createSignal(false);

  const handleLogin = () => {
    console.log('Logging in with:', username(), password());
  };

  const handleRegister = () => {
    console.log('Registering with:', username(), email(), password(), confirmPassword());
  };

  return (
    <div class={`${styles.container} ${isRegistering() ? styles.registerActive : ''}`}>
      {/* Register Form */}
      <div class={styles.cards}>
        <img class={styles.logo} src="/assets/xirents.png" alt="logo" />
        <img class={styles.characterImage} src="/assets/astroboy.png" alt="Astroboy" />
        <h1 class={styles.title} style="color: #13465C">REGISTER</h1>
        <div class={styles.inputContainer}>
          <input
            class={styles.input}
            type="email"
            placeholder="Email"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            class={styles.input}
            type="text"
            placeholder="Username"
            value={username()}
            onInput={(e) => setUsername(e.currentTarget.value)}
          />
          <input
            class={styles.input}
            type="password"
            placeholder="Password"
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
          />
          <input
            class={styles.input}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword()}
            onInput={(e) => setConfirmPassword(e.currentTarget.value)}
          />
        </div>
        <button class={styles.loginButton} onClick={handleRegister}>REGISTER</button>
        <div class={styles.bottomText} style="color: #666">
          Sudah punya akun?{' '}
          <span class={styles.link} onClick={() => setIsRegistering(false)}>Login</span>
        </div>
      </div>

      {/* Login Form */}
      <div class={styles.card}>
        <h1 class={styles.title}>WELCOME!!</h1>
        <div class={styles.inputContainer}>
          <input
            class={styles.input}
            type="text"
            placeholder="Username"
            value={username()}
            onInput={(e) => setUsername(e.currentTarget.value)}
          />
          <input
            class={styles.input}
            type="password"
            placeholder="Password"
            value={password()}
            onInput={(e) => setPassword(e.currentTarget.value)}
          />
        </div>
        <button class={styles.loginButton} onClick={handleLogin}>LOGIN</button>
        <div class={styles.bottomText}>
          Belum punya akun?{' '}
          <span class={styles.link} onClick={() => setIsRegistering(true)}>Register</span>
          <br />
          Lupa kata sandi? <span class={styles.link}>Reset</span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;