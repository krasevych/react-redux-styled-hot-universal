import React, {
  Component,
  PropTypes
} from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { ReduxAsyncConnect } from 'redux-connect';
import appConfig from '../../app/config';

export default class Html extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    renderProps: PropTypes.object.isRequired,
    assets: PropTypes.object.isRequired,
    styles: PropTypes.string.isRequired
  };

  render() {
    const {
      store,
      renderProps,
      assets,
      styles
    } = this.props;

    const { isProd } = appConfig;
    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`;

    const content = renderToString(
      <Provider store={store}>
        <ReduxAsyncConnect {...renderProps} />
      </Provider>
    );

    return (
      <html lang="en">
        <head>
          <style dangerouslySetInnerHTML={{ __html: styles }} />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          {isProd && <script src={assets.javascript.vendor} />}
          <script src={assets.javascript.main} />
        </body>
      </html>
    );
  }
}
