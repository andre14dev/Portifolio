import { Grip  } from 'lucide-react';

const Header = () => {
    // funcão simples 
    const toggleMobileMenu = () => {
        // pega o elemento do menu móvel
        const mobileMenu = document.getElementById('mobileMenu');

        // ocultao menu móvel
        if(mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        }else {
            mobileMenu.classList.add('hidden');
        }

    }
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">Portfolio</h1>

        {/* PC Navegação */}

        <nav className="hidden md:flex items-center gap-12">
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Prazer André

            </a>

            
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Conhecimentos

            </a>

            
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Trabalhos

            </a>

            
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Projetos

            </a>

            
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Extras

            </a>
        </nav>

        <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none
         font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
            Contato
        </button>

        {/* Mobile Navegação */}
        
        <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
            <Grip />
        </button>

        {/* Mobile Barra */}

        <div id="mobileMenu" className="fixed top-0 bottom-0 right-0 left-0 p-5 
        hidden z-40 bg-black bg-opacity-70 backdrop-blur- md">
            
            <nav className='flex flex-col gap-6 items-center mt-[45px]'>

            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Prazer André

            </a>

            
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Conhecimentos

            </a>

            
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Trabalhos

            </a>

            
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Projetos

            </a>

            
            <a className="text-base tracking-wide transition-colors hover:text-yellow-500" href="#">
                Extras

            </a>

            </nav>

        
        </div>   


    </header>
  )
}

export default Header
