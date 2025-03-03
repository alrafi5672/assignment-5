// theme-color
const colors = ['#F4F7FF','#FFE4E1','#E0FFFF','#F0FFF0','#FFF0F5']

document.getElementById("theme-btn").addEventListener("click",function(){
    const theme=parseInt(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[theme];
})
// current-date
const days = ["Sunday ","Monday ","Tuesday ","Wednesday ","Thursday ","Friday ","Saturday "];
const months = [" January "," February "," March "," April "," May "," June "," July "," August "," September "," October "," November "," December "];

const today = new Date();
let day = days[today.getDay()];
let month = months[today.getMonth()];

document.getElementById("week").innerHTML = day;
document.getElementById("dd").innerHTML = today.getDate();
document.getElementById("mm").innerHTML = month;
document.getElementById("yyyy").innerHTML = today.getFullYear();
// blog-page
document.getElementById("box-btn").addEventListener("click",function(){
    window.location.href="./blog.html"
})
// completed-btn
document.getElementById("com-btn-1").addEventListener("click",function(){
    if (alert("gdeognh")){
   


    }    
})

