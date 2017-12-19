// 参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators
// 备注：无

// 赋值（x = y）
// 加赋值（x += y）
// 减赋值（x -= y）
// 乘赋值（x *= y）
// 除赋值（x /= y）
// 模赋值（x %= y）

// 左移赋值：左移赋值运算符使变量向左移动指定位数的比特位，然后把结果赋给该变量
// x <<= y 等同于 x = x << y
var bar = 5; //  (00000000000000000000000000000101)
bar <<= 2; // 20 (00000000000000000000000000010100)

// 右移赋值：右移赋值运算符使变量向右移指定位数的比特位，然后把结果赋给该变量
// x >>= y 等同于 x = x >> y
var bar = 5; //   (00000000000000000000000000000101)
bar >>= 2;   // 1 (00000000000000000000000000000001)

var bar = -5; //    (-00000000000000000000000000000101)
bar >>= 2;  // -2 (-00000000000000000000000000000010)

// 无符号右移赋值：无符号右移赋值运算符向右移动指定数量的比特位，然后把结果赋给变量
// x >>>= y 等同于 x = x >>> y
var bar = 5; //   (00000000000000000000000000000101)
bar >>>= 2;  // 1 (00000000000000000000000000000001)

var bar = -5; // (-00000000000000000000000000000101)
bar >>>= 2; // 1073741822 (00111111111111111111111111111110)

// 按位与赋值：按位与赋值运算符使用两个操作值的二进制表示，执行按位与运算，并把结果赋给变量
// x &= y 等同于 x = x & y
var bar = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
bar &= 2; // 0

// 按位异或赋值：按位异或赋值运算符使用两个操作值的二进制表示，执行二进制异或运算，并把结果赋给变量
// x ^= y 等同于 x = x ^ y
var bar = 5;
bar ^= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111

// 按位或赋值
// x |= y 等同于 x = x | y
var bar = 5;
bar |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111

