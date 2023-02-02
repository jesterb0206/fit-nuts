/* Mainpage with login, we can have a separate login page if wanted before this homepage

Once logged in, this will be the summary page with the accounts and calendars for high level workout overview*/



import {React} from 'react';
// import style from '../../src/App.css'


const Homepage = () => {


    return(
        <div className='homepageSection'>
            <h1 className='welcomeHeader'>Welcome To Fitness Nuts!</h1>
            <p className='introParagraph'>This web application is for the modern day FITNESS NUT! Here you will be able to save all of your every day exercises, workouts, reps, sets, etc. All you have to do is sign in or create an account and get to pumping some iron . . . or whatever it is that you do. . . Once you're signed in, you can start creating workouts be selecting the "create workout" buttons in the navigation bar5 on top. you can also look up your old workouts by selecting the "past workouts" button to see what you last PR (personal record) was the last time. Anyways, lets get to exercising! I'll see you in the gym!</p>
        </div>
    )
}

export default Homepage




