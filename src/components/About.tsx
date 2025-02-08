interface AboutProps {
  setActiveSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  return (
    <div id="overmij" className="flex flex-col">
      <h1 className="text-8xl font-extrabold text-pink-500">KAYA</h1>
      <h1 className="text-9xl font-extrabold -mt-6 -ml-1 text-pink-500">RANA</h1>
      <p className="text-2xl text-gray-600 font-thin whitespace-nowrap tracking-widest">DIGITAL DESIGNER</p>
      <div className="flex justify-center p-6 ml-12">
        <p className="text-xl pl-6 border-l-2 border-slate-500">
          Hi, I'm Rana Kaya! Born and raised in Lommel, Belgium, I've had a lifelong passion for creativity and design.
          <br />
          Crafting and exploring new ideas have always been my favorite activities.
          <br />
          When I'm not designing, I love spending time with family and friends, who inspire me every day.
          <br />
          I'm excited to turn my passion into something meaningful!
          <br />
          <br />
          <a 
            className="text-pink-500 text-3xl font-bold hover:underline cursor-pointer" 
            onClick={() => setActiveSection('contact')}>
                Feel free to contact me!
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
