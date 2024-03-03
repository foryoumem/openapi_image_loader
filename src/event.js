import {getImageList} from "./server.js"
import {layoutImageList} from "./layout.js"
import {} from "./server.js"


const host = "http://localhost:5500"
const mainUrl = host + "/main.html"
const infoUrl = host + "/info.html"

const MAX_PAGE = 5
const MAX_IMAGE = 5

export class PageNumOption
{
    maxPage = MAX_PAGE
    href = mainUrl 
}

export class ImageItemOption
{
    src = ""
    href = ""
}

export class ImageListOption
{
    pageNum = 0
    itemOptions = []
}

export function pageButton()
{
    return (event) =>
    {
        console.log(event.target.value)
        
        const imageList = getImageList()
       // const params = new URL(location.href).searchParams;
        //const getPageNum = params.get('page');

        // 현재 누른 페이지를 저장
        const pageNum = event.target.value

        const options = new ImageListOption()
        options.pageNum = pageNum

        // 만약 한 페이지당 불러오는 이미지가 5개(maxImage)면,
        // 1페이지 0~4, 2페이지 5~9 
        const startNum = (pageNum - 1) * MAX_IMAGE
        const endNum = pageNum * MAX_IMAGE
        for (let i = startNum; i < endNum; i++)
        {
            const id = imageList[i].id
            const download_url = imageList[i].download_url
            
            const itemOptions = new ImageItemOption()
            itemOptions.src = download_url
            itemOptions.href = infoUrl + '?id=' + id
            
            
            options.itemOptions.push(itemOptions)
        }

        const page = layoutImageList(options)
    }

    /*
    버튼을 누르면 이미지 pagePerMaxImage 값만큼 나온다.
    현재 페이지는 host:port/main.html?page=1 이런식으로 한다.
    */
}

export async function getCurrentPageOption()
{
    // 현재 누른 페이지를 저장
    const location = document.location
    const url = new URL(location.href)
    const pageNum = url.searchParams.get('page')

    // 페이지 번호를 받을 수 없는 경우(메인 페이지)
    if (pageNum == undefined)
    {
        pageNum = 1
    }

    const imageList = await getImageList()

     const options = new ImageListOption()
     options.pageNum = pageNum

     // 만약 한 페이지당 불러오는 이미지가 5개(maxImage)면,
     // 1페이지 0~4, 2페이지 5~9 
     const startNum = (pageNum - 1) * MAX_IMAGE
     const endNum = pageNum * MAX_IMAGE
     for (let i = startNum; i < endNum; i++)
     {
         const id = imageList[i].id
         const download_url = imageList[i].download_url
         
         const itemOptions = new ImageItemOption()
         itemOptions.src = download_url
         itemOptions.href = infoUrl + '?id=' + id
         
         options.itemOptions.push(itemOptions)
    }
    
    return options
}