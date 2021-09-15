import Todo from "./Components/Todo";
import GlobalContext from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContext>
      <Todo />
    </GlobalContext>
  );
}

export default App;
