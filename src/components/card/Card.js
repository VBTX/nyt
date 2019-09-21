import React from 'react';
import './card.styles.css';

export const Card = props => {
	return (
		<div className='card-container'>
			<img alt={props.mov.headline} src={props.mov.multimedia.src} />
			<h1> {props.mov.display_title}</h1>
			<h5> {props.mov.headline}</h5>
			<a href={props.mov.link.url}>Read Full Review</a>
			<p>{props.mov.summary_short}</p>
		</div>
	);
};

// {`http://covers.openlibrary.org/b/isbn/${iSBN}-S.jpg`}

// <img alt="book cover" src={`https://pictures.abebooks.com/isbn/${iSBN}-us.jpg`}/>
