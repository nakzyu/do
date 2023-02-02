import "phaser";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("");
    console.log("title");
  }

  create() {
    this.add.image(300, 300, "background");
  }
}
