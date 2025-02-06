

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex justify-center items-center relative">

    <div className="text-center z-10 px-4" >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-500/90 to-blue-400 bg-clip-text text-transparent leading-right">
          Hi,I'm Mahesh Krishna
        </h1>

        <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
        I'm a Full-stack developer passionate about transforming ideas into seamless, scalable web applications. I blend performance, elegance, and user-centric design to create digital experiences that truly stand out.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-violet-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:text-violet-500 hover:bg-violet-500/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-violet-500/50 text-violet-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-violet-500/10"
            >
              Contact Me
            </a>
          </div>

    </div>
    </section>
  )
}
