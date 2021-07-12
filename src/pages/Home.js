import Loader from './../components/Loader';
import Breadcrumb from '../components/layout/Breadcrumb';

function HomePage() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Breadcrumb pageTitle="Home" />
        </div>
      </div>
      <Loader />
    </div>
  );
}

export default HomePage;