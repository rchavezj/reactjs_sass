import React from 'react';

import FeatureBox from '../../../components/FeatureBox/FeatureBox';


const Features = () => {
    return (
        <section className="section-features">
            <div className="row">
                <FeatureBox title={`Explore the world`}/>
                <FeatureBox title={`Meet nature`} />
                <FeatureBox title={`Find your way`} />
                <FeatureBox title={`Live a healthier life`}/>
            </div>
        </section>
    )
}

export default Features;