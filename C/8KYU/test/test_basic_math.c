#include <criterion/criterion.h>

int basic_op(char op, int value1, int value2);
void do_test(char op, int value1, int value2, int expected);

void do_test(char op, int value1, int value2, int expected) {
  int result = basic_op(op, value1, value2);
  cr_assert(result == expected, "Expected %d but got %d", expected, result);
}

Test(basic_addition, basic_tests) { do_test('+', 4, 7, 11); }

Test(basic_subtraction, basic_tests) { do_test('-', 4, 7, -3); }

Test(basic_multiplication, basic_tests) { do_test('*', 4, 7, 28); }

Test(basic_division, basic_tests) { do_test('/', 4, 7, 0); }
