import './App.css'

import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  // This use effect get the fact information from the endpoint

  const handelClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Hola mundo</h1>
      <section>
        <button onClick={handelClick}>Get random fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='Image extracted from an enpoint cats' />}
      </section>
    </main>
  )
}
