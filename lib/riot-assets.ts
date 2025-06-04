"use client"

import React from "react"

// Riot Games asset URLs and data fetching utilities

// Base URLs for different asset types
const ASSET_URLS = {
  // Community Dragon (reliable LoL asset source)
  championIcons: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons",
  items: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d",
  summonerSpells:
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/data/spells/icons2d",
  runes: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles",

  // Data Dragon (official Riot API)
  dataDragon: "https://ddragon.leagueoflegends.com/cdn/14.1.1",
  championData: "https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/champion.json",
  itemData: "https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/item.json",
  summonerSpellData: "https://ddragon.leagueoflegends.com/cdn/14.1.1/data/en_US/summoner.json",
}

// Champion ID mappings (some champions have different internal names)
const CHAMPION_ID_MAP: { [key: string]: string } = {
  Ambessa: "Ambessa",
  "Aurelion Sol": "AurelionSol",
  Aurora: "Aurora",
  "Bel'Veth": "Belveth",
  "Cho'Gath": "Chogath",
  "Dr. Mundo": "DrMundo",
  "Jarvan IV": "JarvanIV",
  "Kai'Sa": "Kaisa",
  "Kha'Zix": "Khazix",
  "Kog'Maw": "KogMaw",
  LeBlanc: "Leblanc",
  "Lee Sin": "LeeSin",
  "Master Yi": "MasterYi",
  Mel: "Mel",
  "Miss Fortune": "MissFortune",
  "Nunu & Willump": "Nunu",
  "Rek'Sai": "RekSai",
  "Renata Glasc": "Renata",
  Smolder: "Smolder",
  "Tahm Kench": "TahmKench",
  "Twisted Fate": "TwistedFate",
  "Vel'Koz": "Velkoz",
  Wukong: "MonkeyKing",
  "Xin Zhao": "XinZhao",
}

// Item ID mappings for common ARAM items
const ITEM_ID_MAP: { [key: string]: string } = {
  // Mythic Items
  "Kraken Slayer": "6672",
  "Immortal Shieldbow": "6673",
  Galeforce: "6671",
  Eclipse: "6692",
  "Duskblade of Draktharr": "6691",
  "Prowler's Claw": "6693",
  Goredrinker: "6630",
  Stridebreaker: "6631",
  "Divine Sunderer": "6632",
  "Trinity Force": "3078",
  "Sunfire Aegis": "6662",
  "Turbo Chemtank": "6664",
  "Frostfire Gauntlet": "6662",
  "Luden's Tempest": "6655",
  "Liandry's Anguish": "6653",
  Everfrost: "6656",
  Riftmaker: "4636",
  "Hextech Rocketbelt": "3152",
  "Imperial Mandate": "4005",
  "Locket of the Iron Solari": "3190",
  "Moonstone Renewer": "6617",

  // Legendary Items
  "Infinity Edge": "3031",
  "Phantom Dancer": "3046",
  "Rapid Firecannon": "3094",
  "Runaan's Hurricane": "3085",
  Bloodthirster: "3072",
  "Guardian Angel": "3026",
  "Lord Dominik's Regards": "3036",
  "Mortal Reminder": "3033",
  Collector: "6676",
  "Navori Quickblades": "6675",

  // AP Items
  "Rabadon's Deathcap": "3089",
  "Void Staff": "3135",
  "Zhonya's Hourglass": "3157",
  "Banshee's Veil": "3102",
  "Horizon Focus": "4628",
  "Cosmic Drive": "4629",
  "Demonic Embrace": "4637",
  "Seraph's Embrace": "3040",
  "Lich Bane": "3100",
  "Nashor's Tooth": "3115",

  // Tank Items
  Thornmail: "3075",
  "Randuin's Omen": "3143",
  "Dead Man's Plate": "3742",
  "Spirit Visage": "3065",
  "Force of Nature": "4401",
  "Abyssal Mask": "3001",
  "Warmog's Armor": "3083",
  "Gargoyle Stoneplate": "3193",

  // Fighter Items
  "Black Cleaver": "3071",
  "Death's Dance": "6333",
  "Sterak's Gage": "3053",
  "Wit's End": "3091",
  "Blade of the Ruined King": "3153",
  "Ravenous Hydra": "3074",
  "Titanic Hydra": "3748",
  "Chempunk Chainsword": "6609",

  // Support Items
  "Staff of Flowing Water": "6616",
  "Ardent Censer": "3504",
  "Chemtech Putrifier": "6609",
  Redemption: "3107",
  "Mikael's Blessing": "3222",
  "Knight's Vow": "3109",
  "Zeke's Convergence": "3050",
  "Vigilant Wardstone": "4643",

  // Boots
  "Berserker's Greaves": "3006",
  "Sorcerer's Shoes": "3020",
  "Plated Steelcaps": "3047",
  "Mercury's Treads": "3111",
  "Ionian Boots of Lucidity": "3158",
  "Mobility Boots": "3117",
  Swifties: "3009",

  // Starting Items
  "Doran's Blade": "1055",
  "Doran's Ring": "1056",
  "Doran's Shield": "1054",

  // Other Common Items
  Manamune: "3004",
  "Serylda's Grudge": "6694",
  "Edge of Night": "3814",
  "Umbral Glaive": "3179",
  "Youmuu's Ghostblade": "3142",
  "Guinsoo's Rageblade": "3124",
}

// Summoner Spell ID mappings
const SUMMONER_SPELL_ID_MAP: { [key: string]: string } = {
  Flash: "4",
  Heal: "7",
  Barrier: "21",
  Exhaust: "3",
  Ignite: "14",
  Ghost: "6",
  Cleanse: "1",
  Mark: "32", // ARAM Snowball
  Clarity: "13",
}

// Rune path mappings
const RUNE_PATH_MAP: { [key: string]: { id: string; color: string } } = {
  Precision: { id: "7201", color: "rgb(255, 185, 59)" },
  Domination: { id: "7200", color: "rgb(211, 25, 50)" },
  Sorcery: { id: "7202", color: "rgb(54, 179, 222)" },
  Resolve: { id: "7204", color: "rgb(104, 210, 152)" },
  Inspiration: { id: "7203", color: "rgb(161, 210, 255)" },
}

// Rune keystone mappings
const RUNE_KEYSTONE_MAP: { [key: string]: { id: string; path: string } } = {
  // Precision
  "Press the Attack": { id: "8005", path: "Precision" },
  "Lethal Tempo": { id: "8008", path: "Precision" },
  "Fleet Footwork": { id: "8021", path: "Precision" },
  Conqueror: { id: "8010", path: "Precision" },

  // Domination
  Electrocute: { id: "8112", path: "Domination" },
  Predator: { id: "8124", path: "Domination" },
  "Dark Harvest": { id: "8128", path: "Domination" },
  "Hail of Blades": { id: "9923", path: "Domination" },

  // Sorcery
  "Summon Aery": { id: "8214", path: "Sorcery" },
  Aery: { id: "8214", path: "Sorcery" }, // Alias
  "Arcane Comet": { id: "8229", path: "Sorcery" },
  "Phase Rush": { id: "8230", path: "Sorcery" },

  // Resolve
  "Grasp of the Undying": { id: "8437", path: "Resolve" },
  Aftershock: { id: "8439", path: "Resolve" },
  Guardian: { id: "8465", path: "Resolve" },

  // Inspiration
  "Glacial Augment": { id: "8351", path: "Inspiration" },
  "Unsealed Spellbook": { id: "8360", path: "Inspiration" },
  "First Strike": { id: "8369", path: "Inspiration" },
}

// Common rune shard mappings
const RUNE_SHARD_MAP: { [key: string]: { id: string; path: string } } = {
  // Precision
  Triumph: { id: "8009", path: "Precision" },
  "Presence of Mind": { id: "8009", path: "Precision" },
  "Legend: Alacrity": { id: "9104", path: "Precision" },
  "Legend: Tenacity": { id: "9105", path: "Precision" },
  "Legend: Bloodline": { id: "9103", path: "Precision" },
  "Coup de Grace": { id: "8014", path: "Precision" },
  "Cut Down": { id: "8017", path: "Precision" },
  "Last Stand": { id: "8299", path: "Precision" },

  // Domination
  "Cheap Shot": { id: "8126", path: "Domination" },
  "Taste of Blood": { id: "8139", path: "Domination" },
  "Sudden Impact": { id: "8143", path: "Domination" },
  "Zombie Ward": { id: "8136", path: "Domination" },
  "Ghost Poro": { id: "8120", path: "Domination" },
  "Eyeball Collection": { id: "8138", path: "Domination" },
  "Treasure Hunter": { id: "8135", path: "Domination" },
  "Ingenious Hunter": { id: "8134", path: "Domination" },
  "Relentless Hunter": { id: "8105", path: "Domination" },
  "Ultimate Hunter": { id: "8106", path: "Domination" },

  // Sorcery
  "Nullifying Orb": { id: "8224", path: "Sorcery" },
  "Manaflow Band": { id: "8226", path: "Sorcery" },
  "Nimbus Cloak": { id: "8234", path: "Sorcery" },
  Transcendence: { id: "8210", path: "Sorcery" },
  Celerity: { id: "8234", path: "Sorcery" },
  "Absolute Focus": { id: "8233", path: "Sorcery" },
  Scorch: { id: "8237", path: "Sorcery" },
  Waterwalking: { id: "8232", path: "Sorcery" },
  "Gathering Storm": { id: "8236", path: "Sorcery" },

  // Resolve
  Demolish: { id: "8446", path: "Resolve" },
  "Font of Life": { id: "8463", path: "Resolve" },
  "Shield Bash": { id: "8401", path: "Resolve" },
  Conditioning: { id: "8429", path: "Resolve" },
  "Second Wind": { id: "8444", path: "Resolve" },
  "Bone Plating": { id: "8473", path: "Resolve" },
  Overgrowth: { id: "8451", path: "Resolve" },
  Revitalize: { id: "8453", path: "Resolve" },
  Unflinching: { id: "8242", path: "Resolve" },

  // Inspiration
  "Hextech Flashtraption": { id: "8306", path: "Inspiration" },
  "Magical Footwear": { id: "8304", path: "Inspiration" },
  "Perfect Timing": { id: "8313", path: "Inspiration" },
  "Future's Market": { id: "8321", path: "Inspiration" },
  "Minion Dematerializer": { id: "8316", path: "Inspiration" },
  "Biscuit Delivery": { id: "8345", path: "Inspiration" },
  "Cosmic Insight": { id: "8347", path: "Inspiration" },
  "Approach Velocity": { id: "8410", path: "Inspiration" },
  "Time Warp Tonic": { id: "8352", path: "Inspiration" },
}

// Asset fetching functions
export function getChampionIcon(championName: string): string {
  if (!championName) return "/placeholder.svg?height=40&width=40"

  // U.gg URLs for newer champions (more reliable for recent releases)
  const uggChampionIcons: { [key: string]: string } = {
    Ambessa: "https://static.u.gg/assets/lol/riot_static/14.23.1/img/champion/Ambessa.png",
    Aurora: "https://static.u.gg/assets/lol/riot_static/14.16.1/img/champion/Aurora.png",
    Mel: "https://static.u.gg/assets/lol/riot_static/14.23.1/img/champion/Mel.png",
    Smolder: "https://static.u.gg/assets/lol/riot_static/14.4.1/img/champion/Smolder.png",
    Hwei: "https://static.u.gg/assets/lol/riot_static/13.24.1/img/champion/Hwei.png",
    Briar: "https://static.u.gg/assets/lol/riot_static/13.18.1/img/champion/Briar.png",
    Naafiri: "https://static.u.gg/assets/lol/riot_static/13.15.1/img/champion/Naafiri.png",
  }

  // Check U.gg first for newer champions
  if (uggChampionIcons[championName]) {
    return uggChampionIcons[championName]
  }

  // Riot Data Dragon fallback for established champions
  const riotChampionIcons: { [key: string]: string } = {
    Wukong: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MonkeyKing.png",
    "Aurelion Sol": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/AurelionSol.png",
    "Bel'Veth": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Belveth.png",
    "Cho'Gath": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Chogath.png",
    "Dr. Mundo": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/DrMundo.png",
    "Jarvan IV": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/JarvanIV.png",
    "Kai'Sa": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Kaisa.png",
    "Kha'Zix": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Khazix.png",
    "Kog'Maw": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/KogMaw.png",
    LeBlanc: "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Leblanc.png",
    "Lee Sin": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/LeeSin.png",
    "Master Yi": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MasterYi.png",
    "Miss Fortune": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/MissFortune.png",
    "Nunu & Willump": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Nunu.png",
    "Rek'Sai": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/RekSai.png",
    "Renata Glasc": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Renata.png",
    "Tahm Kench": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TahmKench.png",
    "Twisted Fate": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/TwistedFate.png",
    "Vel'Koz": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/Velkoz.png",
    "Xin Zhao": "https://ddragon.leagueoflegends.com/cdn/14.1.1/img/champion/XinZhao.png",
  }

  if (riotChampionIcons[championName]) {
    return riotChampionIcons[championName]
  }

  // Default Riot Data Dragon URL for other champions
  const normalizedName = CHAMPION_ID_MAP[championName] || championName.replace(/[^a-zA-Z]/g, "")
  return `${ASSET_URLS.dataDragon}/img/champion/${normalizedName}.png`
}

export function getItemIcon(itemName: string): string {
  const itemId = ITEM_ID_MAP[itemName]
  if (itemId) {
    return `${ASSET_URLS.dataDragon}/img/item/${itemId}.png`
  }
  // Fallback to placeholder
  return "/placeholder.svg?height=40&width=40"
}

export function getSummonerSpellIcon(spellName: string): string {
  const spellId = SUMMONER_SPELL_ID_MAP[spellName]
  if (spellId) {
    return `${ASSET_URLS.dataDragon}/img/spell/Summoner${spellName}.png`
  }
  // Special cases
  if (spellName === "Mark") {
    return `${ASSET_URLS.dataDragon}/img/spell/SummonerSnowball.png`
  }
  // Fallback to placeholder
  return "/placeholder.svg?height=64&width=64"
}

export function getRunePathIcon(pathName: string): string {
  const path = RUNE_PATH_MAP[pathName]
  if (path) {
    return `https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${path.id}.png`
  }

  // Fallback paths for common rune paths
  const fallbackPaths: { [key: string]: string } = {
    Precision: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7201_Precision.png",
    Domination: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png",
    Sorcery: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7202_Sorcery.png",
    Resolve: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7204_Resolve.png",
    Inspiration: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7203_Inspiration.png",
  }

  if (fallbackPaths[pathName]) {
    return fallbackPaths[pathName]
  }

  // Fallback to placeholder
  return "/placeholder.svg?height=32&width=32"
}

export function getRuneKeystoneIcon(keystoneName: string): string {
  const keystone = RUNE_KEYSTONE_MAP[keystoneName]
  if (keystone) {
    return `https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${keystone.path}/${keystone.id}.png`
  }

  // Fallback icons for common keystones
  const fallbackKeystones: { [key: string]: string } = {
    "Press the Attack":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
    "Lethal Tempo":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
    "Fleet Footwork":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
    Conqueror: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png",
    Electrocute:
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png",
    "Dark Harvest":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png",
    Aery: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
    "Arcane Comet":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png",
    "Phase Rush": "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png",
    "Grasp of the Undying":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
    Aftershock:
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png",
    Guardian: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/Guardian/Guardian.png",
  }

  if (fallbackKeystones[keystoneName]) {
    return fallbackKeystones[keystoneName]
  }

  // Fallback to placeholder
  return "/placeholder.svg?height=40&width=40"
}

export function getRuneShardIcon(shardName: string): string {
  const shard = RUNE_SHARD_MAP[shardName]
  if (shard) {
    return `https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/${shard.path}/${shard.id}.png`
  }

  // Common rune shards fallback
  const fallbackShards: { [key: string]: string } = {
    Triumph: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Triumph/Triumph.png",
    "Presence of Mind":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png",
    "Legend: Alacrity":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png",
    "Legend: Tenacity":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png",
    "Coup de Grace":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
    "Taste of Blood":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png",
    "Sudden Impact":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png",
    "Eyeball Collection":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png",
    "Ultimate Hunter":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png",
    "Manaflow Band":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png",
    Transcendence:
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/Transcendence/Transcendence.png",
    "Gathering Storm":
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png",
    Conditioning:
      "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/Conditioning/Conditioning.png",
    Revitalize: "https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Resolve/Revitalize/Revitalize.png",
  }

  if (fallbackShards[shardName]) {
    return fallbackShards[shardName]
  }

  // Fallback to placeholder
  return "/placeholder.svg?height=32&width=32"
}

export function getRunePathColor(pathName: string): string {
  return RUNE_PATH_MAP[pathName]?.color || "#888888"
}

// Enhanced champion data with proper asset URLs
export function getChampionAssets(championName: string) {
  return {
    icon: getChampionIcon(championName),
    splash: `${ASSET_URLS.dataDragon}/img/champion/splash/${CHAMPION_ID_MAP[championName] || championName.replace(/[^a-zA-Z]/g, "")}_0.jpg`,
    loading: `${ASSET_URLS.dataDragon}/img/champion/loading/${CHAMPION_ID_MAP[championName] || championName.replace(/[^a-zA-Z]/g, "")}_0.jpg`,
  }
}

// Utility function to preload images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}

// Batch preload function for better performance
export async function preloadAssets(championName: string, items: string[], spells: string[]) {
  const assets = [getChampionIcon(championName), ...items.map(getItemIcon), ...spells.map(getSummonerSpellIcon)]

  try {
    await Promise.all(assets.map(preloadImage))
  } catch (error) {
    console.warn("Some assets failed to preload:", error)
  }
}

// Function to get fallback image on error
export function handleImageError(event: React.SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget
  if (!img.src.includes("placeholder.svg")) {
    img.src = "/placeholder.svg?height=40&width=40"
  }
}

// Enhanced asset URLs with error handling
export const AssetImage = ({
  src,
  alt,
  className,
  fallbackSize = "40x40",
}: {
  src: string
  alt: string
  className?: string
  fallbackSize?: string
}) => {
  const [imgSrc, setImgSrc] = React.useState(src)

  const handleError = () => {
    setImgSrc(`/placeholder.svg?height=${fallbackSize.split("x")[1]}&width=${fallbackSize.split("x")[0]}`)
  }

  return React.createElement("img", {
    src: imgSrc || "/placeholder.svg",
    alt,
    className,
    onError: handleError,
    loading: "lazy",
  })
}
