import { Controller } from "./modules/controller";

Controller.initStartView()
const starButton = document.querySelector('.start-button')
starButton.addEventListener('click', () => {
    Controller.initGame()
    starButton.style.display = 'none'
})