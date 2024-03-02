export function createImage(src)
{
    const image = document.createElement('img')
    image.src = src
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

export function createPageButton(event, value)
{
    const button = document.createElement('button')
    button.innerText = value
    button.value = value
    button.addEventListener('click', event)
    button.className = 'page_button'

    return button
}

export function createPageeButtonRoute()
{
    const div = document.createElement('div')
    div.className = 'page_button_route'

    return div
}