import {layoutImageInfo, layoutImageList, layoutPageNum} from "./layout.js"
import {ImageListOption, PageNumOption, getImageItemOption, getImageInfoOption} from "./event.js"

const imageURL = "https://picsum.photos/v2/list"
const infoURL = "https://picsum.photos/id"

export async function generateImageList(width, maxImageNum)
{
    const options = new ImageListOption()
    options.itemOptions = await getImageItemOption(imageURL, maxImageNum)
    options.width = width
    const route = layoutImageList(options)

    return route
}


export function generatePageButton(maxPage)
{
    const options = new PageNumOption()
    options.maxPage = maxPage
    const route = layoutPageNum(options)

    return route
}

export async function generateImageInfo()
{
    const options = await getImageInfoOption(infoURL)

    const route = layoutImageInfo(options)

    return route
}