import Breadcrumb from '../components/layout/Breadcrumb';
import Loader from './../components/Loader';

function AboutPage() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
					<Breadcrumb pageTitle="About Page" />
        </div>
      </div>
      <Loader />
    </div>
  );
}

export default AboutPage;