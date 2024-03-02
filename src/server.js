const imageURL = "https://picsum.photos/v2/list"

export async function getImageList()
{ 
    let list = {}

    await fetch(imageURL)
        .then(response => response.json())
        .then(data =>
        {
            list = data
        })
    
    return list
}