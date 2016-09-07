import { Model } from 'backbone';
import Page from './Page';
import Home from '../templates/Home.hbs';

export default Page.extend({

  template: Home,

  initialize() {
    this.model = new Model({ name: 'Zaza' });
  }

});
