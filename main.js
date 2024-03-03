import {generateImageList, generatePageButton} from "./src/generate.js"

const body = document.getElementsByTagName('body')[0]

run()

async function run()
{
    // 이미지의 가로 크기, 불러올 이미지 개수
    const imageList = await generateImageList(300, 5)
    body.appendChild(imageList)

    // n개의 페이지 버튼을 생성
    const pageButton = generatePageButton(6)
    body.appendChild(pageButton)
}