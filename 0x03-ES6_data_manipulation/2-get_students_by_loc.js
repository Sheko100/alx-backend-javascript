export default function getStudentsByLocation(allStdnts, location) {
  let students = [];

  if (Array.isArray(allStdnts)) {
    students = allStdnts.filter((stdnt) => stdnt.location === location);
  }

  return students;
}
