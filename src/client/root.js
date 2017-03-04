import React, {
  Component,
  PropTypes
} from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { ReduxAsyncConnect } from 'redux-connect';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: React.PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]).isRequired
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <Router
          key={module.hot && new Date()}
          render={props => <ReduxAsyncConnect {...props} />}
          {...this.props}
        />
      </Provider>
    );
  }
}
