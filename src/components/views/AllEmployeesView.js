import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";


const AllEmployeesView = (props) => {
  let {deleteEmployee} = props;
  if (!props.allEmployees.length) {
    return <div>There are no employees.</div>;
  }

  return (
    <div className="table">
    <table className="custom-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Delete</th>
          </tr>
          </thead>
          <tbody>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <tr key={employee.id}>
            <td>
          <Link to={`/employee/${employee.id}`}>
            {name}
          </Link></td>
          <td>{employee.department}</td>
          <td>
          <button onClick={() => deleteEmployee(employee.id)} class="DeleteButton">Delete</button>
          </td>
          </tr>
        );

      })}
      </tbody>
    </table>
    <Link to={`/newemployee`}>
        <button class="NewEmployee">Add New Employee</button>
      </Link>
    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;