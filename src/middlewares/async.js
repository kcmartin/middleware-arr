export default function({ dispatch }) {
  return next => action => {
    // if action does not have a payload
    // or the payload doesn't have a .then property
    // send it on
    if (!action.payload || !action.payload.then) {
      return next(action);
    }

    console.log('We dont have a promise', action);
  }

}
