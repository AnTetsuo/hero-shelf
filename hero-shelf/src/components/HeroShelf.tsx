'use client'
import { useState } from "react"
import HeroCard from "./HeroCard"

export default function Shelf({ heroes }: heroProps) {
    const maxDisplay = 36;
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
              className={`grid grid-cols-[repeat(1,minmax(196px,196px))] gap-12 w-10/12 justify-center my-4 md:grid-cols-[repeat(3,minmax(196px,196px))] lg:grid-cols-[repeat(4,minmax(196px,196px))]`}
            >  
              {filteredHeroes.map((hero: hero, index) => 
                index < maxDisplay 
                ? <div
                    className={`flex flex-col items-center gap-2 border-2 border-${hero.mainstat} rounded-md bg-gradient-to-tr hover:outline-double outline-${hero.mainstat} border-6`}
                    key={hero.id}
                    id={hero.aggStats.toString()}
                  >
                  <HeroCard { ...hero}/>
                  </div>
                : null
                )}
            </section>
            <p
              className="text-white underline my-16"
            >
              { filteredHeroes.length === 0 ? 'Sorry, There were no matches to your search' : null }
            </p>
        </>
    )
  }
