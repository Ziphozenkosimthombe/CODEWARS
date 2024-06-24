#include <criterion/criterion.h>
#include <stddef.h> // For NULL

// Declare the function find_average
double find_average(const double array[], unsigned length);

// Function to perform the test (similar to do_test)
void do_test(unsigned length, const double array[length], double expected) {
  double result = find_average(array, length);
  cr_assert_float_eq(result, expected, 0.0001, "Expected %.6f but got %.6f",
                     expected, result);
}

// Define the test cases
Test(tests_suite, fixed_tests) {
  do_test(0, NULL, 0.0);
  do_test(4, ((double[]){0, 0, 0, 0}), 0.0);
  do_test(13, ((double[]){17, 16, 16, 16, 16, 15, 17, 17, 15, 5, 17, 17, 16}),
          15.384615384615385);
  do_test(3, ((double[]){1, 2, 3}), 2.0);
}
