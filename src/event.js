import {getData} from "./server.js"


const host = "http://localhost:5500"
const mainUrl = host + "/main.html"
const infoUrl = host + "/info.html"

export class PageNumOption
{
    maxPage = 5
    href = mainUrl
}

export class ImageItemOption
{
    src = ""
    href = ""
}

export class ImageListOption
{
    itemOptions = []
    width = 200
    maxImageNum = 5
}

export class imageInfoOption
{
    id = 0
    src = ""
    author = ""
    size = 0
}

export function getParamValue(param)
{
    const location = document.location
    const url = new URL(location.href)

    return url.searchParams.get(param)
}

/*
Open api에서 이미지를 받아서 ImageItemOption 객체를 담은 배열을 반환
1. Open api URL
2. 웹페이지에 표시되는 최대 이미지 갯수
*/
export async function getImageItemOption(url, maxImageNum = 5)
{
    // URL에 저장된 page 파라미터
    const currentPage = getParamValue('page')

    // 표시되는 이미지 갯수
    const imageNum = maxImageNum

    // 페이지 번호를 받을 수 없는 경우(메인 페이지)
    if (currentPage == undefined)
    {
        currentPage = 1
    }

    const imageList = await getData(url)

    // 여기에 ImageItem을 만들때 필요한 option을 추가
    const options = []

     // 만약 한 페이지당 불러오는 이미지가 5개(imageNum)면,
     // 1페이지 0~4, 2페이지 5~9 
     const start = (currentPage - 1) * imageNum
     const end = currentPage * imageNum
     for (let i = start; i < end; i++)
     {
         if (i >= imageList.length) break

         const id = imageList[i].id
         const download_url = imageList[i].download_url
         
         const itemOptions = new ImageItemOption()
         itemOptions.src = download_url
         itemOptions.href = infoUrl + '?id=' + id
         
         options.push(itemOptions)
    }
    
    return options
}


export async function getImageInfoOption(url)
{
     // URL에 저장된 id 파라미터
    const currentId = getParamValue('id')
    
    // url = https://picsum.photos/id
    // info = https://picsum.photos/id/${id}/info
    const imageInfo = await getData(url + `/${currentId}/info`)

    const options = new imageInfoOption()
    options.id = currentId
    options.src = imageInfo.download_url
    options.author = imageInfo.author
    options.size = imageInfo.width + 'x' + imageInfo.height

    return options
}