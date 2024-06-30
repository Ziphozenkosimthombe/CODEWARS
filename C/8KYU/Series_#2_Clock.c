

/**
 * function that returns the number of milliseconds
 * since midnight, January 1, 1970
 * @param h - hours
 * @param m - minutes
 * @param s - seconds
 * @return milliseconds
 */


int past(int h, int m, int s) {
  int milliseconds = h * 3600000 + m * 60000 + s * 1000;
  return milliseconds;
}
