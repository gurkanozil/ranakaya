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
      <aside id='Sidebar' className={`flex flex-col fixed md:w-1/3 min-h-screen md:h-dvw bg-slate-300 p-4 transition-transform duration-500 ease-in-out
        ${SidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
    
        <div id="Profile" className="flex flex-col items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-2xl mb-6 duration-200 ease-in hover:scale-125 hover:mb-6 hover:mt-6"
          />
          <h1 className="text-4xl font-extrabold text-pink-500 whitespace-nowrap overflow-hidden">RANA KAYA</h1>
          <p className="text-xl font-thin text-gray-600 pb-4 whitespace-nowrap tracking-widest overflow-hidden">DIGITAL DESIGNER</p>
        </div>

        <nav id="Nav" className="flex flex-col text-center md:justify-center md:items-center">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={` font-bold text-3xl space-x-3 px-4 py-3 rounded-3xl transition-colors 
                    ${ activeSection === item.id ? 'bg-blue-100 text-slate-700 shadow-xl' : 'text-slate-500 hover:bg-blue-100 hover:text-slate-700 hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out'
                  }`}><span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div id="Contact" className="flex flex-col fixed left-1/3 right-2/3 bottom-0">
          <div className="flex flex-row space-x-2 text-slate-600 bg-slate-300 rounded-lg bg-opacity-50 md:space-x-4 pt-2 p-1 border-t-2 border-slate-500">
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
        </div>

      </aside>
      
    </>
  );
};

export default Sidebar;
