import Header from "./Components/Header";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

const App = () => {
  return (
    <div>
      <>
        <Header />
        <TaskForm />
        <TaskList />
      </>
    </div>
  );
};

export default App;
