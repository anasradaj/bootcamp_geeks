import Greeting from './Greeting';
import Counter from './Counter';
import UserCard from './UserCard';
import UserList from './UserList';


function App() {
  return (
    <div>
      <Greeting name="Anas" messageCount={10} />
      <Greeting name="Alice" messageCount={5} />
      <Counter />
      {/* With all optional props */}
      <UserCard name="Anas" age={30} role="Admin" />
      {/* With some missing props */}
      <UserCard name="Bob" />
      {/* Without any props */}
      <UserCard />
      <UserList />
    </div>
  );
}

export default App;