import React from 'react'
import { useRoutes } from 'react-router';
import ProjectMenu from './ProjectMenu';
import ToDoList from './ToDoList';


function ProjectRoute() {
    const routes = useRoutes([
        {
          path: "/",
          element: <ProjectMenu />,
          children: [
            {
              path: "todolist",
              element: <ToDoList />,
            },
          
          
          ],
        },
      ]);
      return routes;
}

export default ProjectRoute