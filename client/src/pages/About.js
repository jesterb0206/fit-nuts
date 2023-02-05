import {React} from 'react';

// imported profile image links
import eddieSelfie from "../images/Fig-Selfie.jpg";
import samAvatar from "../images/southParkAvatar.png";
import patSelfie from "../images/patSelfie.jpg";
import thairAvatar from "../images/blankAvatar.png";
import bradSelfie from "../images/bradSelfie.jfif"


const AboutUs = () => {
    return(

        // Intro Section with paragraph 
        <section className='aboutUsSection'>
            <h1 className='aboutHeader'>Meet The Developers</h1>
                <p className='aboutParagraph'>
                    Hello and thank you for visiting our website! If you enjoyed using our application, then you might enjoy seeing some of our other works. Down below will be links to each of our github repositories along with a couple of other ways you can contact us. We look forward to creating new and innovative applications. See you next time and happy coding!
                </p>
                

            {/* Eduardo Figueroa's Profile */}
            <ul className='linksSection'>
               <li className='dev1' id='devBoxes'>Eduardo Figueroa
                    <a href='https://eddiefigueroa18.github.io/operation-portkey/' target='_blank'>
                        <img className='dev1Picture' id='profilePicture' src={eddieSelfie} alt="Image of Eduardo Figueroa"></img>
                    </a>
                    <a href='https://github.com/eddiefigueroa18' id='githubLinks' target='_blank'>Eduardo's Github</a>
               </li>
            

            {/* Sam Lee's Profile */}
               <li className='dev2' id='devBoxes'>Samuel Lee
                    <a href='https://samlee088.github.io/coding-portfolio/' target='_blank'>
                        <img className='dev2Picture' id='profilePicture' src={samAvatar} alt="Avatar of Samuel Lee"></img>
                    </a>
                    <a href='https://github.com/samlee088' id='githubLinks' target='_blank'>Sams's Github</a>
               </li>
               
        
            {/*  Pat Lubak's Profile*/}
                <li className='dev3' id='devBoxes'>Pat Lubak
                    <a href='https://patl8822.github.io/portfolio-2.0/' target='_blank'>
                        <img className='dev3Picture' id='profilePicture' src={patSelfie} alt="Picture of Pat lubak in the mountains"></img>
                    </a>
                    <a href='https://github.com/PatL8822' id='githubLinks' target='_blank'>Pat's Github</a>
               </li>


            {/* Thair Ibadi's Profile */}
                <li className='dev4' id='devBoxes'>Thair Ibadi 
                 {/* TODO: */}
                 {/* need to add portfolio website link below  */}
                    <a href='' target='_blank'>
                        <img className='dev4Picture' id='profilePicture' src={thairAvatar} alt="Avatar of Thair"></img>
                    </a>
                    <a href='https://github.com/Thair-i' id='githubLinks' target='_blank'>Thair's Github</a>
                </li>


            {/* Bradley's Profile */}
                <li className='dev5' id='devBoxes'>Bradley Jester
                    <a href='https://jesterb0206.github.io/react-portfolio/' target='_blank'>
                        <img className='dev3Picture' id='profilePicture' src={bradSelfie} alt="Picture of Bradley Jester"></img>
                    </a>
                    <a href='https://github.com/jesterb0206' id='githubLinks' target='_blank'>Bradley's Github</a>
                </li>


            </ul>

        </section>
    )
}


export default AboutUs;