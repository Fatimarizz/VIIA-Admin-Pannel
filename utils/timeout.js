// In your layout component or a global component (e.g., _app.js)

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { errorToaster, successToaster } from './toast';

function SessionTimeout() {
  const router = useRouter();

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
    
        localStorage.removeItem('authToken'); 
        successToaster("Session Timeout")
        router.push('/'); 
      }, 20 * 60 *1000); // 20 minutes
    };

    // Reset the timer on user activity (e.g., mousemove, keydown)
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);

    resetTimer(); // Initial call

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('mousemove', resetTimer);
      document.removeEventListener('keydown', resetTimer);
    };
  }, [router]);

  return null;
}

export default SessionTimeout;
