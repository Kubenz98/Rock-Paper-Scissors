class Result {
    constructor(choices) {
        this.choices = choices;
    }
    check() {
        console.log(this.choices.player, this.choices.ai);
        if (this.choices.player === "rock" && this.choices.ai === "scissors" || this.choices.player === "paper" && this.choices.ai === "rock" || this.choices.player === "scissors" && this.choices.ai === "paper") {
            return "win";
        } else if (this.choices.player === "rock" && this.choices.ai === "paper" || this.choices.player === "paper" && this.choices.ai === "scissors" || this.choices.player === "scissors" && this.choices.ai === "rock") {
            return "loss";
        } else return 'draw';
    }
    publication(result, spanPlayer, spanAi, spanWinner) {
        spanPlayer.textContent = this.choices.player;
        spanAi.textContent = this.choices.ai;
        if(result === "win") {
            spanWinner.textContent = "Player!";
            spanWinner.style.color = "green";
        } else if (result=== "loss") {
            spanWinner.textContent = "Ai!";
            spanWinner.style.color = "red";
        } else {
            spanWinner.textContent = "Draw!";
            spanWinner.style.color = "gray";
        }
    }
}