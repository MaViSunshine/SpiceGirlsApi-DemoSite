//Example fetch using pokemonapi.co
document.querySelector('#btn1').addEventListener('click', getFetch)
document.querySelector('#btn2').addEventListener('click', getAlbum)
document.querySelector('#btn3').addEventListener('click', getTrack)


function getFetch(){
  const choice1 = document.querySelector('select').value.toLowerCase()
  const url = `https://spice-girls-api.herokuapp.com/member/`+choice1

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("h2").innerText=data.birthName
        document.querySelector("h3").innerText=data.nickName
        document.querySelector("h4").innerText=data.birthDate
        document.querySelector("h5").innerText=data.birthPlace
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getAlbum(){
  const choice2 = document.querySelector('select').value.toLowerCase()
  const url = `https://spice-girls-api.herokuapp.com/discography/`+choice2

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("#album-name").innerText=data.albumName
        document.querySelector("#album-time").innerText=data.albumDuration
        document.querySelector("#album-debut").innerText=data.releaseDate
        document.querySelector("h5").innerText=data.albumGenre
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getTrack(){
  const choice3 = document.querySelector('select').value.toLowerCase()
  const url = `https://spice-girls-api.herokuapp.com/album/`+choice2+`/`+choice3

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("p").innerText=data.albumName
        document.querySelector("h3").innerText=data.albumDuration
        document.querySelector("h4").innerText=data.releaseDate
        document.querySelector("h5").innerText=data.albumGenre
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}