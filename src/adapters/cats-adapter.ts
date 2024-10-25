import CustomHttp  from '../middleware/http-handler'
import config from '../config/config'

const buildHeaders = {
    'x-api-key' : config.catApi.apiKey
}

const getAllBreeds = async () => {
    const url = `${config.catApi.baseUrl}${config.catApi.v1.breeds}`
    const response = new CustomHttp(url,buildHeaders, false).get()
    return response;
}

const getBreedById = async (breed: string) => {
    const url = `${config.catApi.baseUrl}${config.catApi.v1.breeds}/${breed}`
    const response = new CustomHttp(url,buildHeaders, false).get()
    return response;
}

const search = async (queryString: string) => {
    const url = `${config.catApi.baseUrl}${config.catApi.v1.breeds}?${queryString}`
    const response = new CustomHttp(url,buildHeaders, false).get()
    return response;
}

const getImagesById = async (image_id: string) => {
    const url = `${config.catApi.baseUrl}${config.catApi.v1.images}?limit=10&breed_ids=${image_id}`
    const response = new CustomHttp(url,buildHeaders, false).get()
    return response;
}

export {
    getAllBreeds,
    getBreedById,
    search,
    getImagesById
}
