export const getAnimeResponse = async(resource, query) => {
    const response = fetch(`${process.env.
        NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
        const anime = (await response).json()
        return anime
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])

}

export const reFormatData = (recAnime) => {
    let formatData = {data: (recAnime)}
    return formatData
}

export const RandomDatas = (data, num) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, num)
}