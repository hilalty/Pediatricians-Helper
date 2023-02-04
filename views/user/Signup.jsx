const React = require("react");
const BasicLayout = require("../layout/Basic");

class Signup extends React.Component {
  render() {
    return (
      <BasicLayout cssPath="public/css/app.css">
        <header className="header">
          <nav>
            <img src="/images/hedwig_2.jpeg" className="hedwig_img" alt="h" />
          </nav>
          <p>Hedwig Pediatrics</p>
        </header>
      <h1>Sign up</h1>
      <div className="div">
        <form action="/user/signup" method="POST">
          Name: <input type="text" defaultValue="" name="username" required />
          Password:{" "}
          <input type="password" defaultValue="" name="password" required />
          <input type="submit" name="" value="Signup" />
        </form>
      </div>
      </BasicLayout>
    );
  }
}

module.exports = Signup;