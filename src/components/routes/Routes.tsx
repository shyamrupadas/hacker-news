import { Redirect, Route, Switch } from 'react-router-dom';
import { StoriesPage } from '../../pages/StoriesPage';

export const Routes = () => (
<Switch>
  <Route path={'/'} component={StoriesPage} exact />
  {/*<Route path={'/story/:id'} component={StoriesItemPage} />*/}
  <Redirect to={'/'} />
</Switch>
)
