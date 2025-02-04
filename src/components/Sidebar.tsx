import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import profileImage from '../images/ranaheadshot.jpeg';  

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
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
    <aside className="flex left-0 top-0 md:h-dvh w-1/3 bg-slate-300 p-12 flex flex-col">
      <div className="flex flex-col items-center mb-16">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 rounded-full object-cover border-1 border-white shadow-xl mb-4 transition-transform transform hover:scale-110"
        />
        <h1 className="text-4xl font-extrabold text-pink-500">RANA KAYA</h1>
        <p className="text-xl font-light text-[16px] text-gray-600">DIGITAL DESIGNER</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex font-bold text-3xl items-center space-x-3 px-4 py-3 rounded-3xl transition-colors ${
                  activeSection === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-blue-100 hover:text-blue-700'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-center space-x-4 pt-6 border-t border-blue-100">
        <a
          href="#"
          className="text-gray-600 hover:text-blue-700 transition-colors"
        >
          <Github size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/rana-kaya-64aaa5333/"
          className="text-gray-600 hover:text-blue-700 transition-colors"
        >
          <Linkedin size={32} />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-700 transition-colors"
        >
          <Mail size={32} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
