import './App.css';
import Contribute from './components/Contribute';
 import Home from './components/home';
 import NavBar from './components/navbar';
import ProTips from './components/ProTips';
import About from './components/About';
import { Outlet, createBrowserRouter  } from 'react-router-dom';
 export const appRouter = createBrowserRouter([{
  path : '/',
  element : <App/>,
  children: [
    {
      path: "/contribute",
      element:  <Contribute/>
    },
    {
      path : '/',
      element : <Home/>
    },
    {
      path : '/home',
      element : <Home/>
    },
    {
      path : '/protips',
      element : <ProTips/>
    },
    {
      path : '/about',
      element : <About/>
    }
  ]

}])
function App() {
  // console.log("Complete");

  return (
    <section>
        
       <Outlet/>
     
    </section>
  );
}

export default App;
