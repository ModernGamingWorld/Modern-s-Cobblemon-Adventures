ServerEvents.tags('item', e => {
  //Tag Get
  e.get('forge:tools/wrenchs').add(['chiselsandbits:wrench']);
  e.get('forge:netherbricks/red').add([/rechiseled:red_nether_bricks/]);
  e.get('forge:netherrack').add(['quark:netherrack_bricks', /rechiseled:netherrack_/]);
  e.get('forge:sandstone/red').add([/rechiseled:red_sandstone/]);
  e.get('forge:sandstone/colorless').add([/rechiseled:sandstone_/]);
  e.get('forge:end_stones').add([/rechiseled:end_stone/]);
  e.get('forge:cobblestone').add([/rechiseled:cobblestone_/]);
  e.get('chiselsandbits:chisel').add(['rechiseled:chisel']);
  e.get('minecraft:stone_tool_materials').add(['#forge:stone', '#forge:cobblestone']);
  e.get('minecraft:stone_crafting_materials').add(['#forge:stone', '#forge:cobblestone']);
  e.get('forge:storage_blocks/glowstone').add([/rechiseled:glowstone_/, /chipped:glowstone_/]);
  e.get('chipped:diorite').add([/rechiseled:diorite_/]);
  e.get('chipped:glowstone').add([/rechiseled:glowstone_/]);
  e.get('chipped:obsidian').add([/rechiseled:obsidian_/]);
  e.get('chipped:andesite').add([/rechiseled:andesite_/]);
  e.get('forge:obsidian').add([/rechiseled:obsidian_/]);
  e.get('forge:blocks/quartz').add([/rechiseled:quartz_block/, /chipped:quartz_block/]);
  e.get('forge:bricks/nether').add([/rechiseled:nether_bricks/, /chipped:nether_bricks/]);
  e.get('forge:beach_grass').add(['upgrade_aquatic:beachgrass']);
})