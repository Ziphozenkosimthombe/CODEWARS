#include <criterion/criterion.h>

int other_angle(int a, int b);

void do_test(int a, int b, int expected) {
  int result = other_angle(a, b);
  cr_assert(result == expected, "Expected %d but got %d", expected, result);
}

Test(other_angle_test, basic_tests) {
  do_test(30, 60, 90);
  do_test(60, 60, 60);
  do_test(43, 78, 59);
}
