/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Makefile, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 00', () => {

    let make: Makefile

    beforeAll(() => {
        make = new Makefile(Path.fromProject('./ex00'))
    })

    test('Without arguments', async () => {

        await make.execute()

        const exec = new Executable(Path.fromProject('./ex00/Z'))
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput(['z', ''])
    })

    test('With one argument', async () => {

        await make.execute()

        const exec = new Executable(Path.fromProject('./ex00/Z'), [
            '42'
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput(['z', ''])
    })

    test('With two arguments', async () => {

        await make.execute()

        const exec = new Executable(Path.fromProject('./ex00/Z'), [
            'hello', 'world'
        ])
        await exec.execute()

        expect(exec).toExitWith(0)
        await expect(exec).toOutput(['z', ''])
    })

})
