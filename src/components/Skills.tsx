import creativity from '../images/icons/creativity.svg';
import teamwork from '../images/icons/teamwork.svg';
import precise from '../images/icons/precise.svg';
import helpful from '../images/icons/helpful.svg';

import photoshop from '../images/icons/photoshop.svg';
import illustrator from '../images/icons/illustrator.svg';
import figma from '../images/icons/figma.svg';
import microsoft from '../images/icons/microsoft.svg';
import html from '../images/icons/html.svg';
import css from '../images/icons/css.svg';

import nl from '../images/icons/nl.svg';
import tr from '../images/icons/tr.svg';
import gb from '../images/icons/gb.svg';
import fr from '../images/icons/fr.svg';


const Skills = () => {
  const skillCategories = [
    {
      title: 'SOFT SKILLS',
      skills: [
        <><img src={creativity} alt="Creativity" className="w-6 h-6 mr-1" /><p>Creativity</p></>,
        <><img src={teamwork} alt="Teamwork" className="w-6 h-6 mr-1" /><p>Teamwork</p></>,
        <><img src={precise} alt="Precise" className="w-6 h-6 mr-1" /><p>Precise</p></>,
        <><img src={helpful} alt="Helpful" className="w-6 h-6 mr-1" /><p>Helpful</p></>
      ],
    },
    {
      title: 'HARD SKILLS',
      skills: [
        <><img src={photoshop} alt="Photoshop" className="w-6 h-6 mr-1" /><p>Photoshop</p></>,
        <><img src={illustrator} alt="Illustrator" className="w-6 h-6 mr-1" /><p>Illustrator</p></>,
        <><img src={figma} alt="Figma" className="w-6 h-6 mr-1" /><p>Figma</p></>,
        <><img src={microsoft} alt="Office" className="w-6 h-6 mr-1" /><p>Office</p></>,
        <><img src={html} alt="HTML" className="w-6 h-6 mr-1" /><p>HTML</p></>,
        <><img src={css} alt="CSS" className="w-6 h-6 mr-1" /><p>CSS</p></>
      ],
    },
    {
      title: 'LANGUAGES',
      skills: [
        <><img src={nl} alt="Dutch" className="w-6 h-6 mr-1" /><p>Dutch</p></>,
        <><img src={tr} alt="Turkish" className="w-6 h-6 mr-1" /><p>Turkish</p></>,
        <><img src={gb} alt="English" className="w-6 h-6 mr-1" /><p>English</p></>,
        <><img src={fr} alt="French" className="w-6 h-6 mr-1" /><p>French</p></>
      ],
    },
  ];

  return (
    <div id="Skills" className='flex-1'>
      <h2 className="text-6xl text-center font-extrabold text-pink-500 mb-12">SKILLS</h2>
      
      <div className="grid gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">{category.title}</h3>
            <div className="flex gap-2">
              {category.skills.map((skill) => (
                <span
                  key="skill"
                  className="flex flex-row px-4 py-1 bg-gray-100 text-gray-600 rounded-xl text-md font-bold"
                  >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;