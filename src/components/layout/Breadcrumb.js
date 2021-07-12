import classes from './Breadcrumb.module.css';

function Breadcrumb(props) {
  return (
    <div className={classes.breadCrumb}>
      <strong>Noteit | </strong> {props.pageTitle}
    </div>
  );
}

export default Breadcrumb;