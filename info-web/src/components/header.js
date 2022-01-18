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
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link text-dark " to={item.link}><i className={item.icon}></i> {item.name}</Link>
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