export default function getStudentIdsSum(allStdnts) {
  let idSum = 0;

  if (Array.isArray(allStdnts)) {
    idSum = allStdnts.reduce((lastRes, stdnt) => lastRes + stdnt.id, 0);
  }

  return idSum;
}
