function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.0902, lng: -95.7129 }, // Coordinates for the center of the United States
        zoom: 4, // Adjust the zoom level as needed
        mapTypeId: google.maps.MapTypeId.TERRAIN // You can change the map type if desired
    });

    // Add any additional map configurations or markers here
}
