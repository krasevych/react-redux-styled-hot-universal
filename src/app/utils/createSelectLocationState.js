export default function createSelectLocationState(reducerName) {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get(reducerName);

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
}
