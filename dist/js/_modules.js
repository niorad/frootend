'use strict';
// Initialize Globals
var app = app || {};
app.components = {};
// This is where all the self-made modules are inserted by Froot
app.components.accordion = (function() {
  var base = {};
  var init = function($baseElement) {
    console.log('Initializing Accordion on ', $baseElement);
    base.$element = $baseElement;
    base.settings = base.$element.data('componentSettings');
    bindToggleButtons();
  };
  var bindToggleButtons = function() {
    base.$element.find('[data-accordion-toggler]').click(function() {
      $(this)
        .closest('[data-accordion-item-container]')
        .find('[data-accordion-content]')
        .slideToggle();
    });
  };
  return {
    init: init
  };
})();
var $components = $('[data-component]');
$(function() {
  $components.each(function() {
    app.components[$(this).data('component')].init($(this));
  });
});
