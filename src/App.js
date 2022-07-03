import './App.scss';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HomePage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar />
      <Home/>
    </>
  )
}

export default App;
