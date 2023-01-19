/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "Assistant.hpp"
#include "Student.hpp"

int main() {
    Assistant assistant(2);
    Student alice("Alice");

    assistant.giveDrink(&alice, "Red Bull");
    return 0;
}
