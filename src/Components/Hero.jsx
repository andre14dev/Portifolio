import Spline from '@splinetool/react-spline';
import { Laptop, Github, Linkedin } from 'lucide-react';


const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      
        <div className="hmax-w-xl ml-[5%] z-10 mt-[100%] md:mt-[60%] lg:mt-0">   
            <div className='bg-gradient-to-r w-fit from-[#1E3A8A] to-[#2563EB] text-white h-9 px-6 py-3 
            rounded-full font-medium hover:opacity-90 transition-opacity duration-300 flex items-center'> 
               <div className="rounded-full flex items-center whitespace-nowrap px-5">
                    <Laptop  className="w-7 h-7 mr-2" />
                    <span className="text-slate-100 font-medium relative -top-0.5 text-[#0F172A]">Desenvolvedor de software</span>
                </div>
             </div>
        
        {/* Corpo */}

        <h1 className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8' >    
            André Luiz <br /> 
        </h1>

        <div className='flex flex-col gap-7'>

        <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[30rem]'>
            Olá, me chamo André Luiz. Estou desenvolvendo minha carreira para me tornar 
            desenvolvedor de software e venho construindo minha base com dedicação e projetos reais. 
            Atualmente, curso Engenharia de Software pelo INATEL, onde venho 
            ampliando meus conhecimentos técnicos e minha visão sobre como a tecnologia 
            pode resolver problemas reais, e estando inserido no ambiente de constante aprendizado.
        </p>

        <div className='flex gap-4'>
            <a href='https://github.com/andre14dev' className="bg-gradient-to-r w-fit from-[#1E3A8A] to-[#2563EB] text-white
             px-6 py-3 rounded-full font-medium flex items-center transition-all duration-300 hover:bg-white hover:bg-none hover:text-[#2563EB]">
                <Github className="w-5 h-5 mr-2 stroke-current" /> GitHub
            </a>

            <a href='https://www.linkedin.com/in/andreluiz04/' className="bg-gradient-to-r w-fit from-[#1E3A8A] to-[#2563EB] text-white
             px-6 py-3 rounded-full font-medium flex items-center transition-all duration-300 hover:bg-white hover:bg-none hover:text-[#2563EB]">
                <Linkedin className="w-5 h-5 mr-2 stroke-current" /> LinkedIn
            </a>

        </div>
        </div>
        </div>
        
        <Spline className='absolute lg:top-0 top-[-20] bottom-0 lg:left-[-2%] h-full' scene="https://prod.spline.design/yOoQnggziGoRb62Z/scene.splinecode" />


    </main>
  


)
}

export default Hero



