

var voices = speechSynthesis.getVoices();
const voice = voices.filter(voice=>voice.lang.includes("BR"))[0]

function addPlayButton(){
    const paragrafos = document.querySelectorAll ("p")
    paragrafos.forEach(p=> {
        const paragrafo = {
            Text: p.innerText,
            play: function() {
                const utterance = new SpeechSynthesisUtterance(this.Text)
                utterance.voice = voice
                speechSynthesis.speak(utterance)
            }
        }
        const button = document.createElement("button")
        button.innerText = "play"
        button.addEventListener( "click", ()=> {paragrafo.play()})
        p.appendChild(button)
    })
}

addPlayButton()