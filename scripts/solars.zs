recipes.remove(<item:solarpanels:advanced_solar_panel>);
recipes.remove(<item:solarpanels:improved_energy_tablet>);
recipes.remove(<item:solarpanels:carbone_solar_element>);
mods.extendedcrafting.TableCrafting.addShaped("6481b6c4-428f-45c0-9003-55ef1b7ff036", 0, <item:avaritia:neutron_gear>, [
	[<item:minecraft:air>, <item:avaritia:neutron_ingot>, <item:minecraft:air>], 
	[<item:avaritia:neutron_ingot>, <item:extendedcrafting:ultimate_singularity>, <item:avaritia:neutron_ingot>], 
	[<item:minecraft:air>, <item:avaritia:neutron_ingot>, <item:minecraft:air>]
]);
craftingTable.addShaped("1", <item:solarpanels:advanced_solar_panel>, [
	[<item:solarpanels:carbone_solar_element>, <item:solarpanels:carbone_solar_element>, <item:solarpanels:carbone_solar_element>], 
	[<item:minecraft:netherite_ingot>, <item:mekanismgenerators:solar_generator>, <item:minecraft:netherite_ingot>], 
	[<item:projecte:dark_matter>, <item:solarpanels:improved_energy_tablet>, <item:projecte:dark_matter>]
]);
craftingTable.addShaped("1.1", <item:solarpanels:improved_energy_tablet>, [
	[<item:divinerpg:torridite_ingot>, <item:divinerpg:divine_shards>, <item:divinerpg:torridite_ingot>], 
	[<item:mekanism:teleportation_core>, <item:mekanism:energy_tablet>, <item:mekanism:teleportation_core>], 
	[<item:divinerpg:torridite_ingot>, <item:divinerpg:divine_shards>, <item:divinerpg:torridite_ingot>]
]);
craftingTable.addShaped("1.2", <item:solarpanels:carbone_solar_element>, [
	[<item:minecraft:black_stained_glass_pane>, <item:minecraft:black_stained_glass_pane>, <item:minecraft:black_stained_glass_pane>], 
	[<item:thermal:enderium_ingot>, <item:thermal:enderium_ingot>, <item:thermal:enderium_ingot>], 
	[<item:minecraft:coal_block>, <item:minecraft:coal_block>, <item:minecraft:coal_block>]
]);