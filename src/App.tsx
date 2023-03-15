import { useEffect, useState, lazy, Suspense } from 'react';
import './styles.css'

//@ts-ignore
const Nav = lazy(() => import('discoveryApp/nav'));

const App = () => {
  const [characterList, setCharacterList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://naruto-api.fly.dev/api/v1/characters');
      const data = await response.json();
      setCharacterList(data);
      setLoading(false);
    } catch(error) {
      console.log('ERROR fetch', error);
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Naruto dex</h1>
      <p>Search your Naruto Character</p>

      {isLoading && <h3>Loading Character...</h3>}
      <div className='list-wrapper'>
        {characterList.slice(0,20).map((item: any) => (
          <div className='list-item'>
            <img 
              src={item.images[0]}
              alt="character" 
              className='character-img' 
            />
            <h4>{item.name} | {item.info.Afiliação}</h4>
          </div>  
        ))}
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense> */}
    </div>
  )
}

export default App;
