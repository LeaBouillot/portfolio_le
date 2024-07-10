import React from "react";
import aboutImg from "../assets/about4.jpeg";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";

const About = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={aboutImg} alt="" />
          </div>
        </div>

        <div>
          <div>
            <div>
              <h3>A propos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus labore esse veniam est consequatur quia in, sint autem
                tempora dolor iure. Totam harum eum, excepturi fugit ad quasi
                voluptates minus.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h3>Projets</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
{/* projets */}
          <div className="grid grid-cols-2 gap-4 ">

            <a href="/">
             <img src={proj1} alt="" />
              <div className="">
                </div>
            </a>

            <a href="/">
             <img src={proj2} alt="" />
              <div className="">
                </div>
            </a>

            <a href="/">
             <img src={proj3} alt="" />
              <div className="">
                </div>
            </a>

            <a href="/">
             <img src={proj4} alt="" />
              <div className="">
                </div>
            </a>

            <a href="/">
             <img src={proj5} alt="" />
              <div className="">
                </div>
            </a>

            <a href="/">
             <img src={proj6} alt="" />
              <div className="">
                </div>
            </a>

          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
