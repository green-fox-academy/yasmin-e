class Boss {
    private name: string;
    private isSleepy: boolean;

    constructor(name = 'Bruce Wayne', isSleepy = true) {
      this.name = name;
      this.isSleepy = isSleepy;
    }

    getSleepy(): boolean {
      return this.isSleepy;
    }

    setSleepy(): void {
        this.isSleepy = false;
      }

    getName(): string {
        return this.name;
      }
}

class Butler {
    private name: string;
    private boss = new Boss();

    constructor(name = 'Alfred') {
     this.name = name;
    }

    giveCoffee(): void {
        if (this.boss.getSleepy()) {
        console.log(`Good morning ${this.boss.getName()}, you seem sleepy. ${this.name} poured you some coffee.`)
        this.boss.setSleepy();
        } else {
        console.log(`${this.name} is not giving you coffee ${this.boss.getName()}. You are not sleepy!`)
        }
    }
}

const Alfred = new Butler();
Alfred.giveCoffee();
Alfred.giveCoffee();