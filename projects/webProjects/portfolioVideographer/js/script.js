let tablinks = document.querySelectorAll(".tab-titles .tab-link");
let tabcontents = document.querySelectorAll(".tab-contents");
function openTab(tabName) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
    if(location.href.includes("photography") || location.href.includes("videography")) activeTab(tabName);
}

function activeTab(tabClass){
    let tabProject = document.getElementById(tabClass);
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
        tabcontent.lastElementChild.id="";
    }
    document.getElementsByClassName(tabClass)[0].classList.add("active-link");
    tabProject.classList.add("active-tab");

    if(location.href.includes("photography")) tabContent(tabClass);
    if(location.href.includes("videography")) projectView(tabClass ,tabClass);

}

function tabContent(elementId){
    let projectCard = document.getElementById(elementId).firstElementChild;
    let n = 0;
    projects.forEach((value, key) => {
        if(value.event == elementId){
            if(projectCard.innerHTML.includes(value.eventType) !== true){
                let ele = `<div class="col3">
                    <p class="heading">${value.eventType}</p>
                    <img src="${value.src}" class="w-100 rounded-top-2">
                    <div class="overlay">
                        <div class="text">
                            <h2 class="h2">${value.eventType.slice(2, value.eventType.length)}</h2>
                            <a href="#section6" onclick="projectView('${value.eventType}', '${value.event}')">
                                <i class="fa-solid fa-arrow-down-short-wide"></i>
                            </a>
                        </div>
                    </div>
                </div>`;
                projectCard.insertAdjacentHTML("beforeend", ele);
            }
        }
    });
}

function projectView(eventName, elementId){
    let projectCard = document.getElementById(elementId).lastElementChild;
    let ele = "";
    projects.forEach(value => {
        if(value.eventType == eventName){
            if(location.href.includes("photography")){
                projectCard.id="section6";
                ele += `<div class="photoProject">
                    <img src="${value.src}" alt="${value.type}">
                </div>`;
            }
            if(location.href.includes("videography")){
                ele += `<div class="videoProject">
                    <p>${value.name}</p>
                    <video src="${value.src}" controls>
                        <source src="${value.src}">
                    </video>
                </div>`;
            }
        }                   
    });
    projectCard.innerHTML = ele;

}

// fetch data to google sheet--
// try {
//     const scriptURL = 'https://script.google.com/macros/s/AKfycby-HNhWkG8iWZE_BSfL1DcWKQrTXECLbGn28weSSfzVQgdi6vzhI25z6NY7PaFjQdXuDQ/exec'
//     const form = document.forms['submit-to-google-sheet'];
//     let msg = document.getElementById("msg");

//     form.addEventListener('submit', (e) => {
//         e.preventDefault()
//         fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//             .then(response => {
//                 msg.innerHTML = "Message sent Successfuly";
//                 setTimeout(() => {
//                     msg.innerHTML = "";
//                 }, 5000);
//                 form.reset;
//             })
//             .catch(error => {
//                 msg.style.color = "red";
//                 msg.innerHTML = "Message sent Error";
//                 setTimeout(() => {
//                     msg.innerHTML = "";
//                 }, 5000);
//                 console.error('Error!', error.message)
//             })
//     });
// } catch (err) {
//     console.error(err);
// }

