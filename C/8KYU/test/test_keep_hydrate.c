#include <criterion/criterion.h>

int Liters(double);

Test(keep_hydrate, should_pass_all_the_test) {
  cr_assert_eq(Liters(0), 0);
  cr_assert_eq(Liters(0.5), 0);
  cr_assert_eq(Liters(1), 0);
  cr_assert_eq(Liters(1.5), 0);
  cr_assert_eq(Liters(2), 1);
  cr_assert_eq(Liters(2.5), 1);
  cr_assert_eq(Liters(3), 1);
  cr_assert_eq(Liters(3.5), 1);
  cr_assert_eq(Liters(1.4), 0);
  cr_assert_eq(Liters(12.3), 6);
  cr_assert_eq(Liters(11.8), 5);
}
