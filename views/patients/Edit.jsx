const React = require("react");
const BasicLayout = require("../layout/Basic");

class Edit extends React.Component {
  render() {
    const patient = this.props.patient;

    return (
      <BasicLayout cssPath="public/css/app.css">
        <header className="header">
          <nav>
            <img
              src="/images/hedwig_2.jpeg"
              className="hedwig_img"
              alt="h"
            />
            <a className="logout" href="/user/logout">
              <button>Logout</button>
            </a>
          </nav>
          <p>Hedwig Pediatrics</p>
        </header>
        <div className="div">
        <h1>
          {patient.firstName} {patient.lastName} Edit Page
        </h1>
        <nav>
          <a className="links" href="/patients">
            Back
          </a>
        </nav>
        <form action={`/patients/${patient.id}?_method=PUT`} method="POST">
          <p>
            First Name:{" "}
            <input
              type="text"
              name="firstName"
              defaultValue={patient.firstName}
            />
          </p>
          <p>
            Last Name:{" "}
            <input
              type="text"
              name="lastName"
              defaultValue={patient.lastName}
            />
          </p>
          <p>
            Date of Birth:{" "}
            <input type="text" name="dob" defaultValue={patient.dob} />
          </p>
          <p>
            Gender:{" "}
            <input type="text" name="gender" defaultValue={patient.gender} />
          </p>
          <p>
            Parent's Name:{" "}
            <input
              type="text"
              name="parentsName"
              defaultValue={patient.parentsName}
            />
          </p>
          <p>
            Address:{" "}
            <input type="text" name="address" defaultValue={patient.address} />
          </p>
          <input type="submit" value="Update" />
        </form>
        </div>
      </BasicLayout>
    );
  }
}
module.exports = Edit;
