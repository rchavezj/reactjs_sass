import React from 'react';


const Card = ({
  title,
  numberOfDays,
  numberOfPeople,
  numberOfTourGuides,
  sleepingMethod,
  difficulty,
  price,
  cardNumber
}) => {
  return (
    <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
                <div className={`card__picture card__picture--${cardNumber}`}>&nbsp;</div>
                <h4 className="card__heading">
                    <span className={`card__heading-span card__heading-span--${cardNumber}`}>
                        {title}
                    </span>
                </h4>
                <div className="card__details">
                <ul>
                    <li>{numberOfDays} day tours</li>
                    <li>Up to {numberOfPeople} people</li>
                    <li>{numberOfTourGuides} tour guides</li>
                    <li>{sleepingMethod}</li>
                    <li>Difficulty: {difficulty}</li>
                </ul>
                </div>
            </div>

            <div className={`card__side card__side--back card__side--back-${cardNumber}`}>
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">Only</p>
                        <p className="card__price-value">${price}</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                        Book now!
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;