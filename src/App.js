import { Route, Switch } from 'react-router-dom';

// import Layout from './components/Layout.v1';
import DashboardPage from './pages/Dashboard';
import SettingPage from './pages/Setting';
import CreateNotePage from './pages/CreateNote';
import AllNotesPage from './pages/AllNotes';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        {/* <Route path="/" exact={true}><HomePage /></Route> */}
        <Route path="/" exact><HomePage /></Route>
        <Route path="/create-note"><CreateNotePage /></Route>
        <Route path="/notes"><AllNotesPage /></Route>
        <Route path="/dashboard"><DashboardPage /></Route>
        <Route path="/setting"><SettingPage /></Route>
        <Route path="/about"><AboutPage /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
