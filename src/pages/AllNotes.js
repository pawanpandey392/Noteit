import { useState, useEffect } from 'react';
import Loader from './../components/Loader';

import NoteList from './../components/NoteCardList';

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

	if (isLoading) {
		return (
			<section>
				<Loader />
			</section>
		);
	}

  return (
    <section className="mt-3">
      <NoteList notes={loadedNotes} />
    </section>
  );
}

export default AllNotesPage;