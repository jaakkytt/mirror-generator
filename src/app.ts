import { readFile } from './readfile'
import { draw } from './draw'

const fileSelector = document.getElementById('fileSelector') as HTMLInputElement
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const temp = 'https://jaak.kytt.ee/images/jk128_2.webp'

async function handleFileSelect(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (file) {
        await draw(await readFile(file), canvas).catch(console.error)
    } else {
        await draw(temp, canvas).catch(console.error)
    }
}

fileSelector.addEventListener('change', handleFileSelect)

draw(temp, canvas).catch(console.error)
