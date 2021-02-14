import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </div>
  );
};

export default Menu;
