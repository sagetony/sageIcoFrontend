// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import Nav from 'react-bootstrap/Nav';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header({logo}) {
  return (
    <div>
        <header className="header">
            <div className="header-fixed-height"></div>
            <div className="menu-area sticky-header">
            <div className="container custom-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                            <div className="menu-wrap">
                                <nav className="menu-nav">
                                    <div className="logo">
                                        <a href="/"><img src={logo} alt="" /></a>
                                    </div>
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className="active menu-item-has-children"><a href="#header" className="section-link">Home</a>
                                               
                                            </li>
                                            <li><a href="#about" className="section-link">About us</a></li>
                                            <li><a href="#sales" className="section-link">Sales</a></li>
                                            <li><a href="#roadmap" className="section-link">Roadmap</a></li>
                                            <li><a href="#contact" className="section-link">Contact us</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-action d-none d-md-block">
                                        <ul>
                                           
                                            <li className="header-btn"><a href="#connect" className="btn">Connect Wallet</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="mobile-menu">
                                <nav className="menu-box">
                                    <div className="close-btn"><i className="fas fa-times"></i></div>
                                    <div className="nav-logo"><a href="/"><img src={logo} alt="Logo" title="" /></a>
                                    </div>
                                    <div className="menu-outer">
                                    </div>
                                    <div className="social-links">
                                        <ul className="clearfix">
                                            <li><a href="#facebook"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#twitter"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#instagram"><i className="fab fa-instagram"></i></a></li>
                                            <li><a href="#linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                            <li><a href="#youtube"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="menu-backdrop"></div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    </div>
  )
}

export default Header

