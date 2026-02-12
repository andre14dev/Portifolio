import { Laptop  } from 'lucide-react';


const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      
        <div className="max-w-xl ml-[5%] z-10 mt-[100%] md:mt-[60%] lg:mt-0">   
            <div className='relative w-fit sm:w-65 h-15 bg-gradient-to-r bg-gradient-to-r from-[#1E3A8A] to-[#2563EB]
             shadow-[0_0_10px_rgba(255,255,255,0.4)] rounded-full '> 
               <div className="rounded-full flex items-center whitespace-nowrap px-5">
                    <Laptop  className="w-7 h-7 mr-2" />
                    <span className="text-slate-100 font-medium relative -top-0.5 text-[#0F172A]">Desenvolvedor de software</span>
                </div>
             </div>
        
        {/* Corpo */}

        <h1 className=' text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8' >    
            André Luiz <br /> 
        </h1>

        <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[30rem]'>
            Olá, me chamo André Luiz. Estou desenvolvendo minha carreira para me tornar 
            desenvolvedor de software e venho construindo minha base com dedicação e projetos reais. 
            Atualmente, curso Engenharia de Software pelo INATEL, onde venho 
            ampliando meus conhecimentos técnicos e minha visão sobre como a tecnologia 
            pode resolver problemas reais, e estando inserido no ambiente de constante aprendizado.
        </p>

        <div>
            <a href='https://github.com/andre14dev' className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity duration-300">
                GitHub
            </a>
        </div>

        </div>

    </main>
  


)
}

export default Hero



