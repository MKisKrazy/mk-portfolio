
export const About = () => {
  const frontendSkills = [
    "HTML","CSS",
    "React",
    "Next",
    "Javascript",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Git", "Express.js", "MongoDB", "MySQL","Prisma","Github","Docker","Vercel"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >

        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-violet-400 bg-clip-text text-transparent text-center">

            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
            A Freelancer and a passionate developer crafting scalable web applications and pioneering innovative solutions. Fueled by curiosity, I blend creativity with technology to build seamless, high-performance digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, techkey) => (
                    <span
                      key={techkey}
                      className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.E. in Computer Science </strong> - DMI College Of Engineering
                  (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Data Structures,Networking, OOPS,DBMS,OS
                  </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Experience </h3>
              <div className="space-y-5 text-gray-300">
                <div>
                  <h4 className="font-semibold text-violet-300">
             
                    Python Intern at B2E Technology (Aug 2024)
                  </h4>
                  
                  <ul className="list-disc list-inside">
                      <li>Did data analysis 
                    </li>
                    <li>Created a python ML prediction script specific for their data</li>
                    <li>Developed a Django Webapp to showcase the results visually</li>
                    </ul>
                  
                </div>

                <div>
                  <h4 className="font-semibold text-violet-300">       
                     Intern at zetpeak (Jul 2023)
                  </h4>
                  <p>
                    <ul className="list-disc list-inside">
                      <li>Redesigned a website
                    </li>
                    <li>Improved UI & UX of that website</li>
                    <li>Fixed Visual Bugs</li>
                    </ul>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
};