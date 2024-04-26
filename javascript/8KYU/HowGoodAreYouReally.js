function betterThanAverage(classPoints, yourPoints) {
  // Check if classPoints is a list and has elements
  if (!Array.isArray(classPoints) || classPoints.length === 0) {
    throw new Error("Invalid classPoints argument");
  }

  // Calculate the average score
  const averageScore = classPoints.reduce((acc, score) => acc + score, 0) / classPoints.length;

  // Return true if your score is higher than the average
  return yourPoints > averageScore;
}
