import Home from './pages/home/Home'
import { GlobalStyle } from './style/global'
import { PokemonProvider } from './context/PokemonProvider'

function App() {


  return (
    <>
      <PokemonProvider>
        <GlobalStyle />
        <Home />

      </PokemonProvider>

    </>
  )
}

export default App
