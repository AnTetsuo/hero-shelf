'use client'
import { useState } from "react"
import HeroCard from "./HeroCard"

export default function Shelf({ heroes }: heroProps) {
    const minmax = `minmax(90px,200px)`;
    const maxDisplay = 30;
    const [query, setQuery] = useState('');
    const filteredHeroes = query === '' 
        ? heroes
        : heroes.filter((each: hero) => each.name.includes(query));

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setQuery(e.target.value.toUpperCase());
    }

    return (       
        <>
            <input
              className="w-1/2"
              type="text"
              placeholder="procure um herói"
              onChange={(e) => (handleSearch(e))}
            >

            </input>
            <section
              className={`grid grid-cols-[repeat(2,${minmax})] gap-4 w-10/12 justify-center my-4 md:grid-cols-[repeat(3,${minmax})] lg:grid-cols-[repeat(4,${minmax})]`}
            >  
              {filteredHeroes.map((hero: hero, index) => 
                index < maxDisplay 
                ? <div
                    className="flex flex-col items-center gap-2 border-2 rounded-md w-xl"
                    key={hero.id}
                    id={hero.aggStats.toString()}
                  >
                  <HeroCard { ...hero}/>
                  </div>
                : null
                )}
            </section>
        </>
    )
}
