ServerEvents.recipes(e => {

    e.replaceInput({},'upgrade_aquatic:beachgrass', '#forge:beach_grass');

    e.replaceInput({},'minecraft:nether_bricks', '#forge:bricks/nether');

    e.replaceInput({},'minecraft:stone', '#forge:stone');

    e.replaceInput({},'minecraft:netherrack', '#forge:netherrack');

    e.replaceInput({},'minecraft:glowstone', '#forge:storage_blocks/glowstone');

    recipe.forEach((recipe) => {

        e.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});