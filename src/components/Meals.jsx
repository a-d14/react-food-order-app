import { useEffect, useState } from "react";
import { getAllMeals } from "../http";
import MealItem from "./MealItem";

export default function Meals() {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        
        async function getMeals() {
            setIsFetching(true);

            try {
                const meals = await getAllMeals();
                console.log(meals);
                setData(meals);
            } catch(error) {
                setError({message: error.message || 'Could not fetch meals'});
            }

            setIsFetching(false);
        }

        getMeals();
    }, []);

    return (
        <div id="meals"> 
            {isFetching && <p>Fetching Meals...</p>}
            {data &&
                data.map((d) => {
                    return <MealItem key={d.id} item={d} />
                })
            }
        </div>
    )

}