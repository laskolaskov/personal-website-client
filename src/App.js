import SketchContainer from './SketchContainer'
import testSketch from './test-sketch'

function App() {
  return (
    <div className="App">
      <p>Hi !</p>
      <SketchContainer sketch={testSketch} />
    </div>
  )
}

export default App