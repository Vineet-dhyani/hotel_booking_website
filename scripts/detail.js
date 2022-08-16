
let id=localStorage.getItem("id");

console.log(id);

function calculate(e){
        try {
           
                    const adults=document.getElementById('adults');
                    const fromdate= document.getElementById("fromdate");
                    const todate=document.getElementById("todate");
                    const  total=document.getElementById("total");
                    const  formname=document.getElementById('name');
                    let date=new Date();
                    let  fromDate=new Date(fromdate.value);
                    let toDate=new Date(todate.value);

                    if((fromDate.getTime()-date.getTime())<0)throw Error("from is pastdate");
                    if((toDate.getTime()-fromDate.getTime())<0) throw Error("todate is pastdate");
                    
                    let newdate=((toDate.getTime()-fromDate.getTime())/(86400000));
                    total.value=newdate*adults.value*1000;  
                
                        
        } catch (error) {
            console.log(id);
            total.value=0;
            console.log(error);  
       }
 }
 

 
function hotelimages(id){
    
  
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '743288e5bdmshd9b12b1b20f3ccfp1607d7jsn9779c46d75d4',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
     fetch(`https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=${id}`, options)
        .then(response => response.json())
        .then((response )=>{
            
            res=response.hotelImages;
            for (let index = 0; index <7; index++) {
                const element = res[index];
                let link=element.baseUrl;
                imageslink=link.replace('_{size}','');
                let images=document.querySelector(".carousel-inner");
                let str=`<div class="carousel-item active position-static">
                       <img src="${imageslink}" alt="" width="500" height="350">
                        </div>
                        `
                  console.log(imageslink);
                images.innerHTML=str;
              
                
            }
            })

         
           
        .catch((err) =>{

            images=document.querySelector(".carousel-inner");
           str1= `<div class="carousel-item active position-static">
            <img src="https://media-cdn.tripadvisor.com/media/photo-w/17/b3/09/b4/by-the-poolside.jpg" alt="" width="500" height="350">
          </div>
          <div class="carousel-item position-static">
            <img src="https://media-cdn.tripadvisor.com/media/photo-o/01/fa/51/70/r-the-spa.jpg" alt="" width="500" height="350">
          </div>
          <div class="carousel-item position-static">
            <img src="https://media-cdn.tripadvisor.com/media/photo-w/0e/b2/64/3f/radisson-blu-plaza-delhi.jpg" alt="" width="500" height="350">
          </div>`
          images.innerHTML+=str1;
            console.error(err)
           }
            );
       
}
 
hotelimages(id);
   

function hoteldetail(id){
    localStorage.removeItem("id");
   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '743288e5bdmshd9b12b1b20f3ccfp1607d7jsn9779c46d75d4',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
    
    fetch(`https://hotels4.p.rapidapi.com/properties/get-details?id=${id}&checkIn=2020-01-08&checkOut=2020-01-15&adults1=1&currency=USD&locale=en_US`, options)
        .then(response => response.json())
        .then((response )=> {
            let hotelname=document.querySelector('#hotelname');
            let  amenities=document.querySelector('#amenities');
            let cityname=document.querySelector('#cityname');
            let description=document.querySelector('#descpara');
            let address=`${response.data.body.propertyDescription.address.fullAddress}`;
            localStorage.setItem('address',address);
            description.innerHTML=`${response.data.body.atAGlance.keyFacts.specialCheckInInstructions[0]}`
            cityname.innerHTML=`${response.data.body.propertyDescription.address.provinceName}`
            hotelname.innerHTML=`${response.data.body.propertyDescription.name}`;
            localStorage.setItem('hname',`${response.data.body.propertyDescription.name}`);
            let res=response.data.body.overview.overviewSections[0].content;
            res.forEach((element,index) => {
                  console.log(element);
                let str=`<li>${element}</li>`;
                amenities.innerHTML+=str;
                
            });
        })
        .catch((err) => {
            console.error(err)
            let  amenities=document.querySelector('#amenities');
            let str= `   <li>Room service</li>
                        <li>Restaurat</li>
                        <li>Business center</li>
                        <li>Fitness center</li>
                        <li>Pool</li>`
            amenities.innerHTML+=str;            
        });
}
        
hoteldetail(id); 







