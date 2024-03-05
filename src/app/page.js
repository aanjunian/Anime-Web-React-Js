<script src="http://localhost:8097"></script>

import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import { RandomDatas, getAnimeResponse, getNestedAnimeResponse } from "@/libs/apiLibs"

const Page = async() => {

  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const newestAnime = await getAnimeResponse("top/anime", "limit=4")
  let recAnime = await getNestedAnimeResponse("recommendations/anime", "entry")

  recAnime = {data: RandomDatas(recAnime, 5)}

  return (
    <>
    {/* anime populer */}
    <section>
      <Header title="Most Popular " linkTitle="View All" linkHref="/populer"/>
      <AnimeList api={topAnime}/>
    </section>
    {/* newest anime */}
    <section>
      <Header title="Newest" linkTitle="View All" linkHref="/new"/>
      <AnimeList api={newestAnime}/>
    </section>
    {/* recomendations anime */}
    <section>
      <Header title="Recomended"/>
      <AnimeList api={recAnime}/>
    </section>
    </>
  )
}

export default Page

