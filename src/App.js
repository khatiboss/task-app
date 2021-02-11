import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const x = false;
  return (
    <div className="container">
      <Header title={'Task Application - ReactJS'} />
      <Tasks />
      {x ? "YES" : "NO"}
    </div>
  );
}

export default App;
