import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {bars} from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <div>
        <header className="header">
            <div className="header-fixed-height"></div>
            <div className="menu-area sticky-header">
                <Container>
                    <Row>
                        <Col>
                            <div className="mobile-nav-toggler">   <FontAwesomeIcon icon={["fas", "bars"]} />
                                <div className="menu-wrap">
                                <nav className="menu-nav">
                                            <div className="logo">
                                                <a href="index.html"><img src="../assets/img/logo/logo.png" alt=""/></a>
                                            </div>
                                            <div className="navbar-wrap main-menu d-none d-lg-flex">
                                                <ul className="navigation">
                                                    <li className="active menu-item-has-children"><a href="#header" className="section-link">Home</a>
                                                        <ul className="sub-menu">
                                                            <li className="active"><a href="index.html">Home One</a></li>
                                                            <li><a href="index-2.html">Home Two</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#about" className="section-link">About us</a></li>
                                                    <li><a href="#sales" className="section-link">Sales</a></li>
                                                    <li><a href="#roadmap" className="section-link">Roadmap</a></li>
                                                    <li className="menu-item-has-children"><a href="blog.html">Blog</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog.html">Our Blog</a></li>
                                                            <li><a href="blog-details.html">Blog Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#contact" className="section-link">Contact us</a></li>
                                                </ul>
                                            </div>
                                            <div className="header-action d-none d-md-block">
                                                <ul>
                                                    <li className="header-lang"><span classNameName="selected-lang">ENG</span>
                                                        <ul className="lang-list">
                                                            <li><a href="#">IND</a></li>
                                                            <li><a href="#">BNG</a></li>
                                                            <li><a href="#">TUR</a></li>
                                                            <li><a href="#">CIN</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="header-btn"><a href="#" className="btn">Buy Now</a></li>
                                                </ul>
                                            </div>
                                        </nav>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </header>
    </div>
  )
}

export default Header

