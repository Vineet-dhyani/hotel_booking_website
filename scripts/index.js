
function clear() {
    localStorage.removeItem('lat');
    localStorage.removeItem('lng');
    localStorage.removeItem('lat1');
    localStorage.removeItem('lng1');
    localStorage.removeItem('searchvalue');
    localStorage.removeItem("inputvalue");
    localStorage.removeItem("locationid");
    localStorage.removeItem("locationidMap");
}
clear();
const ViewMoreBtn = document.querySelector("#viewmore");
const collapseImgclass = document.querySelectorAll(".collapse");
let city = document.getElementById('city');

isclick = true;
function toggleimages(e) {
    collapseImgclass.forEach(image => {
        image.classList.toggle('collapse');

    })
    if (isclick) {
        e.target.innerText = "View Less"
        isclick = false;
    }
    else {
        e.target.innerText = "View More";
        isclick = true;
    }

}




google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

    var input = document.getElementById('city');

    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();

        let lat = place.geometry['location'].lat();

        let lng = place.geometry['location'].lng();
        console.log(lat + ":" + lng);
        localStorage.setItem("lat", lat);
        localStorage.setItem("lng", lng);
        let myStr = input.value;
        let Word = myStr.split(" ")[0]
        Word = Word.slice(0, -1);
        localStorage.setItem("inputvalue", Word);
        window.location.replace(`/list.html?city=${Word}`);

    });
}

// const input = document.querySelector('#city');

// input.addEventListener("change", updateValue);






function find(name) {
    try {
        localStorage.setItem("searchvalue", name);

        window.location.replace(`/list.html?city=${name}`);

    } catch (error) {
        console.log(error);
    }
}


