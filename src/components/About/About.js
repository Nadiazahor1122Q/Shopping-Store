import React, { Component } from 'react';
import './About.css';

export class About extends Component {
    render() {
        return (
            <>
                <div className="about-text">
                     <h2>About NIKE.</h2>
                     <p>Our mission is what drives us to do everything possible to expand human potential.<br/>
                     We do that by creating groundbreaking sport innovations, by making our products<br/>
                     more sustainably, by building a creative and diverse global team and by making<br/>
                     a positive impact in communities where we live and work.</p>

                </div>
                <img className="about" src="/images/preview.png" />
            </>




        )
    }
}

export default About


