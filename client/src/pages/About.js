/* eslint-disable jsx-a11y/img-redundant-alt */
import { React } from 'react';

// Import Developer Portraits

import Eddie from '../images/eddie.png';
import samAvatar from '../images/southParkAvatar.png';
import Pat from '../images/pat.png';
import Thair from '../images/thair.png';
import Bradley from '../images/bradley.png';

const AboutUs = () => {
  return (
    // Intro Section with paragraph
    <section className='aboutUsSection'>
      <h1 className='aboutHeader'>Meet the Developers 💻</h1>
      <p className='aboutParagraph'>
        Hello, and thank you for visiting Fit NUTS! 🏋️‍♀️🥜🏋️‍♂️ If you enjoyed using
        our application then you might enjoy exploring some of our other work.
        You can find links down below to each of our GitHub repositories along
        with a couple of other ways to contact us. We look forward to creating
        new and innovative web applications to make your life more convenient.
        See you next time and happy coding!
      </p>

      {/* Eduardo Figueroa's Profile */}
      <div className='linksSection devCards'>
        <p id='name'>Eduardo Figueroa</p>
        <a
          href='https://eddiefigueroa18.github.io/operation-portkey/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='devPicture'
            id='profilePicture'
            src={Eddie}
            alt='Eduardo Figueroa Portrait Picture'
          ></img>
        </a>
        <a
          href='https://github.com/eddiefigueroa18'
          id='githubLinks'
          target='_blank'
          rel='noreferrer'
        >
          Eduardo's Github
        </a>
      </div>

      {/* Samuel Lee's Profile */}
      <div className='linksSection devCards'>
        <p id='name'>Samuel Lee</p>
        <a
          href='https://samlee088.github.io/coding-portfolio/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='devPicture'
            id='profilePicture'
            src={samAvatar}
            alt='Avatar of Samuel Lee'
          ></img>
        </a>
        <a
          href='https://github.com/samlee088'
          id='githubLinks'
          target='_blank'
          rel='noreferrer'
        >
          Samuel's Github
        </a>
      </div>

      {/* Pat Lubak's Profile */}
      <div className='linksSection devCards'>
        <p id='name'>Pat Lubak</p>
        <a
          href='https://patl8822.github.io/portfolio-2.0/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='devPicture'
            id='profilePicture'
            src={Pat}
            alt='Pat Lubak in the Mountains'
          ></img>
        </a>
        <a
          href='https://github.com/PatL8822'
          id='githubLinks'
          target='_blank'
          rel='noreferrer'
        >
          Pat's Github
        </a>
      </div>

      {/* Thair Ibadi's Profile */}
      <div className='linksSection devCards'>
        <p id='name'>Thair Ibadi</p>
        <a
          href='https://thair-i.github.io/My-Portfolio/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='devPicture'
            id='profilePicture'
            src={Thair}
            alt='Thair Ibadi by a Waterfall'
          ></img>
        </a>
        <a
          href='https://github.com/Thair-i'
          id='githubLinks'
          target='_blank'
          rel='noreferrer'
        >
          Thair's Github
        </a>
      </div>

      {/* Bradley Jester's Profile */}
      <div className='linksSection devCards'>
        <p id='name'>Bradley Jester</p>
        <a
          href='https://jesterb0206.github.io/react-portfolio/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='devPicture'
            id='profilePicture'
            src={Bradley}
            alt='Bradley Jester Portrait Picture'
          ></img>
        </a>
        <a
          href='https://github.com/jesterb0206'
          id='githubLinks'
          target='_blank'
          rel='noreferrer'
        >
          Bradley's Github
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
