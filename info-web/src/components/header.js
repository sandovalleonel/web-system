import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './body';
export default function header() {
    const navItems = [
        {
            name: 'Inicio',
            link: '/',
            icon: 'fas fa-home'
        },
        {
            name: 'Acerca de',
            link: '/about'
        },
        {
            name: 'Contacto',
            link: '/contact'
        }
    ];
    return (
        <Router>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top nav-aux">
        <div className="container-fluid">
            <div className="top-header d-none d-sm-flex justify-content-between align-items-center">
                <div className="contact">
                    <a href="tel:+34 654 745 234">
                        <i className="fas fa-phone"></i>
                        +34 654 745 234
                    </a>
                    < a href="sss@gmail.com">
                        <i className="fas fa-envelope"></i>
                         prueba@gmail.com
                        </a>
                    </div>
                
            </div>
            <div className="d-flex aic">
                <a className='login'>
                    <i className="fas fa-user"></i>
                     login
                </a>
                <ul className="nav social d-none d-md-flex">
                    <li>
                        <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/'>
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/'>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    </ul>

            </div>
            
        </div>
        </nav>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5 fixed-top " style={{"opacity":"0.8"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link text-light " to={item.link}><i className={item.icon}></i> {item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </Router>
    );
}