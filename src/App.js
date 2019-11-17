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
            Wanna solve that?
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
          <img className="break" src="https://previews.dropbox.com/p/thumb/AAlmdu14wTFS2Wm94hWstsDSpda98GVMMDecAl1TmXPh8cnrWp64DVyINcM-CjDg_5okF8Ujr02E4EVy529o0Zj9pJwOAbXOTMPIglFKYBmB_I_n5xpuDs6sHgmXxz_r-E3CrXV2_Vkr8LJRtwNJlUF_3P29SwQktStRglV2AKqZDQXn7QTRDlyohcKZR_R8U7XZWkdDEMTUEX0LhDGIVe4WxDoOB2dLjxrK30BwUf5-zQtSHoHjGats-XxTWgTFXeuMkJZH5nGy3ueMSXycYWdchJyZa4scQShs3Fgylg6KOpxuqTVKMV1G9rQ9UO7bqv3-dt_Hjts9m_92OZBHI0CpFUv6S-19w8d64yBP_BzU5w/p.png?fv_content=truesize_mode=5" alt="logo"></img>
        </div>

        <div className="name">
          <h1>
            Break
        </h1>
        </div>
      </div>

      <div>
        <h1 className="slogan">“Every time you unconsciously click on the application you'll be redirected to Break and will remind you of the tasks you have!”</h1>
      </div>

      <div className="ui">
        <div className="uipage">
          <img className="phone" src="https://previews.dropbox.com/p/thumb/AAmzgQPJo2tXk84vPc5THKrmXOW9NijopcDqyZD80DMb6FeCCQnpZo3TlPAjL2FgXUsUptWOK7dTELfp_1h74ITDQydSJwP_WyuEPVfCsGE7kiXBHp-FDxOWsNw-N2CUgXUje2qaxer6-Xb0_ZxgKelCI4wIt_67z7_7JTY4bJlflD8v0fjbBQfLKNERMOgn253hYfuOx1yDfQoHEjr57ZXA6B7jj_67iu9oIVFRX0Ikdt-PEH_yMw1FxT8TsEH5shZkZjjVXNppBVzVq4z44DTGek_er66E__4v906d2Wx_u3hnkKlfKAy5w1zCD29BZ-024UozRqw49AQjuGnPRkn4LBx15ZlBgDWwYu3AAbEnTw/p.png?size=2048x1536&size_mode=3" alt="homepage"></img>

          <div className="description">
            <p>
              Break helps remind you of your intentions of using your digital devices and your goals for the day.
          </p>
          </div>
        </div>

        <div className="uipage">
          <img className="phone" src="https://previews.dropbox.com/p/thumb/AAn7SGUm0wbUwNP3e_YXOmQb-f6ZmXmsjizgdkbfUhp6V7iYql5oAI4gaLeuzwZsHFjlTC9qvMyTYWG0fJI_vtZiAC7BbmuemYSHxE8vC5KHcl2TG6SKJXmKIkDOjZTrICNjWwqid_Ji5hRdGsM1jBoygRfL7GyFSnBh5-0exlHNydexg_kK0r_5CQRj3JLCDYzvp1_0us1WMUgeFsvaU6Sfvl_DhlXjqLId0TuHdIihDx2FpNm9HdHCCp7paab-lwXCAZEAMAmbeDwMbCLJ8uSEAk5HA9LqQSWL5UhqORK7g8EbL7Fg7btMKO0qfCpIjtHenszE2HG2XkK2dF_6S4WBnQmD4FtL6GtGltMI2VnlMw/p.png?fv_content=true&size_mode=5"></img>

          <div className="description">
            <p>
              Choose how you want to "break" bad habits by customizing which applications have limited access.
          </p>
          </div>
        </div>

        <div className="uipage">
          <img className="phone" src="https://previews.dropbox.com/p/thumb/AAnFZ06Vv-99LoHwMhQvdWY7jiPNOU31if6S0HEEfNgJs13cvTGghzn3_buQmsJZxBTqYjmZh4lL5z9lXdA39tHPsiK08opoLE9gMnlHSJwzF4anNMzVg7r6FUMqzRTc3cazMj25_MvGtNDjlnu1kTHgRsSqvSbBjjIhO_XWF-jmvn1RwCF9tcLHu5JJoJhpA04Z4sWUmgRnMGh0NQV-KDjQ7ebbob0pcqT5yrxCBxoxfkEw_N93wYGLPL3QT2ryvNzj3FcUfod8r93AU4luUwe50RDmXQIKBNlATXTyiVwZr_tIZBU3WYNNng16ydm_jtQVzu--_U9BAy0QtiHi9wl9Si0yAS5gDTEgZnIdX8n9gw/p.png?size=2048x1536&size_mode=3" alt="stats"></img>

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
