export type Recipe = {
    id: number;
    title: string;
    time: number;
    url: string;
    photourl: string;
};

export type Ingredient = {
    recipe_id: number;
    description: string;
}

export type Instruction = {
    recipe_id: number;
    ord: number;
    description: string;
}

export type Ingredients = Ingredient[];
export type Instructions = Instruction[];