import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Part I: Always allow update (set to false to block updates)
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
  }

  changeColor = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  deleteChild = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div style={{ margin: '2em 0' }}>
        <h2>My Favorite Color is {this.state.favoriteColor}</h2>
        <button onClick={this.changeColor}>Change color to blue</button>
        <button onClick={this.deleteChild} style={{ marginLeft: '1em' }}>Delete Child</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert('Child component is being unmounted!');
  }
  render() {
    return <h3>Hello World!</h3>;
  }
}

export default LifecycleDemo;
