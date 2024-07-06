import { Ingredients } from '@/lib/definitions'

export default function IngredientList (params: { ingredients: Ingredients })
{
    const ingredients = params.ingredients;
    return (
        <div className="blue">
            <div>
                <h1 className="text-xl">Ingredients: </h1>
            </div>
            <ul>
                {ingredients.map(ingredient => <li>{ingredient.description}</li>)}
            </ul>
        </div>

    );
}