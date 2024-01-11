import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <Link class="navbar-brand" to="/Home">Task Manager</Link>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><Link to="/Home">Home</Link></li>
            <li><Link to="/Add">Add TODO List</Link></li>
            <li><Link to="/Display">Display Data</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Menu;