const baseURL = "https://api.nasa.gov/planetary/apod"
const key = "0DSMoYLyETrZC5TEO2k85OZtx7x7FQrlyUo9Cs5h"
const count = 20
const countNeeded = 10
// only 10 items are needed, but fetching more in case some items are not
// images (and therefore will be skipped)

fetch(`${baseURL}?api_key=${key}&count=${count}`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    let countUsed = 0

    for (let i = 0; i < count; i++) {
      // const img = document.querySelector(`#img${i + 1}`)
      // img.src = `${data[i]["url"]}`

      if (data[i]["media_type"] === "image") {
        const imgDiv = document.querySelector(`#img${countUsed + 1}`)
        imgDiv.style.backgroundImage = `url(${data[i]["hdurl"]})`
        console.log(`count used: ${countUsed}`)
        countUsed++
      }

      if (countUsed === countNeeded) {
        break
      }
    }
  })
  .catch(err => console.log(err))