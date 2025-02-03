import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

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
    <aside className="fixed left-0 top-0 h-screen w-72 bg-blue-50 p-6 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <img
          src="images/ranaheadshot.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
        />
        <h1 className="text-xl font-bold text-gray-800">Rana Kaya</h1>
        <p className="text-gray-600">Digital Designer</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
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
          <Github size={20} />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-700 transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-blue-700 transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
