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
  SidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  navItems,
  SidebarOpen,
}) => {
  return (
    <>
      <aside id='zijbar' className={`flex flex-col items-center text-center md:w-1/3 min-h-screen md:h-dvw bg-slate-300 p-4 transition-transform duration-500 ease-in-out
        ${SidebarOpen ? "translate-x-0" : "-translate-x-full hidden"}
        `}>
    
        <div id="profiel" className="">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-2xl duration-200 ease-in hover:scale-125 mb-8 hover:mt-6 inline-block"
          />
          <h1 className="text-4xl font-extrabold text-pink-500 whitespace-nowrap overflow-hidden">RANA KAYA</h1>
          <p className="text-xl font-thin text-gray-600 pb-4 whitespace-nowrap tracking-widest overflow-hidden">DIGITAL DESIGNER</p>
        </div>

        <nav id="navigatie" className="items-center text-center">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`font-bold p-2 text-3xl rounded-3xl transition-colors 
                    ${ activeSection === item.id ? 'text-slate-700' : 'text-slate-500 hover:text-slate-700 hover:scale-110 transition-transform duration-300 ease-in-out'
                  }`}><span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

          <div id="socials" className="fixed bottom-0 left-0 right-0 flex flex-row justify-evenly space-x-3 bg-slate-300 bg-opacity-25 p-4">
            <a href="mailto:ranakaya@outlook.be"
              className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform duration-300 ease-in-out"
            ><Mail size={40} /></a>
            <a href="tel:+32 474 38 64 24"
              className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform duration-300 ease-in-out"
            ><Phone size={40} /></a>
            <a href="https://www.facebook.com/yuna.shin.3975"
              className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform duration-300 ease-in-out"
            ><Facebook size={40} /></a>
            <a href="https://www.instagram.com/kayaaranaa/"
              className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform duration-300 ease-in-out"
            ><Instagram size={40} /></a>
            <a href="https://www.linkedin.com/in/rana-kaya-64aaa5333/"
              className="text-gray-600 hover:text-blue-700 hover:scale-110 transition-transform duration-300 ease-in-out"
            ><Linkedin size={40} /></a>
          </div>

      </aside>
      
    </>
  );
};

export default Sidebar;
