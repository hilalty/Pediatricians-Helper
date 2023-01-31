const React = require("react");

class Index extends React.Component {
  render() {
    const { patients } = this.props;

    return (
      <div>
        <h1> Patients Index Page</h1>
        <nav>
          <a href="/patients/new">Create a New Patient Account</a>
          <div>
            <a href="/user/signup">
              <button>Sign up</button>
            </a>
            <a href="/user/login">
              <button>Log in</button>
            </a>
          </div>
          <a href="/user/logout">
            <button className="logoutBtn">Logout</button>
          </a>
        </nav>
        <ul>
          {this.props.patients.map((patient, i) => {
            return (
              <li key={i}>
                <a href={`/patients/${patient.id}`}>
                  {" "}
                  {patient.firstName} {patient.lastName}{" "}
                </a>

                <form
                  action={`/patients/${patient.id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                <form action={`/patients/${patient.id}/edit`} method="GET">
                  <input type="submit" value="UPDATE" />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
