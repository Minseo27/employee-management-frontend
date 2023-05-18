import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  return (
    <div>
      <h1>{task.title}</h1>
      {task.employee ? <h3>{"Task assigned to: " + task.employee.firstname + " " + task.employee.lastname}</h3>: <h3>Task not assigned</h3>}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;