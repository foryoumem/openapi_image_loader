import {createAnchor, createImage, createImageItem, createImageListRoute, createPageButton, createPageeButtonRoute} from "./element.js"

export function layoutImageItem(options)
{
    const image = createImage(options.src)
    const anchor = createAnchor(options.url)
    anchor.appendChild(image)

    const item = createImageItem()
    item.appendChild(anchor)

    return item
}

export function layoutPageButton(options)
{
    const maxPage = options.maxPage
    const route = createPageeButtonRoute()

    for (let i = 0; i < maxPage; i++)
    {
        const button = createPageButton(options.event, i + 1)
        route.appendChild(button)
    }

    return route
}


export function layoutImageList(options)
{
    // 이미지 URL 객체가 들어있음
    const itemOptions = options.itemOptions

    const route = createImageListRoute()

    itemOptions.forEach(iter =>
    {
        const imageItem = layoutImageItem(iter)
        route.appendChild()
    })

    return route
}