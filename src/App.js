import './App.css';
import Card from '@material-ui/core/Card';
import Bio from "./sample";


function App() {
  return (
    <Card className="card" variant="outlined">
      <img src="/asserts/picture.png" className="img2"  alt="profile" width="170" height="170"/>
     <Bio></Bio>
    </Card>
  );
}

export default App;
