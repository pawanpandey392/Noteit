import Noteit from './Noteit';
import Alert from './Alert';
import ColumnCard from './ColumnCard';
import DeckCard from './Deck';

function Layout() {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-4">
          <Noteit />

          <DeckCard />
          <Alert />

        </div>
        <div className="col-8">
          <ColumnCard />
        </div>
      </div>
    </div>
  );
}

export default Layout;