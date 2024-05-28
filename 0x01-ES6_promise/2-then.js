export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    console.log('Got a response from the API');
    return { stddatus: 200, body: 'success' };
  }, () => Error());
}
