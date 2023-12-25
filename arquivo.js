
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScorre = document.querySelector('#machine-score')


let humanScoreNumber = 0
let machineScoreNumber = 0

//ENUMS
//const GAME_OPTIONS = {
  //  ROCK: 'rock',
   // PAPER: 'paper',
   // SCISSORS: 'scissors'
//}


function playHuman(humanChoice) {
    
    playTheGame(humanChoice, playMachine())
}

function playMachine() {
   
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choice[randomNumber]
}

function playTheGame(human, machine) {
    
    console.log('Humano: '  +  human  +  ' Maquina: '  +  machine)

    if(human === machine){

        result.innerHTML = 'EMPATE!'
    }else if (

        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')

    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou!!!!"
        
    } else {
        machineScoreNumber++
        machineScorre.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu!!!!!"
    }



}

