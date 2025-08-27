
import React from 'react';             
import { navLinks } from '../../constants';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';



const Navbar = () => {
 useGSAP(() => {
	const navTween = gsap.timeline({
	 scrollTrigger: {
		trigger: 'nav',
		start: 'bottom top'
	 }
	});
	
	navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
	 backgroundColor: '#00000050',
	 backgroundFilter: 'blur(10px)',
	 duration: 1,
	 ease: 'power1.inOut'
	});
 })


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur">
         <div className="mx-auto max-w-7xl h-16 px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
           
           <img src="/images/logo.png" alt="logo" id="imagenjuanchi"/>
            <p>
                Juanchi´s Portfolio
            </p>
        </a>

        <ul> {navLinks.map((link) => (
            <li key={link.id}>  
                <a href={"#${link.id}"} >
                    {link.title}
                </a>
            </li>
        ))}
        </ul>
        </div>  
  </nav>
  );
}

export default Navbar;