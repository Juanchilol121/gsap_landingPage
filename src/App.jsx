import { ScrollTrigger, SplitText } from 'gsap/all';   
import { gsap } from 'gsap';
import Hero from './components/hero';

import Navbar from './components/navbar';
import Cocktails from './components/cocktails';

gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <main>
        <Navbar />  
        <Hero />
        <Cocktails />
        
    </main>
  );
}


export default App;