import CallbackExampleParent from './CallbackExampleParent';
import EffectExample from './EffectExample';
import ExampleCallback from './ExampleCallback';
import ExampleUseMemo from './ExampleUseMemo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import Home from './Home';
import About from './About';
import { useState } from 'react';
import UseReducerExample from './UseReducerExample';

const App = () => {
  const [value, setValue] = useState('hello from react');
  return (
    <Router>
      <div>
        {/* <nav> */}
        {/* <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav> */}
        {/* <UserContext.Provider value={{ value, setValue }}>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </UserContext.Provider> */}
        <UseReducerExample />
      </div>
    </Router>
  );
};

export default App;
