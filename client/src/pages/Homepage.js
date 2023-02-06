import {React} from 'react';

// A Function That Renders The Home Page Body Content

const Homepage = () => {
  return (
    // A Container To Center The Homepage Content
    <div className='homepageSection'>
      {/* Fit NUTS Header */}
      <h1 className='welcomeHeader'>Welcome To Fit NUTS! 🏋️‍♀️🥜🏋️‍♂️</h1>
      {/* Fit NUTS Blurb */}
      <p className='introParagraph'>
        This web application is for the modern day fitness nut! Here you will be
        able to save all of your daily exercises, workouts, reps, sets, etc. All
        you have to do is sign in or create an account and get to pumping some
        iron. Once you’re signed in, you can start creating workouts by
        selecting the “create workout” button in the navigation bar. You can
        view your past workouts by selecting the “workout summary” button. This
        also where you can find your last PR (Personal Record). Our goal is to
        help you to keep track of your progress and motivate you to beat your
        personal best. I’ll see you at the gym and let’s get to exercising!
      </p>
    </div>
  );
};

export default Homepage;
