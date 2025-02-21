import { Suspense, type Component, onMount } from 'solid-js';
import { useLocation, useNavigate } from '@solidjs/router';
import { Toaster, toast } from 'solid-toast';

const App: Component = (props: { children: Element }) => {
  const location = useLocation();
  const navigate = useNavigate();

  onMount(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn && location.pathname === '/warnet') {
      toast.error('Silakan login terlebih dahulu!', {
        duration: 3000, // Auto-dismiss dalam 3 detik
        position: 'top-center',
      });

      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
  });

  return (
    <>
      <Toaster position="top-center" /> {/* Toaster untuk Solid.js */}
      <main>
        <Suspense>{props.children}</Suspense>
      </main>
    </>
  );
};

export default App;
