// Attraverso una chiamata ajax all’Api di Boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte graﬁca.
// Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.


$(document).ready(function() {
  // in una variabile salvo la chiamata
	var url = 'https://flynn.boolean.careers/exercises/api/array/music';
  console.log(url);
  $.ajax({
    'url': url,
  })

});
