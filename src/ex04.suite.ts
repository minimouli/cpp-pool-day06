/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { GPP, Path, expect, suite, test } from '@minimouli/framework'

suite('Exercise 04', () => {

    test('#1', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex04/main1.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Assistant 1: \'morning everyone *sip coffee*',
            'Assistant 1: see you tomorrow at 9.00 *sip coffee*',
            ''
        ])
    })

    test('#2', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex04/main2.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Assistant 2: \'morning everyone *sip coffee*',
            'Student Alice: I\'m ready to learn C++.',
            'Assistant 2: drink this, Alice *sip coffee*',
            'Student Alice: Red Bull gives you wings!',
            'Student Alice: Wow, much learning today, very smart, such C++.',
            'Assistant 2: see you tomorrow at 9.00 *sip coffee*',
            ''
        ])
    })

    test('#3', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex04/main3.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Assistant 3: \'morning everyone *sip coffee*',
            'Assistant 3: Alice needs a Red Bull *sip coffee*',
            'Assistant 3: see you tomorrow at 9.00 *sip coffee*',
            ''
        ])
    })

    test('#4', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex04/main4.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Assistant 4: \'morning everyone *sip coffee*',
            'Student Alice: I\'m ready to learn C++.',
            'Assistant 4: Alice needs a Red Bull *sip coffee*',
            'Assistant 4: drink this, Alice *sip coffee*',
            'Student Alice: Red Bull gives you wings!',
            'Student Alice: Wow, much learning today, very smart, such C++.',
            'Assistant 4: see you tomorrow at 9.00 *sip coffee*',
            ''
        ])
    })

    test('#5', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex04/main5.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Assistant 5: \'morning everyone *sip coffee*',
            'Assistant 5: see you tomorrow at 9.00 *sip coffee*',
            ''
        ])
    })

    test('#6', async () => {

        const gpp = new GPP([
            Path.fromProject('./seminar/Assistant.cpp'),
            Path.fromProject('./seminar/Student.cpp'),
            Path.fromMoulinette('./res/ex04/main6.cpp')
        ])
        const exec = await gpp.execute([
            `-I${Path.fromProject('./seminar').toString()}`
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput([
            'Assistant 6: \'morning everyone *sip coffee*',
            'Student Alice: I\'m ready to learn C++.',
            'Assistant 6: Alice seems fine *sip coffee*',
            'Student Alice: Wow, much learning today, very smart, such C++.',
            'Assistant 6: see you tomorrow at 9.00 *sip coffee*',
            ''
        ])
    })

})
