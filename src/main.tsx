import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  window.innerWidth >= 768 ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : ( // if on mobile
    <div className="flex left-0 top-0 h-screen w-full bg-slate-300 p-6 pt-48 text-center justify-center">This website is best viewed on desktop devices</div>
  )
);
