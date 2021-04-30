/* Contents Js */
const ratio = 1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .1
}

const handleIntersect = function (entries, observer){
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    } 
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
observer.observe()
})

function confirmation(){
  var firstName = document.getElementById("fName").value
  var city = document.getElementById("city").value
  alert("Thank you " + firstName + "! See you soon near " + city + " for some artistic events, meetups, and even more !")
}
