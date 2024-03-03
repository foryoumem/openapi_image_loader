import {createAnchor, createImage, createImageItem, createImageListRoute, createPageNum, createPageNumRoute, createPageNumAnchor, createImageInfoRoute, createImageInfoHeader, createImageInfoImage, createImageInfoText} from "./element.js"

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
    const itemOptions = options.itemOptions

    const route = createImageListRoute()

    itemOptions.forEach(iter =>
    {
        const item = layoutImageItem(iter)
        route.appendChild(item)
    })

    return route
}

export function layoutImageInfo(options)
{
    const header = createImageInfoHeader('이미지 정보')
    const image = createImageInfoImage(options.src)
    const author = createImageInfoText(options.author)
    const size = createImageInfoText(options.size)

    const route = createImageInfoRoute()
    route.appendChild(header)
    route.appendChild(image)
    route.appendChild(author)
    route.appendChild(size)

    return route
}