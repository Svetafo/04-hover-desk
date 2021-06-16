const board = document.querySelector('#board')
const colors = ['#7f00ff', '#e100ff','#7303c0', '#ec38bc', '#fdeff9']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    board.append(square)

    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element){
    const color = getrandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow =`0 0 8px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow =`0 0 2px #000`
}
    function getrandomColor(){
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }


