import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  window.innerWidth >= 768 ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <div className="flex left-0 top-0 md:h-dvw w-full bg-slate-300 p-12 flex flex-col">This website is best viewed on desktop devices</div>
  )
);
