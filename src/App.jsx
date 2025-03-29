import {Suspense} from 'react'
import './App.css'
import Bottles from './components/bottles/bottles'
 

const bottlesPromise = fetch('./bottles.json').then(res=> res.json())


function App() {
//   const bottles =[
//     { "id": 1, 
//       "name": "Dew Classic Bottle",
//        "price": 200, 
//        "color": "green", 
//        "weight": "500g", 
//        "suitableFor": "cold",
//         "lifespan": "2 years",
//         "image": "https://example.com/path/to/dew-classic-bottle.jpg"
//        },

//     { "id": 2,
//        "name": "Dew Sports Bottle",
//         "price": 300, 
//         "color": "black",
//          "weight": "450g", 
//          "suitableFor": "cold",
//           "lifespan": "3 years",
//           "image": "https://example.com/path/to/dew-classic-bottle.jpg"
//          },
//     { "id": 3,
//        "name": "Dew Limited Edition",
//         "price": 350,
//          "color": "dark green",
//           "weight": "550g",
//            "suitableFor": "hot & cold", "lifespan": "5 years",
//            "image": "https://example.com/path/to/dew-classic-bottle.jpg"
//            },
//     { "id": 4,
//        "name": "Dew Eco Bottle",
//         "price": 180,
//          "color": "light green",
//           "weight": "400g",
//            "suitableFor": "hot",
//             "lifespan": "1.5 years",
//             "image": "https://example.com/path/to/dew-classic-bottle.jpg"
//            },
//     { "id": 5, 
//       "name": "Dew Chiller Bottle", 
//       "price": 400, 
//       "color": "neon green", 
//       "weight": "600g", "suitableFor": "cold", 
//       "lifespan": "4 years",
//       "image": "https://example.com/path/to/dew-classic-bottle.jpg"
//      }
// ];


// console.log(bottles);




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
