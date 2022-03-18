import CardOne from "./components/CardOne";
import CardTwo from './components/CardTwo';
import CardThree from './components/CardThree';
import CardFour from "./components/CardFour";
import CardFive from './components/CardFive';

function App() {
  return (
    <div className="container">
      <div className="subcontainer">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
        <CardFive />
      </div>
    </div>
  );
}

export default App;
