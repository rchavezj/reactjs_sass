import React from 'react';

const Story = ({
    name, profilePic, caption, journey
}) => {
    return (
        <div className="row">
            <div className="story">
                <figure className="story__shape">
                    <img src={profilePic} alt="Person on a tour" className="story__img" />
                    <figcaption className="story__caption">{name}</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">{caption}</h3>
                    <p>{journey}</p>
                </div>
            </div>
        </div>
    )
}

export default Story