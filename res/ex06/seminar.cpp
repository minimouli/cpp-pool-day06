/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <cstdio>
#include "Assistant.hpp"
#include "Dean.hpp"
#include "Seminar.hpp"
#include "Student.hpp"

int main() {

    remove("Jennifer.drink");
    remove("Brian.drink");
    remove("Kevin.drink");
    remove("Dwayne.drink");
    remove("Priscilla.drink");
    remove("Stewie.drink");

    Dean        dean_thaynam("Thay-Nam");
    Dean        dean_devoille("Devoille");
    Assistant   ass_42(42);
    Assistant   ass_24(24);
    Assistant   ass_2077(2077);
    Student     stud_jennifer("Jennifer");
    Student     stud_brian("Brian");
    Student     stud_kevin("Kevin");
    Student     stud_dwayne("Dwayne");
    Student     stud_priscilla("Priscilla");
    Student     stud_stewie("Stewie");

    Seminar seminar;

    seminar.run();

    seminar.addDean(&dean_thaynam);
    seminar.addDean(&dean_devoille);
    seminar.addAssistant(&ass_42);
    seminar.addAssistant(&ass_24);
    seminar.addAssistant(&ass_42);
    seminar.addAssistant(&ass_2077);
    seminar.addStudent(&stud_jennifer);
    seminar.addStudent(&stud_brian);
    seminar.addStudent(&stud_kevin);
    seminar.addStudent(&stud_dwayne);
    seminar.addStudent(&stud_brian);
    seminar.addStudent(&stud_priscilla);
    seminar.addStudent(&stud_stewie);

    seminar.run();

    return 0;
}
