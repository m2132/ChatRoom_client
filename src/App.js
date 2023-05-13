import React from 'react';
// import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Layout from "./components/Layout";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Chat from './components/chat';
// import AddRoom from './components/AddRoom';
import AddRoom from './components/AddRoom';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import io from 'socket.io-client';

// const socket = io.connect('http://localhost:4000');

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  // const [username, setUsername] = useState('');
  // const [room, setRoom] = useState('');

  return (
    <div className="App">
      <CacheProvider value={cacheRtl}>
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
            {/* <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />}
          />
            <Route
            path='/addroom'
            element={<AddRoom username={username} room={room} socket={socket} />}
          /> */}
          </Routes>
          
        </Layout>
        </CacheProvider>
    </div>
  );
}

export default App;
