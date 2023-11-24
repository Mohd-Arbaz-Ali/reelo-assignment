function distributeMarks(totalMarks, difficultyDistribution, marksPerQuestion) {
  // Calculate the total marks for each difficulty level
  const easyMarks = totalMarks * difficultyDistribution["Easy"];
  const mediumMarks = totalMarks * difficultyDistribution["Medium"];
  const hardMarks = totalMarks * difficultyDistribution["Hard"];

  // Calculate the number of questions for each difficulty level
  const easyQuestions = easyMarks / marksPerQuestion["Easy"];
  const mediumQuestions = mediumMarks / marksPerQuestion["Medium"];
  const hardQuestions = hardMarks / marksPerQuestion["Hard"];

  // Round down the number of questions to ensure that the total marks are not exceeded
  const roundedEasyQuestions = Math.floor(easyQuestions);
  const roundedMediumQuestions = Math.floor(mediumQuestions);
  const roundedHardQuestions = Math.floor(hardQuestions);

  // Calculate the actual marks for each difficulty level
  const actualEasyMarks = roundedEasyQuestions * marksPerQuestion["Easy"];
  const actualMediumMarks = roundedMediumQuestions * marksPerQuestion["Medium"];
  const actualHardMarks = roundedHardQuestions * marksPerQuestion["Hard"];

  return {
    easyQuestions: roundedEasyQuestions,
    mediumQuestions: roundedMediumQuestions,
    hardQuestions: roundedHardQuestions,
    easyMarks: actualEasyMarks,
    mediumMarks: actualMediumMarks,
    hardMarks: actualHardMarks,
  };
}
