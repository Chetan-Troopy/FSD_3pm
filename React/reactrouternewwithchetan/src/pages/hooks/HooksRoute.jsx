import React from 'react'
import HooksMenu from './HooksMenu';
import ExplainUseState from './UseStateHook/ExplainUseState';
import { useRoutes } from 'react-router';
import ExplainUseEffectHook from './useEffectHook/ExplainUseEffectHook';

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
          
          ],
        },
      ]);
      return routes;
}

export default HooksRoute