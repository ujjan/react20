import React from 'react';

const Comment = (props) => {
	return (
		<div className="comment">
			<a href="" className="avatar">
				<img src={props.image} alt="avatar" />
			</a>
			<div className="content">
				<a href="" className="author">
					{props.author}
				</a>
				<div className="metadata">
					<span className="date">{props.date}</span>
				</div>
				<div className="text">{props.text}</div>
			</div>
		</div>
	);
};
export default Comment;
