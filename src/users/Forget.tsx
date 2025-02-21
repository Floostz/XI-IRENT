import { Component } from 'solid-js';
import ForgetComponent from './component/forgotpassword'
import robotImage from './../assets/astroboy.png';
import backgroundImage from '../assets/fonts/background login.png';
import style from '../users/Login.module.css'

const Forgot: Component = () => {
  return (
    <div 
      class="fixed inset-0 w-full h-full bg-cover bg-center" 
      style={{
        'background-image': `url(${backgroundImage})`,
        'background-size': '100% 100%'
      }}
    >
      <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
      <img 
            src={robotImage} 
            alt="Robot mascot" 
            class= {style.robotImage}
          />
        <div class="relative w-full h-full flex items-center justify-center">
      
          <ForgetComponent/>
        </div>
      </div>
    </div>
  );
};

export default Forgot;