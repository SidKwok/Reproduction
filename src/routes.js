import Loadable from 'react-loadable'
import MainView from './MainView'

const AsyncOne = Loadable({
  loader: () => import(/* webpackChunkName: "route-download" */ './AsyncOne'),
  loading: () => null
})

const AsyncTwo = Loadable({
  loader: () => import(/* webpackChunkName: "route-download" */ './AsyncTwo'),
  loading: () => null
})

export default [
  {
    path: '/',
    component: MainView,
    childRoutes: [
      {
        path: '/async-one',
        component: AsyncOne
      },
      {
        path: '/async-two',
        component: AsyncTwo
      }
    ]
  }
]
