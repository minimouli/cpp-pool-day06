/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 05', () => {

    test('Emily', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Dean.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex05/emily.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Dean Emily: I\'m Dean Emily! How do you do, fellow kids?',
            'Dean Emily: Time to go home.',
            ''
        ])
    })

    test('Joshua', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Dean.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex05/joshua.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Dean Joshua: I\'m Dean Joshua! How do you do, fellow kids?',
            'Student Alice: I\'m ready to learn C++.',
            'Student Alice: Learning C++',
            'Student Alice: Wow, much learning today, very smart, such C++.',
            'Dean Joshua: Time to go home.',
            ''
        ])
    })

    test('Matthew', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Dean.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex05/matthew.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Dean Matthew: I\'m Dean Matthew! How do you do, fellow kids?',
            'Student Alice: I\'m ready to learn C++.',
            'Student Alice: Learning C++',
            'Student Alice: Learning C++ again',
            'Student Alice: Learning shit again again',
            'Dean Matthew: All work and no play makes Alice a dull student.',
            'Student Alice: Wow, much learning today, very smart, such C++.',
            'Dean Matthew: Time to go home.',
            ''
        ])
    })

})
