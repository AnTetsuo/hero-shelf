'use client'
import { useState } from "react"
import HeroCard from "./HeroCard"

export default function Shelf({ heroes }: heroProps) {
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
              type="text"
              placeholder="procure um herói"
              onChange={(e) => (handleSearch(e))}
            >

            </input>
            {filteredHeroes.map((hero: hero, index) => 
              index < maxDisplay 
              ? <div
                key={hero.id}
                id={hero.aggStats.toString()}
                >
                <HeroCard { ...hero}/>
                </div>
              : null
              )}
        </>
    )
}
