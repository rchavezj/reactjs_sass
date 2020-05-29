import React from 'react';

import nat1 from '../../../img/nat-1.jpg';
import nat1Large from '../../../img/nat-1-large.jpg';
import nat2 from '../../../img/nat-2-large.jpg';
import nat2Large from '../../../img/nat-2-large.jpg';
import nat3 from '../../../img/nat-3.jpg';
import nat3Large from '../../../img/nat-3-large.jpg';

import CompositionImg from '../../../components/Composition/Composition';

import Button from '../../../components/Buttons/Buttons';

const About = () => {
    return (
        <section className="section-about">


            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </div>



            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum
                        nam.
                    </p>
                    <Button
                        hrefLink={`/#`}
                        additionalCssClass={`btn-text`}
                        caption={`Learn more`}
                    />&rarr;


                </div>

                <div className="col-1-of-2">
                    <div className="composition">

                        <CompositionImg nat={nat1} natLarge={nat1Large} classNum={`composition__photo--p1`} />
                        <CompositionImg nat={nat2} natLarge={nat2Large} classNum={`composition__photo--p2`} />
                        <CompositionImg nat={nat3} natLarge={nat3Large} classNum={`composition__photo--p3`} />

                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;