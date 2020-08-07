export default class Task {
  private desc: string;

  private isComplete: boolean;

  constructor(desc: string, isComplete = false) {
    this.desc = desc;
    this.isComplete = isComplete;
  }

  getTaskDesc(): string {
    return this.desc;
  }

  setToComplete(): void {
    this.isComplete = true;
  }

  getIsComplete(): boolean {
    return this.isComplete
  }
}
