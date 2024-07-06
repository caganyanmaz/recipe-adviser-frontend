const recipes = [
    {
        "id": 1,
        "title": "Basil, Roasted Peppers and Monterey Jack Cornbread",
        "time": 100,
        "url": "http://allrecipes.com/Recipe/6664/",
        "photourl": "http://images.media-allrecipes.com/userphotos/560x315/582853.jpg"
    },
    {
        "id": 2,
        "title": "Crispy Cheese Twists",
        "time": 0,
        "url": "http://allrecipes.com/Recipe/6663/",
        "photourl": "http://images.media-allrecipes.com/userphotos/250x250/69987.jpg"
    },
    {
        "id": 3,
        "title": "Mom's Yeast Rolls",
        "time": 0,
        "url": "http://allrecipes.com/Recipe/6665/",
        "photourl": "http://images.media-allrecipes.com/userphotos/250x250/5461.jpg"
    }    
];

const ingredients = [
    [
        {
            "recipe_id": 1,
            "description": "1/2 cup unsalted butter, chilled and cubed"
        },
        {
            "recipe_id": 1,
            "description": "1 cup chopped onion"
        },
        {
            "recipe_id": 1,
            "description": "1 3/4 cups cornmeal"
        },
        {
            "recipe_id": 1,
            "description": "1 1/4 cups all-purpose flour"
        },
        {
            "recipe_id": 1,
            "description": "1/4 cup white sugar"
        },
        {
            "recipe_id": 1,
            "description": "1 tablespoon baking powder"
        },
        {
            "recipe_id": 1,
            "description": "1 1/2 teaspoons salt"
        },
        {
            "recipe_id": 1,
            "description": "1/2 teaspoon baking soda"
        },
        {
            "recipe_id": 1,
            "description": "1 1/2 cups buttermilk"
        },
        {
            "recipe_id": 1,
            "description": "3 eggs"
        },
        {
            "recipe_id": 1,
            "description": "1 1/2 cups shredded pepperjack cheese"
        },
        {
            "recipe_id": 1,
            "description": "1 1/3 cups frozen corn kernels, thawed and drained"
        },
        {
            "recipe_id": 1,
            "description": "2 ounces roasted marinated red bell peppers, drained and chopped"
        },
        {
            "recipe_id": 1,
            "description": "1/2 cup chopped fresh basil"
        }
    ],
    [
        {
            "recipe_id": 2,
            "description": "1/2 cup Parmesan cheese"
        },
        {
            "recipe_id": 2,
            "description": "3/4 teaspoon ground black pepper"
        },
        {
            "recipe_id": 2,
            "description": "1/2 teaspoon garlic powder"
        },
        {
            "recipe_id": 2,
            "description": "1 (17.5 ounce) package frozen puff pastry, thawed"
        },
        {
            "recipe_id": 2,
            "description": "1 egg white"
        }
    ],
    [
        {
            "recipe_id": 3,
            "description": "2 cups hot water"
        },
        {
            "recipe_id": 3,
            "description": "1/2 cup margarine"
        },
        {
            "recipe_id": 3,
            "description": "1/3 cup white sugar"
        },
        {
            "recipe_id": 3,
            "description": "2 teaspoons salt"
        },
        {
            "recipe_id": 3,
            "description": "1/2 cup cold water"
        },
        {
            "recipe_id": 3,
            "description": "2 (.25 ounce) packages active dry yeast"
        },
        {
            "recipe_id": 3,
            "description": "5 1/2 cups all-purpose flour"
        },
        {
            "recipe_id": 3,
            "description": "2 eggs"
        }
    ]    
];
const instructions = [
    [
        {
            "recipe_id": 1,
            "ord": 1,
            "description": "Preheat oven to 400 degrees F (205 degrees C). Butter a 9x9x2 inch baking pan."
        },
        {
            "recipe_id": 1,
            "ord": 2,
            "description": "Melt 1 tablespoon butter in medium nonstick skillet over medium-low heat. Add onion and saute until tender, about 10 minutes. Cool."
        },
        {
            "recipe_id": 1,
            "ord": 3,
            "description": "Mix cornmeal with the flour, baking powder, sugar, salt, and baking soda in large bowl. Add 7 tablespoons butter and rub with fingertips until mixture resembles coarse meal."
        },
        {
            "recipe_id": 1,
            "ord": 4,
            "description": "Whisk buttermilk and eggs in medium bowl to blend. Add buttermilk mixture to dry ingredients and stir until blended. Mix in cheese, corn, red peppers, basil, and onion. Transfer to prepared pan."
        },
        {
            "recipe_id": 1,
            "ord": 5,
            "description": "Bake cornbread until golden and tester inserted comes out clean, about 45 minutes. Cool 20 minutes in pan. Cut cornbread into squares."
        }
    ],
    [
        {
            "recipe_id": 2,
            "ord": 1,
            "description": "Combine parmesan cheese, pepper and garlic powder. Unfold pastry sheets onto cutting board. Brush lightly with egg white; sprinkle each sheet with 1/4 of the cheese mixture. Lightly press into pastry, turn over; repeat. Cut each sheet into 12 (1-inch) strips; twist."
        },
        {
            "recipe_id": 2,
            "ord": 2,
            "description": "Place on ungreased cookie sheet and bake in 350 degrees F (175 degrees C) oven for 15 minutes or until golden brown."
        }
    ],
    [
        {
            "recipe_id": 3,
            "ord": 1,
            "description": "Melt margarine in hot water. Add sugar and salt and stir. Add cold water and yeast. Stir to dissolve yeast."
        },
        {
            "recipe_id": 3,
            "ord": 2,
            "description": "Add 3 cups flour and mix. Add eggs and 2 1/2 - 3 cups more flour. Mix, cover and let rise until dough doubles in size."
        },
        {
            "recipe_id": 3,
            "ord": 3,
            "description": "Punch down and let rise 30 more minutes or until doubles."
        },
        {
            "recipe_id": 3,
            "ord": 4,
            "description": "Make walnut size balls of dough. Place about 2 inches apart in well-buttered 9 x 13 inch pan. Bake in a preheated 350 degrees F (175 degrees C) oven for 30-45 minutes. Brush top of rolls with margarine while hot."
        }
    ]
            
];

export { recipes, ingredients, instructions }; 