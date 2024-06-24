

/**
 *  function which calculates the average of the numbers in a given list.
 */

double find_average(const double array[], unsigned length) {
  double sum = 0;
  for (unsigned i = 0; i < length; i++) {
    sum += array[i];
  }
  if (length > 0) {
    double average = sum / length;
    return average;
  } else {
    return 0;
  }
}
