import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises).then((results) => {
    const resArr = [];
    results.forEach((result) => {
      const res = { status: null, value: null };
      res.status = result.status;
      if ('reason' in result) {
        res.value = result.reason;
      } else {
        res.value = result.value;
      }
      resArr.push(res);
    });
    return resArr;
  });
}
