$(document).ready(function(){
  $('.munchi-intro').fadeIn();
  $('#zipInput').focus();

  $('#zipInput').on('keyup', function(event){
    if (event.keyCode === 13) {
      event.preventDefault();
      alert($('#zipInput').val());
    }
  });

  $('#currentLocation').on('click', function(){

    navigator.geolocation.getCurrentPosition(function(pos) {

      alert('Latitude: '+pos.coords.latitude+', Longitude: '+pos.coords.longitude);
      console.log('Latitude: '+pos.coords.latitude+', Longitude: '+pos.coords.longitude);

    });
  });
});
