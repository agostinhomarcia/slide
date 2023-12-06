
import Slider from './components/Slider';

import arrayImagens from './db/imagens';

function App() {
  return (
    <div>
      <Slider images={arrayImagens} />
    </div>
  );
}

export default App;
