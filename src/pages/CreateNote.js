// import Loader from './../components/Loader';
import CreateNote from '../components/CreateNoteForm';
import Breadcrumb from '../components/layout/Breadcrumb';

function CreateNotePage() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Breadcrumb pageTitle="Create Note" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <CreateNote />
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  
  );
}

export default CreateNotePage;