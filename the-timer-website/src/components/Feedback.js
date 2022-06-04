import React, { Component } from 'react';
import '../sass/feedback.scss';

export default class Feedback extends Component {
    render() {
        return (
            <>
                <section className='feedback-page'>
                <div className="content">
                    <header>
                        <h1>Feel free to drop us your feedback.</h1>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1457119/feedback-form-template.svg" />
                    </header>
                    <main className="feedbackForm">
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div>
                                        <form mv-multiple="feedback">
                                            <textarea className='form-control' cols="30" rows="10" placeholder="You can write the feedback"></textarea> 
                                            <button className="btn mt-3 bg-info text-white">
                                                    Send Feedback
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                </section>
            </>
        );
    }
}