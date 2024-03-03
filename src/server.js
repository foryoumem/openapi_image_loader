export async function getData(url)
{ 
    let list = {}

    await fetch(url)
        .then(response => response.json())
        .then(data =>
        {
            list = data
        })
    
    return list
}