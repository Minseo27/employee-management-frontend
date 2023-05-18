import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.css";


const AllEmployeesView = (props) => {
  let {deleteEmployee} = props;
  if (!props.allEmployees.length) {
    return <div>There are no employees.</div>;
  }

  return (
    <div>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id}>
          <Link to={`/employee/${employee.id}`}>
            <h1>{name}</h1>
          </Link>
          <button onClick={() => deleteEmployee(employee.id)} class="DeleteButton">Delete</button>
          <p>{employee.department}</p>
        </div>
        );

      })}
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