/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 03', () => {

    test('Alice', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex03/alice.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Student Alice: I\'m ready to learn C++.',
            'Student Alice: Wow, much learning today, very smart, such C++.',
            ''
        ])
    })

    test('Amanda', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex03/amanda.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Student Amanda: I\'m ready to learn C++.',
            'Student Amanda: C\'est Marseille, bebe',
            'Student Amanda: Wow, much learning today, very smart, such C++.',
            ''
        ])
    })

    test('Bob', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex03/bob.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Student Bob: I\'m ready to learn C++.',
            'Student Bob: Red Bull gives you wings!',
            'Student Bob: Wow, much learning today, very smart, such C++.',
            ''
        ])
    })

    test('David', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex03/david.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Student David: I\'m ready to learn C++.',
            'Student David: Unleash The Beast!',
            'Student David: Wow, much learning today, very smart, such C++.',
            ''
        ])
    })

    test('Michael', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex03/michael.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Student Michael: I\'m ready to learn C++.',
            'Student Michael: ah, yes... enslaved moisture.',
            'Student Michael: Wow, much learning today, very smart, such C++.',
            ''
        ])
    })

    test('Sarah', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex03/sarah.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Student Sarah: I\'m ready to learn C++.',
            'Student Sarah: I\'m learning Java',
            'Student Sarah: I\'m learning C++',
            'Student Sarah: I\'m learning shit again',
            'Student Sarah: Red Bull gives you wings!',
            'Student Sarah: Ready to learn C++ again',
            'Student Sarah: shit is a very good language, long life to shit',
            'Student Sarah: Unleash The Beast!',
            'Student Sarah: Here we go again',
            'Student Sarah: Is that shit ?',
            'Student Sarah: ah, yes... enslaved moisture.',
            'Student Sarah: One more time, shit!',
            'Student Sarah: Wow, much learning today, very smart, such C++.',
            ''
        ])
    })

})
