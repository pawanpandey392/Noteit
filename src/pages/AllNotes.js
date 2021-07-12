import { useState, useEffect } from 'react';

import Loader from './../components/Loader';
import NoteList from './../components/NoteCardList';
import Breadcrumb from '../components/layout/Breadcrumb';
import Scrollbar from '../components/layout/Scrollbar';

function AllNotesPage() {

	const [isLoading, setIsLoading] = useState(true);
	const [loadedNotes, setLoadedNotes] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		fetch(
			'https://reactapp-7ccf1-default-rtdb.firebaseio.com/notes.json'
		).then(response => response.json())
		.then(data => {

			const allNotes = [];

			for(const key in data) {
				const newNote = {
					id: key,
					...data[key]
				};

				allNotes.push(newNote);
			}

			setIsLoading(false);
			setLoadedNotes(allNotes);
		});
	}, [])

	let breadcrumb = (
		<div className="row">
			<div className="col-lg-12">
				<Breadcrumb pageTitle="All Notes" />
			</div>
		</div>
	);

	if (isLoading) {
		return (
			<div>
				{breadcrumb}
				<Loader />
			</div>
		);
	}

  return (
    <div>
      {breadcrumb}
      <div className="row">
        <div className="col-lg-12">
					<Scrollbar>
						<NoteList notes={loadedNotes} />
					</Scrollbar>
        </div>
      </div>
    </div>
  );
}

export default AllNotesPage;