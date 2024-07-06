import { Ingredients } from '@/lib/definitions'

export default function IngredientList (params: { ingredients: Ingredients })
{
    const ingredients = params.ingredients;
    return (
        <div className="blue">
            
            <ul>
                {ingredients.map(ingredient => <li>{ingredient.description}</li>)}
            </ul>
        </div>

    );
}