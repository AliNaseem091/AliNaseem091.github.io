let paper = document.querySelector(".paper")
let rock = document.querySelector(".rock")
let scissor = document.querySelector(".scissor")
let image = document.querySelectorAll(".images")
let resett = document.querySelector(".reset")
let result = document.querySelector(".board")
let countc = document.querySelector(".countc") 
let countp = document.querySelector(".countp")
let drawww = document.querySelector(".draww")


let scorep = 0;
let scorec = 0;
let draww = 0;


let player = "None"
let comp = "None"

if(player === "None"){
    paper.addEventListener("click", ()=>{
        player = "Paper"
        assign();
        win();
    })
    rock.addEventListener("click", ()=>{
        player = "Rock"
        assign();
        win();
    })
    scissor.addEventListener("click", ()=>{
        player = "Scissor"
        assign();
        win();
    })
}

// Assigns computer any one of the three options
const assign = () =>{
    if(comp === "None"){
        let ran = Math.random() * 100;
        if(ran <= 33){
            comp = "Paper";
        }
        else if(ran > 33 && ran <= 66){
            comp = "Rock"
        }
        else if(ran > 66){
            comp = "Scissor"
        }
    }
}

// Compare both values and Detect the Winner
const win = () => {
    if(player === comp){
        result.innerText = "It was a Draw!"
        result.style.backgroundColor = "rgb(234, 228, 210)"
        result.style.color = "rgb(60, 42, 48)"
        result.style.width = "24rem"
        result.style.left = "44%"
        draww++
        drawww.innerText = draww;
        player = "None"
        comp = "None"
    }
    else if(player === "Paper" && comp === "Rock"){
        result.innerText = "Player Wins, " + player + " beats " + comp;
        result.style.backgroundColor = "rgb(234, 228, 210)"
        result.style.color = "rgb(60, 42, 48)"
        result.style.width = "45rem"
        result.style.left = "38.2%"
        scorep++;
        countp.innerText = scorep
        player = "None"
        comp = "None"
    }
    else if(player === "Paper" && comp === "Scissor"){
        result.innerText = "Computer Wins, " + comp + " beats " + player;
        result.style.backgroundColor = "rgb(234, 228, 210)"
        result.style.color = "rgb(60, 42, 48)"
        result.style.width = "50rem"
        result.style.left = "36.7%"
        scorec++;
        countc.innerText = scorec
        player = "None"
        comp = "None"
    }
    else if(player === "Rock" && comp === "Scissor"){
        result.innerText = "Player Wins, " + player + " beats " + comp;
        result.style.backgroundColor = "rgb(234, 228, 210)"
        result.style.color = "rgb(60, 42, 48)"
        result.style.width = "45rem"
        result.style.left = "38.2%"
        scorep++;
        countp.innerText = scorep
        player = "None"
        comp = "None"
    }
    else if(player === "Rock" && comp === "Paper"){
        result.innerText = "Computer Wins, " + comp + " beats " + player;
        result.style.backgroundColor = "rgb(234, 228, 210)"
        result.style.color = "rgb(60, 42, 48)"
        result.style.width = "50rem"
        result.style.left = "36.7%"
        scorec++;
        countc.innerText = scorec
        player = "None"
        comp = "None"
    }
    else if(player === "Scissor" && comp === "Paper"){
        result.innerText = "Player Wins, " + player + " beats " + comp;
        result.style.backgroundColor = "rgb(234, 228, 210)"
        result.style.color = "rgb(60, 42, 48)"
        result.style.width = "45rem"
        result.style.left = "38.2%"
        scorep++;
        countp.innerText = scorep
        player = "None"
        comp = "None"
    }
    else if(player === "Scissor" && comp === "Rock"){
        result.innerText = "Computer Wins, " + comp + " beats " + player;
        result.style.backgroundColor = "rgb(234, 228, 210)"
        result.style.color = "rgb(60, 42, 48)"
        result.style.width = "50rem"
        result.style.left = "36.7%"
        scorec++;
        countc.innerText = scorec
        player = "None"
        comp = "None"
    }
}

resett.addEventListener("click", () => {
    location.reload();
})