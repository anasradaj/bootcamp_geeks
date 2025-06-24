import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    input: '',
    response: ''
  };

  async componentDidMount() {
    const res = await fetch('http://localhost:5000/api/hello');
    const data = await res.json();
    this.setState({ message: data.message });
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: this.state.input })
    });
    const data = await res.json();
    this.setState({ response: data.message });
  };

  render() {
    return (
      <div style={{ padding: '2em' }}>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit} style={{ margin: '2em 0' }}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Type something..."
          />
          <button type="submit">Send</button>
        </form>
        {this.state.response && <div><strong>Server response:</strong> {this.state.response}</div>}
      </div>
    );
  }
}

export default App;
