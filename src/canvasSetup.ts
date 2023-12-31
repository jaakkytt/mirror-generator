const duration = 1000
let id: string | number | NodeJS.Timeout | undefined

function forceDownload(canvas: HTMLCanvasElement) {
    const a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = 'download.png'
    a.click()
}

export function setup(canvas: HTMLCanvasElement) {
    canvas.addEventListener('touchstart', () => {
        if (id) {
            clearTimeout(id)
        }
        id = setTimeout(() => forceDownload(canvas), duration)
    })

    canvas.addEventListener('touchend', () => {
        if (id) {
            clearTimeout(id)
        }
    })
}
