/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Dean.hpp"

int main() {
    Dean joshua("Joshua");
    Student alice("Alice");

    joshua.teachStudent(&alice, "Learning C++");
    return 0;
}
