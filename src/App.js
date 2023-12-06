
import Slider from './components/Slider';

import arrayImagens from './db/imagens';

function App() {
  return (
    <div>
      <h1 className="title">Galeria de Imagens</h1>
      <Slider images={arrayImagens} />
    </div>
  );
}

export default App;
