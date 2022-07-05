import React from 'react'
import "./Footer.css";
import "../Section/Section.css";

// import icons form icons
import Icons from "../img/Icons"


export const Footer = () => {
  return (
    <div id="Footer">Footer
    <div className="Footer__header ">
    {/* <div className="Section__Container">  */}
        <ul className="Footer__ul">
         {/* access icons from the images */}
    
         <a href='https://www.instagram.com/lovespictures__/' target="_blank" rel="noreferrer" > 
         <img className="Footer__icon" src={ Icons.iconInstagram}  alt="Instagram logo" /> 
         </a>

         <a href='https://www.linkedin.com/in/lovespictures/' target="_blank" rel="noreferrer" > 
         <img className="Footer__icon" src={ Icons.iconLinkedin}  alt="Linkedin logo" /> 
         </a> 

         <a href='https://twitter.com/judithricketts' target="_blank" rel="noreferrer" > 
         <img className="Footer__icon" src={ Icons.iconTwitter}  alt="Twitter logo" /> </a>
        

        <a href='https://www.linkedin.com/in/lovespictures/' target="_blank" rel="noreferrer" > 
         <img className="Footer__icon" src={ Icons.iconPinterest}  alt=" Pinterest logo" /> </a>
       

        <a href='https://www.linkedin.com/in/lovespictures/' target="_blank" rel="noreferrer" > 
         <img className="Footer__icon" src={ Icons.iconFacebook}  alt="Facebook logo" /> </a>
        </ul>
        
        <h3>
        &copy; Jude Ricketts 
         {/* <a
          href="https://github.com/LovesPictures"
          target="_blank"
          rel="noopener noreferrer nofollow"
        > <img className="Footer__icon" src={ Icons.iconHeart}
        alt="Heart Icon " />
        </a> */}
      </h3>
      </div>
     </div>
  )
}



