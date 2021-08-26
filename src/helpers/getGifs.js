export const getGifs = async( category ) => {
    const api_key = "x93macoFKBrpXiNxFuJ3urleuX97Q6wc";
    const limit = 10
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=${limit}&api_key=${api_key}`
    
    const resp = await fetch( url );
    const {data} = await resp.json();
    
    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
    }));
    return gifs;
}