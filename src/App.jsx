import {Suspense} from 'react'
import './App.css'
import Bottles from './components/bottles/bottles'
 

const bottlesPromise = fetch('./bottles.json').then(res=> res.json())


function App() {






  return (
    <>
      
      <h2>water bottle</h2>
      <Suspense fallback ={<h3>Bottles are loading.....</h3>}>
        <Bottles bottlesPromise ={bottlesPromise}></Bottles>
      </Suspense>
     
    </>
  )
}

export default App
