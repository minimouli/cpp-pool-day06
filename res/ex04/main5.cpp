/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <cstdio>
#include <iostream>
#include "Assistant.hpp"
#include "Student.hpp"

int main() {

    if (remove("Alice.drink") != 0) {
        std::cout << "Unable to remove Alice.drink" << std::endl;
        return 1;
    }

    Assistant assistant(5);
    assistant.readDrink("Alice");

    return 0;
}
