const listenBtn = document.getElementById("listen-btn");
const textArea = document.querySelector("textarea");
const select = document.querySelector("select");
let speech = new SpeechSynthesisUtterance();

let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => {
    select.options[i] = new Option(voice.name, i);
  });
};

select.addEventListener("change", () => {
  speech.voice = voices[select.value];
});

listenBtn.addEventListener("click", playText);

function playText() {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
}
