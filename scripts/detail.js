let locationid;
if (localStorage.getItem("locationid") == null) {
        locationid = localStorage.getItem('locationidMap');
} else {
        locationid = localStorage.getItem('locationid');
}


function calculate(e) {
        try {

                const adults = document.getElementById('adults');
                const fromdate = document.getElementById("fromdate");
                const todate = document.getElementById("todate");
                const total = document.getElementById("total");
                const formname = document.getElementById('name');
                let date = new Date();
                let fromDate = new Date(fromdate.value);
                let toDate = new Date(todate.value);

                if ((fromDate.getTime() - date.getTime()) < 0) throw Error("from is pastdate");
                if ((toDate.getTime() - fromDate.getTime()) < 0) throw Error("todate is pastdate");

                let newdate = ((toDate.getTime() - fromDate.getTime()) / (86400000));
                total.value = newdate * adults.value * 1000;


        } catch (error) {

                total.value = 0;
                console.log(error);
        }
}



function hoteldetails(id) {

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var checkin = yyyy + '-' + mm + '-' + dd;
        const options = {
                method: 'GET',
                headers: {
                        'X-RapidAPI-Key': '743288e5bdmshd9b12b1b20f3ccfp1607d7jsn9779c46d75d4',
                        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
        };
        let loader = document.querySelector(".loadcontainer");
        console.log(loader);
        loader.style.display = 'flex';
        fetch(`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${locationid}&checkin=${checkin}&adults=1&lang=en_US&currency=USD&nights=2`, options)
                .then(response => response.json())
                .then(response => {
                        console.log(response);
                        loader.style.display = 'none';
                        let hotelname = document.querySelector('#hotelname');
                        let amenities = document.querySelector('#amenities');
                        let cityname = document.querySelector('#cityname');
                        let description = document.querySelector('#descpara');
                        let address = `${response.data[0].location_string}`;
                        description.innerHTML = `${response.data[0].description}`
                        cityname.innerHTML = `${response.data[0].parent_display_name}`
                        hotelname.innerHTML = `${response.data[0].name}`;
                        let amen = response.data[0].amenities;
                        amen.forEach((element) => {

                                let str = `<li>${element.key}</li>`;
                                amenities.innerHTML += str;
                        })
                        let res = response?.data[0]?.photo?.images;

                        let images = document.querySelector(".carousel-inner");
                        let str = `<div class="carousel-item active position-static">
                               <img src="${res?.large?.url}" alt="" width="500" height="350">
                                </div>
                                `

                        images.innerHTML = str;



                })
                .catch(err => {
                        console.error(err);
                        loader.style.display = 'none';
                        let str1;
                        images = document.querySelector(".carousel-inner");
                        str1 = `<div class="carousel-item active position-static">
            <img src="https://media-cdn.tripadvisor.com/media/photo-w/17/b3/09/b4/by-the-poolside.jpg" alt="" width="500" height="350">
          </div>
          <div class="carousel-item position-static">
            <img src="https://media-cdn.tripadvisor.com/media/photo-o/01/fa/51/70/r-the-spa.jpg" alt="" width="500" height="350">
          </div>
          <div class="carousel-item position-static">
            <img src="https://media-cdn.tripadvisor.com/media/photo-w/0e/b2/64/3f/radisson-blu-plaza-delhi.jpg" alt="" width="500" height="350">
          </div>`
                        images.innerHTML += str1;

                        let amenities = document.querySelector('#amenities');
                        let str = `   <li>Room service</li>
                                  <li>Restaurat</li>
                                  <li>Business center</li>
                                  <li>Fitness center</li>
                                  <li>Pool</li>`
                        amenities.innerHTML += str;



                })

}
hoteldetails(locationid);