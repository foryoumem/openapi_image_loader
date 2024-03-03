import {layoutImageList, layoutPageNum} from "./layout.js"
import {PageNumOption, getCurrentPageOption} from "./event.js"



export async function generateImageList(width, height, pagePerMaxImageNum)
{
    const options = await getCurrentPageOption()
    const route = layoutImageList(options)

    return route
}


export function generatePageButton(maxPage, pagePerMaxItem)
{
    const options = new PageNumOption()
    const route = layoutPageNum(options)

    return route
}