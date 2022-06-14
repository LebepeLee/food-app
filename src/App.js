
import './App.css';
import Items from './components/Items'
import './components/Items.css'


function App() {
  const Pictures = ['Rato.jpg','Noks.jpg','Ash.jpg','Lerato.jpg']

  function PictureClicked(pic){
    console.log(`clicked pic is ${pic}`)
  }
  return (
    <div className="App">
      <Items Pictures={Pictures} handleClick={PictureClicked} />
      <Items Pictures={Pictures} handleClick={PictureClicked} />
    </div>
  );
}

export default App;
