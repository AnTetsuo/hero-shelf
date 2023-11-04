type fetchInfo = {
    id: number,
    name: string,
    powerstats: powerstats,
    images: images,
    biography: { publisher: string },
}

type powerstats = {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number,
}

type images = {
    xs: string,
    sm: string,
    md: string,
    lg: string,
}

type hero = {
    id: number,
    name: string,
    powerstats: powerstats,
    images: images,
    publisher: string,
    aggStats: number,
}

type heroProps = {
    heroes: hero[],
}
