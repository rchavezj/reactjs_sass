import React from 'react';

import video1 from '../../../img/video.mp4';
import webm1 from '../../../img/video.webm';

import nat8 from '../../../img/nat-8.jpg';
import nat9 from '../../../img/nat-9.jpg';

import Story from '../../../components/Story/Story';

const Stories = () => {
    return (
        <section className="section-stories">
            <div className="bg-video">
                <video className="bg-video__content" autoplay muted loop>
                    <source src={video1} type="video/mp4" />
                    <source src={webm1} type="video/webm" />
                        Your browser is not supported!
                </video>
            </div>

            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>


            <Story
                name={`Mary Smith`}
                profilePic={nat8}
                caption={`I had the best week ever with my family`}
                journey={`
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                    libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                `}
            />


            <Story
                name={`Jack Wilson`}
                profilePic={nat9}
                caption={`WOW! My life is completely different now`}
                journey={`
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                    libero repellat quis consequatur
                    ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                    repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                `}
            />

            <div className="u-center-text u-margin-top-huge">
                <a href="/#" className="btn-text">Read all stories &rarr;</a>
            </div>
        </section>
    )
}

export default Stories;