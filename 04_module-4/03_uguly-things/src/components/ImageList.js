import { useContext } from 'react';
import { UglyThingsContext } from './Context';
import UglyImage from './UglyImage';
function ImageList() {
	const context = useContext(UglyThingsContext);

	return (
		<div>
			{context.uglyImages.map((item) => {
				return (
					<UglyImage
						key={item._id}
						id={item._id}
						title={item.title}
						description={item.description}
						imgURL={item.imgURL}
					/>
				);
			})}
		</div>
	);
}

export default ImageList;
