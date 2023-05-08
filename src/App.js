import "./App.css";

//Router
import { Switch, Route,Link } from "react-router-dom";
//Components
import {
  HomePageContainer,
  EmployeeContainer,
  TaskContainer,
  AllEmployeesContainer,
  AllTasksContainer,
  NewTaskContainer,
  NewEmployeeContainer,
  EditTaskContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or instructor, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">


    <ul>
      <li>  <a><Link to={'/'} > Home </Link></a></li>
      <li> <a><Link to={'/employees'} > All Employees </Link> </a></li>
      <li>  <a><Link to={'/tasks'} > All Tasks </Link></a></li>
     
    </ul>

      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/employees" component={AllEmployeesContainer} />
        <Route exact path="/employee/:id" component={EmployeeContainer} />
        <Route exact path="/tasks" component={AllTasksContainer} />
        <Route exact path="/newtask" component={NewTaskContainer} />
        <Route exact path="/newemployee" component={NewEmployeeContainer} />
        <Route exact path="/task/:id" component={TaskContainer} />
        <Route exact path="/edittask/:id" component={EditTaskContainer} />

      </Switch>        
    </div>
  );
}

export default App;

