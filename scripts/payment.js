






window.addEventListener('load',()=>{
    const params=(new URL(document.location)).searchParams;
    const name=params.get('name');
    const adults=params.get('adults');
    const fromdate=params.get('fromdate');
    const todate=params.get('todate');
    const total=params.get('total');

    let date=new Date();
    let  fromDate=new Date(fromdate.value);
    let toDate=new Date(todate.value);
    let newdate=((toDate.getTime()-fromDate.getTime())/(86400000));
    console.log(newdate);
   let content=document.querySelector('.content');
   let address=localStorage.getItem('address');
   let imgurl=localStorage.getItem('imgurl');
   let hname=localStorage.getItem('hname');
    let str=`
    <div class="hotel-images">
        <a href="./payment.html">
            <img src=${imgurl}>
        </a>
        <article>
             <h3>${hname}</h3>
            <h3>${address}</h3>
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
                <p><b>Tariff Breakdown:</b><span>Rs.1000 x ${adults} Adults x ${newdate} Nights</span></p>
                <p><b>Total Amount:</b><span>Rs. ${total}</span></p>
            </div>
        </article>
        <article>
            <button class="btn btn-large btn-success" id="paynowbutton"  disabled>Pay Now</button>
        </article>
    </div>
`
    content.innerHTML+=str;
   localStorage.removeItem('hname');
localStorage.removeItem('imgurl');
   localStorage.removeItem('address');
   
  })
  
  let PayNowbtn=document.getElementById('paynowbutton');
  let  modallogin=document.getElementById('modallogin');
  
  
      modallogin.addEventListener('click',()=>{
          console.log("woo");
          PayNowbtn.removeAttribute('disabled');
          PayNowbtn.addEventListener('click',()=>{
              
              alert("Hi your booking is successfull !!")
          })
      })
      logoutbtn.addEventListener('click',()=>{
          PayNowbtn.setAttribute('disabled',"");
      })
