import { lazy, Suspense } from 'react';
import './styles.css'
import Counter from './components/Counter';

//@ts-ignore
const Nav = lazy(() => import('discoveryApp/nav'));

const App = () => {
  return (
    <>
      <h1>Hello world</h1>
      <Counter />
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </Suspense>
    </>
  )
}

export default App;
