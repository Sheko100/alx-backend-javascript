export default function updateStudentGradeByCity(allStdnts, city, newGrades) {
  let stdnts = [];

  if (Array.isArray(allStdnts)) {
    stdnts = allStdnts.filter((stdnt) => stdnt.location === city);
    stdnts = stdnts.map((stdnt) => {
      const stdntCpy = stdnt;
      newGrades.every((newGrade) => {
        if (newGrade.studentId === stdnt.id) {
          stdntCpy.grade = newGrade.grade;
          return false;
        }
        stdntCpy.grade = 'N/A';
        return true;
      });
      return stdntCpy;
    });
  }
  return stdnts;
}
