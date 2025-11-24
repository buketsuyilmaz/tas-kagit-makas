let userScore = 0;
let computerScore = 0;

const images = {
    'r': 'https://img.icons8.com/fluency/96/rock.png', 
    'p': 'https://img.icons8.com/fluency/96/paper-hand.png', 
    's': 'https://img.icons8.com/fluency/96/hand-scissors.png' 
};

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const result_div = document.getElementById("message");
const userHand_img = document.getElementById("user-hand");
const compHand_img = document.getElementById("comp-hand");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Taş";
    if (letter === "p") return "Kağıt";
    return "Makas";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(userChoice)} (Sen), ${convertToWord(computerChoice)} (PC)'yi yendi. TEBRİKLER! 🔥`;
    result_div.className = "winner-text";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)} (Sen), ${convertToWord(computerChoice)} (PC)'ye yenildi. MAALESEF... 💀`;
    result_div.className = "loser-text";
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = `İkiniz de ${convertToWord(userChoice)} seçtiniz. BERABERE! 🤝`;
    result_div.className = "";
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    userHand_img.src = images[userChoice];
    compHand_img.src = images[computerChoice];

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}