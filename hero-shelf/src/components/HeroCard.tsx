export default function HeroCard(heroInfo: hero) {
    const { name, images, aggStats } = heroInfo
    return (
        <>
            <h2>{name}</h2>
            <img src={images.sm} />
            <p>{aggStats}</p>
        </>
    )
}
