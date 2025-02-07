import React from 'react';
import { Mail, Linkedin, Phone, Instagram, Facebook } from 'lucide-react';
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
  return (
    <aside className="flex left-0 top-0 md:h-dvw w-1/3 bg-slate-300 p-12 flex flex-col">
      <div className="flex flex-col items-center mb-12">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-1 border-pink-500 shadow-2xl mb-6 duration-300 ease-in hover:scale-125 hover:mb-10 hover:mt-6"
        />
        <h1 className="text-4xl font-extrabold text-pink-500">RANA KAYA</h1>
        <p className="text-xl font-light text-[16px] text-gray-600">DIGITAL DESIGNER</p>
      </div>

      <nav className="flex-1 -mt-10 flex text-center justify-center">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={` font-bold text-3xl space-x-3 px-4 py-3 rounded-3xl transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-slate-700 shadow-xl'
                    : 'text-slate-500 hover:bg-blue-100 hover:text-slate-700'
                }`}><span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-center space-x-4 pt-6 border-t border-blue-50">
        <a href="mailto:ranakaya@outlook.be" // Place  email
          className="text-gray-600 hover:text-blue-700 transition-colors"
        ><Mail size={32} /></a>
        <a href="tel:+32 474 38 64 24" // Place phone number
          className="text-gray-600 hover:text-blue-700 transition-colors"
        ><Phone size={32} /></a>
        <a href="https://www.facebook.com/yuna.shin.3975"
          className="text-gray-600 hover:text-blue-700 transition-colors"
        ><Facebook size={32} /></a>
        <a href="https://www.instagram.com/kayaaranaa/" // Place Instagram
          className="text-gray-600 hover:text-blue-700 transition-colors"
        ><Instagram size={32} /></a>
        <a href="https://www.linkedin.com/in/rana-kaya-64aaa5333/" // Place Facebook
          className="text-gray-600 hover:text-blue-700 transition-colors"
        ><Linkedin size={32} /></a>
      </div>
    </aside>
  );
};

export default Sidebar;
