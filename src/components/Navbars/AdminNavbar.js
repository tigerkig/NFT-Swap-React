import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledTooltip,
} from "reactstrap";
import { checkPropTypes } from "prop-types";
import { Link, useLocation } from "react-router-dom";

const AdminNavbar = (props) => {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [modalSearch, setModalSearch] = React.useState(false);
  const [color, setColor] = React.useState("navbar-transparent");
  const location = useLocation();
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setColor("bg-white");
    } else {
      setColor("navbar-transparent");
    }
  };
  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    if (collapseOpen) {
      setColor("navbar-transparent");
    } else {
      setColor("bg-white");
    }
    setCollapseOpen(!collapseOpen);
  };

  return (
    <>
      <Navbar
        className={classNames("navbar-absolute", {
          [color]: props.location.pathname.indexOf("full-screen-map") === -1,
        })}
        expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>    
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
            {props.routes.map((item, index) => (
              item.type && (
                <InputGroup className="search-bar" key={index}>
                  <Link to={item.path} color="link" id={'tooltip_' + index} className={window.location.pathname == item.path ? 'navbarActive' : ''}>
                    {item.icon}
                    <span className="d-md-block">{item.name}</span>
                  </Link>
                  {/* <UncontrolledTooltip
                    delay={0}
                    target={'tooltip_' + index}
                    placement="bottom" key={index}>
                    {item.name}
                  </UncontrolledTooltip> */}
                </InputGroup>)
                
              ))}
              <li className="separator d-lg-none" />
            </Nav>
          </Collapse>     
        </Container>
      </Navbar>

    </>
  );
};

const mapStateToProps = (state) => {
  const { LoginReducer } = state;
  return { credential: LoginReducer };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      LogOutSuccess: global.Actions.LoginAction.LogOutSuccess,
      LoginSuccess: global.Actions.LoginAction.LoginSuccess
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbar);