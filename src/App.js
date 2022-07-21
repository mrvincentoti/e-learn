// import logo from './logo.svg';
import './css/ui-fonts.css';
import './css/App.css';
import './css/props.css';
// screen
import Header from './screens/header';
import Sidebar from './screens/sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <Header />
    </div>
  );
}

export default App;
