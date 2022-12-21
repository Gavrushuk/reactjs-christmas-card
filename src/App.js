import './App.scss';
import MoonImg from "./images/moon.svg";
import Tree1Img from "./images/tree1.svg";
import Tree2Img from "./images/tree2.svg";
import Tree3Img from "./images/tree3.svg";
import Paper1Img from "./images/paper1.svg";
import Paper2Img from "./images/paper2.svg";

function App() {
  return (
    <div className="christmas-card">
      <img className="moon-img" src={MoonImg} alt="Moon" />
      <img className="tree-1-img" src={Tree1Img} alt="Tree 1" />
      <img className="tree-2-img" src={Tree2Img} alt="Tree 2" />
      <img className="tree-3-img" src={Tree3Img} alt="Tree 3" />
      <img className="paper-1-img" src={Paper1Img} alt="Paper 1" />
      <img className="paper-2-img" src={Paper2Img} alt="Paper 2" />
    </div>
  );
}

export default App;
