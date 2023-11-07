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
    [index: string],
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

    mainstat: string,
}

type heroProps = {
    heroes: hero[],
}
