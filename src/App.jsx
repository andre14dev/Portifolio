import Header from "./Components/Header";
import Hero from "./Components/Hero";

export default function App() {
  return (
    <main>
      {/* Gradient */}
      <img className="absolute top-0 right-0 opacity-60 -z-10" src="/gradient.png" alt="Gradient-img" />

      {/* blur effect */}
      <div className="h-0 w-[45rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#2563EB]
      -rotate-[30deg] -z-10" ></div>
    
      {/* Header */}
      <Header/>
      <Hero/>
    
    
    
    
    </main>
  )
}