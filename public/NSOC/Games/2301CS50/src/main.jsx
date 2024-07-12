import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Intro from './pages/Intro.jsx'
import Game from './pages/Game.jsx'
import Tresure from './pages/Treasure.jsx'
import Treasurehuntbegin from './pages/Treasurehuntbegin.jsx'
import Midsem from './pages/Midsem.jsx'
import MA101 from './pages/MA101.jsx'
import PH103 from './pages/PH103.jsx'
import EE101 from './pages/EE101.jsx'
import HS from './pages/HS.jsx'
import Fest from './pages/Fest.jsx'
import Volunteer from './pages/Volunteer.jsx'
import Candidate from './pages/Candidate.jsx'
import Spectator from './pages/Spectator.jsx'
import EndSem from './pages/EndSem.jsx'
import GoodResults from './pages/GoodResults.jsx'
import Coding from './pages/Coding.jsx'
import MCCodingReels from './pages/MCCodingReels.jsx'
import FinalChallenge from './pages/FinalChallenge.jsx'
import Subcoord from './pages/Subcoord.jsx'
import Hidden from './pages/Hidden.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
  {
    path: "/treasure",
    element: <Tresure/>,
  },
  {
    path: "/treasure/begin",
    element: <Treasurehuntbegin/>,
  },
  {
    path: "/midsem",
    element: <Midsem/>,
  },
  {
    path: "/midsem/MA101",
    element: <MA101/>,
  },
  {
    path: "/midsem/PH103",
    element: <PH103/>,
  },
  {
    path: "/midsem/EE101",
    element: <EE101/>,
  },
  {
    path: "/midsem/HS",
    element: <HS />,
  },
  {
    path:"/fest",
    element:<Fest/>
  },
  {
    path: "/fest/volunteer",
    element: <Volunteer />,
  },
  {
    path: "/fest/candidate",
    element: <Candidate />,
  },
  {
    path: "/fest/spectator",
    element: <Spectator />,
  },
  {
    path: "/EndSem",
    element: <EndSem/>,
  },
  {
    path :"/GoodResults",
    element:<GoodResults/>
  },
  {
    path:"/Coding",
    element:<Coding/>
  },
  {
    path:"/MCCodingReels",
    element:<MCCodingReels/>
  },
  {
    path:"/final-challenge",
    element:<FinalChallenge/>
  },
  {
    path:"/subcoord-quiz",
    element:<Subcoord/>
  },
  {
    path:"/hidden",
    element:<Hidden/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
