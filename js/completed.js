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
// Add / delete
document.addEventListener("DOMContentLoaded", function () {
    const taskAssignedElement = document.querySelector(".task-assigned");
    const completedTasksElement = document.querySelector(".completed-tasks");
    const activityLog = document.querySelector(".activity-log");
    const clearHistoryButton = document.querySelector(".clear-history");

    document.querySelectorAll(".complete-button").forEach((button) => {
        button.addEventListener("click", function () {
            if (confirm("Board updated Successfully")) {
                // Convert num
                taskAssignedElement.textContent = +taskAssignedElement.textContent - 1;
                completedTasksElement.textContent = +completedTasksElement.textContent + 1;

                // Disable button
                button.disabled = true;
                button.textContent = "Completed";

                // Get task
                const taskHeader = button.closest(".task-card").querySelector(".task-header").textContent.trim();

                // Add history
                const logEntry = document.createElement("div");
                logEntry.classList.add("bg-[#F4F7FF]")
                logEntry.innerHTML = `<h1 class="font-medium pl-4 pt-3 pr-3 pb-1">You have Completed the ${taskHeader} at ${new Date().toLocaleTimeString()}</h1>`;
                activityLog.appendChild(logEntry);
            }
        });
    });
    // clear history
    clearHistoryButton.addEventListener("click", function () {
        activityLog.innerHTML = "";
    });
});


