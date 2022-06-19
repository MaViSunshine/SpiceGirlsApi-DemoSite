
document.querySelector('#btn2').addEventListener('click', getTrack)


function getTrack(){
  const choice4 = document.querySelector('#select-album').value.toLowerCase()
  const choice3 = document.querySelector('#select-track').value.toLowerCase()
  const url2 = `https://spice-girls-api.herokuapp.com/album/${choice4}/track_${choice3}`

  fetch(url2)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("#track-name").innerText=data.trackTitle
        document.querySelector("#track-length").innerText=data.trackLenght
        document.querySelector("#track-audio").src=data.audioUrl
        // let vidUrl=data.videoUrl
        // document.querySelector("#track-video").innerHTML=vidUrl
      })
    
      .catch(err => {
          console.log(`error ${err}`)
      });
      
}