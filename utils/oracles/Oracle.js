import rollDie from "../rollDie";

export default class Oracle {
  #outcomes;

  constructor(name, description, outcomes, roll) {
    this.name = name;
    this.description = description;
    this.#outcomes = outcomes;
    if (typeof roll === "function") {
      this.roll = roll.bind(this);
    } else {
      this.roll = () => this.singleTableRoll();
    }
  }

  findTableResult(outcomes, number) {
    let outcome = outcomes.find(
      (el) => number >= el.range.min && number <= el.range.max
    );

    if (outcome === undefined) {
      outcome = "error";
    } else {
      outcome = outcome.text;
    }

    return outcome;
  }

  singleTableRoll() {
    let number = rollDie(100);
    let text = this.findTableResult(this.#outcomes, number);

    return {
      name: this.name,
      // result: number + " " + text,
      result: text,
    };
  }
}
