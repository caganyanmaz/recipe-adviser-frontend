'use client'
import { get_random_recipe_id } from '@/utils/utils'
import { useState, useEffect }  from 'react'
import RecipeBox from '../recipe_box';
import { fetch_recipe_data } from '@/utils/api_communication';


export default function RandomRecipeBrowser()
{
    const [ recipe_id, update_recipe_id ] = useState(0);
    const [ data, update_data ] = useState({recipe_data: {}, instruction_data: {}, ingredient_data: {}});
    useEffect(() => 
    {
        if (recipe_id === 0)
            return;
        console.log('Hİİİİİİ!');
        let ignore = false;
        fetch_recipe_data(recipe_id).then((new_data) =>
        {
            if (!ignore)
                update_data(new_data);
        });
        return () => { ignore = true; };
    }, [recipe_id]);
    
    const fetch_ended = recipe_id !== 0 && data.recipe_data instanceof Object && recipe_id == data.recipe_data.id;
    console.log(recipe_id, data.recipe_data);
    return (
        <div>
            { fetch_ended ? <div>Hi</div> : "" }
            <button onClick={() => { update_recipe_id(get_random_recipe_id());}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Give me a random recipe</button> 
        </div>
    );

}