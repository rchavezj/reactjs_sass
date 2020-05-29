import React from 'react';

const FeatureBox = ({title}) => {
    return (
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon icon-basic-world"></i>
          <h3 className="heading-tertiary u-margin-bottom-small">
            {title}
          </h3>
          <p className="feature-box__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
      </div>
    );
}

export default FeatureBox;