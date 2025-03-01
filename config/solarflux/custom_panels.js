/*
* This JavaScript file can be used to initialize your own solar panels.
* First off, all methods have return types (they are specified after the "=>")
* How-to: (or watch the tutorial https://youtu.be/WVr6-3E7lA8 ;3)
* 1. To create a new panel, you need to make a builder, call panel()=>SolarPanelBuilder to begin the builder chain.
* 2. Chain elements:
*    - .name("yourname")=>SolarPanelBuilder // mandatory
*    - .height(float)=>SolarPanelBuilder // optional, float value is between [0;1]
*    - .generation("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
*    - .capacity("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
*    - .transfer("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
* 3. At the end of the chain, call .build()=>SolarPanel (alternatively, .buildAndRegister()=>SolarPanel, to skip step #5)
* 4. Languages: call after build chain end (operate on panel), start language chain with .langBuilder()=>LanguageBuilder
*    - .put("en_us", "Your Solar Panel Name")=>LanguageBuilder
*    After that, call as many lang assigns as you want:
*    - .put("lang", "Your Solar Panel Name")=>LanguageBuilder
*    End chain with .build()=>SolarPanel
* 5. Recipes: call after build chain end (operate on panel), start recipe chain with .recipeBuilder()=>RecipeBuilder
*    - .shape(string...)=>RecipeBuilder // Specify the needed string amount (1 string = 1 row)
*    After you specified the recipe shape, bind all ingredients:
*    - .bind('c', item("modid", "item_name"))=>RecipeBuilder
*    End chain with .build(AMOUNT)=>SolarPanel // AMOUNT is the int value (0;64] of items in the recipe output, if omitted, will be defaulted to 1.
* 6. To register the panel, append .register()=>SolarPanel after ending the chain.
* 7. Texturing: (all textures are stored in "textures" folder)
*      "yourname_base.png", optionally with "yourname_base.mcmeta" (for animations)
*      "yourname_top.png", optionally with "yourname_top.mcmeta" (for animations)
* 
* Additional methods & features:
*   - isModLoaded("modid")=>boolean // returns if the specified mod is loaded. Could be useful for setting up mod-dependent solar panels.
*   - you can have a line "import path.to.Class;"  to avoid using Java.type("path.to.Class") stuff. Created outside of any functions, declares a new variable with the simple class name.
*   - you can have a line "define a_key !value!" to make the compiler replace all a_key with !value! at runtime.
*/

define english "en_us"

var ourMaterial = false;

/** This function is called when mod is being constructed */
function init()
{
	panel(1)
		.name("one")
		.height(8 / 8.0)
		.generation("1")
		.capacity("64000")
		.transfer("2")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель I")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8h8")
			.bind('p', item("solarflux:mirror"))
			.bind('8', item("minecraft:iron_ingot"))
			.bind('c', item("minecraft:piston"))
			.bind('h', item("minecraft:redstone_block")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(2)
		.name("two")
		.height(8 / 8.0)
		.generation("4")
		.capacity("100000")
		.transfer("8")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель II")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8h8")
			.bind('p', item("solarflux:photovoltaic_cell_1"))
			.bind('8', item("solarflux:sp_custom_one"))
			.bind('c', item("minecraft:gold_block"))
			.bind('h', item("minecraft:redstone_lamp")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(3)
		.name("three")
		.height(8 / 8.0)
		.generation("16")
		.capacity("1000000")
		.transfer("32")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель III")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8h8")
			.bind('p', item("solarflux:photovoltaic_cell_2"))
			.bind('8', item("solarflux:sp_custom_two"))
			.bind('c', item("minecraft:diamond_block"))
			.bind('h', item("minecraft:emerald_block")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(4)
		.name("four")
		.height(8 / 8.0)
		.generation("32")
		.capacity("10000000")
		.transfer("64")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель IV")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8h8")
			.bind('p', item("solarflux:photovoltaic_cell_3"))
			.bind('8', item("solarflux:sp_custom_three"))
			.bind('c', item("minecraft:sea_lantern"))
			.bind('h', item("minecraft:glowstone")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(5)
		.name("five")
		.height(8 / 8.0)
		.generation("128")
		.capacity("50000000")
		.transfer("256")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель V")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8h8")
			.bind('p', item("solarflux:photovoltaic_cell_4"))
			.bind('8', item("solarflux:sp_custom_four"))
			.bind('c', item("minecraft:netherite_ingot"))
			.bind('h', item("solarflux:blazing_coating")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(6)
		.name("six")
		.height(8 / 8.0)
		.generation("512")
		.capacity("100000000")
		.transfer("1024")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель VI")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8h8")
			.bind('p', item("solarflux:photovoltaic_cell_5"))
			.bind('8', item("solarflux:sp_custom_five"))
			.bind('c', item("mekanism:alloy_reinforced"))
			.bind('h', item("mekanismgenerators:heat_generator")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(7)
		.name("seven")
		.height(8 / 8.0)
		.generation("2048")
		.capacity("500000000")
		.transfer("4096")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель VII")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8h8")
			.bind('p', item("solarflux:photovoltaic_cell_6"))
			.bind('8', item("solarflux:sp_custom_six"))
			.bind('c', item("mekanism:alloy_atomic"))
			.bind('h', item("mekanismgenerators:wind_generator")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(8)
		.name("eight")
		.height(8 / 8.0)
		.generation("8192")
		.capacity("1000000000")
		.transfer("16384")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель VIII")
			.build()
		.recipeBuilder()
			.shape("pkp", "8c8", "php")
			.bind('p', item("solarflux:sp_custom_seven"))
			.bind('k', item("solarflux:ender_glass"))
			.bind('8', item("mekanism:ultimate_control_circuit"))
			.bind('c', item("mekanism:teleportation_core"))
			.bind('h', item("mekanismgenerators:bio_generator")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(9)
		.name("nine")
		.height(8 / 8.0)
		.generation("16384")
		.capacity("5000000000")
		.transfer("32768")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель IX")
			.build()
		.recipeBuilder()
			.shape("pkp", "8c8", "php")
			.bind('p', item("solarflux:sp_custom_eight"))
			.bind('k', item("mekanism:ultimate_induction_provider"))
			.bind('8', item("mekanism:ultimate_tier_installer"))
			.bind('c', item("mekanism:pellet_polonium"))
			.bind('h', item("mekanism:ultimate_induction_provider")) // Here we use the newly added material in the recipe!
		.build(2);
	panel(10)
		.name("ten")
		.height(8 / 8.0)
		.generation("65536")
		.capacity("10000000000")
		.transfer("131072")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель X")
			.build()
		.recipeBuilder()
			.shape("abc", "fgh", "klm")
			.bind('a', item("solarflux:sp_custom_one"))
			.bind('b', item("solarflux:sp_custom_two"))
			.bind('c', item("solarflux:sp_custom_three"))
			.bind('f', item("solarflux:sp_custom_four"))
			.bind('g', item("solarflux:sp_custom_five"))
			.bind('h', item("solarflux:sp_custom_six"))
			.bind('k', item("solarflux:sp_custom_seven"))
			.bind('l', item("solarflux:sp_custom_eight"))
			.bind('m', item("solarflux:sp_custom_nine"))
		.build(2);
	panel(11)
		.name("eleven")
		.height(8 / 8.0)
		.generation("131072")
		.capacity("50000000000")
		.transfer("262144")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель XI")
			.build()
		.recipeBuilder()
			.shape(" a ", "aaa", " a ")
			.bind('a', item("solarflux:sp_custom_ten"))
		.build(2);
	panel(12)
		.name("twelve")
		.height(8 / 8.0)
		.generation("262144")
		.capacity("100000000000")
		.transfer("524288")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель XII")
			.build()
		.recipeBuilder()
			.shape(" a ", "aaa", " a ")
			.bind('a', item("solarflux:sp_custom_eleven"))
		.build(2); 
	panel(13)
		.name("thirteen")
		.height(8 / 8.0)
		.generation("1048576")
		.capacity("5000000000000")
		.transfer("2097152")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель XIII")
			.build()
		.recipeBuilder()
			.shape(" a ", "aaa", " a ")
			.bind('a', item("solarflux:sp_custom_twelve"))
		.build(2); 
	panel(14)
		.name("fourteen")
		.height(8 / 8.0)
		.generation("2097152")
		.capacity("5000000000000")
		.transfer("4194304")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель XIV")
			.build()
		.recipeBuilder()
			.shape(" a ", "aaa", " a ")
			.bind('a', item("solarflux:sp_custom_thirteen"))
		.build(2); 
	panel(15)
		.name("fiveteen")
		.height(8 / 8.0)
		.generation("4194304")
		.capacity("5000000000000")
		.transfer("8388608")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель XV")
			.build()
		.recipeBuilder()
			.shape(" a ", "aaa", " a ")
			.bind('a', item("solarflux:sp_custom_fourteen"))
		.build(2); 
	panel(16)
		.name("resone")
		.height(8 / 8.0)
		.generation("8388608")
		.capacity("5000000000000")
		.transfer("16777216")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель XVI")
			.build()
		.recipeBuilder()
			.shape(" a ", "aaa", " a ")
			.bind('a', item("solarflux:sp_custom_fiveteen"))
		.build(2); 
	panel(17)
		.name("finalpanel")
		.height(8 / 8.0)
		.generation("16777216")
		.capacity("512000000000")
		.transfer("33554432")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Солнечная панель XVII")
			.build()
		.recipeBuilder()
			.shape(" a ", "aaa", " a ")
			.bind('a', item("solarflux:sp_custom_resone"))
		.build(2);
}

/*
* This method is used to register additional recipes
* Below listed all vanilla options for adding recipes.
*/

function registerRecipes($)
{
    // IF you have a mod with custom recipe type, register them with the following:
    // $.add(IRecipe<?>)
    // Just don't forget to import the recipe class.
    // To pass an ingredient to a recipe wrap your item()/tag() call in a ingredient().
    // Basically this will create Minecraft Ingredient: ingredient(tag("forge", "storage_blocks/emerald"))

    if(ourMaterial)
    {
        $.shaped() // Shaped recipe example
            .result(ourMaterial, 2)
            .shape("###", "#$#", "###")
            .map('$', item("solarflux", "ender_glass"))
            .map('#', tag("forge", "rods/blaze"))
            .register();

        $.shapeless() // Shapeless recipe example
            .result(ourMaterial, 1)
            .add(item("solarflux", "ender_glass"))
            .add(tag("forge", "rods/blaze"))
            .add(tag("forge", "rods/blaze"))
            .add(tag("forge", "rods/blaze"))
            .register();

        $.stoneCutting() // Stone cutting recipe example
            .result(ourMaterial, 1)
            .input(item("solarflux", "ender_glass"))
            .register();

        // $.blasting() can be replaced with the following: (they have exactly same construction options)
        //     $.smelting()
        //     $.campfire()
        //     $.smoking()
        $.blasting() // Blasting cutting recipe example
            .result(ourMaterial, 1)
            .input(item("solarflux", "ender_glass"))
            .cookTime(400) // 20 seconds
            .xp(10.0)
            .register();
    }
}