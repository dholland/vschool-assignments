import React from 'react';
import BlogPost from './BlogPost';
export default function BlogList(props) {

	const blogItems = props.posts.map((post) => {
		return (
			<BlogPost
				key={post.title}
				title={post.title}
				subTitle={post.subTitle}
				author={post.author}
				date={post.date}
			/>
		);
	});

	return (
		<section className='blog__list'>
			{blogItems}
			<button>Older Posts</button>
		</section>
	);
}
