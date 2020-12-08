import { useContext, useEffect } from 'react';
import { UglyThingsContext } from './Context';
import UglyImage from './UglyImage';
function ImageList() {
	const context = useContext(UglyThingsContext);

	useEffect(() => {
		context.loadImages();
	}, []);

	return (
		<div className='image-list'>
			{context.uglyImages.map((item) => {
				return (
					<UglyImage
						key={item._id}
						id={item._id}
						title={item.title}
						description={item.description}
						imgUrl={item.imgUrl}
					/>
				);
			})}
		</div>
	);
}

export default ImageList;
