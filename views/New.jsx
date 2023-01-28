const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Patient Page</h1>
        <form action="/patients" method="POST">
          First Name: <input type="text" name="firstName" />
          <br />
          Last Name: <input type="text" name="lastName" />
          <br />
          Date of Birth: <input type="text" name="dob" />
          <br />
          Gender: <input type="text" name="gender" />
          <br />
          Parent's Name: <input type="text" name="parentsName" />
          <br />
          Adress: <input type="text" name="address" />
          <br />
          
          <input type="submit" name="" value="Create a Patient Account" />
        </form>
      </div>
    );
  }
}

module.exports = New;