import { useEffect } from "react";
import { Scene } from "../../common/constant/system";
import TitleScene from "../../game/scene/titleScene";
import { createSceneConfig } from "../../game/util/createSceneConfig";

export const useScene = (type: Scene) => {
  useEffect(() => {
    const { destroy } = new Phaser.Game(
      createSceneConfig({
        scene: TitleScene,
        parent: type,
      })
    );
    return () => {
      destroy(false);
    };
  }, []);
};
