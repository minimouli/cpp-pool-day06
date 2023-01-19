/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Dean.hpp"

int main() {
    Dean matthew("Matthew");
    Student alice("Alice");

    matthew.teachStudent(&alice, "Learning C++");
    matthew.teachStudent(&alice, "Learning C++ again");
    matthew.teachStudent(&alice, "Learning C++ again again");
    return 0;
}
