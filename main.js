import {generateImageList, generatePageButton} from "./src/generate.js"

const body = document.getElementsByTagName('body')[0]

run()

async function run()
{
    // 이미지의 width, height, page per max image
    //generateImageList(300, "auto", 5)
    
    // 1. 페이지는 최대 5개
    // 2. 이미지가 5개 초과하면 페이지를 하나씩 추가한다.
    const pageButton = generatePageButton(5, 5)
    body.appendChild(pageButton)
}