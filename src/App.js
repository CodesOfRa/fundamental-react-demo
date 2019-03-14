import React, {Component} from 'react';
import './App.css';
import Button from 'fundamental-react/lib/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">

        <p>
          Fundamental React Sample Project
        </p>

        {/* </header> */}
        <Button>Click me</Button>
      </div>
    );
  }
}

export default App;
