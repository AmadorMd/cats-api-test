import { useEffect, useState } from 'react'
export function useCatImage ({ fact }) {
  const CAT_PREFIX_URL = 'https://cataas.com/'
  const [imageUrl, setImageUrl] = useState()
  // useEfect to get the image using the fact three words
  useEffect(() => {
    if (!fact) return
    // const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return { imageUrl: `${CAT_PREFIX_URL}${imageUrl}` }
}
