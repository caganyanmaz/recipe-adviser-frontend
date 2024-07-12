import Image from 'next/image';
import IngredientList from './ingredient_list';
import InstructionList from './instruction_list';
import { Recipe, Ingredients, Instructions } from '@/lib/definitions'


export default async function RecipeBox (params: {recipe_data: Recipe, ingredient_data: Ingredients, instruction_data: Instructions})
{
    const {recipe_data, ingredient_data, instruction_data } = params;
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