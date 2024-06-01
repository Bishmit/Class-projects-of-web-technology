function rollDice(){
    return Math.floor(Math.random() * 6) + 1; 
}

function displayDice(number){
    const dicePatterns = {
        1: [
            ['', '', ''],
            ['', 'dot', ''],
            ['', '', '']
        ],
        2: [
            ['dot', '', ''],
            ['', '', ''],
            ['', '', 'dot']
        ],
        3: [
            ['dot', '', ''],
            ['', 'dot', ''],
            ['', '', 'dot']
        ],
        4: [
            ['dot', '', 'dot'],
            ['', '', ''],
            ['dot', '', 'dot']
        ],
        5: [
            ['dot', '', 'dot'],
            ['', 'dot', ''],
            ['dot', '', 'dot']
        ],
        6: [
            ['dot', '', 'dot'],
            ['dot', '', 'dot'],
            ['dot', '', 'dot']
        ]
    };

    const pattern = dicePatterns[number]; 

    for(let i = 0; i<3; i++){
        for(let j = 0; j<3; j++){
            const dotId = `dot${i*3 + j+1}`; 
            const dotElement = document.getElementById(dotId); 
            if(pattern[i][j] == 'dot'){
                dotElement.style.display = 'block'; 
            }
           else{
            dotElement.style.display = 'none'; 
           } 
        }
    }
}

function startGame(){
    const guess = parseInt(document.getElementById('guess').value); 
    if(isNaN(guess) || guess > 6 || guess < 0){
        alert('Plz Enter a valid number between 1 & 6'); 
        return; 
    }
    else{
        const diceElements = document.getElementsByClassName('dice');
        for (let i = 0; i < diceElements.length; i++) {
           diceElements[i].style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.8)';
           diceElements[i].style.backgroundColor = 'whitesmoke';
        }
    }
    const result = rollDice(); 
    displayDice(result); 
    const resultDiv = document.getElementById('result'); 
    if(guess == result){
        resultDiv.textContent = 'Congrats, You Win!'; 
    }
    else{
        resultDiv.textContent = `Sorry, You Lose. The number was ${result}`; 
    }
}