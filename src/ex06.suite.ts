/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 06', () => {

    test('C++ seminar', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Dean.cpp'),
            Path.fromProject('./seminar/Seminar.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex06/seminar.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Dean Thay-Nam: I\'m Dean Thay-Nam! How do you do, fellow kids?',
            'Dean Devoille: I\'m Dean Devoille! How do you do, fellow kids?',
            'Assistant 42: \'morning everyone *sip coffee*',
            'Assistant 24: \'morning everyone *sip coffee*',
            'Assistant 2077: \'morning everyone *sip coffee*',
            'Student Jennifer: I\'m ready to learn C++.',
            'Student Brian: I\'m ready to learn C++.',
            'Student Kevin: I\'m ready to learn C++.',
            'Student Dwayne: I\'m ready to learn C++.',
            'Student Priscilla: I\'m ready to learn C++.',
            'Student Stewie: I\'m ready to learn C++.',
            'Seminar: A C++ seminar needs at least one Dean of Studies, one Assistant and one Student.',
            'Seminar: Dean Thay-Nam is here.',
            'Seminar: There can only be one Dean of Studies.',
            'Seminar: Assistant 42 joined the pedagogical team.',
            'Seminar: Assistant 24 joined the pedagogical team.',
            'Seminar: Assistant 42 is already registered.',
            'Seminar: There is only room for two Teaching Assistants.',
            'Seminar: Student Jennifer joined the seminar.',
            'Seminar: Student Brian joined the seminar.',
            'Seminar: Student Kevin joined the seminar.',
            'Seminar: Student Dwayne joined the seminar.',
            'Seminar: Student Brian is already registered.',
            'Seminar: Student Priscilla joined the seminar.',
            'Seminar: There is only room for five Students.',
            'Seminar: Begining 6th day of seminar.',
            'Dean of Studies: Thay-Nam',
            'Teaching assistants: 42, 24',
            'Students: Jennifer, Brian, Kevin, Dwayne, Priscilla',
            'Dean Thay-Nam: Where is everyone?',
            'Assistant 42: Time to teach some serious business *sip coffee*',
            'Assistant 24: Time to teach some serious business *sip coffee*',
            'Student Jennifer: I\'m learning C++!',
            'Assistant 42: Jennifer seems fine *sip coffee*',
            'Student Brian: I\'m learning C++!',
            'Assistant 24: Brian seems fine *sip coffee*',
            'Student Kevin: I\'m learning C++!',
            'Assistant 42: Kevin seems fine *sip coffee*',
            'Student Dwayne: I\'m learning C++!',
            'Assistant 24: Dwayne seems fine *sip coffee*',
            'Student Priscilla: I\'m learning C++!',
            'Assistant 42: Priscilla seems fine *sip coffee*',
            'Student Jennifer: I\'m learning C++!',
            'Assistant 24: Jennifer seems fine *sip coffee*',
            'Student Brian: I\'m learning C++!',
            'Assistant 42: Brian seems fine *sip coffee*',
            'Student Kevin: I\'m learning C++!',
            'Assistant 24: Kevin seems fine *sip coffee*',
            'Student Dwayne: I\'m learning C++!',
            'Assistant 42: Dwayne seems fine *sip coffee*',
            'Student Priscilla: I\'m learning C++!',
            'Assistant 24: Priscilla seems fine *sip coffee*',
            'Student Jennifer: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Jennifer a dull student.',
            'Assistant 42: Jennifer needs a Monster *sip coffee*',
            'Assistant 42: drink this, Jennifer *sip coffee*',
            'Student Jennifer: Unleash The Beast!',
            'Student Brian: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Brian a dull student.',
            'Assistant 24: Brian needs a Cristaline *sip coffee*',
            'Assistant 24: drink this, Brian *sip coffee*',
            'Student Brian: ah, yes... enslaved moisture.',
            'Student Kevin: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Kevin a dull student.',
            'Assistant 42: Kevin needs a Monster *sip coffee*',
            'Assistant 42: drink this, Kevin *sip coffee*',
            'Student Kevin: Unleash The Beast!',
            'Student Dwayne: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Dwayne a dull student.',
            'Assistant 24: Dwayne needs a Monster *sip coffee*',
            'Assistant 24: drink this, Dwayne *sip coffee*',
            'Student Dwayne: Unleash The Beast!',
            'Student Priscilla: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Priscilla a dull student.',
            'Assistant 42: Priscilla needs a Evian *sip coffee*',
            'Assistant 42: drink this, Priscilla *sip coffee*',
            'Student Priscilla: ah, yes... enslaved moisture.',
            'Student Jennifer: I\'m learning C++!',
            'Assistant 24: Jennifer seems fine *sip coffee*',
            'Student Brian: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Brian a dull student.',
            'Assistant 42: Brian needs a Red Bull *sip coffee*',
            'Assistant 42: drink this, Brian *sip coffee*',
            'Student Brian: Red Bull gives you wings!',
            'Student Kevin: I\'m learning C++!',
            'Assistant 24: Kevin seems fine *sip coffee*',
            'Student Dwayne: I\'m learning C++!',
            'Assistant 42: Dwayne seems fine *sip coffee*',
            'Student Priscilla: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Priscilla a dull student.',
            'Assistant 24: Priscilla needs a Monster *sip coffee*',
            'Assistant 24: drink this, Priscilla *sip coffee*',
            'Student Priscilla: Unleash The Beast!',
            'Student Jennifer: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Jennifer a dull student.',
            'Assistant 42: Jennifer needs a Cristaline *sip coffee*',
            'Assistant 42: drink this, Jennifer *sip coffee*',
            'Student Jennifer: ah, yes... enslaved moisture.',
            'Student Brian: I\'m learning C++!',
            'Assistant 24: Brian seems fine *sip coffee*',
            'Student Kevin: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Kevin a dull student.',
            'Assistant 42: Kevin needs a Cristaline *sip coffee*',
            'Assistant 42: drink this, Kevin *sip coffee*',
            'Student Kevin: ah, yes... enslaved moisture.',
            'Student Dwayne: I\'m learning shit!',
            'Dean Thay-Nam: All work and no play makes Dwayne a dull student.',
            'Assistant 24: Dwayne needs a Red Bull *sip coffee*',
            'Assistant 24: drink this, Dwayne *sip coffee*',
            'Student Dwayne: Red Bull gives you wings!',
            'Student Priscilla: I\'m learning C++!',
            'Assistant 42: Priscilla seems fine *sip coffee*',
            'Dean Thay-Nam: Don\'t forget to close the windows when you leave.',
            'Assistant 42: Enough teaching for today *sip coffee*',
            'Assistant 24: Enough teaching for today *sip coffee*',
            'Student Stewie: Wow, much learning today, very smart, such C++.',
            'Student Priscilla: Wow, much learning today, very smart, such C++.',
            'Student Dwayne: Wow, much learning today, very smart, such C++.',
            'Student Kevin: Wow, much learning today, very smart, such C++.',
            'Student Brian: Wow, much learning today, very smart, such C++.',
            'Student Jennifer: Wow, much learning today, very smart, such C++.',
            'Assistant 2077: see you tomorrow at 9.00 *sip coffee*',
            'Assistant 24: see you tomorrow at 9.00 *sip coffee*',
            'Assistant 42: see you tomorrow at 9.00 *sip coffee*',
            'Dean Devoille: Time to go home.',
            'Dean Thay-Nam: Time to go home.',
            ''
        ])
    })
})
