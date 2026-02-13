function analyzeScores(scoresArray) {
  let excellentCount = 0;
  let passCount = 0;
  let failCount = 0;
  let totalScore = 0;
  let totalStudents = 0;

  for (let i = 0; i < scoresArray.length; i++) {
    let num = Number(scoresArray[i]);

    if (isNaN(num)) continue;

    totalStudents++;
    totalScore += num;

    if (num >= 90) {
      excellentCount++;
    } else if (num >= 60) {
      passCount++;
    } else {
      failCount++;
    }

    let status = num >= 60 ? "Passed" : "Failed"; 
  }

  let averageScore =
    totalStudents === 0 ? 0 : Number((totalScore / totalStudents).toFixed(2));

  return {
    totalStudents,
    excellent: excellentCount,
    pass: passCount,
    fail: failCount,
    averageScore
  };
}

const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];
const result = analyzeScores(scores);
console.log(result);