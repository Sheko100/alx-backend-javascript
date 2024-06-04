export default function getListStudentIds(stdntsArr) {
  let ids = {};

  if (Array.isArray(stdntsArr)) {
    ids = stdntsArr.map((stdnt) => stdnt.id);
  }

  return ids;
}
