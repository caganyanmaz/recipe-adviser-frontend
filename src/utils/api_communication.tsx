const PORT = 5000;

export async function fetch_recipe_data(id: number)
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