// simple in-memory job data
const jobs = [
  { 
    id: 1, 
    status: "not_applied" 
  },
  { id: 2, 
    status: "not_applied" 
  },
  { 
    id: 3, 
    status: "not_applied" 
  },
  { 
    id: 4,
    status: "not_applied" 
  },
  { 
    id: 5, 
    status: "not_applied" 
  },
  { 
    id: 6, 
    status: "not_applied" 
  },
  { id: 7, 
    status: "not_applied" 
  },
  { id: 8, 
    status: "not_applied" 
  }
];

document.addEventListener("DOMContentLoaded", function () {

  // getting all the elements
  const statNumbers = document.querySelectorAll("header .text-3xl");
  const totalEl = statNumbers[0];
  const interviewEl = statNumbers[1];
  const rejectedEl = statNumbers[2];
  
  // get all cards
  const jobCards = document.querySelectorAll("section > div.bg-white");

  // Stats update function
  function updateStats() {
    let intCount = 0;
    let rejCount = 0;
    for(let j = 0; j < jobs.length; j++) {
      if(jobs[j].status === "interview")
          intCount++;
      if(jobs[j].status === "rejected") 
          rejCount++; 
    }
     
        totalEl.innerText = jobs.length;
        interviewEl.innerText = intCount;
        rejectedEl.innerText = rejCount;
  }

  // loop through for each card
  for(let i = 0; i < jobCards.length; i++) {
    let card = jobCards[i];
    
    // get buttons - hope order is correct
    let interviewBtn = card.querySelector("button.bg-green-100"); 
    let rejectedBtn = card.querySelector("button.bg-red-100");  
    let deleteBtn = card.querySelector(".fa-trash-can")?.closest("button");
    let statusSpan = card.querySelector("span");

    // interview button
    if(interviewBtn) {
      interviewBtn.onclick = function() {
        jobs[i].status = "interview";

          statusSpan.innerText = "Interview";
          statusSpan.className = "bg-green-100 text-green-600px-3 py-1 rounded text-sm";

          updateStats();
           };
        }

        if(rejectedBtn) {
         rejectedBtn.onclick = function() {
          jobs[i].status = "rejected";

          statusSpan.innerText = "Rejected";
          statusSpan.className = "bg-red-100 text-red-600 px-3 py-1 rounded text-sm";

          updateStats();
           };   
        }

        if(deleteBtn) {
          deleteBtn.onclick = function() {
           card.style.display = "none";  
           jobs[i].status = "deleted";
           updateStats();
          };
        }
      }  

  // filter tabs
  const tabs = document.querySelectorAll("main > div.flex.gap-3.mb-8 > button");

  for(let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function() {
      
      let filterType = tabs[i].innerText.toLowerCase();

      // reset styles
      for(let j = 0; j < tabs.length; j++) {
        tabs[j].classList.remove("bg-black", "text-white");
        tabs[j].classList.add("bg-gray-200");
      }
      
      tabs[i].classList.remove("bg-gray-200");
      tabs[i].classList.add("bg-black", "text-white");

      // show/hide cards
      for(let k = 0; k < jobCards.length; k++) {
        if(filterType === "all") {
          jobCards[k].style.display = "flex";
        } else if(jobs[k].status === filterType) {
          jobCards[k].style.display = "flex";
        } else {
          jobCards[k].style.display = "none";
        }
      }
    };
  }

  // initial stats show
  updateStats();
});