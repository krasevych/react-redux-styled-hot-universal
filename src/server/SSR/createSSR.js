import React from 'react';
import styleSheet from 'styled-components/lib/models/StyleSheet';
import { loadOnServer } from 'redux-connect';
import { renderToString } from 'react-dom/server';
import { syncHistoryWithStore } from 'react-router-redux';
import { createMemoryHistory, match } from 'react-router';

import Html from './html';
import routes from '../../app/routes';
import configureStore from '../../app/redux/store';
import { createSelectLocationState } from '../../app/utils';

export default function createSSR(assets) {
  return (req, res) => {
    const memoryHistory = createMemoryHistory(req.url);
    const store = configureStore(memoryHistory);
    const history = syncHistoryWithStore(memoryHistory, store, {
      selectLocationState: createSelectLocationState('routing')
    });

    match({ history, routes: routes(), location: req.url },
      (err, redirectLocation, renderProps) => {
        if (err) {
          res.status(500).send(err.message);
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          loadOnServer({ ...renderProps, store }).then(() => {
            const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
            const content = renderToString(<Html {...{ renderProps, store, assets, styles }} />);

            res.send(`<!doctype html>\n${content}`);
          });
        } else {
          res.status(404).send('Not found');
        }
      });
  };
}
