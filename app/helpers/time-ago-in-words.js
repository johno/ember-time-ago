import Ember from 'ember';
import moment from 'vendor/moment/moment.js';

function timeAgoInWords(date) {
  return moment(date).fromNow();
}

export { timeAgoInWords };

export default Ember.Handlebars.makeBoundHelper(timeAgoInWords);
