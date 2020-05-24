import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import faker from 'faker';
import Approval from './Approval';
const App = () => {
	return (
		<div className="ui container comments">
			<Approval>
				<Comment
					author="Ayaz"
					date="Yesterday 05:47PM"
					text="Wow! nice Post man. keep it up"
					image={faker.image.avatar()}
				/>
			</Approval>
			<Approval>
				<Comment
					author="Ismail"
					date="Today 10:07AM"
					text="Lovely Article i am surprisex by the way "
					image={faker.image.avatar()}
				/>
			</Approval>
			<Approval>
				<Comment
					author="Ali"
					date="Yesterday 01:47AM"
					text="Excilent job bro. thumbs up"
					image={faker.image.avatar()}
				/>
			</Approval>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
