const RECIPE_COUNT = 278875;
export function get_random_recipe_id()
{
    return Math.ceil(Math.random() * RECIPE_COUNT)
}