export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=yz7akbFZp7yCBzA7EasDe3iOcMqm0sE5`;
    const resp = await fetch(url);
    const { data }= await resp.json(); //solo me importa el data de la peticion
    
    const gifs = data.map( img =>{
        return {
           id : img.id,
           title : img.title,
           url : img.images?.downsized_medium.url //el ? es para decir q se use si vienen imagenes
        }
    })

    return(gifs);
} 