import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <Interaction />
    </div>
  );
}

function Interaction() {
  const [press, setPress] = useState(0);
  console.log(press);
  function countState() {
    setPress(press + 1);
  }
  if (press === 1) {
    return (
      <ShowContent />
    );
  }
  else {
    return (
      <div className="backgroundPage">

        <div>
          <h1 className="question">Tired of count sheep/upcoming assignments?</h1>
        </div>

        <div className="problemBox">
          <p className="problem">
          Ever find yourself unconsciously picking up your phone and next thing you know
          </p>
          <p className="problem">
          you're NOT finishing up that paper but you're shopping for Feiyue's on Taobao...
          </p>
          <p className="problem">
          and the next thing you know, an all nighter is the only solution?
          </p>
        </div>

        <div className="buttonBox">
          <button className="startingButton" onClick={countState}>
            Wanna solve that? Click!
          </button>
        </div>
      </div>
    );
  }
}

function ShowContent() {
  return (
    <div className="App">
      <div className="topbox">
        <div className="logo">
          <img className="break" src="b4uco-hazjf-0.jpg" alt="logo"/>
        </div>

        <div className="name">
          <h1>
            Break
          </h1>
        </div>
      </div>

      <div>
        <h2 className="slogan">“Every time you unconsciously click on the application you'll be redirected to Break and will remind you of the tasks you have!”</h2>
      </div>

      <div className="ui">
        <div className="uipage">
          <img className="phone" src="iPhone X 1 Template.jpg" alt="homepage"/>

          <div className="description">
            <p>
              Break helps remind you of your intentions of using your digital devices and your goals for the day.
            </p>
          </div>
        </div>

        <div className="uipage">
          <img className="phone" src="iPhone X 3 Template.jpg" alt="custimization"/>

          <div className="description">
            <p>
              Choose how you want to "break" bad habits by customizing which applications have limited access.
          </p>
          </div>
        </div>

        <div className="uipage">
          <img className="phone" src="iPhone X 2 Template.jpg" alt="stats"/>

          <div className="description">
            <p>
              Track your usage and see how far you are into changing your habits!
          </p>
          </div>
        </div>
      </div>

      <div>
        <button>
          Click to learn more!
        </button>
      </div>
    </div>
  );
}



export default App;
