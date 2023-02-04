const React = require("react");
const BasicLayout = require("../layout/Basic");

class Index extends React.Component {
  render() {
    const { patients } = this.props;

    return (
      <BasicLayout cssPath="public/css/app.css">
        <header className="header">
          <nav>
            <img src="/images/hedwig_2.jpeg" className="hedwig_img" alt="h" />
            <a className="logout" href="/user/logout">
              <button>Logout</button>
            </a>
          </nav>
          <p>Hedwig Pediatrics</p>
        </header>
        <h1>Patients Main Page</h1>
        <a className="links" href="/patients/new">
          Create a New Patient Account
        </a>

        <div className="div">
          <ul>
            {patients.map((patient, i) => {
              return (
                <li key={i}>
                  <a className="patients" href={`/patients/${patient.id}`}>
                    {" "}
                    {patient.firstName} {patient.lastName}{" "}
                  </a>

                  <form
                    className="deleteUpdatebtn"
                    action={`/patients/${patient.id}?_method=DELETE`}
                    method="POST"
                  >
                    <input type="submit" value="DELETE" />
                  </form>
                  <form
                    className="deleteUpdatebtn"
                    action={`/patients/${patient.id}/edit`}
                    method="GET"
                  >
                    <input type="submit" value="UPDATE" />
                  </form>
                </li>
              );
            })}
          </ul>
        </div>
      </BasicLayout>
    );
  }
}

module.exports = Index;
