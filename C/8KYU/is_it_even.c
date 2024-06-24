#include <math.h>
#include <stdbool.h>

/**
 * Function to determine if the number passed is even or not
 * @param n - the number to check
 * @return true if the number is even, false otherwise
 */
bool is_even(double n) {
  // If the number is an integer and the remainder when divided by 2 is 0, it is
  // even
  return fmod(n, 2) == 0.0;
}
