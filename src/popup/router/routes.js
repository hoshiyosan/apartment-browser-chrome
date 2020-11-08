import SearchPage from './pages/Search'
import SearchResultGeneralPage from './widgets/search/General'
import SearchResultDetailsPage from './widgets/search/Details'
import SearchResultPricingPage from './widgets/search/Pricing'

import NewFavoritePage from './pages/NewFavorite'
import BrowseFavoritesPage from './pages/BrowseFavorites'


export default [
  {
    path: '/',
    redirect: { path: '/search/general' }
  },
  {
    path: '/search', component: SearchPage, children: [{
      path: 'general',
      component: SearchResultGeneralPage,
    },
    {
      path: 'details',
      component: SearchResultDetailsPage,
    },
    {
      path: 'pricing',
      component: SearchResultPricingPage,
    }]
  },
  {
    path: '/favorite/new',
    component: NewFavoritePage
  },
  {
    path: '/favorites',
    component: BrowseFavoritesPage
  }
];
