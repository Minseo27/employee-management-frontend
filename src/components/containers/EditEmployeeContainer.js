import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { fetchEmployeeThunk, editEmployeeThunk, fetchAllTasksThunk  } from '../../store/thunks';


class EditEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "", 
            lastname: "",
            department: "", 
            id: null, 
            redirect: false, 
            redirectId: null,
            error: ""
        };
    }

    componentDidMount() {
        //getting task ID from url
        this.props.fetchEmployee(this.props.match.params.id);
        this.props.fetchTasks();
        this.setState({
            firstname: this.props.employee.firstname, 
            lastname: this.props.employee.lastname,
            department: this.props.employee.department, 
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    // handleSelectChange = event => {
    //   //handle change for the dropdown menu
    //   //want to set the id based on the selected choice
    //   //when the form gets submitted, this is how we can change
    //   //assigned employee without having to manually enter in the 
    //   //id like before
    //   if (event.target.value === "staff") {
    //     this.setState({id:null});
    //   } else {
    //     this.setState({id: event.target.value})
    //   }
    // }

    handleSubmit = event => {
        event.preventDefault();
        //implementing form validation
        if (this.state.firstname === "") {
          this.setState({error: "Error: first name cannot be empty"});
          return;
        }
        if (this.state.lastname === "") {
            this.setState({error: "Error: last name cannot be empty"});
            return;
          }
        if (this.state.department === "") {
            this.setState({error: "Error: department cannot be empty"});
            return;
        }

        //get new info for task from form input
        let employee = {
            id: this.props.employee.id,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            department: this.state.department
        };
        
        this.props.editEmployee(employee);

        this.setState({
          redirect: true, 
          redirectId: this.props.employee.id
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});

    }

    render() {
        let { employee, allTasks, editTask, fetchTask} = this.props;
        // let assignedEmployee = task.id;

        // let otherEmployees = allEmployees.filter(employee => employee.id!==assignedEmployee);
      
        //go to single task view of the edited task
        if(this.state.redirect) {
          return (<Redirect to={`/employee/${this.state.redirectId}`}/>)
        }

        return (
        <div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" value={this.state.firstname || ''} placeholder={employee.firstname} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" value={this.state.lastname || ''} placeholder={employee.lastname} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
            <input type="text" name="department" value={this.state.department || ''} placeholder={employee.department} onChange={(e) => this.handleChange(e)}/>
            <br/>

            {/* <select onChange={(e) => this.handleSelectChange(e)}>
              {task.employee!==null ?
                <option value={task.id}>{task.employee.firstname+" (current)"}</option>
              : <option value="staff">Staff</option>
              }
              {otherEmployees.map(employee => {
                return (
                  <option value={employee.id} key={employee.id}>{employee.firstname}</option>
                )
              })}
              {task.employee!==null && <option value="staff">Staff</option>}
            </select> */}
  
            <button type="submit">
              Submit
            </button>

          </form>
          { this.state.error !=="" && <p>{this.state.error}</p> }

          {/* {task.id !== null ?
            <div> Current employee:  
            <Link to={`/employee/${task.id}`}>{task.employee.firstname}</Link>
            <button onClick={async () => {await editTask({id:task.id, id: null});  fetchTask(task.id)}}>Unassign</button>
            </div>
            : <div> No employee currently assigned </div>
          }

          <div> Other employees
          {otherEmployees.map(employee => {
            return (
            <div key={employee.id}>
                <Link to={`/employee/${employee.id}`}>
                  <h4>{employee.firstname}</h4>
                </Link>
                <button onClick={async() => {await editTask({id:task.id, id: employee.id}); fetchTask(task.id)}}>Assign this employee</button>
            </div>
            )})
          }
          </div> */}
        </div>
        )
    }
}

// map state to props
const mapState = (state) => {
    return {
      employee: state.employee,
      allTasks: state.allTasks
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editEmployee: (employee) => dispatch(editEmployeeThunk(employee)),
        fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
        fetchTasks: () => dispatch(fetchAllTasksThunk()),

    })
}

export default connect(mapState, mapDispatch)(EditEmployeeContainer);