import App from './App';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <App><Error /></App>,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
];

export default routes;
