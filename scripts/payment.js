const PayNowbtn=document.getElementById('paynowbutton');
const modallogin=document.getElementById('modallogin');


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