import {createAnchor, createImage, createImageItem, createImageListRoute, createPageNum, createPageNumRoute, createPageNumAnchor} from "./element.js"

export function layoutImageItem(options)
{
    const image = createImage(options.src)
    const anchor = createAnchor(options.href)
    anchor.appendChild(image)

    const item = createImageItem()
    item.appendChild(anchor)

    return item
}

export function layoutPageNum(options)
{
    const maxPage = options.maxPage
    const href = options.href + '?page='
    const route = createPageNumRoute()

    for (let i = 0; i < maxPage; i++)
    {
        const num = createPageNum(i + 1)
        const anchor = createPageNumAnchor(href + (i + 1))
        anchor.appendChild(num)

        route.appendChild(anchor)
    }

    return route
}


export function layoutImageList(options)
{
    // 이미지 URL 객체가 들어있음
    const itemOptions = options.itemOptions
    console.log(itemOptions)

    const route = createImageListRoute()

    itemOptions.forEach(iter =>
    {
        const item = layoutImageItem(iter)
        route.appendChild(item)
    })

    return route
}