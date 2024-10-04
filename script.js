let speech = new SpeechSynthesisUtterance();
const synth = window.speechSynthesis;

const ListenButton = document.querySelector("button");
const textArea = document.querySelector("textarea");
const selectElement = document.querySelector("select");
let voices = [];

synth.onvoiceschanged = () => {
  voices = synth.getVoices();
  speech.voice = voices[0];
  voices.forEach((e, i) => {
    selectElement.add(new Option(e.name, i));
  });
};

ListenButton.addEventListener("click", (e) => {
  speech.text = textArea.value;
  synth.speak(speech);
});

selectElement.addEventListener("change", () => {
  speech.voice = voices[selectElement.value];
});
