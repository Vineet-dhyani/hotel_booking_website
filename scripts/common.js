const header=document.querySelector("header");
const footer =document.querySelector('footer');


header.innerHTML=` <div class="logo">
<a href="./index.html"> <img src="./assests/images/logo.png" alt="logo" id="logo"></a>
</div>

<div class="login-link">
<button type="button" id="login-link" data-toggle="modal" data-target="#exampleModal"
    class="btn btn-light btn-sm">
    LOGIN</button>
    <button type="button" id="logout-link" class="btn btn-light btn-sm d-none">
    LOGOUT</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="d-flex flex-column loginform">
                    <div class="d-flex flex-row p-3 justify-content-around">
                        <label class="w-40" for="username">Enter Username:</label>
                        <input class="w-60" type="text" id="username" placeholder="Enter Username" name="username" required>
                    </div>
                    <div class="d-flex flex-row p-3 justify-content-around">
                        <label class="w-40" for="password">Enter Password:</label>
                        <input class="w-60" type="password" id="password" name="password"  placeholder="Enter Password" autocomplete="off" required>
                    </div>
                </form>
            </div>
            <div class="modal-footer justify-content-center">

                <button type="button" id="modallogin" onclick="LoginLogout()"  class="btn btn-primary ">Login</button>
            </div>
        </div>
    </div>
</div>
</div>
`

footer.innerHTML=` <div id="contact-us-div">
<button type="button"  data-toggle="modal" data-target="#exampleModal1"
    class="btn btn-info btn-sm">
    Contact US</button>

<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="d-flex flex-column ">
                    <div >
                        <p>Thank you for reaching out!!!</p>
                        <p>please enter your email and we will get back to you</p>
                    </div>
                    <div class="d-flex flex-row  justify-content-start">
                        <label class="w-40" for="email">Enter Email:</label>
                        <input class="w-60" type="email" id="email" name="password"   placeholder="Enter your email id" autocomplete="off" >
                    </div>
                </form>
            </div>
            <div class="modal-footer justify-content-end">

                <button type="button"  class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</div>
</div>
<div id="footer-logo-div">
<a href=https://www.facebook.com target="_blank"><img src="./assests/images/facebook.png"></a>
<a href=https://www.instagram.com target="_blank"><img src="./assests/images/instagram.png"></a>
<a href=https://www.twitter.com target="_blank"><img src="./assests/images/twitter.png"></a>
</div>
<div id="footer-div">
&#169; 2020 ROOM SEARCH PVT.LTD
</div>
`

const loginbtn=document.querySelector("#login-link");
const username=document.getElementById("username");
const password=document.getElementById("password");
const closeModal=document.querySelector("#exampleModal");
const loginform=document.querySelector(".loginform");
const logoutbtn=document.querySelector("#logout-link");


function LoginLogout(){
    if(username.value!==""&&password.value!==""){
            localStorage.setItem("username",username.value);
            localStorage.setItem("password",password.value)
            alert("Successfully loggedin");
            closeModal.classList.remove("show");
            loginform.reset();
            logoutbtn.classList.remove("d-none");
            loginbtn.classList.add('d-none');
    }
    }
        logoutbtn.addEventListener('click',()=>{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        loginbtn.classList.remove('d-none');
        logoutbtn.classList.add('d-none');

})
   
