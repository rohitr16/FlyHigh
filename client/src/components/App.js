import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Error from './Error';
import "../css/App.css";


function App() {

    return (
        <div className="container">
          <Header />
          <Routes>
            <Route  >
                <Route index element={<Landing />} />
                <Route path="/error" element={<Error />} />
            </Route>
          </Routes>     
          <Footer />
        </div>
    );
}

export default App;
