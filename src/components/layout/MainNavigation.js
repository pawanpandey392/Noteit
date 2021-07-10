import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import PinnedNotesContext from '../../store/pinned-notes-context';

function MainNavigation() {

  const pinNoteCtx = useContext(PinnedNotesContext);

  return (
    <nav className={`site-header sticky-top py-1 ${classes.siteHeader}`}>
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <Link className="py-2 d-none d-md-inline-block" to='/'>Home</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/create-note'>Create Note</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/notes'>All Notes</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/pinned-notes'>
          Pinned Notes <span className="badge badge-secondary">{pinNoteCtx.totalPinnedNotes}</span>
        </Link>
        <Link className="py-2 d-none d-md-inline-block" to='/setting'>Settings</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/about'>About</Link>
        <Link className="py-2 d-none d-md-inline-block" to='/about'>Cart</Link>
      </div>
    </nav>
  );
}

export default MainNavigation;