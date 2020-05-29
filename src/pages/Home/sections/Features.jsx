import React from 'react';

import FeatureBox from '../../../components/FeatureBox/FeatureBox';


const Features = () => {
    return (
        <section className="section-features">
            <div className="row">
                <FeatureBox
                    title={`Explore the world`}
                    journey={`
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
                    }
                />
                <FeatureBox
                    title={`Meet nature`}
                    journey={`
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
                    }
                />
                <FeatureBox
                    title={`Find your way`}
                    journey={`
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
                    }
                />
                <FeatureBox
                    title={`Live a healthier life`}
                    journey={`
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Aperiam, ipsum sapiente aspernatur.`
                    }
                />
            </div>
        </section>
    )
}

export default Features;