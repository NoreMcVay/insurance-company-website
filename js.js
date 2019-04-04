function initMap() {
        var uluru = {lat: 51.5171568, lng: -0.08385359999999764};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
}

