#include <criterion/criterion.h>

int goals(int, int, int);

Test(goals_test, basic_tests) {
  cr_assert_eq(goals(0, 0, 0), 0);
  cr_assert_eq(goals(43, 10, 5), 58);
  cr_assert_eq(goals(43, 10, 10), 63);
}
