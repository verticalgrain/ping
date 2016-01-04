app.nearbus = (function($){
  'use strict';

  function init(){
    nearbus();
  }

  function nearbus() {
  	$('.button').click(function(e){
  		e.preventDefault();
  		console.log('test');
  	  	var href = $(this).attr('data-href');
  	  	$.ajax({
  	       url: href,
  	       dataType: 'jsonp',
  	       type: "POST",//type of posting the data
  	       success: function (data) {
  	         console.log('success');
  	       },
  	       error: function(xhr, ajaxOptions, thrownError){
  	          console.log('error');
  	       },
  	       timeout : 15000//timeout of the ajax call
  	  	});
 	});
  }

  /* Document ready
  /* + + + + + + + + + + + + + + + + + + + + + + + + + + + */

  $(document).on('ready', init);

})(jQuery);
