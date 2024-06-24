#include <criterion/criterion.h>

int32_t double_integer(int32_t n);

static void do_test(int32_t n, int32_t expected) {
  int32_t result = double_integer(n);
  cr_assert(result == expected, "Expected %d but got %d", expected, result);
}

Test(code_under_pressure, basic_tests) {
  do_test(0, 0);
  do_test(1, 2);
  do_test(2, 4);
  do_test(3, 6);
  do_test(4, 8);
}
