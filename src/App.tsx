import { useState } from 'react';
import { User, Code2, FolderKanban, Contact as ContactIcon } from 'lucide-react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About', icon: <User size={32} /> },
    { id: 'skills', label: 'Skills', icon: <Code2 size={32} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={32} /> },
    { id: 'contact', label: 'Contact', icon: <ContactIcon size={32} /> },
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