const React = require("react");
const BasicLayout = require("../layout/Basic");

class Show extends React.Component {
  render() {
    const patient = this.props.patient;

    return (
      <BasicLayout cssPath="public/css/app.css">
        <header className="header">
        <nav><img src="/images/hedwig_2.jpeg" className="hedwig_img" alt="h"/>
        <a className="logout" href="/user/logout">
              <button>Logout</button>
            </a></nav>
        <p>Hedwig Pediatrics</p>
        </header>
        <h1>Patient Information</h1>
        <div className="div">
          <nav>
            <a className="links" href="/patients">
              Main Page
            </a>
          </nav>
          <p>
            First and Last Names: {patient.firstName} {patient.lastName}
          </p>
          <p>Date of Birth: {patient.dob}</p>
          <p>Gender: {patient.gender}</p>
          <p>Parent's Name: {patient.parentsName}</p>
          <p>Address: {patient.address}</p>

          <nav>
            <a className="links" href={`/patients/${patient.id}/edit`}>
              Edit {patient.firstName}'s Info
            </a>
          </nav>
        </div>
      </BasicLayout>
    );
  }
}

module.exports = Show;
