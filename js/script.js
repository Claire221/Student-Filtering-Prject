/*
Treehouse Techdegree: Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab
   Reach out in your Slack community if you have questions
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const studentsDisplay = 9


function showPage(list, page){

      //variables for the first and last student on the page
      const startIndex = (page * studentsDisplay) - studentsDisplay;
      const endIndex = page * studentsDisplay;

      // get the elements with the class student-list
      const studentLi = document.querySelector(".student-list");

      //set the student list to an empty string
      studentLi.innerHTML = " ";

      for (var i = 0; i < list.length; i++) {
         if (i >= startIndex && i < endIndex){

            const studentMarkup = `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
                     <h2>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
                     <span class="email"> ${list[i].email}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined ${list[i].registered.date}</span>
                  </div>
               </li>
               `;

            studentLi.insertAdjacentHTML('beforeend', studentMarkup);

         }

      }
}



//    Insert the elements you have created to the student-list variable you created earlier. The insertAdjacentHTML method and beforeend option works well for this.
// }

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/


function addPagination(lists) {
 // create a variable to calculate the number of pages needed
   const pagesNeeded = Math.ceil(lists.length / studentsDisplay);
  // select the element with a class of `link-list` and assign it to a variable

   const linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";

  // loop over the number of pages needed
    // create the elements needed to display the pagination button
    // insert the above elements

   for(var i = 1; i <= pagesNeeded; i++){

      const button = `
      <li>
         <button type="button">${i}</button>
      </li>
      `;

      linkList.insertAdjacentHTML('beforeend', button);
   }


   const firstButton =  document.querySelector("li");
   firstButton.classList.add("active")

   // create an event listener on the `link-list` element
   linkList.addEventListener("click", function(){
      const button = event.target

      if(button.tagName === "BUTTON"){
         const firstActive = document.querySelector(".active");
         firstActive.className = " ";
         button.className = "active";

         showPage(data, button.textContent)
      }


   })
}

function searchBar(list){
   const header = document.querySelector("header")
   const searchbar = `
   <label for="search" class="student-search">
      <span>Search by name</span>
      <input id="search" placeholder="Search by name...">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
   `;

   header.insertAdjacentHTML('beforeend', searchbar);
   const search = document.querySelector("input")

   search.addEventListener("keyup", function(){
       // capture input into search bar
      var searchedInput = search.value
      console.log(searchedInput)

      //see if it matches any letters a name from data object
      for(var i = 0; i < list.length; i++){
         const first = list[i].name.first
         const last = list[i].name.last
         // console.log(first)
         // console.log(last)

         if(list[i].name.first.includes(searchedInput || list[i].name.last(searchedInput))){
            console.log(first + " " + last)
         }
         
         const searchedStudent = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h2>${list[i].name.title} ${first} ${last}</h3>
               <span class="email"> ${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>
         `;

            // get the elements with the class student-list
         const studentLi = document.querySelector(".student-list");

         //set the student list to an empty string
         studentLi.innerHTML = " ";
         studentLi.insertAdjacentHTML('beforeend', searchedStudent);
      }
    
      //filter the students shown to only show those that are matches
   });

};

// Call functions
showPage(data,1);
addPagination(data);
searchBar(data)