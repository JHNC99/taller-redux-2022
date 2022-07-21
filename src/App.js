import "./App.css";
import { useSelector } from "react-redux";
import Cards from "./components/Cards";
import Form from "./components/Form";
function App() {
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="App">
      <h2>Redux app</h2>
      <Form />
      <Cards items={posts} />
    </div>
  );
}

export default App;
