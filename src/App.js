import React from 'react'
import  Header from './Components/header/header';

import Footer from './Components/header/Footer/Footer';
import Main from './Components/Main/Main';
import SecondHighlight from './Components/SecondHighlight/SecondHighlight';
import ThirdHighlight from './Components/ThirdHighlight/ThirdHighlight';
import FourthHighlight from './Components/FourthHighlight/FourthHighlight';
import FifthHighlight from './Components/FifthHighlight/FifthHighlight';
import SixthHighlight from './Components/SixthHighlight/SixthHighlight';


 function App() {
  return (
    <div>
       <Header />
       <Main />
       <SecondHighlight />
       <ThirdHighlight />
       <FourthHighlight />
       <FifthHighlight />
       <SixthHighlight />
       <Footer />
            
    </div>
  )
}
export default App;