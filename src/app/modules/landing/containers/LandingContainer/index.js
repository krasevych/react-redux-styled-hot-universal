import React, {
  PropTypes,
  Component
} from 'react';
import Landing from 'app/modules/landing/components/Landing';

export default class LandingContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return <Landing {...this.props} />;
  }
}
