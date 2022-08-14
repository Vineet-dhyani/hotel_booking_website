const ViewMoreBtn=document.querySelector("#viewmore");
const collapseImgclass=document.querySelectorAll(".collapse");

isclick=true;
function toggleimages(e){
    collapseImgclass.forEach(image=>{
    image.classList.toggle('collapse');
   
    })
    if(isclick){
        e.target.innerText="View Less"
        isclick=false;
       }
       else{
        e.target.innerText="View More";
        isclick=true;
       }

}