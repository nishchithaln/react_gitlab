import { Link } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">Shopping Cart</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {/* <div>
                                <i class="fa-solid fa-house"></i>
                            </div> */}

                            <li className="nav-item">
                                <Link to="/homecomp" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/productcomp" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactus" className="nav-link">Contact Us</Link>
                            </li>

                        </ul>
                    </div>

                    <form className='d-flex justify-content-end '>
                        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success h-50 w-75" type="submit">Sign In</button>
                    </form>


                </div>
            </nav>
        </div>
    )

}
export default NavbarComp