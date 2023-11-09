import { readFileAsDataURL } from './fileUtils'

const temp = 'https://jaak.kytt.ee/images/jk128_2.webp'
const fileInput = document.getElementById('fileInput') as HTMLInputElement
const placeholderImage = document.getElementById('placeholderImage') as HTMLImageElement

async function handleFileUpload(event: Event) {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (file) {
        console.log('Uploaded file:', file)
        placeholderImage.src = await readFileAsDataURL(file);
    }
    else {
        console.log('No file selected.')
        placeholderImage.src = temp
    }
}

fileInput.addEventListener('change', handleFileUpload)
