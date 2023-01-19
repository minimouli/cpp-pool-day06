/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Makefile, Path, beforeAll, expect, suite, test } from '@minimouli/framework'

suite('Exercise 02', () => {

    let make: Makefile

    beforeAll(() => {
        make = new Makefile(Path.fromProject('./ex02'))
    })

    suite('Celsius', () => {

        test('10 Celsius', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex02/RetardUnitConverter'))
            exec.setStdin([
                '10 Celsius', ''
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput(['          50.000      Fahrenheit', ''])
        })

        test('-30 Celsius', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex02/RetardUnitConverter'))
            exec.setStdin([
                '-30 Celsius', ''
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput(['         -22.000      Fahrenheit', ''])
        })

    })

    suite('Fahrenheit', () => {

        test('60.8 Fahrenheit', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex02/RetardUnitConverter'))
            exec.setStdin([
                '60.8 Fahrenheit', ''
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput(['          16.000         Celsius', ''])
        })

        test('-22 Fahrenheit', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex02/RetardUnitConverter'))
            exec.setStdin([
                '-22 Fahrenheit', ''
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput(['         -30.000         Celsius', ''])
        })

    })

})
