const body = document.body;

const title = document.querySelector(".text");

const container = document.querySelector(".choice");
const [trueButton, falseButton] = document.querySelectorAll(".button");

trueButton.addEventListener("click", () => {
    title.textContent = "Так и знал)).";    
})

falseButton.addEventListener("mousemove", () => {
    bodyStyle = getComputedStyle(document.body);

    falseButton.style.position = "absolute";
    falseButton.style.left = `${Math.round(Math.random() * parseFloat(bodyStyle.getPropertyValue("width")))}px`;
    falseButton.style.top = `${Math.round(Math.random() * parseFloat(bodyStyle.getPropertyValue("height")))}px`;
})

falseButton.addEventListener("click", () => {
    title.textContent = "Ответ неправильный)).";

    let audio = new Audio();
    audio.src = "./нет.mp3";
    audio.autoplay = true;
})