import logo from './logo.svg';
import './App.css';
import CommentsList from './components.js/CommentsList';
import TemperatureConverter from './components.js/TemperatureConverter';
import TodoApp from './components.js/TodoList ';

function App() {
  // homework lesson 1
  /*
  const userName = 'Iskander';
  return (
    <div className="App">
      <h1>Hello World {userName}</h1>
      <Message number="1" name="Info" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam iste fugiat blanditiis." />
      <Message number="2" name="Blog" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quidem eum sit, necessitatibus facere omnis ipsum voluptatem vel est molestiae." />
    </div>
  );
  */
  return (
    <div className="App">
      <CommentsList />
      {/* homework lesson 3 */}
      {/* task1 */}
      <TemperatureConverter /> {/* component/TemperatureConverter.js */}
      {/* task2 */}
      <TodoApp /> {/* component/TodoList.js */}
    </div>
  );
}

// homework lesson 1
/*
function Message({ name, number, text }) {
  let themaSiteWhite = false;
  return (
    <div className='container'>
      <h2 className='heading'>Статья про {name} номер: {number}</h2>
      <a href='#' style={{ color: themaSiteWhite ? 'green' : 'red' }}>Читать статью</a>
      <p>{text}</p>
    </div>
  );
}
*/


export default App;
