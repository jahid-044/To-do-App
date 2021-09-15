import GlobalContext from "./Context/GlobalContext";
import Todo from "./Components/Todo";

function App() {
  return (
    <GlobalContext>
      <Todo />
    </GlobalContext>
  );
}

export default App;
