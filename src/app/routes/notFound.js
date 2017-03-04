import LandingContainer from 'app/modules/landing/containers/LandingContainer';

export default {
  path: '*',
  component: LandingContainer,
  getIndexRoute(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, { component: require('app/components/NotFound') });
    });
  }
};
