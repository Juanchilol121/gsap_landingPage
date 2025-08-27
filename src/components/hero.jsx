import { useGSAP } from "@gsap/react";
import React from "react"
import { gsap } from "gsap";
import { SplitText } from "gsap/all";


const Hero = () => {


    useGSAP(() => {
       
        const heroSplit = new SplitText(".title", { type: "words, chars" });
        const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

        heroSplit.chars.forEach((char) => char.classList.add(`text-gradient`))

        gsap.from(heroSplit.chars, {
            
            y:  100,
            duration: 1.6,
            stagger: 0.05,
            ease: "back.out(1.7)",
            delay: 0.2
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            y:20,
            duration: 1,
            stagger: 0.1,
            ease: "back.out(1.7)",
            delay: 1
        });


        gsap.timeline({ scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }  })
        .to(".right-leaf", { y: 200}, 0)
        .to(".left-leaf", { y: -200}, 0)
        
        

    }, []  );




    return (
        <section id = "hero" className="noisy">
                <h1 className="title" id = "hero-text">
                    BADU CLEANING
                    </h1>


                <img src="/images/hero-left-leaf.png" id ="trapoa" alt="left-leaf" className="left-leaf"/> 
                <img src="/images/hero-right-leaf.png" id="trapob" alt="right-leaf" className="right-leaf"/>    
   

        <div className="body">
             <div className="content">

                <div id="texto1" className="space-y-5 hidden md:block">
                    <p>Your space isn't just another contract</p>
                    <p id= "caree"className="subtitle"> We actually <br/> care </p>

            </div>

            <div id="texto2" className="view-cocktails">

                <p className="subtitle">
            Local team, real people who care about your space — here for anything. 
            We fix what others don’t: no sloppy crews, no broken promises, no hidden fees.
                </p>

                <a href= "#cocktails"> About Us</a>

            </div>

            </div>

        </div>
        </section>
            
    );
}   

export default Hero;