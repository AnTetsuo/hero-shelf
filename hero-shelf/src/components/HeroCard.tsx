import { swordIcon } from '../../public/icon';

export default function HeroCard(heroInfo: hero) {
    const { name, images, aggStats, mainstat } = heroInfo;
    return (
        <>
            <img
            className={`rounded-md mt-2 shadow-2xl shadow-${mainstat} border-${mainstat} border-1 ring-2 ring-${mainstat}`}
            src={images.sm}
            />
            <section
                className="flex flex-col items-center mb-2 w-full"
            >
                <h3
                    className="text-base subpixel-antialiased font-bold shrink text-center text-white my-2 italic"
                    >{name}
                </h3>
                <div
                    className='flex flex-row items-center justify-evenly w-full mb-2'
                >
                    {swordIcon}
                    <span
                        className="text-xl subpixel-antialiased font-extrabold shrink text-center text-white"
                        >{aggStats}
                    </span>
                </div>
            </section>
        </>
    )
}
