import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import routes from '@app/constants/routes.json';

import App from './App';

const LazyRecordPage = React.lazy(
  () => import(/* webpackChunkName: "RecordPage" */ '@app/pages/record')
);
const RecordPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<CircularProgress />}>
    <LazyRecordPage {...props} />
  </React.Suspense>
);
const LazyStatisticsPage = React.lazy(
  () => import(/* webpackChunkName: "StatisticsPage" */ '@app/pages/statistics')
);
const StatisticsPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<CircularProgress />}>
    <LazyStatisticsPage {...props} />
  </React.Suspense>
);
const LazySettingsPage = React.lazy(
  () => import(/* webpackChunkName: "SettingsPage" */ '@app/pages/settings')
);
const SettingsPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<CircularProgress />}>
    <LazySettingsPage {...props} />
  </React.Suspense>
);

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path="/">
          <Redirect to={routes.RECORD} />
        </Route>
        <Route path={routes.RECORD} component={RecordPage} />
        <Route path={routes.STATISTICS} component={StatisticsPage} />
        <Route path={routes.SETTINGS} component={SettingsPage} />
      </Switch>
    </App>
  );
}
