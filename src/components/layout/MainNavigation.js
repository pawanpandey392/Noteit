import { Link } from 'react-router-dom';

import classes from './nav.module.css';

function MainNavigation() {
  return (
    <nav 
      className="site-header sticky-top py-1" 
      style={{
        backgroundColor: 'rgba(0, 0, 0, .85)',
        backdropFilter: 'saturate(180%),blur(20px)',
        color: '#999'
      }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <Link className="py-2 d-none d-md-inline-block" to='/'>Home</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/create-note'>Create Note</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/notes'>All Notes</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/dashboard'>Dashboard</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/setting'>Settings</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/about'>About</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/about'>Cart</Link>
      </div>
    </nav>
  );
}

export default MainNavigation;