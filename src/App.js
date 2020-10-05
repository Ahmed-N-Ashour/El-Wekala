import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>Welcome to El Wekala</h1>
        <Button>Press me</Button>
      </div>
    );
  }
}
export default App;
