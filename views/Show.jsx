const React = require("react");

class Show extends React.Component {
  render() {
    const patient = this.props.patient;

    return (
      <div>
        <h1>Patients Show Page</h1>
        <nav>
          <a href="/patients">Back to Index Page</a>
        </nav>
        <p>
          First and Last Names: {patient.firstName}{" "}{patient.lastName}
        </p>
        <p>Date of Birth: {patient.dob}</p>
        <p>Gender: {patient.gender}</p>
        <p>Parent's Name: {patient.parentsName}</p>
        <p>Address: {patient.address}</p>
        <nav>
          <a href={`/patients/${patient.id}/edit`}>Edit {patient.firstName}'s Info</a>
        </nav>
      </div>
    );
  }
}

module.exports = Show;