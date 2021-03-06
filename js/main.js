// Attraverso una chiamata ajax all’Api di Boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte graﬁca.
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.


$(document).ready(function() {
  // in una variabile salvo la chiamata
	var url = 'https://flynn.boolean.careers/exercises/api/array/music';
  // console.log(url);
  // chiamata Ajax
  $.ajax({
    'url': url,
    'method': 'GET',
    'success': function(data, state) {
      console.log(data);
      console.log(state);
      // console.log(data.response);
      var music = data.response;
      console.log(music);
      printResponse(music);
    },
    'error': function(request, state, error) {
      alert('Errore' + error);
    }
  });
});

$('select').change(function() {
	var element = $(this).val();
	var url = 'https://flynn.boolean.careers/exercises/api/array/music';
	console.log(element);
	$.ajax({
		'url': url,
		'method': 'GET',
		'success': function(data) {
			var music = data.response;
			$(".cds-container").empty();
			choice(music);
		}
	});
});

// *****************FUNZIONI***************************


function choice(album){
	var element = $('select').val();
	for (var i = 0; i < album.length; i++) {
		// console.log(music[i]);
		var cds = album[i].genre;
		console.log(cds);
		if (cds == element) {
			// console.log('ho trovato');
			var source = $("#entry-template").html();
			var template = Handlebars.compile(source);
			var html = template(album[i]);
			$('.cds-container').append(html);
		}
	}
}

function printResponse(album) {
  for (var i = 0; i < album.length; i++) {
    var cd = album[i];
    // console.log(cd);
    var source = $('#entry-template').html();
    // console.log(source);
    var template = Handlebars.compile(source);
    var html = template(cd);
    // console.log(html);
    $('.cds-container').append(html);
  }
}
