export const getGifs = async category => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=OUW2CTl9g2BhwOMKvbN1KOJ9gsDKE0hz`;

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }));

    return gifs;
}