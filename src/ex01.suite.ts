/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Executable, Makefile, Path, beforeAll, expect, suite, test } from '@minimouli/framework'
import { Descriptor } from '@minimouli/types/stream'

suite('Exercise 01', () => {

    let make: Makefile

    beforeAll(() => {
        make = new Makefile(Path.fromProject('./ex01'))
    })

    suite('Single file', () => {

        test('file1.txt', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex01/MyCat'), [
                Path.fromMoulinette('./res/ex01/file1.txt')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput(['hello world', ''])
        })

        test('file2.txt', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex01/MyCat'), [
                Path.fromMoulinette('./res/ex01/file2.txt')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput([
                'Oui, ma gatee, RS4 gris nardo, bien sur qu\'ils m\'ont rate (gros, bien sur)',
                'Soleil dans la bulle, sur le Prado, Shifter pro\' (Shifter pro\')',
                'Contre-sens (ah), ma cherie, tu es a contre-sens',
                'Puta, ou tu etais quand j\'mettais des sept euros d\'essence (hein) ?',
                'Tu veux nous faire la guerre (hein) ? Par Dieu, c\'est B (ah)',
                'Ça prend ton Audi, ca prend ta gadji, ça prend ta CB (eh, eh)',
                'Le telephone bippe (brr), que tu prends la kew (ew)',
                'C\'est Marseille, bebe (ah), sa mere un CDD (ah)',
                'Wesh alors, ma race, tranquille ou quoi ? (oh, mathafack)',
                'Grimpe dans la tchop, j\'fais zero a cent en deux secondes trois',
                'Guitarise, oh, AC/DC, oh, on s\'croise, c\'est sur, t\'es tetanise',
                ''
            ])
        })

        test('file3.txt', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex01/MyCat'), [
                Path.fromMoulinette('./res/ex01/file3.txt')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput(Path.fromMoulinette('./res/ex01/file3.txt'))
        })

    })

    suite('Multiple files', () => {

        test('test1.txt test2.txt', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex01/MyCat'), [
                Path.fromMoulinette('./res/ex01/file1.txt'),
                Path.fromMoulinette('./res/ex01/file2.txt')
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput([
                'hello world',
                'Oui, ma gatee, RS4 gris nardo, bien sur qu\'ils m\'ont rate (gros, bien sur)',
                'Soleil dans la bulle, sur le Prado, Shifter pro\' (Shifter pro\')',
                'Contre-sens (ah), ma cherie, tu es a contre-sens',
                'Puta, ou tu etais quand j\'mettais des sept euros d\'essence (hein) ?',
                'Tu veux nous faire la guerre (hein) ? Par Dieu, c\'est B (ah)',
                'Ça prend ton Audi, ca prend ta gadji, ça prend ta CB (eh, eh)',
                'Le telephone bippe (brr), que tu prends la kew (ew)',
                'C\'est Marseille, bebe (ah), sa mere un CDD (ah)',
                'Wesh alors, ma race, tranquille ou quoi ? (oh, mathafack)',
                'Grimpe dans la tchop, j\'fais zero a cent en deux secondes trois',
                'Guitarise, oh, AC/DC, oh, on s\'croise, c\'est sur, t\'es tetanise',
                ''
            ])
        })

    })

    suite('Standard input', () => {

        test('file2.txt', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex01/MyCat'))
            exec.setStdin([
                'Oui, ma gatee, RS4 gris nardo, bien sur qu\'ils m\'ont rate (gros, bien sur)',
                'Soleil dans la bulle, sur le Prado, Shifter pro\' (Shifter pro\')',
                'Contre-sens (ah), ma cherie, tu es a contre-sens',
                'Puta, ou tu etais quand j\'mettais des sept euros d\'essence (hein) ?',
                'Tu veux nous faire la guerre (hein) ? Par Dieu, c\'est B (ah)',
                'Ça prend ton Audi, ca prend ta gadji, ça prend ta CB (eh, eh)',
                'Le telephone bippe (brr), que tu prends la kew (ew)',
                'C\'est Marseille, bebe (ah), sa mere un CDD (ah)',
                'Wesh alors, ma race, tranquille ou quoi ? (oh, mathafack)',
                'Grimpe dans la tchop, j\'fais zero a cent en deux secondes trois',
                'Guitarise, oh, AC/DC, oh, on s\'croise, c\'est sur, t\'es tetanise',
                ''
            ])
            await exec.execute()

            expect(exec).toExitWith(0)
            await expect(exec).toOutput([
                'Oui, ma gatee, RS4 gris nardo, bien sur qu\'ils m\'ont rate (gros, bien sur)',
                'Soleil dans la bulle, sur le Prado, Shifter pro\' (Shifter pro\')',
                'Contre-sens (ah), ma cherie, tu es a contre-sens',
                'Puta, ou tu etais quand j\'mettais des sept euros d\'essence (hein) ?',
                'Tu veux nous faire la guerre (hein) ? Par Dieu, c\'est B (ah)',
                'Ça prend ton Audi, ca prend ta gadji, ça prend ta CB (eh, eh)',
                'Le telephone bippe (brr), que tu prends la kew (ew)',
                'C\'est Marseille, bebe (ah), sa mere un CDD (ah)',
                'Wesh alors, ma race, tranquille ou quoi ? (oh, mathafack)',
                'Grimpe dans la tchop, j\'fais zero a cent en deux secondes trois',
                'Guitarise, oh, AC/DC, oh, on s\'croise, c\'est sur, t\'es tetanise',
                ''
            ])
        })

    })

    suite('Error handling', () => {

        test('does_not_exist.txt', async () => {

            await make.execute()

            const exec = new Executable(Path.fromProject('./ex01/MyCat'), [
                'does_not_exist.txt'
            ])
            await exec.execute()

            expect(exec).toExitWith(84)
            await expect(exec).toOutput([
                'MyCat: does_not_exist.txt: No such file or directory',
                ''
            ], {
                descriptor: Descriptor.Stderr
            })
        })

    })

})
