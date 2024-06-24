

/**
 * functio that calculate the third angle of a triangle
 */

int other_angle(int a, int b) {
  int totalOfAngles = 180;
  int twoAngles = a + b;
  int thirdAngle = totalOfAngles - twoAngles;
  return thirdAngle;
}
