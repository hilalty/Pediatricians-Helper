const React = require("react");
const BasicLayout = require("../layout/Basic");

class New extends React.Component {
  render() {
    return (
      <BasicLayout cssPath="public/css/app.css">
                <header className="header">
        <nav><img src="/images/hedwig_2.jpeg" className="hedwig_img" alt="h"/>
        <a className="logout" href="/user/logout">
              <button>Logout</button>
            </a></nav>
        <p>Hedwig Pediatrics</p>
        </header>
        <div className="div">
          <h1>New Patient Page</h1>
          <a className="links" href="/patients">
              Main Page
            </a>
          <form action="/patients" method="POST">
            <h3>
              First Name: <br />
              <input type="text" name="firstName" />
            </h3>
            <h3>
              Last Name: <br />
              <input type="text" name="lastName" />
            </h3>
            <h3>
              Date of Birth: <br />
              <input type="date" name="dob" />
            </h3>
            <h3>
              Gender: <br />
              <div>
                <input type="radio" name="gender" value="female" />
                <label for="female">female</label>
              </div>
              <div>
                <input type="radio" name="gender" value="male" />
                <label for="male">male</label>
              </div>
            </h3>
            <h3>
              Parent's Name: <br />
              <input type="text" name="parentsName" />
            </h3>
            <h3>
              Address: <br />
              <input type="text" name="address" />
            </h3>
            <input type="submit" name="" value="Create a Patient Account"/>
          </form>
        </div>
      </BasicLayout>
    );
  }
}

module.exports = New;
