recipes.remove(<item:avaritia:infinity_catalyst>);
recipes.remove(<item:reliquary:fertile_essence>);
recipes.remove(<item:projecte:dark_matter>);
recipes.remove(<item:youmatter:replicator>);
craftingTable.addShaped("whole", <item:youmatter:black_hole>, [
    [<item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>],
    [<item:projecte:aeternalis_fuel>, <item:cataclysm:mech_eye>, <item:projecte:aeternalis_fuel>],
    [<item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>, <item:projecte:aeternalis_fuel>]]);
craftingTable.addShaped("replicator", <item:youmatter:replicator>, [
	[<item:youmatter:compute_module>, <item:youmatter:machine_casing>, <item:youmatter:compute_module>], 
	[<item:minecraft:ender_pearl>, <item:cataclysm:abyss_eye>, <item:minecraft:ender_pearl>], 
	[<item:youmatter:machine_casing>, <item:minecraft:bucket>, <item:youmatter:machine_casing>]
]);
craftingTable.addShaped("stable", <item:mekanism:creative_fluid_tank>.withTag({mekData: {FluidTanks: [{Tank: 0, stored: {FluidName: "youmatter:stabilizer", Amount: 2147483647}}]}}), [
    [<item:youmatter:stabilizer_bucket>, <item:minecraft:nether_star>, <item:youmatter:stabilizer_bucket>],
    [<item:minecraft:nether_star>, <item:mekanism:ultimate_fluid_tank>, <item:minecraft:nether_star>],
    [<item:youmatter:stabilizer_bucket>, <item:minecraft:nether_star>, <item:youmatter:stabilizer_bucket>]]);
craftingTable.addShaped("inf", <item:avaritia:infinity_catalyst>, [
    [<item:avaritia:crystal_matrix_ingot>, <item:avaritia:endest_pearl>, <item:avaritia:neutron_ingot>],
    [<item:avaritia:cosmic_meatballs>, <item:extendedcrafting:ultimate_singularity>, <item:avaritia:record_fragment>],
    [<item:avaritia:crystal_matrix_ingot>, <item:avaritia:ultimate_stew>, <item:avaritia:neutron_ingot>]]);
craftingTable.addShaped("dr1", <item:youmatter:thumb_drive>.withTag({stored_items: ["mekanism:block_raw_uranium", "minecraft:raw_gold_block", "mekanism:block_raw_osmium", "minecraft:nether_star", "minecraft:diamond_block", "minecraft:ender_pearl", "mekanism:block_steel", "minecraft:coal_block"]}), [
    [<item:minecraft:nether_star>, <item:minecraft:coal_block>, <item:mekanism:block_steel>],
    [<item:minecraft:raw_gold_block>, <item:youmatter:thumb_drive>, <item:mekanism:block_raw_osmium>],
    [<item:minecraft:diamond_block>, <item:mekanism:block_raw_uranium>, <item:minecraft:ender_pearl>]]);
craftingTable.addShaped("dr2", <item:youmatter:thumb_drive>.withTag({stored_items: ["ae2:quartz_block", "minecraft:netherite_block", "minecraft:hay_block", "minecraft:redstone_block", "minecraft:ghast_tear", "mekanism:block_raw_lead", "minecraft:raw_iron_block", "minecraft:quartz_block"]}), [
    [<item:ae2:quartz_block>, <item:minecraft:ghast_tear>, <item:mekanism:block_raw_lead>],
    [<item:minecraft:netherite_block>, <item:youmatter:thumb_drive>, <item:minecraft:raw_iron_block>],
    [<item:minecraft:hay_block>, <item:minecraft:redstone_block>, <item:minecraft:quartz_block>]]);
craftingTable.addShaped("essence", <item:reliquary:fertile_essence>, [
    [<item:minecraft:slime_ball>, <item:minecraft:green_dye>],
    [],
    []]);
craftingTable.addShaped("black", <item:projecte:dark_matter>, [
    [<item:mekanism:pellet_antimatter>, <item:mekanism:pellet_antimatter>, <item:mekanism:pellet_antimatter>],
    [<item:mekanism:pellet_antimatter>, <item:mekanism:pellet_antimatter>, <item:mekanism:pellet_antimatter>],
    [<item:mekanism:pellet_antimatter>, <item:mekanism:pellet_antimatter>, <item:mekanism:pellet_antimatter>]]);
craftingTable.addShaped("star_fuel", <item:avaritia:star_fuel>, [
	[<item:avaritia:endest_pearl>, <item:minecraft:end_crystal>, <item:avaritia:endest_pearl>], 
	[<item:extendedcrafting:flux_star>, <item:projecte:aeternalis_fuel>, <item:minecraft:nether_star>], 
	[<item:avaritia:endest_pearl>, <item:extendedcrafting:ender_star>, <item:avaritia:endest_pearl>]
]);
