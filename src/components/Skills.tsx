const Skills = () => {
  const skillCategories = [
    {
      title: 'SOFT SKILLS',
      skills: ['Creativity', 'Teamwork', 'Precise', 'Helpful'],
    },
    {
      title: 'HARD SKILLS',
      skills: ['Photoshop', 'Illustrator', 'Figma', 'Office', 'HTML', 'CSS'],
    },
    {
      title: 'LANGUAGES',
      skills: ['Dutch', 'Turkish', 'English', 'French'],
    },
  ];

  return (
    <div className="max-w-3xl">
      <h2 className="text-6xl font-extrabold text-pink-500 mb-12">SKILLS</h2>
      <div className="grid gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
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