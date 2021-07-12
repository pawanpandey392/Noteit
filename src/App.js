import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Layout from './components/Layout.v1';
import PinnedNotesPage from './pages/PinnedNotes';
import SettingPage from './pages/Setting';
import CreateNotePage from './pages/CreateNote';
import AllNotesPage from './pages/AllNotes';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

import Layout from './components/layout/Layout';

function App() {

  // This effect runs once, after the first render
  useEffect(() => {
    document.title = "Noteit | Home"
  }, []);

  return (
    <Layout>
      <Switch>
        {/* <Route path="/" exact={true}><HomePage /></Route> */}
        <Route path="/" exact><HomePage /></Route>
        <Route path="/create-note"><CreateNotePage /></Route>
        <Route path="/all-notes"><AllNotesPage /></Route>
        <Route path="/pinned-notes"><PinnedNotesPage /></Route>
        <Route path="/settings"><SettingPage /></Route>
        <Route path="/about"><AboutPage /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
