import App from './App';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error'
import Shop from './pages/Shop/Shop'

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <App><Error /></App>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      }
    ]
  },
];

export default routes;
