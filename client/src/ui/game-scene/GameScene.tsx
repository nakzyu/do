import { Scene } from "../../common/constant/system";
import { useScene } from "../hook/useScene";

type GameSceneProps = {
  type: Scene;
};

export default function GameScene({ type }: GameSceneProps) {
  useScene(type);
  return <div id={type} />;
}
