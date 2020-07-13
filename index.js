
function caunter(result) {
    let count = 0

    switch (result) {
        case 1:
            count = count + 1
            break;
        case 0:
            count = count - 1
            break;
        default:
            count = count
    }
    alert(`score:${count}`)

}

function jude(a, b) {

    if (a === b) {
        alert(`Ничья!`)
    } else if (a === 0 && b === 1 || a == 1 && b === 0 || a === 2 && b === 0) {
        caunter(1)
        alert(`Вы победили!`)
    } else if (a > 2) {
        alert(`Введите число от 0 до 2`)
    } else {
        caunter(0)
        alert(`Вы проиграли.`)
    }
}



function game() {

    const message = prompt(`0- камень 1- ножницы 2- бумага`)
    const parsMessage = parseInt(message)
    console.log(parsMessage)
    const array = ["камень", "ножницы", "бумага"]

    if (message) {
        let randomNumber = Math.floor(Math.random() * array.length)
        jude(parsMessage, randomNumber)


    }
    console.log(caunter.count)
}


game();
game();
game();
game();
game();
