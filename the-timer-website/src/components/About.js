import React, { Component } from 'react';
import '../sass/about.scss';

export default class About extends Component {
    render() {
        return (
            <>
                <section className='about-page'>
                    <section className="introduction">
                        <div className="starcontainer">
                            <h2>About Us</h2>
                            <i className="fa fa-star fa-2x"></i>
                            <hr className="star"></hr>
                        </div>
                        <p>
                            The idea for the site came about because people were often asking for advice about which watch they should buy. The more this happened — and it happened a lot — the more we realized that searching for a watch online is a minefield of information.
                            The individual brand websites are great, but there are hundreds of watch brands in Switzerland alone, so checking out each page individually would take you weeks, and that’s if you know the names of all the brands.
                            There is nowhere you can really search for all the new watches on the planet, compare models, check prices, and discover new brands all in the same place. That is, until now!
                        </p>
                    </section>

                    <section className="location">
                        <h1>The Watch Search</h1>
                        <p>
                            The Watch Pages features over 150 brands and thousands and thousands of watches (and it is growing every week). If you are a newbie to our industry, searching for a watch is as simple as finding a vacation home on Airbnb,
                            you just choose your preferences in our filters and let our search find you the perfect watch. And if you are a bit of an expert, you can have a lot of fun with our advanced filters and search watch functions and complications to your heart’s content.
                            In addition to the most advanced watch database you will find, the website also includes numerous articles to give you ideas, to help you make the right purchase and discover more about the wonders of watches.
                        </p>
                    </section>

                    <section className="location">
                        <h1>The Founders</h1>
                            <p>
                            Susanne Samuelsson and Aaron Pitts started this website over two years ago and it has been quite the journey. We really hope you enjoy exploring and researching the perfect watch for yourself or a loved one. The journey is often as fun as the purchase.
                            </p>
                    </section>
                </section>
            </>
        );
    }
}


