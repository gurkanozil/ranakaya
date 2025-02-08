import { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ArrowLeftToLine, ArrowRightFromLine} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [SidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { id: 'about', label: 'ABOUT', },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  
  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About setActiveSection={setActiveSection} />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About setActiveSection={setActiveSection} />;
    }
  };

        const toggleSidebar = () => {
          setSidebarOpen(!SidebarOpen);
        };


  return (
    <>
    <div id="home" className={` flex no-scrollbar`}>
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        navItems={navItems}
        SidebarOpen={SidebarOpen}
        toggleSidebar={toggleSidebar} />
      
      <main id="algemeen" className={`flex-1 shadow-2xl bg-slate-100 ${SidebarOpen ? 'rounded-r-3xl' : 'rounded-3xl'} p-14 transition-transform duration-500 ease-in-out  ${SidebarOpen ? 'ml-0' : 'ml-12'} mt-12 mb-12 mr-12`}>
        {renderContent()}
        <button
            id="toggleSidebar"
            type="button" 
            onClick={toggleSidebar}
            className={`fixed top-1/3 px-2 py-6 left-0 rounded-r-3xl bg-slate-300 transition-transform duration-500 ease-in-out bg-opacity-50 hover:bg-opacity-100
            ${SidebarOpen ? "translate-x-0 " : "-translate-x-1/3 hover:translate-x-0"}
            `}>
            {SidebarOpen ? <ArrowLeftToLine size={32} /> : <ArrowRightFromLine size={32} />}
        </button>
      </main>
    </div>
  </>
  );
}

export default App;