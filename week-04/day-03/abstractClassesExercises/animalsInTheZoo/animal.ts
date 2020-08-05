export default abstract class Animal {
  protected name: string;

  protected age: number;

  protected gender: string;

  constructor(name: string, age?: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getGender(): string {
    return this.gender;
  }

  abstract breed(): void;
}
