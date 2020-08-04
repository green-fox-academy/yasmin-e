import Plant from './plant';
import Flower from './flower';
import Tree from './tree';

class Garden {
  Flowers: Flower[];

  Trees: Tree[];

  constructor(Flowers = [new Flower('yellow'), new Flower('blue')], Trees = [new Tree('purple'), new Tree('orange')]) {
    this.Flowers = Flowers;
    this.Trees = Trees;
  }

  whoNeedsWater(): void {
    this.Flowers.forEach((flower) => flower.needsWater());
    this.Trees.forEach((tree) => tree.needsWater());
  }

  water(waterAmount: number): void {
    const needsWater = [];

    this.Flowers.forEach((flower) => {
      if (flower.waterLevel < 5) {
        needsWater.push(flower);
      }
    });

    this.Trees.forEach((tree) => {
      if (tree.waterLevel < 10) {
        needsWater.push(tree);
      }
    });

    needsWater.forEach((plant) => plant.water(waterAmount / needsWater.length));

    console.log(`Watering with ${waterAmount}`);
  }
}
const smallGarden = new Garden();
smallGarden.whoNeedsWater();
smallGarden.water(40);
smallGarden.whoNeedsWater();
smallGarden.water(70);
smallGarden.whoNeedsWater();
