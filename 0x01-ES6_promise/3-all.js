import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  const createPrms = createUser();
  const upldPrms = uploadPhoto();

  return Promise.all([createPrms, upldPrms])
    .then((response) => {
      const name = response[0];
      const resObj = response[1];
      console.log(`${resObj.body} ${name.firstName} ${name.lastName}`);
    }, () => {
      console.log('Signup system offline');
    });
}
