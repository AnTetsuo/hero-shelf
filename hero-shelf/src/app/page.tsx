import Shelf from "@/components/HeroShelf";

export default async function Home() {
  const heroURI = 'http://homologacao3.azapfy.com.br/api/ps/metahumans'

  const data = await fetch(heroURI);
  const heroList = await data.json();

  const heroRender = heroList.map(({ id, name, powerstats, images, biography: { publisher } }: fetchInfo ) => {
    const aggStats = Object.values(powerstats).reduce((acc, curr) => acc + curr, 0);
    return {
      id,
      name: name.toUpperCase(),
      powerstats,
      images,
      aggStats,
      publisher,
    }
  });

  return (
    <main
      className="flex flex-col items-center w-full"
    >
      <h1
        className="w-1/2 text-center"
      >Olá!</h1>
      {
        <Shelf heroes={heroRender} />
      }
    </main>
  )
}
