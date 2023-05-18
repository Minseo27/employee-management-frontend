import { Link } from "react-router-dom";
import "./styles.css";

const AllTasksView = (props) => {
  let {tasks, deleteTask} = props;
  //tasks = [{id: 300, title: "hello"}]
  if (!tasks.length) {
    return (
    <div>
      <p>There are no tasks.</p>
      <Link to={`/newtask`}>
        <button class="NewTask">Add New Task</button>
      </Link>
    </div>
    );
  }
  
  return (
    <div className="table">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Delete</th>
            </tr>
            </thead>
            <tbody>
      {tasks.map((task) => {
        let title = task.title;
        return (
          <tr key={task.id}>
            <td>
          <Link to={`/task/${task.id}`} class ="listStyle">
            {title}
          </Link>
          </td>
          <td>
          <button onClick={() => deleteTask(task.id)} class="DeleteButton">Delete</button>
          </td>
          </tr>
        );
      }
      )}
      </tbody>
      </table>
      <Link to={`/newtask`}>
        <button class="NewTask">Add New Task</button>
      </Link>
    </div>
  );
};


export default AllTasksView;