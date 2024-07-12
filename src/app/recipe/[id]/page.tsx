import RecipeBox from '@/components/recipe_box';
import { fetch_recipe_data } from '@/utils/api_communication';

export default async function Page (obj : { params : { id : number }})
{
    const { recipe_data, ingredient_data, instruction_data } = await fetch_recipe_data(obj.params.id);
    return <RecipeBox recipe_data={recipe_data} ingredient_data={ingredient_data} instruction_data={instruction_data}/>
}