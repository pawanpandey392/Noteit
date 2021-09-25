import Loader from './../components/Loader';
import Breadcrumb from '../components/layout/Breadcrumb';

import {Warning, Success, Danger} from './../components/Alert';

function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Breadcrumb pageTitle="Home" />
        </div>
      </div>
      <Warning />
      <Success />
      <Danger />
      {/* <Loader /> */}
    </div>
  );
}

export default HomePage;