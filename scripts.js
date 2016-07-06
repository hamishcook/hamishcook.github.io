 var map;

 function initMap(lat, lng) {
     if (!lat && !lng) {
         lat = 33.7729995;
         lng = -84.3657522;
     }

     var myLatLng = new google.maps.LatLng(lat, lng);

     // Create a map object and specify the DOM element for display.
     map = new google.maps.Map(document.getElementById('map'), {
         center: myLatLng,
         scrollwheel: false,
         zoom: 15
     });


     // Create a marker and set its position.
     var marker = new google.maps.Marker({
         map: map,
         position: myLatLng,
     });
 };

 $(document).ready(function() {
     $('#sub-menu li').click(function() {
         var lat;
         var lng;

         switch (this.id) {
             case "optimist":
                 lat = 33.7799065;
                 lng = -84.4108678;
                 backgroundImageClass = 'optimist-image';
                 break;
             case "mercury":
                 lat = 33.7729995;
                 lng = -84.3657522;
                 break;
         }

         // set new coordinates based on switch/case above
         var myLatLng = new google.maps.LatLng(lat, lng);
         // move map
         map.setCenter(myLatLng);
         // add new marker
         var marker = new google.maps.Marker({
             map: map,
             position: myLatLng,
         });

// change background image
         $('.main-image').addClass(backgroundImageClass);
         // $('.main-image').removeClass('optimist-image').addClass('mercury-image');
     });
 });
