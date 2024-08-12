console.log("Script running...")
// Task 1: 
// Select the cshImage div

let cshImage = document.querySelector("#cshImage")


// Add an event listener such that when the div is clicked, you create a new p tag, set the text to "Our new building!" and append it to the div

cshImage.addEventListener("click", function(event){
  let newptag = document.createElement("p")
  newptag.textContent = "Our new building!"
  cshImage.appendChild(newptag)
})



// Task 2: 
// Set up the DOM manipulation flow such that when you click the cat button, the cat image is removed.


let images = document.querySelectorAll("#images")
let catbutton = document.querySelector("#catButton")
let catimg = document.querySelector("#catImage")

catbutton.addEventListener("click", function(event){
  images[0].removeChild(catimg)
})


// Set up the DOM manipulation flow such that when you click the dog button, the dog image is removed.

let dogbutton = document.querySelector("#dogButton")
console.log(dogbutton)
let dogimg = document.querySelector("#dogImage")

dogbutton.addEventListener("click", function(event){
  images[1].removeChild(dogimg)
})



// Task 3: Set up the DOM manipulation flow such that when the add button is clicked, you create a new li tag, set the text to the value of input, and append it to the ul element





