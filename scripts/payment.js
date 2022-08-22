let name;
let adults;
let fromdate;
let todate;
let total;
let night;
let PayNowbtn;

window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    name = params.get('name');
    adults = params.get('adults');
    fromdate = params.get('fromdate');
    todate = params.get('todate');
    total = params.get('total');
    night = (parseInt(todate.slice(-2)) - parseInt(fromdate.slice(-2)))


})




let locationid;
if (localStorage.getItem("locationidMap") === null) {
    locationid = localStorage.getItem('locationid');
  } else {
    locationid = localStorage.getItem('locationidMap');
  }
localStorage.getItem("locationid");
function paymentdetails(id) {
try {
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
    
    loader.style.display = 'flex';
    fetch(`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${locationid}&checkin=${checkin}&adults=1&lang=en_US&currency=USD&nights=2`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            loader.style.display = 'none';
            let content = document.querySelector('.content');

            let str = `
                    <div class="hotel-images">
                        <a href="./payment.html">
                            <img src=${response?.data[0]?.photo?.images?.medium?.url}>
                        </a>
                        <article>
                             <h3>${response.data[0].name}</h3>
                            <h3>${response.data[0].location_string}</h3>
                        </article>
                    </div>
                    <div id="payment-details">
                        <article>
                            <div id="customer-info">
                                <p><b>Name:</b><span>${name}</span></p>
                                <p><b>Number of Adults:</b><span>${adults}</span></p>
                                <p><b>Check-in Date:</b><span>${fromdate}</span></p>
                                <p><b>Check-out Date:</b><span>${todate}</span></p>
                            </div>
                        </article>
                        <article>
                            <div id="pay-detail">
                                <p><b>Tariff Breakdown:</b><span>Rs.1000 x ${adults} Adults x ${night} Nights</span></p>
                                <p><b>Total Amount:</b><span>Rs. ${total}</span></p>
                            </div>
                        </article>
                        <article>
                            <button class="btn btn-large btn-success" id="paynowbutton"  >Pay Now</button>
                        </article>
                    </div>
                `
            content.innerHTML += str;

            PayNowbtn = document.querySelector("#paynowbutton");
            PayNowbtn.disabled = true;

        })
} catch (error) {
    console.error(err);
    let content = document.querySelector('.content');
     let STR=` <div class="hotel-images">
     <a href="./payment.html">
         <img src="https://media-cdn.tripadvisor.com/media/photo-w/17/b3/09/b4/by-the-poolside.jpg">
     </a>
     <article>
         <h3>Radisson Blu Hotel</h3>
         <p>#38 of 1,289 hotels in New Delhi</p>
         <p>National HighWay 8,New Delhi 110017 India</p>
     </article>
 </div>
 <div id="payment-details">
     <article>
         <div id="customer-info">
             <p><b>Name:</b><span>John Doe</span></p>
             <p><b>Number of Adults:</b><span>2</span></p>
             <p><b>Check-in Date:</b><span>06/06/2020</span></p>
             <p><b>Check-out Date:</b><span>08/06/2020</span></p>
         </div>
     </article>
     <article>
         <div id="pay-detail">
             <p><b>Tariff Breakdown:</b><span>Rs.1000 x 2 Adults x 5 Nights</span></p>
             <p><b>Total Amount:</b><span>Rs. 10000</span></p>
         </div>
     </article>
     <article>
         <button class="btn btn-large btn-success" id="button"  onclick="window.location.href='./payment.html'" disabled>Pay Now</button>
     </article>
 </div>
`
content.innerHTML += STR;
    loader.style.display = 'none';
}
}
paymentdetails(locationid);




let modallogin = document.getElementById('modallogin');


modallogin.addEventListener('click', () => {

    PayNowbtn.disabled = false
    PayNowbtn.addEventListener('click', () => {

        alert("Hi your booking is successfull !!")
    })
})
logoutbtn.addEventListener('click', () => {
    PayNowbtn.disabled = true;
})