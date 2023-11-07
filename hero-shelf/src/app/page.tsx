import Shelf from "@/components/HeroShelf";

export default async function Home() {
  const greaterStat = (stats: powerstats): string => {
    let ref = 0;
    let style = '';
    for (const stat in stats) {
      if (stats[stat] >= ref) {
        ref = stats[stat]
        style = stat;
      }
    }
    return style;
  }

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
      mainstat: greaterStat(powerstats),
    }
  });

  return (
    <main
      className="flex flex-col items-center w-screen"
    >
      <h1
        className="w-1/2 text-center"
      >Olá!</h1>
      {
        <Shelf heroes={heroRender} />
      }
      <section className="flex flex-col gap-2 items-center">
        <p className="text-white">The cards are color coded with the hero strongest stat as follows: </p>
        <div className="flex flex-row gap-8">
          <span className="shadow-power border-power ring-power outline-power text-power">power</span>
          <span className="shadow-intelligence border-intelligence ring-intelligence outline-intelligence text-intelligence">intelligence</span>
          <span className="shadow-durability border-durability ring-durability outline-durability text-durability">durability</span>
          <span className="shadow-strength border-strength ring-strength outline-strength text-strength">strength</span>
          <span className="shadow-speed border-speed ring-speed outline-speed text-speed">speed</span>
          <span className="shadow-combat border-combat ring-combat outline-combat text-combat">combat</span>
        </div>
      </section>
    </main>
  )
}
