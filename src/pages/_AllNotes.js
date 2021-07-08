import NoteList from '../components/NoteCardList'

const DUMMY_DATA = [
	{
		id: 4121003879,
		title: 'Soulmine Turbulance',
		description: 'This is Soulmine Turbulance. Which is very rare and can be found in rural areas of india. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.',
		image: 'http://via.placeholder.com/100',
	},
	{
		id: 4121003880,
		title: 'FeelFree Rapid Gamer',
		description: 'This is FeelFree Rapid Gamer. Which is very rare and can be found in rural areas of india. when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
		image: 'http://via.placeholder.com/100',
	},
	{
		id: 4121003881,
		title: 'Wheatable Calcium',
		description: 'This is Wheatable Calcium. Which is very rare and can be found in rural areas of india. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages',
		image: 'http://via.placeholder.com/100',
	},
	{
		id: 4121003882,
		title: 'Collesce Mailform',
		description: 'This is Collesce Mailform. Which is very rare and can be found in rural areas of india. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		image: 'http://via.placeholder.com/100',
	},
	{
		id: 4121003883,
		title: 'BriteMatch Calcy',
		description: 'This is BriteMatch Calcy. Which is very rare and can be found in rural areas of india. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
		image: 'http://via.placeholder.com/100',
	},
	{
		id: 4121003884,
		title: 'GroomSire Calcy',
		description: 'This is Soulmine Turbulance. Which is very rare and can be found in rural areas of india. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
		image: 'http://via.placeholder.com/100',
	}
];

function AllNotesPage() {
  return (
    <section>
      <div>All Notes Page.</div>
      <NoteList notes={DUMMY_DATA} />
    </section>
  );
}

export default AllNotesPage;