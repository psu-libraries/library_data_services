(function ($, Drupal, window, document, undefined) {
  $.get('/alerts_count', function(data) {
    $('[data-alert="count"]').append(data);
  });
  $.ajax({'url':'/high_alerts'}).
  done( function(data) {
    if ($.cookie('alert_hash') === Drupal.settings.alert_hash) {
     $('[data-alert="message-area"]').prepend(data);
     $(document).foundation('alert', 'reflow');
    }
  }).
  complete( function() {
    $('.alert').on('close.fndtn.alert', function(event) {
      $.cookie('psulib_alerts_closed', '1', { path: '/' });
    });
  });
})(jQuery, Drupal, this, this.document);

