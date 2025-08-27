import { ScrollTrigger, SplitText } from 'gsap/all';   
import { gsap } from 'gsap';
import Hero from './components/hero';

import Navbar from './components/navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <main>
        <Navbar />  
        <Hero />
        <div className="h-dvh bg-black">
            
        </div>
        
    </main>
  );
}


export default App;