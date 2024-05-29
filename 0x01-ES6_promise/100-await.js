import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photoRes;
  let userRes;
  const res = { photo: null, user: null };

  try {
    photoRes = await uploadPhoto();
    userRes = await createUser();
    res.photo = photoRes;
    res.user = userRes;
  } catch (e) {
    res.photo = null;
    res.user = null;
  }

  return res;
}
