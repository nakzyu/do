import "./game/scene/titleScene";
import GameScene from "./ui/game-scene/GameScene";

// import statusStore from "./store/statusStore";
// import { useStore } from "./ui/hooks/useStore";

function App() {
  // const { data, update } = useStore(statusStore);

  return (
    <div className="App bg-slate-600">
      <GameScene type="CAMPING" />
      {/* <h3
        onClick={() => {
          update({ id: "dd", nickName: "dwwd" });
        }}
      >
        {data?.id}
      </h3>
      <h2
        onClick={() => {
          update({ id: "한글" });
        }}
      >
        {data?.nickName}
      </h2> */}
    </div>
  );
}

export default App;
