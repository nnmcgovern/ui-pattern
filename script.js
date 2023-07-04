const baseURL = "https://api.nasa.gov/planetary/apod"
const key = "0DSMoYLyETrZC5TEO2k85OZtx7x7FQrlyUo9Cs5h"
const count = 20
const countNeeded = 10
// only 10 items are needed, but fetching more in case some items are not
// images (and will therefore be skipped)
const arr = []

const modal = document.querySelector(".modal")
const imgModal = document.querySelector(".img-modal")
const descTitle = document.querySelector(".desc-title")
const descDate = document.querySelector(".desc-date")
const descText = document.querySelector(".desc-text")
const closeX = document.querySelector(".close")
const randomize = document.querySelector(".randomize")
const imgDivs = document.querySelectorAll(".img")

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

// ----------------------------------------------------------

randomize.addEventListener("click", e => { location.reload() })
randomize.addEventListener("mouseover", e => {
  randomize.style.textDecoration = "underline"
})
randomize.addEventListener("mouseout", e => {
  randomize.style.textDecoration = "none"
})

closeX.addEventListener("click", toggleModel)
closeX.addEventListener("mouseover", e => {
  closeX.src = "img/close-x-white.png"
})
closeX.addEventListener("mouseout", e => {
  closeX.src = "img/close-x-gray.png"
})

imgDivs.forEach(div => {
  div.addEventListener("click", e => {
    setModal(parseInt(div.dataset.id) - 1)
    toggleModel(e)
  })
})

function toggleModel(e) {
  modal.classList.toggle("hidden")
}

function setModal(i) {
  let obj = arr[i]
  imgModal.style.backgroundImage = `url(${obj.hdurl})`
  descTitle.innerHTML = obj.title
  descDate.innerHTML = obj.date
  descText.innerHTML = obj.explanation
}