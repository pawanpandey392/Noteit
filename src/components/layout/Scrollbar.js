import classes from './Scrollbar.module.css';

function Scrollbar(props) {
  return (
    <div className={classes.scrollbar}>
      <div className={classes.overflow}>
        {props.children}
      </div>
    </div>
  );
}

export default Scrollbar;
