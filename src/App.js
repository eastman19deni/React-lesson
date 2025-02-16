
import './App.css';
import ColorToggleButton from './components/Temperature/Button';
// import Exercises from './components/Execises/Exercises';
// import List from './components/ListComp/List';
import TemperatureConverter from './components/Temperature/TemperatureConverter';

import BasicTextFields from './components/Temperature/TemperatureConverter';
import TodoListMaterial from './components/TodoList/TodoListMaterial';


function App() {
  
  return (
    <div>
      <TemperatureConverter />
      <TodoListMaterial />
      {/* <List /> */}
      {/* <Exercises /> */}
    </div>
  );
}

export default App;
