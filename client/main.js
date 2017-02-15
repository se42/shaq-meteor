/* global document */

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';
import { $ } from 'meteor/jquery';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('app'));
});

$().ready(() => {
    $(".button-collapse").sideNav();
})
