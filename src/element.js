export function createImage(src, width=200)
{
    const image = document.createElement('img')
    image.src = src
    image.width = width
    image.className = "image_src"

    return image
}

export function createAnchor(url)
{
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.className = "image_anchor"

    return anchor
}

export function createImageItem()
{
    const div = document.createElement('div')
    div.className = 'image_item'

    return div
}

export function createImageListRoute()
{
    const div = document.createElement('div')
    div.className = 'image_list_route'

    return div
}

export function createPageNum(value)
{
    const conv = document.createElement('conv')
    conv.innerText = value
    conv.className = 'page_num'

    return conv
}

export function createPageNumAnchor(href)
{
    const anchor = document.createElement('a')
    anchor.href = href
    anchor.className = 'page_anchor'

    return anchor
}

export function createPageNumRoute()
{
    const div = document.createElement('div')
    div.className = 'page_num_route'

    return div
}

export function createImageInfoRoute()
{
    const div = document.createElement('div')
    div.className = 'image_info_route'

    return div
}

export function createImageInfoHeader(text)
{
    const header = document.createElement('h1')
    header.innerText = text
    header.className = 'image_info_header'

    return header
}

export function createImageInfoImage(src)
{
    const image = document.createElement('img')
    image.src = src
    image.className = 'image_info_image'

    return image
}

export function createImageInfoText(text)
{
    const div = document.createElement('div')
    div.innerText = text
    div.className = 'image_info_text'

    return div
}