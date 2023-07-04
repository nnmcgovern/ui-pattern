const baseURL = "https://api.nasa.gov/planetary/apod"
const key = "0DSMoYLyETrZC5TEO2k85OZtx7x7FQrlyUo9Cs5h"
const count = 20
const countNeeded = 10
// only 10 items are needed, but fetching more in case some items are not
// images (and will therefore be skipped)
let arr = []

const modal = document.querySelector(".modal")
const imgModal = document.querySelector(".img-modal")
const descTitle = document.querySelector(".desc-title")
const descDate = document.querySelector(".desc-date")
const descText = document.querySelector(".desc-text")

fetch(`${baseURL}?api_key=${key}&count=${count}`)
  .then(res => res.json())
  .then(data => {
    let countUsed = 0

    for (let i = 0; i < count; i++) {
      let obj = {}

      if (data[i]["media_type"] === "image") {
        const imgDiv = document.querySelector(`#img${countUsed + 1}`)
        imgDiv.style.backgroundImage = `url(${data[i]["hdurl"]})`
        countUsed++

        obj.date = data[i]["date"]
        obj.explanation = data[i]["explanation"]
        obj.hdurl = data[i]["hdurl"]
        obj.title = data[i]["title"]
        arr.push(obj)
      }

      if (countUsed === countNeeded) {
        break
      }
    }
  })
  .catch(err => console.log(err))

console.log(arr)

// ----------------------------------------------------------

document.querySelector("#img1").addEventListener("click", loadModal0)
document.querySelector("#img2").addEventListener("click", loadModal1)
document.querySelector("#img3").addEventListener("click", loadModal2)
document.querySelector("#img4").addEventListener("click", loadModal3)
document.querySelector("#img5").addEventListener("click", loadModal4)
document.querySelector("#img6").addEventListener("click", loadModal5)
document.querySelector("#img7").addEventListener("click", loadModal6)
document.querySelector("#img8").addEventListener("click", loadModal7)
document.querySelector("#img9").addEventListener("click", loadModal8)
document.querySelector("#img10").addEventListener("click", loadModal9)

function setModal(i) {
  let obj = arr[i]
  imgModal.style.backgroundImage = `url(${obj.hdurl})`
  descTitle.innerHTML = obj.title
  descDate.innerHTML = obj.date
  descText.innerHTML = obj.explanation
}

function loadModal0(e) {
  setModal(0)
  modal.classList.toggle("hidden")
}

function loadModal1(e) {
  setModal(1)
  modal.classList.toggle("hidden")
}

function loadModal2(e) {
  setModal(2)
  modal.classList.toggle("hidden")
}

function loadModal3(e) {
  setModal(3)
  modal.classList.toggle("hidden")
}

function loadModal4(e) {
  setModal(4)
  modal.classList.toggle("hidden")
}

function loadModal5(e) {
  setModal(5)
  modal.classList.toggle("hidden")
}

function loadModal6(e) {
  setModal(6)
  modal.classList.toggle("hidden")
}

function loadModal7(e) {
  setModal(7)
  modal.classList.toggle("hidden")
}

function loadModal8(e) {
  setModal(8)
  modal.classList.toggle("hidden")
}

function loadModal9(e) {
  setModal(9)
  modal.classList.toggle("hidden")
}