export default function HeroCard(heroInfo: hero) {
    const { name, images, aggStats } = heroInfo
    return (
        <>
            <img
            className="rounded-md mt-2"
            src={images.sm}
            />
            <section
                className="flex flex-col items-center mb-2"
            >
                <h3
                    className="text-xs subpixel-antialiased font-extrabold shrink text-center"
                    >{name}
                </h3>
                <p
                    className="text-lg subpixel-antialiased font-extrabold shrink text-center"
                    >{aggStats}
                </p>
            </section>
        </>
    )
}
