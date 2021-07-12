import Loader from './../components/Loader';
import Breadcrumb from '../components/layout/Breadcrumb';

function SettingPage() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Breadcrumb pageTitle="Settings Page"/>
        </div>
      </div>
      <Loader />
    </div>
  );
}

export default SettingPage;