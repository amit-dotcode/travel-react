import './index.css'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={require('../../assest/img/logo-ul.png')} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mx-5 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Plane & Book</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Travel Information</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Flysmiles</a>
                            </li>
                            <li className='nav-item right_nav'>
                                <ul className='right_nav_inner'>
                                    <li>
                                        <form class="d-flex" role="search" className='search_header'>
                                            <input class="me-2" type="search" aria-label="Search" />
                                            <i className="fa fa-search" aria-hidden="true"></i>

                                        </form>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={require('../../assest/img/in_flag.png')} /> En
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">India</a></li>
                                            <li><a className="dropdown-item" href="#">Nepal</a></li>
                                            <li><a className="dropdown-item" href="#">Dubai</a></li>

                                        </ul>
                                    </li>

                                    <li className="nav-item login">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <a className="nav-link active" aria-current="page" href="#">
                                            Login
                                        </a>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Header;