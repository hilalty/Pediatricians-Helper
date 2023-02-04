const React = require("react");
const BasicLayout = require("../layout/Basic");

class Login extends React.Component {
  render() {
    return (
      <BasicLayout cssPath="public/css/app.css">
        <header className="header">
          <nav>
            <img src="/images/hedwig_2.jpeg" className="hedwig_img" alt="h" />
          </nav>
          <p>Hedwig Pediatrics</p>
        </header>
      <div className="div">
        <div>
        <h1>Welcome to Hedwig Pediatrics Patient Information Tool!</h1>
        <h3>If you have an account please log in</h3>
        
        <form action="/user/login" method="POST">
          Name: <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          <input type="submit" name="" value="Login" />
        </form></div>
        <div><h3>If you don't have an account,</h3><a className="links" href="/user/signup">
          Sign up
        </a></div>
      </div>
      </BasicLayout>
    );
  }
}

module.exports = Login;