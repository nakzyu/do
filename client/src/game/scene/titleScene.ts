import "phaser";
import { IMAGE } from "../../common/constant/image";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("");
  }

  preload() {
    this.load.image("background", IMAGE.BACKGROUND.TITLE);
  }
  create() {
    this.add.image(300, 300, "background");
  }
}
