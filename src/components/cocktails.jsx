import React from "react";
import { cocktailLists, mockTailLists } from "../../constants";

const Cocktails = () => {
    return (    
        <section id="cocktails" className="noisy">   

        <img src = "/images/cocktails-right-leaf.png" alt="r-leaf" id="c-right-leaf" className="right-leaf"/>

        <div className="list"> 

            <div className="popular"></div>

             <h2>Our Services: </h2>
    
                <ul>
                    {cocktailLists.map((drink) => (
                        <li key={drink.name}>
                            <div className="md:me-28">
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>

                            </div>
                            <span>- {drink.price}</span>
                        </li>
                    ))}
                </ul>


                <div className="loved"></div>

             <h2> </h2>
                <ul>
                    {mockTailLists.map((drink) => (
                        <li key={drink.name}>
                            <div className="md:me-28">
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>

                            </div>
                            <span>- {drink.price}</span>
                        </li>
                    ))}
                </ul>
                    
        </div>


        </section>
    )
}
export default Cocktails