export default function({ dispatch }) {
  return next => action => {
    // if action does not have a payload
    // or the payload doesn't have a .then property
    // send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    // make sure the action's promise resolves
    action.payload
      .then(function(response) {
        // create new action with the old type
        // but replace the promise with the response data
        const newAction = { ...action, payload: response };
        // take this action and send it through the topmost reducer again
        dispatch(newAction);
      });
  }

}
