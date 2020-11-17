import logo from './logo.svg';
import './App.css';

const count = 23;
let cats = 15;
const dogs = 10;
const name = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
        	color: '#ADD8E6',
        	fontSize: 36 + 45

        }}>
          Hello World!
        </p>
        <p>
          {count}
        </p>
        <p>
          {`number of animals is  ${cats + dogs}`}
        </p>
        <p>
          {name && 'name is true'}
        </p>
        <p>
          {(cats > 10) ? 'there are more cats than dogs' : 'there are more dogs than cats'}
          {undefined}
        	{null}
	        {false}
	        {true}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
