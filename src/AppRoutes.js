import React from 'react';
// import Public from "./components/Public";
// import Private from "./components/Private";
import Home from "./components/Home";
import Login from "./components/Login";
// import TinyUrl from "./components/TinyUrl";
import Register from './components/Register';
import AddRoom from './components/AddRoom';
// import Chat from './components/chat/index.js'

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    // {
    //     path: '/',
    //     element: <Home />
    // },
    // {
    //     path: '/public',
    //     element: <Public />
    // },y
    // {
    //     path: '/private',
    //     element: <Private />
    // },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/addRoom',
        element: <AddRoom />
    },
    {
        path: '/register',
        element: <Register />
    },
    // {
    //     path: '/chat',
    //     element: <Chat />
    // },
    // {
    //     path: '/rooms',
    //     element: <TinyUrl />
    // },
];

export default AppRoutes;

