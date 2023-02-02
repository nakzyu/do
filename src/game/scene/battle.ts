import "phaser";
import { IMAGE } from "../../common/constant/image";

export default class BattleScene extends Phaser.Scene {
  constructor() {
    super("");
    console.log("battle");
  }

  preload() {
    this.load.image("background", IMAGE.BACKGROUND.TITLE);
  }
  create() {
    this.add.image(300, 300, "background");
  }
}
