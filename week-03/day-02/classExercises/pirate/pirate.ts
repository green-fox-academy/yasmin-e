export default class Pirate {
  private name: string;

  private alcoholLevel: number;

  private passedOut: boolean;

  private dead: boolean;

  constructor(
    name: string,
    alcoholLevel = 0,
    passedOut = false,
    dead = false,
  ) {
    this.name = name;
    this.alcoholLevel = alcoholLevel;
    this.passedOut = passedOut;
    this.dead = dead;
  }

  drinkSomeRum(): void {
    if (this.dead === true) {
      console.log(`${this.name} is dead.`);
    } else {
      this.alcoholLevel += 1;
      console.log(`${this.name} is drinking some Rum.`);
    }
  }

  howsItGoingMate(): void {
    if (this.dead === true) {
      console.log(`${this.name} is dead.`);
    } else if (this.alcoholLevel <= 4) {
      console.log(`${this.name} says: "Pour me anudder!"`);
    } else {
      console.log(`${this.name} says: "Arghh, I'ma Pirate. How d'ya d'ink its goin?"`);
      this.passOut();
    }
  }

  passOut(): boolean {
    console.log(`${this.name} passed out.`);
    return this.passedOut === true;
  }

  die(): boolean {
    console.log(`${this.name} died.`);
    return this.dead === true;
  }

  brawl(x: Pirate): void {
    if (x.dead === false) {
      if (Math.random() * 100 < 33.333333) {
        console.log(`${this.name} and ${x.name} got in a fight.`);
        this.die();
      } else if (Math.random() * 100 < 33.333333) {
        console.log(`${this.name} and ${x.name} got in a fight.`);
        x.die();
      } else {
        console.log(`${this.name} and ${x.name} got in a fight.`);
        this.passOut();
        x.passOut();
      }
    } else {
      console.log(`${x.name} is dead. Can not brawl.`);
    }
  }
}
const Gary = new Pirate('Gary');
Gary.drinkSomeRum();
Gary.howsItGoingMate();
Gary.drinkSomeRum();
Gary.drinkSomeRum();
Gary.drinkSomeRum();
Gary.drinkSomeRum();
Gary.howsItGoingMate();
const Rufus = new Pirate('Rufus');
Gary.brawl(Rufus);
Gary.drinkSomeRum();
