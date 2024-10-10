import { Link, Outlet } from "react-router-dom";

function Layout(){
    return(
       <>
        <nav class="navbar navbar-expand-lg   bg-secondary-subtle">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link fs-4" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link fs-4" to="/patients">patients</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link fs-4" to="/add">Register</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <div>
            <Outlet/>
        </div>
       </> 
    )
}

export default Layout;