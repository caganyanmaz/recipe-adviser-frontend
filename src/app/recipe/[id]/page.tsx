import {recipes, ingredients, instructions } from '@/lib/placeholder-data';
import Image from 'next/image';
import IngredientList from './ingredient_list';
import InstructionList from './instruction_list';

export default function Page (obj : { params : { id : number }})
{
    console.log(obj);
    console.log(obj.params);
    const recipe_index = obj.params.id-1;
    const recipe = recipes[recipe_index];
    return (
        <div className="text-black m-0 mt-20 mx-auto w-6/12 bg-cyan-200 rounded-lg p-4">
            <h1 className="text-center text-xl">{recipe.title}</h1>
            <div className="flex flex-row">
                <Image src={recipe.photourl} width={500} height={500} alt="{recipe.title} photo"/>
                <IngredientList ingredients={ingredients[recipe_index]}/>
            </div>
            <InstructionList instructions={instructions[recipe_index]} />
        </div>
    );
}