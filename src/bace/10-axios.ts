import axios from "axios";
import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = "avHZzY3OLDWbSqmYOQboXDci9488Ngrp";

export const giphyApi = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs`,
    params: {
        api_key: apiKey,
    }
});

//export default giphyApi;

// giphyApi.get<GIFResponse>('/random') // Cuando no esta con esta espesificacion get<GIFResponse>(), sino que esta de esta manera get() se vuelve generico.
//     .then(resp => console.log(resp.data.data.images.downsized_large.url))
//     .catch(err => console.log(err));

/*
Cuando se presenta de esta manera el codigo es mucho mas limbio y utilizable que hacer esto:
giphyApi.get('/random')
    .then(resp => console.log(resp.data.data.images.downsized_large.url))
    .catch(err => console.log(err));
*/