export class Stats {
    constructor() {
        this.scores = {
            count: 0,
            wins: 0,
            losses: 0,
            draws: 0
        }
    }
    update(result, spanCount, spanWins, spanLosses, spanDraws) {

        this.scores.count++;
        spanCount.textContent = this.scores.count;
        if (result === "win") {
            this.scores.wins++;
            spanWins.textContent = this.scores.wins;
        } else if (result === "loss") {
            this.scores.losses++;
            spanLosses.textContent = this.scores.losses;
        } else {
            this.scores.draws++;
            spanDraws.textContent = this.scores.draws;
        }
    }
}