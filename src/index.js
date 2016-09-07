import $ from 'jquery';
import Backbone from 'backbone';
import Router from './router';

$(() => {
  new Router();
  Backbone.history.start();
});
