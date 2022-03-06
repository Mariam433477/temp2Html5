
navigator.geolocation.getCurrentPosition(function(pos){
 console.log("Latitude", pos.coords.latitude); 
console.log("Longitude",pos.coords.longitude); 
var latlon = pos.coords.latitude + "," + pos.coords.longitude;
            var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+
            "&zoom=14&size=400x300&sensor=false&key=AIzaSyBtOdv0uxHI-ngslRTT6OkBE6VW3ZOC7Rw";
    
            document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";});
            