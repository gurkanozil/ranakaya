import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Instagram, Facebook, ArrowLeftToLine, ArrowRightFromLine} from 'lucide-react';
import profileImage from '../images/ranaheadshot.jpeg';

interface NavItem {
  id: string;
  label: string;
}

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  navItems: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  navItems,
}) => {
  const [Open, setOpen] = useState(true);
  return (
    <>
      <button
        id="toggleSidebar"
        type="button" 
        onClick={() => setOpen(!Open)} 
        className={`md:h-dvw md:p-4 fixed top-1/2 transform -translate-y-1/2 transition-transform duration-200 ease-in-out`}>
        {Open ? <ArrowLeftToLine size={32} /> : <ArrowRightFromLine size={32} />}
      </button>
      {Open && (
        <aside id='Sidebar' className="flex flex-col min-h-screen left-0 top-0 md:h-dvw md:w-1/3 bg-slate-300 md:p-4 transition-transform duration-300">

        <div id="Profile" className="flex flex-col items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-2xl mb-6 duration-200 ease-in hover:scale-125 hover:mb-10 "
          />
          <h1 className="text-4xl font-extrabold text-pink-500 whitespace-nowrap">RANA KAYA</h1>
          <p className="text-xl font-thin text-gray-600 pb-4 whitespace-nowrap tracking-widest">DIGITAL DESIGNER</p>
        </div>

        <nav id="Nav" className="flex-1 flex-col text-center justify-center items-center overflow-scroll no-scrollbar">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={` font-bold text-3xl space-x-3 px-4 py-3 rounded-3xl transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-slate-700 shadow-xl'
                      : 'text-slate-500 hover:bg-blue-100 hover:text-slate-700 hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out'
                  }`}><span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div id="Contact" className="fixed bottom-6 left-0 right-2/3 flex flex-row justify-center space-x-4 pt-6 border-t border-blue-50 overflow-scroll no-scrollbar">
          <a href="mailto:ranakaya@outlook.be"
            className="text-gray-600 hover:text-blue-700 transition-colors"
          ><Mail size={32} /></a>
          <a href="tel:+32 474 38 64 24"
            className="text-gray-600 hover:text-blue-700 transition-colors"
          ><Phone size={32} /></a>
          <a href="https://www.facebook.com/yuna.shin.3975"
            className="text-gray-600 hover:text-blue-700 transition-colors"
          ><Facebook size={32} /></a>
          <a href="https://www.instagram.com/kayaaranaa/"
            className="text-gray-600 hover:text-blue-700 transition-colors"
          ><Instagram size={32} /></a>
          <a href="https://www.linkedin.com/in/rana-kaya-64aaa5333/"
            className="text-gray-600 hover:text-blue-700 transition-colors"
          ><Linkedin size={32} /></a>
        </div>

      </aside>
      )}
    </>
  );
};

export default Sidebar;
