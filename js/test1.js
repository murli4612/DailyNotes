 
console.log("Welcome to notes app. This is app.js");
showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  let time = localStorage.getItem("time");
//   let timeObj = new Date();
  if (notes == null && time ==null) {
    notesObj = [];
    timeObj = [];
  } else {
    notesObj = JSON.parse(notes);
    timeObj = JSON.parse(time);
  }
  notesObj.push(addTxt.value);
  let time1 = new Date();
  timeObj.push(time1.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage.setItem("time", JSON.stringify(timeObj));
  
  addTxt.value = "";
  time1.value = "";
//   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  let time = localStorage.getItem("time");
  if (notes == null && time == null ) {
    notesObj = [];
    timeObj = [];
  } else {
    notesObj = JSON.parse(notes);
    timeObj = JSON.parse(time);
  }
  let html = "";
  let html1 = "";
  Array.timeObj.forEach(function(element) {
    html1 += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h1 class="card-title">Time: ${element}</h1>
                       
                    </div>
                </div>`;
  });
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index + 1}</h5>
                        <p class="card-text"> ${element}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  let notesElm1 = document.getElementById("time");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
    notesElm1.innerHTML = html1;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
// function deleteNote(index) {
// //   console.log("I am deleting", index);

//   let notes = localStorage.getItem("notes");
//   if (notes == null) {
//     notesObj = [];
//     timeObj == [];
//   } else {
//     notesObj = JSON.parse(notes);
//     timeObj = JSON.parse(time);
//   }

//   notesObj.splice(index, 1);
//   timeObj.splice(index,1)
//   localStorage.setItem("notes", JSON.stringify(notesObj));
//   localStorage.setItem("time", JSON.stringify(timeObj));
//   showNotes();
// }


let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/ 