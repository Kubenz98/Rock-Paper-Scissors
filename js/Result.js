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
}