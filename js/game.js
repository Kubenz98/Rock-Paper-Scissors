class Game {
    constructor() {
        this.hands = [...document.querySelectorAll(".hand")];
        this.spanYourChoice = document.querySelector(".info__result-player-choice-span");
        this.spanAiChoice = document.querySelector(".info__result-ai-choice-span");
        this.spanWinner = document.querySelector(".info__result-winner-span");
        this.spanGamesCount = document.querySelector(".info__stats-games-span");
        this.spanWins = document.querySelector(".info__stats-wins-span");
        this.spanLosses = document.querySelector(".info__stats-losses-span");
        this.spanDraws = document.querySelector(".info__stats-draws-span");
        this.select = new Select(this.hands);
        document.querySelector(".hands__button").addEventListener("click", this.startGame.bind(this));
        this.result = new Result(this.select.choices);
        this.stats = new Stats();
    }
    startGame() {
        if (this.select.choices.player) {
            this.select.aiSelect();
            const result = this.result.check();
            console.log(result);
            this.result.publication(result, this.spanYourChoice, this.spanAiChoice, this.spanWinner);
            this.stats.update(result, this.spanGamesCount, this.spanWins, this.spanLosses, this.spanDraws);
            this.reset();
        } else return alert("Select your hand!");

    }
    reset() {
        this.select.choices.ai = "";
        this.select.choices.player = "";
        this.hands.forEach(hand => {
                hand.style.border = "8px solid transparent";
        })
    }
}