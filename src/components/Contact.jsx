import emailjs from 'emailjs-com'
import { useState } from 'react';

export const Contact = () => {

  const [formData,setFormdata] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const result = await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_PUBLIC_KEY)
      alert("Message Sent!")
      console.log(formData)
      setFormdata({  name:"", email:"", message:""})
        console.log(result.status)
    }catch(err){
      alert("Oops! Something went wrong ,Please Try Again.")
      console.log(err)
    }
    
  }



  return (
    <section id='contact' className="min-h-screen flex flex-col justify-center items-center py-20">
        <div className="w-screen md:w-150 px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get in touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>

            <div className="relative"> 
              <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
              focus:border-violet-500 focus:bg-violet-500/5" 
              value={formData.name}
              onChange={(e)=>{
                setFormdata({...formData, name: e.target.value})
              }}
              placeholder="Your Name"/> 
            </div>

            <div className="relative"> 
              <input type="email" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
              focus:border-violet-500 focus:bg-violet-500/5"
              value={formData.email}
              onChange={(e)=>{
                setFormdata({...formData, email: e.target.value})
              }}
              placeholder="example@email.com"/> 
            </div>

            <div className="relative"> 
              <textarea  id="message" name="message" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none
              focus:border-violet-500 focus:bg-violet-500/5"
              value={formData.message}
              onChange={(e)=>{
                setFormdata({...formData, message: e.target.value})
              }} 
              placeholder="Your Message.." rows={5}/> 
            </div>

            <button type="submit" className="w-full bg-violet-500 py-3 px-6 text-white font-medium rounded transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              Send Message
            </button>
          </form>
        </div>
        <h6 className='mt-5 text-violet-200'>or</h6>

        <div className='flex gap-2 items-center mt-5'>
        <a href='https://github.com/MKisKrazy' className='hover:scale-105'><img src='/icons8-github-50.png' alt='github-logo'></img></a>
          <a href='https://www.linkedin.com/in/maheshkrishna02/' className='hover:scale-105'><img src='/icons8-linkedin-50.png' alt='linkedin-logo'></img></a>
        </div>       
    </section>
    
  )
}
