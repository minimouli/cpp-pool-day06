/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <fstream>
#include <iostream>
#include "Assistant.hpp"
#include "Student.hpp"

int main() {

    std::ofstream file;
    file.open("Alice.drink", std::ios::out);
    if (file.is_open()) {
        file << "Red Bull";
        file.close();
    } else {
        std::cout << "Unable to create Alice.drink" << std::endl;
        return 1;
    }

    Assistant assistant(3);
    assistant.readDrink("Alice");

    return 0;
}
