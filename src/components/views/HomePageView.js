

import { Link } from 'react-router-dom';



const HomePageView = () => {
  return (
    <div>
      <h1 class="final">Final Project</h1>
      <br />
      <Link to={'/employees'} class="homeLinks"> All Employees </Link>
      <br />
      <br />
      <br />
      <Link to={'/tasks'} class="homeLinks"> All Tasks </Link>
      
    </div>
  );    
}




export default HomePageView;