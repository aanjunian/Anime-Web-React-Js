import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import { getAnimeResponse } from "@/libs/apiLibs"

const Page = async ({ params }) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)

    const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`)

    return (
        <>
            {/* anime search */}
            <section>
                <Header title={`Result for : ${decodeKeyword}...`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page

