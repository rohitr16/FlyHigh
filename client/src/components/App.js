import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Footer from './Footer';
import Landing from './Landing';
import Error from './Error';
import "../css/App.css";


function App() {

    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
}

export default connect(null , actions)(App);
