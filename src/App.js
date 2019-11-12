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
      <div className="buttonBox">
        <button onClick={countState}>
          Wanna break a habit?
    </button>
      </div>
    );
  }
}

function ShowContent() {
  return (
    <div className="App">
      <div className="topbox">
        <div className="logo">
          <img className="break" src="https://ucd4b88dd57e2e4ab7a7ef1b4989.previews.dropboxusercontent.com/p/thumb/AAk9oroj4w0HlXNc-qOTRimT8ifqImkEFva7yZEShz44MaVGOk-lpuzuKa-OXbK8ytRTP-Gz0yiJ2-VurMp17pKEUaZT4inic_M3wf-3kLcNcuYwKEYsbZ1Y74lvX1ilH-Dpu5PpU99T5LvWnH1NM7z11EW0s0RYe7mX4KT67pC_5xdePaS8q03fCeruxxMAF5riqb8JohNBME7GII60v0U-iXXq_Xv1NwSTiLNLFnEJrxMF8GqM0NFg06Y3206YrlF4jJZ5m4XUZafCtf-3eHlBNypPcLGaqQb0pweVrE8YJNF_ycWcpCsT-jFTK1y5EQllYMBNvd6JvqsFGqLCuyQL/p.png" alt="logo"></img>
        </div>

        <div className="name">
          <h1>
            Break
        </h1>
        </div>
      </div>

      <div>
        <h1 className="slogan">“it takes 66 days to change a habit, can you do it?”</h1>
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
          <img className="phone" src="https://previews.dropbox.com/p/thumb/AAn7SGUm0wbUwNP3e_YXOmQb-f6ZmXmsjizgdkbfUhp6V7iYql5oAI4gaLeuzwZsHFjlTC9qvMyTYWG0fJI_vtZiAC7BbmuemYSHxE8vC5KHcl2TG6SKJXmKIkDOjZTrICNjWwqid_Ji5hRdGsM1jBoygRfL7GyFSnBh5-0exlHNydexg_kK0r_5CQRj3JLCDYzvp1_0us1WMUgeFsvaU6Sfvl_DhlXjqLId0TuHdIihDx2FpNm9HdHCCp7paab-lwXCAZEAMAmbeDwMbCLJ8uSEAk5HA9LqQSWL5UhqORK7g8EbL7Fg7btMKO0qfCpIjtHenszE2HG2XkK2dF_6S4WBnQmD4FtL6GtGltMI2VnlMw/p.png?size=2048x1536&size_mode=3" alt="customization"></img>

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
    </div>
  );
}



export default App;
