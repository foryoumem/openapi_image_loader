import {generateImageInfo} from "./src/generate.js"

const body = document.getElementsByTagName('body')[0]

run()

async function run()
{
    const imageInfo = await generateImageInfo()
    body.appendChild(imageInfo)
}
