import React from 'react'
import HooksMenu from './HooksMenu';
import ExplainUseState from './UseStateHook/ExplainUseState';
import { useRoutes } from 'react-router';
import ExplainUseEffectHook from './useEffectHook/ExplainUseEffectHook';
import ExplainUseReducerHook from './useReducerHook/ExplainUseReducerHook';
import ExplainUseRef from './useRef/ExplainUseRef';
import ExplainUseContext from './useContext/ExplainUseContext';

function HooksRoute() {
    const routes = useRoutes([
        {
          path: "/",
          element: <HooksMenu />,
          children: [
            {
              path: "explainUseState",
              element: <ExplainUseState />,
            },
            {
              path: "explainUseEffectHook",
              element: <ExplainUseEffectHook />,
            },
            {
              path: "explainUseReducerHook",
              element: <ExplainUseReducerHook />,
            },
            {
              path: "explainUseRef",
              element: <ExplainUseRef />,
            },
            {
              path: "explainUseContext",
              element: <ExplainUseContext />,
            },
          
          ],
        },
      ]);
      return routes;
}

export default HooksRoute