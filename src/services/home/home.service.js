import axios from 'axios'

export const getPeliculaPortada  =  async () => {
    return await axios.get('http://localhost:3030/api/peliculas/portada');
}

