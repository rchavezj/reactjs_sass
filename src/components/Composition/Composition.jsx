import React from 'react';

const CompositionImg = ({ nat, natLarge, classNum }) => {
    return (
        <img srcSet={`${nat} 300w, ${natLarge} 1000w`}
            sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="/#"
            className={`composition__photo ${classNum}`} src={nat} />
    )
}

export default CompositionImg;