import { useState } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

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

  return (
    <div className="flex min-h-screen bg-white no-scrollbar">
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        navItems={navItems}
      />
      <main className="flex-1 mr-6 shadow-2xl bg-slate-100 rounded-r-3xl p-12 mt-12 mb-12">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;