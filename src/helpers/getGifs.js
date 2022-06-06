
    export const getGifs = async( category ) => {

        const url=`https://api.giphy.com/v1/gifs/search?api_key=jcyx0DzVXc1HCiw3xZHCKW1WokSdwWeQ&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`;
        const resp = await fetch(url);
        const {data} =   await resp.json();

        const gifs = data.map(img =>{
            return{
                id: img.id,
                title : img.title,
                url : img.images?.downsized_medium.url
            }
        })
        
        //console.log(gifs);

        return gifs;
    }