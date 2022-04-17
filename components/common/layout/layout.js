import classes from './layout.module.css'
import Nav from "../nav/nav";

const Layout = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <Nav/>
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
