import { Component } from 'solid-js';
import LoginComponent from './component/logincomponent'
// Ensure you have the image in your public or src folder
import backgroundImage from '../assets/fonts/background login.png';

const Login: Component = () => {
  return (
    <div 
      class="fixed inset-0 w-full h-full bg-cover bg-center" 
      style={{
        'background-image': `url(${backgroundImage})`,
        'background-size': '100% 100%'
      }}
    >
      <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
       <LoginComponent/>

      </div>
    </div>
  );
};

export default Login;