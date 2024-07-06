import RecipeBox from '@/components/recipe_box';

export default function Page (obj : { params : { id : number }})
{
    const id = obj.params.id;
    return <RecipeBox id={id} />
}