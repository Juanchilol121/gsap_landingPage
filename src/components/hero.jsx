import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import {useRef} from "react"


const Hero = () => {

    const videoRef  = useRef();

    

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
        .to(".right-leaf", { y: 200, rotation: -20}, 0)

        .to(".arrow", { y: 100 }, 0);
        
        
          // Animate video currentTime from 0 to duration on scroll
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.onloadedmetadata = () => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: "#hero",
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        pin: false,
                    },
                }).to(videoRef.current, {
                    currentTime: videoRef.current.duration,
                    ease: "none",
                });
            };
        }

    }, []  );




    return (
        <>
        <section id = "hero" className="noisy">
                <h1 className="title" id = "hero-text">
                    BADU CLEANING
                    </h1>


                
                <img src="/images/hero-right-leaf.png" id="trapob" alt="right-leaf" className="right-leaf"/>    
   

        <div className="body">

            <img src="/images/arrow.png" alt="arrow" className="arrow" /> 
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

        <div className="video absolute inset-0">

            <video 
            src="/videos/output.mp4" 
             ref = {videoRef} 
             muted
              playsInline 
              preload ="auto" 
              loop
              />
            

        </div>
        
    </>
            
    );
}   

export default Hero;