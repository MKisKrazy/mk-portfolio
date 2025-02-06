

export const Projects = () => {
  return (
    <section id="projects" className="flex justify-center min-h-screen items-center py-20">

      <div className="max-w-5xl mx-auto px-3">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Caffinated</h3>
              <p className="text-gray-400 mb-4">Caffinated is a coffee tracker/ caffiene monitoring web applicaton that allows you to keep track on your active caffiene level to stay healthy</p>
              <div className="flex flex-wrap mb-4 gap-2">
                {["React","Tailwind","Firebase","Node","Express"].map((tech,techkey)=>{
                  return <span
                  key={techkey}
                  className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                "
                >
                  {tech}
                </span>
                })}
              </div>
              <div className="flex  items-center gap-25">
                <a href="https://caffinated-coffee-tracker.netlify.app/" className="text-violet-400 hover:text-violet-300 hover:bg-violet-600/30 transition-all my-5 px-4 py-2 border border-violet-400/30 rounded-full">Live Demo ➡</a>
                <a href="https://github.com/MKisKrazy/caffinated" className=" text-violet-400 flex items-center justify-between gap-2 px-4  border border-violet-400/30 rounded-full hover:scale-105" >
                Github<img src="/public/icons8-github-48.png" className="w-10 h-10 "></img>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Nike Landing Page</h3>
              <p className="text-gray-400 mb-4">I designed a modern, high-performance Nike landing page using the latest technology stack, ensuring a seamless and engaging user experience</p>
              <div className="flex flex-wrap mb-4 gap-2">
                {["React","Tailwind"].map((tech,techkey)=>{
                  return <span
                  key={techkey}
                  className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                "
                >
                  {tech}
                </span>
                })}
              </div>
              <div className="flex  items-center gap-25">
                <a href="https://nike-landing-page-ten-woad.vercel.app/" className="text-violet-400 hover:text-violet-300 hover:bg-violet-600/30 transition-all my-5 px-4 py-2 border border-violet-400/30 rounded-full">Live Demo ➡</a>
                <a href="https://github.com/MKisKrazy/Nike_Landing_Page" className=" text-violet-400 flex items-center justify-between gap-2 px-4  border border-violet-400/30 rounded-full hover:scale-105" >
                Github<img src="/public/icons8-github-48.png" className="w-10 h-10 "></img>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">VS Code Clone(Frontend)</h3>
              <p className="text-gray-400 mb-4">It is a frontend clone of Visual Studio Code's landing page which i made to practice my frontend skills</p>
              <div className="flex flex-wrap mb-4 gap-2">
                {["HTML","CSS","JavaScript"].map((tech,techkey)=>{
                  return <span
                  key={techkey}
                  className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                "
                >
                  {tech}
                </span>
                })}
              </div>
              <div className="flex  items-center gap-25">
                <a href="https://mkiskrazy.github.io/VS-code-Frontend-Clone/" className="text-violet-400 hover:text-violet-300 hover:bg-violet-600/30 transition-all my-5 px-4 py-2 border border-violet-400/30 rounded-full">Live Demo ➡</a>
                <a href="https://github.com/MKisKrazy/VS-code-Frontend-Clone" className=" text-violet-400 flex items-center justify-between gap-2 px-4  border border-violet-400/30 rounded-full hover:scale-105" >
                Github<img src="/public/icons8-github-48.png" className="w-10 h-10 "></img>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Rock,Paper,Scissors Game</h3>
              <p className="text-gray-400 mb-4">Rock paper scissors game which is just a fancier version of the typical game. It showcases my strong fundamentals in javascript</p>
              <div className="flex flex-wrap mb-4 gap-2">
                {["HTML","CSS","JavaScript"].map((tech,techkey)=>{
                  return <span
                  key={techkey}
                  className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                "
                >
                  {tech}
                </span>
                })}
              </div>
              <div className="flex  items-center gap-25">
                <a href="https://mkiskrazy.github.io/Rock-Paper-Scissors/" className="text-violet-400 hover:text-violet-300 hover:bg-violet-600/30 transition-all my-5 px-4 py-2 border border-violet-400/30 rounded-full">Live Demo ➡</a>
                <a href="https://github.com/MKisKrazy/Rock-Paper-Scissors" className=" text-violet-400 flex items-center justify-between gap-2 px-4  border border-violet-400/30 rounded-full hover:scale-105" >
                Github<img src="/public/icons8-github-48.png" className="w-10 h-10 "></img>
                </a>
              </div>
            </div>

            


        </div>

      </div>

    </section>
  )
}
