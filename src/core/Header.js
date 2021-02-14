import PropTypes from "prop-types";
import Button from "./Button";
{
  /*
const Header = (props) => {
  return (
    <header>
    <h1 style={headingStyle}>{props.title}</h1> 
    </header>
  );
};
*/
}
const Header = ({ title, show, isShown }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={isShown ? "red" : "green"}
        text={isShown ? "Close" : "Add"}
        onClick={show}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "ReactJS APP",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
//CSS in JS
//const headingStyle = { color: "red", backgroundColor: "black" };

export default Header;
