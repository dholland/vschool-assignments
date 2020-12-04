import { useContext } from 'react';
import { UglyThingsContext } from './Context';

function Form() {
	const context = useContext(UglyThingsContext);
	// console.log(context);

	return (
		<div className='form-controler'>
			<form onSubmit={context.handleSubmit}>
				<input
					onChange={context.handleChange}
					type='text'
					name='title'
					value={context.newImage.title}
					id='title'
				/>
				<input
					onChange={context.handleChange}
					type='text'
					name='description'
					value={context.newImage.description}
					id='description'
				/>
				<input
					onChange={context.handleChange}
					type='text'
					name='imgURL'
					value={context.newImage.imgURL}
					id='imgURL'
				/>
				<button type='submit'>Add Image</button>
			</form>
		</div>
	);
}
export default Form;
