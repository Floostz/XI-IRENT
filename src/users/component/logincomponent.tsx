import { Component, createSignal } from 'solid-js';
import styles from './logins.module.css';

const LoginScreen: Component = () => {
  const [username, setUsername] = createSignal('');
  const [password, setPassword] = createSignal('');

  const handleLogin = () => {
    console.log('Attempting to log in with:', username(), password());
  };

  return (
    
    <div class={styles.container}>
        
          <div class={styles.cards}>
            <img
            class={styles.logo}
            src="src/assets/xirents.png"
            alt="logo"
            >
                
            </img>
          <img
        class={styles.characterImage}
        src="src/assets/astroboy.png" // Replace with the correct path to your character image
        alt="Astroboy"
      />
     </div>
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
       
        <button class={styles.loginButton} onClick={handleLogin}>
          LOGIN
        </button>
        <div class={styles.bottomText}>
          Belum punya akun? <span class={styles.link}>Register</span>
          <br />
          Lupa kata sandi? <span class={styles.link}>Reset</span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;