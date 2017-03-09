import Ember from 'ember';
import styles from './styles';
import jQuery from 'jquery';

export default Ember.Component.extend({
  tagName: '',

  actions: {
    scrollLeft() {
      let $items = jQuery(`.${styles.items}`);
      $items.scrollLeft(
        $items.scrollLeft() - window.innerWidth
      );

    },
    scrollRight() {
      let $items = jQuery(`.${styles.items}`);
      $items.scrollLeft(
        $items.scrollLeft() + window.innerWidth
      );
    }
  }
});
