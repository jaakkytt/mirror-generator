export function draw(src: string, canvas: HTMLCanvasElement): Promise<string> {
    return new Promise((resolve, reject) => {
        const context = canvas.getContext('2d')
        if (!context) {
            return reject(new Error('Canvas is not loaded'))
        }

        const image = new Image()

        image.onload = function() {
            canvas.width = image.width * 4
            canvas.height = image.height

            context.save()
            context.drawImage(image, 0, 0)
            context.drawImage(image, image.width * 2, 0)
            context.restore()

            context.save()
            context.scale(-1, 1)
            context.drawImage(image, image.width * -2, 0)
            context.drawImage(image, image.width * -4, 0)
            context.restore()

            resolve(src)
        }

        image.src = src
    })
}
