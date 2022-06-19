//Example fetch using pokemonapi.co
document.querySelector('#btn2').addEventListener('click', getAlbum)
document.querySelector('#btn2').addEventListener('click', getTrack)


function getAlbum(){
  const choice2 = document.querySelector('select').value.toLowerCase()
  const url1 = `https://spice-girls-api.herokuapp.com/discography/`+choice2

  fetch(url1)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("#album-name").innerText=data.albumName
        document.querySelector("#album-time").innerText=data.albumDuration
        document.querySelector("#album-debut").innerText=data.releaseDate
        document.querySelector("#album-genre").innerText=data.albumGenre
        document.querySelector("#album-cover").src=data.albumCover
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
 }

