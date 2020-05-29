import React from 'react';

import Card from '../../../components/Card/Card';
import Button from '../../../components/Buttons/Buttons';

const Tours = () => {
    return (
        <section className="section-tours" id="section-tours">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most popular tours
                </h2>
            </div>

            <div className="row">
                <Card
                    title={`The Sea Explorer`}
                    numberOfDays={3}
                    numberOfPeople={30}
                    numberOfTourGuides={2}
                    sleepingMethod={`Sleep in cozy hotels`}
                    difficulty={`easy`}
                    price={297}
                    cardNumber={1}
                />
                <Card
                    title={`The Forest Hiker`}
                    numberOfDays={7}
                    numberOfPeople={40}
                    numberOfTourGuides={6}
                    sleepingMethod={`Sleep in provided tents`}
                    difficulty={`medium`}
                    price={497}
                    cardNumber={2}
                />
                <Card
                    title={`The Snow Adventurer`}
                    numberOfDays={5}
                    numberOfPeople={15}
                    numberOfTourGuides={3}
                    sleepingMethod={`Sleep in provided tents`}
                    difficulty={`hard`}
                    price={897}
                    cardNumber={3}
                />
            </div>

            <div className="u-center-text u-margin-top-huge">
                <Button
                    hrefLink={`/#`}
                    additionalCssClass={`btn--text`}
                    caption={`Discover all tours`}
                />&rarr;


            </div>
        </section>
    )
}

export default Tours;