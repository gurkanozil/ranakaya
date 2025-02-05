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
    { id: 'projects', label: 'EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        navItems={navItems}
      />
      <main className="flex-1 p-12">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;