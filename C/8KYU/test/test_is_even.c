#include <criterion/criterion.h>
#include <stdbool.h>

// Function prototype
bool is_even(double n);
void do_test(double n, bool expected);

void do_test(double n, bool expected) {
  bool result = is_even(n);
  cr_assert(result == expected, "Expected %d but got %d for input %f", expected,
            result, n);
}

Test(is_even, example_tests) {
  do_test(0, true);
  do_test(0.5, false);
  do_test(1, false);
  do_test(2, true);
  do_test(-4, true);
}
