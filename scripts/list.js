let id;
let name;
localStorage.removeItem("locationid");
localStorage.removeItem("locationidMap");
if (localStorage.getItem("inputvalue") === null) {
  name = localStorage.getItem('searchvalue');
} else {
  name = localStorage.getItem('inputvalue');
}

var lat;
var lng;
var locations = [];
function fetchHotel(name) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '743288e5bdmshd9b12b1b20f3ccfp1607d7jsn9779c46d75d4',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  fetch(`https://travel-advisor.p.rapidapi.com/locations/search?query=${name}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);

      id = response.data[0].result_object.location_id;
      lat = Number(response.data[0].result_object.latitude);
      lng = Number(response.data[0].result_object.longitude);


      listhotel(id);
    })
    .catch(err => {

      throw err
    });
}
fetchHotel(name);

function listhotel(id) {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '743288e5bdmshd9b12b1b20f3ccfp1607d7jsn9779c46d75d4',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    let loader = document.querySelector(".loadcontainer");
    loader.style.display = 'flex';
    fetch(`https://travel-advisor.p.rapidapi.com/hotels/list?location_id=${id}&adults=1&rooms=1&nights=2&offset=0&currency=USD&order=asc&limit=30&sort=recommended&lang=en_US`, options)
      .then(response => response.json())
      .then(response => {
        loader.style.display = 'none';
        console.log(response);
        let res = response?.data;
        let contentimages = document.querySelector('#content-images')


        res.forEach((element, index) => {

          if (element.latitude !== undefined && element.location_id !== undefined) {
            locations.push({ lat: element.latitude, lng: element.longitude, locid: element.location_id, hname: element.name })

          }

          let str = ` <div class="hotel-images "><a  onclick="locationId(${element?.location_id})" href="#"><img
                    src="${element?.photo?.images?.original?.url}"></a>
          <a href="#" onclick="locationId(${element?.location_id})">
                <h3 id='hname'>${element?.name}</h3>
            </a>
            <a href="#" onclick="locationId(${element?.location_id})">
            <span>${element?.rating}.</span><i class="fa fa-star checked"></i>
               
            </a>
            <a  href="#" onclick="locationId(${element?.location_id})">
                <p>${element?.location_string}
               </>
            </a>
           
        </div>`
          contentimages.innerHTML += str;

          initMap();
        });

      }
      )

  } catch (error) {
    loader.style.display = 'none';
    console.log(error);
  }
}

function locationId(id) {
  localStorage.setItem("locationid", id);
  window.location.replace(`/detail.html`);
}






////////////////////////////////showng the list oh hotel on map/////////////////////////////////////////////////

let ID;
let infoWindow;
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: lat, lng: lng },
  })

  var infowindow = new google.maps.InfoWindow({
    content: ''
  });

  for (i = 0; i < locations.length; i++) {
    size = 15;
    var img = new google.maps.MarkerImage('marker.png',
      new google.maps.Size(size, size),
      new google.maps.Point(0, 0),
      new google.maps.Point(size / 2, size / 2)
    );

    var marker = new google.maps.Marker({
      map: map,
      title: locations[i].title,
      position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
      id: locations[i].locid,
      hname: locations[i].hname
    });

    bindInfoWindow(marker, map, infowindow, "<p  onclick='locationid(event)'>book </p>" + "<span style='visibility:hidden'>" + locations[i].locid + "</span>" + "<p>" + locations[i].hname + "</p>");

  }

}

function bindInfoWindow(marker, map, infowindow, html, Ltitle) {
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.setContent(html);
    infowindow.open(map, marker);
  });

}
function locationid(e) {
  console.log(e);
  localStorage.setItem("locationidMap", e?.target?.nextSibling?.innerHTML);
  window.location.replace(`/detail.html`);
}