import React, { Component } from 'react';
import { Link } from 'react-router';
import NavMenu from '../components/NavMenu.jsx';

export default class PublicPage extends Component {
    render() {
        return (
            <div>
                <NavMenu isLoggedIntoApp={false} />
                <div className="container public-page">
                    <div className="section public-page-header">
                        <h1>S.H.A.Q.</h1>
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <h6>Simple Hosted Application for Quality Control</h6>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <p>
                            SHAQ is currently a learning/portfolio project of mine
                            intended to showcase my full stack web development
                            skills.  The project was inspired by an idea my
                            brother in law had for a simple application that
                            could be used to facilitate communication between
                            the factory and remote quality engineers in the auto
                            industry.  A simple web app such as SHAQ would
                            replace a fragile web of image directories, Excel
                            sheets, emails, and human procedures/protocols.
                        </p>
                        <p>
                            SHAQ has been an integral part of my web development
                            learning experience.  I first deployed SHAQ as a
                            Heroku application using Django, then deployed that
                            same Django application to an Ubuntu server on
                            DigitalOcean, and finally I have deployed this
                            version to another Ubuntu server on DigitalOcean,
                            with this version written in JavaScript using
                            Meteor and React.
                        </p>
                    </div>
                    <div className="public-page-section-header">
                        <h3>Purpose Of The App</h3>
                    </div>
                    <div className="section">
                        <p>
                            SHAQ is an attempt at bringing both agility and
                            stability to a process that currently relies
                            on large, monolithic ERP systems coupled with
                            fragile human processes involving office
                            mainstays such as Excel and email.  Everyone is
                            familiar with this problem&mdash;the big software
                            applications can't quite be wrangled into doing
                            what you want them to do, but processes involving
                            Excel and email are time consuming and error prone,
                            and all of that data ends up effectively dead as
                            it is not stored in an accessible format.
                        </p>
                        <p>
                            Inspired by the UNIX philosophy of writing modular,
                            interchangeable programs that do one thing well,
                            SHAQ attempts to plug a hole in large-scale busines
                            processes by providing an application that takes
                            the place of those webs of Excel sheets and emails.
                            By staying small and focusing on a specific and
                            already well-understood process, small applications
                            like SHAQ could provide cost-effective solutions
                            to the unique challenges teams face in large
                            organizations, without requiring large expenditures
                            and without tying an organization to a particular
                            piece of software simply to justify the expense.
                        </p>
                    </div>
                    <div className="public-page-section-header">
                        <h3>Technologies Used</h3>
                    </div>
                    <div className="section">
                        <p>
                            SHAQ is a full stack project involoving numerous
                            technologies ranging from Nginx servers on Ubuntu
                            machines to lots of JavaScript and through to Sass
                            for styling, but these tools in particular give
                            SHAQ it's unique look, feel, and capabilities:
                        </p>
                        <div className="row">
                            <div className="col s12 m6 l4">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator meteor-logo technology-img"
                                            src="/img/meteor-logo.svg" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator">
                                            Meteor
                                            <i className="material-icons right">info</i>
                                        </span>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title">
                                            Meteor
                                            <i className="material-icons right">close</i>
                                        </span>
                                        <p>
                                            Meteor is a full-stack JavaScript
                                            platform for developing modern web
                                            and mobile applications
                                        </p>
                                        <a href="https://www.meteor.com/"
                                            target="_blank">
                                            Check It Out
                                        </a>
                                        <p className="logo-credits">
                                            * Logo property of <a href="https://www.meteor.com/company"
                                            target="_blank">MDG</a> and provided
                                            <a href="http://logo.meteorapp.com/" target="_blank"> here</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m6 l4">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator react-logo technology-img"
                                            src="/img/react-logo.svg" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator">
                                            React
                                            <i className="material-icons right">info</i>
                                        </span>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title">
                                            React
                                            <i className="material-icons right">close</i>
                                        </span>
                                        <p>
                                            A JavaScript Library for building
                                            user interfaces
                                        </p>
                                        <a href="https://facebook.github.io/react/"
                                            target="_blank">
                                            Check It Out
                                        </a>
                                        <p className="logo-credits">
                                            * Logo property of <a href="https://facebook.github.io/react/"
                                            target="_blank">Facebook</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col s12 m6 l4">
                                <div className="card">
                                    <div className="card-image materialize-logo-container waves-effect waves-block waves-light">
                                        <img id="materialize-logo" className="activator"
                                            src="/img/materialize-logo.png" />
                                    </div>
                                    <div className="card-content">
                                        <span className="card-title activator">
                                            Materialize CSS
                                            <i className="material-icons right">info</i>
                                        </span>
                                    </div>
                                    <div className="card-reveal">
                                        <span className="card-title">
                                            Materialize CSS
                                            <i className="material-icons right">close</i>
                                        </span>
                                        <p>
                                            A modern responsive front-end
                                            framework based on Material Design
                                        </p>
                                        <a href="http://materializecss.com/"
                                            target="_blank">
                                            Check It Out
                                        </a>
                                        <p className="logo-credits">
                                            * Logo property of <a href="http://materializecss.com/"
                                            target="_blank">Materialize</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="public-page-section-header">
                        <h3>Lessons Learned</h3>
                    </div>
                    <div className="section">
                        <p>
                            Implementing SHAQ for the third time (Django on Heroku,
                            Django on Ubuntu, and now Meteor + React on Ubuntu)
                            has been an interesting learning experience.  Here
                            are a few lessons learned during this process and
                            in particular during this specific implementation:
                        </p>
                        <h5>Meteor Is Incredible</h5>
                        <p>
                            Meteor is an awesome platform that enables one humble
                            full stack developer to approach wizard-like capabilities
                            if you are willing to study the platform.  Just kidding.
                            Sort of.
                        </p>
                        <h5>React Is Worth The Effort</h5>
                        <p>
                            React is a bit on the mind-bending side of things
                            when you first start, but the one-way data binding
                            and unidirectional flow of data quickly start to
                            make sense, and the result is that you find yourself
                            working with a tool that truly encourages good
                            software design.  In my limited experience, JavaScript
                            has traditionally allowed something of a wild west
                            approach where almost anything will "work" as everything
                            is just lumped together.  But as we are taught in
                            <a href="https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X"
                            target="_blank"> The Pragmatic Programmer</a>, this
                            programming by coincidence is a bad habit.  React
                            strongly encourages us to really think through our
                            design, and rewards that effort with the high cohesion
                            and low coupling between components that we are
                            taught to pursue in our designs.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
