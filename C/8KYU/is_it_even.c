#include <stdbool.h>

/**
 * code will determine if the number passed is even (or not)
 * @param number
 * @return
 */

bool is_even(double n) {
  if (n == (int)n) {
    if ((int)n % 2 == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
