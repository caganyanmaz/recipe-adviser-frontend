import {recipes, ingredients, instructions } from '@/lib/placeholder-data';
import Image from 'next/image';
import IngredientList from './ingredient_list';
import InstructionList from './instruction_list';

const PORT = 5000;

async function fetch_recipe_data(id: number)
{

    const URLS = [`http://localhost:${PORT}/recipe/${id}`, `http://localhost:${PORT}/ingredients/${id}`, `http://localhost:${PORT}/instructions/${id}`]
    const responses = await Promise.all(
        URLS.map(
            url => fetch(url)
                    .then(res => res.json())
                    .catch(err => console.log(err)) 
                )
    );
    console.log(responses);
    return {'recipe_data': responses[0], 'ingredient_data': responses[1], 'instruction_data': responses[2]};
}

export default async function RecipeBox (params: {id: number})
{
    const {recipe_data, ingredient_data, instruction_data } = await fetch_recipe_data(params.id);
    return (
        <div className="text-black m-0 mt-20 mx-auto w-6/12 bg-cyan-200 rounded-3xl p-4">
            <h1 className="text-center text-2xl">{recipe_data.title}</h1>
            <div className="flex flex-row">
                <Image className="m-5" src={recipe_data.photourl} width={500} height={500} alt="{recipe.title} photo"/>
                <div className="flex flex-col justify-center">
                    <IngredientList ingredients={ingredient_data}/>                
                </div>
            </div>
            <InstructionList instructions={instruction_data} />
        </div>
    );
}