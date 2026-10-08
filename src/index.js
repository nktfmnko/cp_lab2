import { MiniMaple } from "./miniMaple";

const diffButton = document.getElementById('demoButton')
const inputTA = document.getElementById('input_text')
const resText = document.getElementById('result')

const maple = new MiniMaple()

diffButton.addEventListener('click', function() {
    resText.innerText = maple.differentiate(inputTA.value)
});