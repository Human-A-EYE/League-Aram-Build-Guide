// Static champion data for ARAM builds
export type ChampionBuild = {
  build: string[]
  runes: {
    primary: string[]
    secondary: string[]
  }
  summoners: string[]
  winRate?: string
  pickRate?: string
}

export type ChampionDatabase = {
  [key: string]: ChampionBuild
}

// Complete list of League of Legends champions (170+ champions)
export const champions = [
  "Aatrox",
  "Ahri",
  "Akali",
  "Akshan",
  "Alistar",
  "Ambessa",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "Aurelion Sol",
  "Aurora",
  "Azir",
  "Bard",
  "Bel'Veth",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Briar",
  "Caitlyn",
  "Camille",
  "Cassiopeia",
  "Cho'Gath",
  "Corki",
  "Darius",
  "Diana",
  "Dr. Mundo",
  "Draven",
  "Ekko",
  "Elise",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Hwei",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "Jarvan IV",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "K'Sante",
  "Kai'Sa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "Kha'Zix",
  "Kindred",
  "Kled",
  "Kog'Maw",
  "LeBlanc",
  "Lee Sin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "Master Yi",
  "Mel",
  "Milio",
  "Miss Fortune",
  "Mordekaiser",
  "Morgana",
  "Naafiri",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nilah",
  "Nocturne",
  "Nunu & Willump",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "Rek'Sai",
  "Rell",
  "Renata Glasc",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Smolder",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "Tahm Kench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "Twisted Fate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "Vel'Koz",
  "Vex",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "Wukong",
  "Xayah",
  "Xerath",
  "Xin Zhao",
  "Yasuo",
  "Yone",
  "Yorick",
  "Yuumi",
  "Zac",
  "Zed",
  "Zeri",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra",
]

// Comprehensive ARAM builds for all champions
export const championData: ChampionDatabase = {
  // Fighters/Bruisers
  Aatrox: {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Spirit Visage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.2%",
    pickRate: "4.8%",
  },
  Ahri: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.3%",
    pickRate: "6.1%",
  },
  Akali: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Lich Bane",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.8%",
    pickRate: "5.2%",
  },
  Akshan: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Collector",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Bloodthirster",
    ],
    runes: {
      primary: ["Press the Attack", "Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Taste of Blood", "Treasure Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "50.5%",
    pickRate: "3.2%",
  },
  // Tanks
  Alistar: {
    build: [
      "Locket of the Iron Solari",
      "Mercury's Treads",
      "Zeke's Convergence",
      "Knight's Vow",
      "Thornmail",
      "Warmog's Armor",
    ],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Hextech Flashtraption", "Cosmic Insight"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.1%",
    pickRate: "3.8%",
  },
  Ambessa: {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.7%",
    pickRate: "3.5%",
  },
  Amumu: {
    build: ["Sunfire Aegis", "Mercury's Treads", "Demonic Embrace", "Thornmail", "Abyssal Mask", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.7%",
    pickRate: "4.1%",
  },
  // Mages
  Anivia: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Seraph's Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Clarity"],
    winRate: "53.4%",
    pickRate: "3.5%",
  },
  Annie: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Scorch"],
    },
    summoners: ["Flash", "Ignite"],
    winRate: "51.8%",
    pickRate: "3.9%",
  },
  // ADCs
  Aphelios: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Bloodthirster",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "48.9%",
    pickRate: "3.1%",
  },
  Ashe: {
    build: [
      "Imperial Mandate",
      "Berserker's Greaves",
      "Manamune",
      "Runaan's Hurricane",
      "Infinity Edge",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Approach Velocity", "Biscuit Delivery"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "54.2%",
    pickRate: "7.3%",
  },
  // More mages
  "Aurelion Sol": {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Cosmic Drive",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Phase Rush", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "50.7%",
    pickRate: "1.8%",
  },
  Aurora: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.1%",
    pickRate: "2.3%",
  },
  Azir: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Nashor's Tooth",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Legend: Alacrity"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "49.1%",
    pickRate: "2.4%",
  },
  // Supports
  Bard: {
    build: [
      "Imperial Mandate",
      "Mobility Boots",
      "Dead Man's Plate",
      "Force of Nature",
      "Zhonya's Hourglass",
      "Vigilant Wardstone",
    ],
    runes: {
      primary: ["Guardian", "Font of Life", "Conditioning", "Revitalize"],
      secondary: ["Magical Footwear", "Cosmic Insight"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "51.3%",
    pickRate: "2.7%",
  },
  "Bel'Veth": {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Blade of the Ruined King",
      "Death's Dance",
      "Wit's End",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Treasure Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.5%",
    pickRate: "2.9%",
  },
  Blitzcrank: {
    build: [
      "Locket of the Iron Solari",
      "Mercury's Treads",
      "Zeke's Convergence",
      "Thornmail",
      "Force of Nature",
      "Warmog's Armor",
    ],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Unflinching"],
      secondary: ["Hextech Flashtraption", "Cosmic Insight"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.8%",
    pickRate: "5.6%",
  },
  Brand: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Demonic Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "55.1%",
    pickRate: "8.2%",
  },
  Braum: {
    build: [
      "Locket of the Iron Solari",
      "Mercury's Treads",
      "Zeke's Convergence",
      "Knight's Vow",
      "Thornmail",
      "Warmog's Armor",
    ],
    runes: {
      primary: ["Guardian", "Font of Life", "Conditioning", "Revitalize"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "50.9%",
    pickRate: "3.2%",
  },
  Briar: {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.8%",
    pickRate: "3.7%",
  },
  // Continuing with more champions...
  Caitlyn: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Rapid Firecannon",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Bloodthirster",
    ],
    runes: {
      primary: ["Fleet Footwork", "Presence of Mind", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "51.7%",
    pickRate: "6.8%",
  },
  Camille: {
    build: [
      "Divine Sunderer",
      "Plated Steelcaps",
      "Ravenous Hydra",
      "Death's Dance",
      "Sterak's Gage",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.3%",
    pickRate: "3.4%",
  },
  Cassiopeia: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Seraph's Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Conqueror", "Presence of Mind", "Legend: Tenacity", "Last Stand"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Ghost"],
    winRate: "52.4%",
    pickRate: "3.8%",
  },
  "Cho'Gath": {
    build: ["Sunfire Aegis", "Mercury's Treads", "Thornmail", "Spirit Visage", "Warmog's Armor", "Gargoyle Stoneplate"],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Approach Velocity", "Biscuit Delivery"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "53.1%",
    pickRate: "4.7%",
  },
  Corki: {
    build: ["Trinity Force", "Sorcerer's Shoes", "Manamune", "Rapid Firecannon", "Void Staff", "Rabadon's Deathcap"],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "50.6%",
    pickRate: "2.9%",
  },
  Darius: {
    build: ["Goredrinker", "Mercury's Treads", "Sterak's Gage", "Death's Dance", "Spirit Visage", "Thornmail"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.3%",
    pickRate: "5.1%",
  },
  Diana: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Nashor's Tooth",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Triumph", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.1%",
    pickRate: "5.7%",
  },
  "Dr. Mundo": {
    build: [
      "Turbo Chemtank",
      "Mercury's Treads",
      "Warmog's Armor",
      "Spirit Visage",
      "Thornmail",
      "Gargoyle Stoneplate",
    ],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Second Wind", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "53.4%",
    pickRate: "4.3%",
  },
  Draven: {
    build: ["Eclipse", "Berserker's Greaves", "Collector", "Infinity Edge", "Lord Dominik's Regards", "Bloodthirster"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "51.2%",
    pickRate: "4.1%",
  },
  Ekko: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Lich Bane",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Absolute Focus", "Gathering Storm"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.8%",
    pickRate: "4.9%",
  },
  Elise: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Demonic Embrace",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.7%",
    pickRate: "2.8%",
  },
  Evelynn: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Lich Bane",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Absolute Focus", "Gathering Storm"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.1%",
    pickRate: "3.6%",
  },
  Ezreal: {
    build: [
      "Divine Sunderer",
      "Ionian Boots of Lucidity",
      "Manamune",
      "Serylda's Grudge",
      "Ravenous Hydra",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Conqueror", "Presence of Mind", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Transcendence", "Gathering Storm"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "52.3%",
    pickRate: "9.1%",
  },
  Fiddlesticks: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Demonic Embrace",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Perfect Timing", "Cosmic Insight"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "53.2%",
    pickRate: "4.1%",
  },
  Fiora: {
    build: ["Goredrinker", "Plated Steelcaps", "Ravenous Hydra", "Death's Dance", "Spirit Visage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Second Wind", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.2%",
    pickRate: "3.8%",
  },
  Fizz: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Lich Bane",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Transcendence", "Gathering Storm"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.5%",
    pickRate: "4.7%",
  },
  Galio: {
    build: ["Sunfire Aegis", "Mercury's Treads", "Abyssal Mask", "Thornmail", "Spirit Visage", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.3%",
    pickRate: "4.2%",
  },
  Gangplank: {
    build: [
      "Trinity Force",
      "Ionian Boots of Lucidity",
      "Collector",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Bone Plating", "Overgrowth"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "50.7%",
    pickRate: "3.9%",
  },
  Garen: {
    build: [
      "Stridebreaker",
      "Berserker's Greaves",
      "Mortal Reminder",
      "Dead Man's Plate",
      "Force of Nature",
      "Sterak's Gage",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Nimbus Cloak", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.7%",
    pickRate: "5.3%",
  },
  Gnar: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Presence of Mind", "Legend: Tenacity"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.4%",
    pickRate: "3.1%",
  },
  Gragas: {
    build: ["Sunfire Aegis", "Mercury's Treads", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.1%",
    pickRate: "4.6%",
  },
  Graves: {
    build: ["Eclipse", "Berserker's Greaves", "Collector", "Infinity Edge", "Lord Dominik's Regards", "Guardian Angel"],
    runes: {
      primary: ["Fleet Footwork", "Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "51.8%",
    pickRate: "4.3%",
  },
  Gwen: {
    build: [
      "Riftmaker",
      "Plated Steelcaps",
      "Nashor's Tooth",
      "Zhonya's Hourglass",
      "Cosmic Drive",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.2%",
    pickRate: "2.9%",
  },
  Hecarim: {
    build: ["Divine Sunderer", "Mercury's Treads", "Black Cleaver", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Nimbus Cloak", "Waterwalking"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.6%",
    pickRate: "4.2%",
  },
  Heimerdinger: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Demonic Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Perfect Timing", "Cosmic Insight"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "53.8%",
    pickRate: "3.4%",
  },
  Hwei: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "51.3%",
    pickRate: "3.7%",
  },
  Illaoi: {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.9%",
    pickRate: "3.8%",
  },
  Irelia: {
    build: ["Goredrinker", "Plated Steelcaps", "Wit's End", "Death's Dance", "Spirit Visage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.8%",
    pickRate: "4.1%",
  },
  Ivern: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Ardent Censer",
      "Redemption",
      "Vigilant Wardstone",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Font of Life", "Revitalize"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "51.7%",
    pickRate: "1.9%",
  },
  Janna: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Ardent Censer",
      "Chemtech Putrifier",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Font of Life", "Revitalize"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "53.1%",
    pickRate: "4.2%",
  },
  "Jarvan IV": {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.2%",
    pickRate: "3.6%",
  },
  Jax: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Wit's End", "Death's Dance", "Spirit Visage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.8%",
    pickRate: "4.7%",
  },
  Jayce: {
    build: ["Eclipse", "Ionian Boots of Lucidity", "Manamune", "Serylda's Grudge", "Edge of Night", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Presence of Mind", "Legend: Tenacity", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.4%",
    pickRate: "3.2%",
  },
  Jhin: {
    build: ["Galeforce", "Swifties", "Rapid Firecannon", "Infinity Edge", "Lord Dominik's Regards", "Bloodthirster"],
    runes: {
      primary: ["Dark Harvest", "Taste of Blood", "Eyeball Collection", "Ravenous Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "53.1%",
    pickRate: "7.2%",
  },
  Jinx: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Treasure Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "53.8%",
    pickRate: "8.4%",
  },
  "K'Sante": {
    build: ["Sunfire Aegis", "Plated Steelcaps", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Sudden Impact", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.7%",
    pickRate: "2.8%",
  },
  "Kai'Sa": {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Nashor's Tooth",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Hail of Blades", "Taste of Blood", "Eyeball Collection", "Treasure Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "52.1%",
    pickRate: "7.9%",
  },
  Kalista: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Runaan's Hurricane",
      "Infinity Edge",
      "Bloodthirster",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Hail of Blades", "Taste of Blood", "Eyeball Collection", "Ravenous Hunter"],
      secondary: ["Presence of Mind", "Legend: Alacrity"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "48.3%",
    pickRate: "2.1%",
  },
  Karma: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Ardent Censer",
      "Chemtech Putrifier",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "54.2%",
    pickRate: "6.3%",
  },
  Karthus: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Seraph's Embrace",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "54.7%",
    pickRate: "5.1%",
  },
  Kassadin: {
    build: [
      "Everfrost",
      "Sorcerer's Shoes",
      "Seraph's Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Fleet Footwork", "Presence of Mind", "Legend: Tenacity", "Last Stand"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "52.6%",
    pickRate: "4.3%",
  },
  Katarina: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Nashor's Tooth",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Coup de Grace"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.3%",
    pickRate: "6.8%",
  },
  Kayle: {
    build: [
      "Nashor's Tooth",
      "Berserker's Greaves",
      "Riftmaker",
      "Zhonya's Hourglass",
      "Rabadon's Deathcap",
      "Void Staff",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "52.8%",
    pickRate: "4.2%",
  },
  Kayn: {
    build: [
      "Goredrinker",
      "Ionian Boots of Lucidity",
      "Black Cleaver",
      "Death's Dance",
      "Sterak's Gage",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.7%",
    pickRate: "4.1%",
  },
  Kennen: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Demonic Embrace",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.9%",
    pickRate: "3.4%",
  },
  "Kha'Zix": {
    build: [
      "Duskblade of Draktharr",
      "Ionian Boots of Lucidity",
      "Collector",
      "Edge of Night",
      "Serylda's Grudge",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Dark Harvest", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Absolute Focus", "Gathering Storm"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.8%",
    pickRate: "3.7%",
  },
  Kindred: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Press the Attack", "Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "50.2%",
    pickRate: "2.8%",
  },
  Kled: {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.4%",
    pickRate: "2.9%",
  },
  "Kog'Maw": {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Guinsoo's Rageblade",
      "Runaan's Hurricane",
      "Wit's End",
      "Bloodthirster",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "53.1%",
    pickRate: "4.5%",
  },
  LeBlanc: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.7%",
    pickRate: "5.3%",
  },
  "Lee Sin": {
    build: [
      "Goredrinker",
      "Ionian Boots of Lucidity",
      "Black Cleaver",
      "Sterak's Gage",
      "Death's Dance",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "48.9%",
    pickRate: "5.7%",
  },
  Leona: {
    build: [
      "Locket of the Iron Solari",
      "Mercury's Treads",
      "Zeke's Convergence",
      "Knight's Vow",
      "Thornmail",
      "Warmog's Armor",
    ],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.3%",
    pickRate: "4.1%",
  },
  Lillia: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Cosmic Drive",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Nimbus Cloak", "Waterwalking"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.4%",
    pickRate: "3.6%",
  },
  Lissandra: {
    build: ["Everfrost", "Sorcerer's Shoes", "Zhonya's Hourglass", "Cosmic Drive", "Void Staff", "Rabadon's Deathcap"],
    runes: {
      primary: ["Electrocute", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.7%",
    pickRate: "3.8%",
  },
  Lucian: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Bloodthirster",
    ],
    runes: {
      primary: ["Press the Attack", "Presence of Mind", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "51.6%",
    pickRate: "5.9%",
  },
  Lulu: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Ardent Censer",
      "Chemtech Putrifier",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Font of Life", "Revitalize"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "54.8%",
    pickRate: "5.7%",
  },
  Lux: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "54.1%",
    pickRate: "9.3%",
  },
  Malphite: {
    build: ["Sunfire Aegis", "Plated Steelcaps", "Thornmail", "Force of Nature", "Randuin's Omen", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "53.7%",
    pickRate: "5.8%",
  },
  Malzahar: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Demonic Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "53.4%",
    pickRate: "4.7%",
  },
  Maokai: {
    build: ["Sunfire Aegis", "Mercury's Treads", "Demonic Embrace", "Thornmail", "Spirit Visage", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "55.2%",
    pickRate: "6.1%",
  },
  "Master Yi": {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Guinsoo's Rageblade",
      "Wit's End",
      "Death's Dance",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "52.3%",
    pickRate: "4.8%",
  },
  Mel: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "50.9%",
    pickRate: "2.1%",
  },
  Milio: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Ardent Censer",
      "Chemtech Putrifier",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Font of Life", "Revitalize"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "52.7%",
    pickRate: "3.4%",
  },
  "Miss Fortune": {
    build: ["Eclipse", "Berserker's Greaves", "Collector", "Infinity Edge", "Lord Dominik's Regards", "Guardian Angel"],
    runes: {
      primary: ["Press the Attack", "Presence of Mind", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "53.9%",
    pickRate: "8.7%",
  },
  Mordekaiser: {
    build: ["Riftmaker", "Plated Steelcaps", "Demonic Embrace", "Zhonya's Hourglass", "Thornmail", "Spirit Visage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.1%",
    pickRate: "4.9%",
  },
  Morgana: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Demonic Embrace",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Perfect Timing", "Cosmic Insight"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "52.8%",
    pickRate: "7.1%",
  },
  Naafiri: {
    build: ["Eclipse", "Ionian Boots of Lucidity", "Collector", "Edge of Night", "Serylda's Grudge", "Guardian Angel"],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Triumph", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.6%",
    pickRate: "2.7%",
  },
  Nami: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Ardent Censer",
      "Chemtech Putrifier",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Font of Life", "Revitalize"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "53.6%",
    pickRate: "4.8%",
  },
  Nasus: {
    build: [
      "Divine Sunderer",
      "Mercury's Treads",
      "Thornmail",
      "Spirit Visage",
      "Dead Man's Plate",
      "Gargoyle Stoneplate",
    ],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Presence of Mind", "Legend: Tenacity"],
    },
    summoners: ["Flash", "Ghost"],
    winRate: "51.3%",
    pickRate: "4.8%",
  },
  Nautilus: {
    build: [
      "Locket of the Iron Solari",
      "Mercury's Treads",
      "Zeke's Convergence",
      "Knight's Vow",
      "Thornmail",
      "Gargoyle Stoneplate",
    ],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.9%",
    pickRate: "4.3%",
  },
  Neeko: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Horizon Focus",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.1%",
    pickRate: "3.7%",
  },
  Nidalee: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Lich Bane",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.3%",
    pickRate: "3.9%",
  },
  Nilah: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Bloodthirster",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Triumph", "Legend: Bloodline", "Last Stand"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "51.4%",
    pickRate: "2.6%",
  },
  Nocturne: {
    build: ["Eclipse", "Berserker's Greaves", "Collector", "Edge of Night", "Serylda's Grudge", "Guardian Angel"],
    runes: {
      primary: ["Lethal Tempo", "Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.7%",
    pickRate: "4.2%",
  },
  "Nunu & Willump": {
    build: ["Sunfire Aegis", "Mercury's Treads", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.8%",
    pickRate: "3.9%",
  },
  Olaf: {
    build: ["Goredrinker", "Berserker's Greaves", "Black Cleaver", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Ghost"],
    winRate: "51.3%",
    pickRate: "3.7%",
  },
  Orianna: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Seraph's Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Phase Rush", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "51.7%",
    pickRate: "4.8%",
  },
  Ornn: {
    build: ["Sunfire Aegis", "Mercury's Treads", "Thornmail", "Spirit Visage", "Randuin's Omen", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.4%",
    pickRate: "4.1%",
  },
  Pantheon: {
    build: [
      "Eclipse",
      "Ionian Boots of Lucidity",
      "Black Cleaver",
      "Edge of Night",
      "Serylda's Grudge",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Press the Attack", "Triumph", "Legend: Tenacity", "Coup de Grace"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.9%",
    pickRate: "4.3%",
  },
  Poppy: {
    build: ["Sunfire Aegis", "Plated Steelcaps", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.1%",
    pickRate: "3.8%",
  },
  Pyke: {
    build: [
      "Duskblade of Draktharr",
      "Mobility Boots",
      "Umbral Glaive",
      "Edge of Night",
      "Death's Dance",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Aftershock", "Font of Life", "Bone Plating", "Unflinching"],
      secondary: ["Sudden Impact", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.8%",
    pickRate: "6.2%",
  },
  Qiyana: {
    build: ["Eclipse", "Ionian Boots of Lucidity", "Collector", "Edge of Night", "Serylda's Grudge", "Guardian Angel"],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Triumph", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.8%",
    pickRate: "3.1%",
  },
  Quinn: {
    build: ["Eclipse", "Berserker's Greaves", "Collector", "Infinity Edge", "Lord Dominik's Regards", "Guardian Angel"],
    runes: {
      primary: ["Press the Attack", "Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "50.4%",
    pickRate: "2.7%",
  },
  Rakan: {
    build: [
      "Locket of the Iron Solari",
      "Mobility Boots",
      "Zeke's Convergence",
      "Knight's Vow",
      "Redemption",
      "Vigilant Wardstone",
    ],
    runes: {
      primary: ["Guardian", "Font of Life", "Conditioning", "Revitalize"],
      secondary: ["Magical Footwear", "Cosmic Insight"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.6%",
    pickRate: "3.4%",
  },
  Rammus: {
    build: ["Sunfire Aegis", "Plated Steelcaps", "Thornmail", "Force of Nature", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "53.2%",
    pickRate: "4.6%",
  },
  "Rek'Sai": {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.7%",
    pickRate: "2.3%",
  },
  Rell: {
    build: [
      "Locket of the Iron Solari",
      "Mercury's Treads",
      "Zeke's Convergence",
      "Knight's Vow",
      "Thornmail",
      "Warmog's Armor",
    ],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.1%",
    pickRate: "2.8%",
  },
  "Renata Glasc": {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Chemtech Putrifier",
      "Ardent Censer",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Font of Life", "Revitalize"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "52.3%",
    pickRate: "2.1%",
  },
  Renekton: {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.6%",
    pickRate: "3.9%",
  },
  Rengar: {
    build: ["Eclipse", "Ionian Boots of Lucidity", "Collector", "Edge of Night", "Serylda's Grudge", "Guardian Angel"],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Triumph", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.2%",
    pickRate: "3.6%",
  },
  Riven: {
    build: [
      "Goredrinker",
      "Ionian Boots of Lucidity",
      "Black Cleaver",
      "Death's Dance",
      "Sterak's Gage",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "49.9%",
    pickRate: "4.2%",
  },
  Rumble: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Demonic Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.8%",
    pickRate: "3.4%",
  },
  Ryze: {
    build: [
      "Everfrost",
      "Sorcerer's Shoes",
      "Seraph's Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Phase Rush", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Presence of Mind", "Legend: Tenacity"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "50.3%",
    pickRate: "2.9%",
  },
  Samira: {
    build: [
      "Immortal Shieldbow",
      "Berserker's Greaves",
      "Collector",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Bloodthirster",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "51.3%",
    pickRate: "5.1%",
  },
  Sejuani: {
    build: ["Sunfire Aegis", "Mercury's Treads", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.6%",
    pickRate: "4.3%",
  },
  Senna: {
    build: ["Eclipse", "Swifties", "Manamune", "Rapid Firecannon", "Infinity Edge", "Lord Dominik's Regards"],
    runes: {
      primary: ["Grasp of the Undying", "Font of Life", "Conditioning", "Revitalize"],
      secondary: ["Presence of Mind", "Cut Down"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "53.2%",
    pickRate: "6.9%",
  },
  Seraphine: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Chemtech Putrifier",
      "Ardent Censer",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Presence of Mind", "Cut Down"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "56.3%",
    pickRate: "7.8%",
  },
  Sett: {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.7%",
    pickRate: "4.8%",
  },
  Shaco: {
    build: [
      "Duskblade of Draktharr",
      "Mobility Boots",
      "Collector",
      "Edge of Night",
      "Serylda's Grudge",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Dark Harvest", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Absolute Focus", "Gathering Storm"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.4%",
    pickRate: "3.7%",
  },
  Shen: {
    build: ["Sunfire Aegis", "Plated Steelcaps", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.9%",
    pickRate: "3.2%",
  },
  Shyvana: {
    build: [
      "Riftmaker",
      "Sorcerer's Shoes",
      "Nashor's Tooth",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Absolute Focus", "Gathering Storm"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.7%",
    pickRate: "4.1%",
  },
  Singed: {
    build: ["Riftmaker", "Plated Steelcaps", "Demonic Embrace", "Dead Man's Plate", "Thornmail", "Warmog's Armor"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Ghost"],
    winRate: "52.4%",
    pickRate: "3.6%",
  },
  Sion: {
    build: ["Sunfire Aegis", "Plated Steelcaps", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.8%",
    pickRate: "4.7%",
  },
  Sivir: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Bloodthirster",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "52.6%",
    pickRate: "5.3%",
  },
  Skarner: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.4%",
    pickRate: "2.8%",
  },
  Smolder: {
    build: [
      "Trinity Force",
      "Berserker's Greaves",
      "Manamune",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Press the Attack", "Presence of Mind", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "50.8%",
    pickRate: "3.1%",
  },
  Sona: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Ardent Censer",
      "Chemtech Putrifier",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Presence of Mind", "Cut Down"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "57.1%",
    pickRate: "6.5%",
  },
  Soraka: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Redemption",
      "Ardent Censer",
      "Staff of Flowing Water",
      "Mikael's Blessing",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Revitalize", "Second Wind"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "55.8%",
    pickRate: "6.3%",
  },
  Swain: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Zhonya's Hourglass",
      "Demonic Embrace",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Conqueror", "Presence of Mind", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "54.7%",
    pickRate: "7.2%",
  },
  Sylas: {
    build: [
      "Everfrost",
      "Ionian Boots of Lucidity",
      "Cosmic Drive",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Conqueror", "Presence of Mind", "Legend: Tenacity", "Last Stand"],
      secondary: ["Biscuit Delivery", "Time Warp Tonic"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.3%",
    pickRate: "6.7%",
  },
  Syndra: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "51.9%",
    pickRate: "5.4%",
  },
  "Tahm Kench": {
    build: ["Sunfire Aegis", "Mercury's Treads", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Grasp of the Undying", "Demolish", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.3%",
    pickRate: "3.1%",
  },
  Taliyah: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.7%",
    pickRate: "2.9%",
  },
  Talon: {
    build: ["Eclipse", "Ionian Boots of Lucidity", "Collector", "Edge of Night", "Serylda's Grudge", "Guardian Angel"],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Triumph", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.6%",
    pickRate: "4.1%",
  },
  Taric: {
    build: [
      "Locket of the Iron Solari",
      "Mercury's Treads",
      "Zeke's Convergence",
      "Knight's Vow",
      "Thornmail",
      "Warmog's Armor",
    ],
    runes: {
      primary: ["Guardian", "Font of Life", "Conditioning", "Revitalize"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "51.8%",
    pickRate: "2.4%",
  },
  Teemo: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Nashor's Tooth",
      "Demonic Embrace",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Ignite"],
    winRate: "52.4%",
    pickRate: "5.9%",
  },
  Thresh: {
    build: [
      "Locket of the Iron Solari",
      "Mercury's Treads",
      "Zeke's Convergence",
      "Knight's Vow",
      "Thornmail",
      "Gargoyle Stoneplate",
    ],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Biscuit Delivery", "Cosmic Insight"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "50.7%",
    pickRate: "5.8%",
  },
  Tristana: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "52.1%",
    pickRate: "5.7%",
  },
  Trundle: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Wit's End", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.4%",
    pickRate: "3.8%",
  },
  Tryndamere: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Ghost"],
    winRate: "51.6%",
    pickRate: "4.2%",
  },
  "Twisted Fate": {
    build: [
      "Everfrost",
      "Sorcerer's Shoes",
      "Rapid Firecannon",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "51.2%",
    pickRate: "3.6%",
  },
  Twitch: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "52.8%",
    pickRate: "5.4%",
  },
  Udyr: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.9%",
    pickRate: "3.4%",
  },
  Urgot: {
    build: ["Goredrinker", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Thornmail", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.7%",
    pickRate: "3.9%",
  },
  Varus: {
    build: [
      "Manamune",
      "Duskblade of Draktharr",
      "Ionian Boots of Lucidity",
      "Serylda's Grudge",
      "Edge of Night",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Cut Down"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "53.1%",
    pickRate: "7.3%",
  },
  Vayne: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "51.3%",
    pickRate: "6.1%",
  },
  Veigar: {
    build: ["Everfrost", "Sorcerer's Shoes", "Cosmic Drive", "Zhonya's Hourglass", "Void Staff", "Rabadon's Deathcap"],
    runes: {
      primary: ["Electrocute", "Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Gathering Storm"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "54.3%",
    pickRate: "6.8%",
  },
  "Vel'Koz": {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "53.7%",
    pickRate: "5.2%",
  },
  Vex: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.1%",
    pickRate: "4.3%",
  },
  Vi: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.8%",
    pickRate: "4.6%",
  },
  Viego: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Blade of the Ruined King",
      "Death's Dance",
      "Wit's End",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.4%",
    pickRate: "3.7%",
  },
  Viktor: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Cosmic Drive",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "52.6%",
    pickRate: "4.9%",
  },
  Vladimir: {
    build: [
      "Hextech Rocketbelt",
      "Sorcerer's Shoes",
      "Cosmic Drive",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Phase Rush", "Nimbus Cloak", "Transcendence", "Gathering Storm"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Ghost"],
    winRate: "52.9%",
    pickRate: "5.1%",
  },
  Volibear: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Spirit Visage", "Sterak's Gage"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.1%",
    pickRate: "4.2%",
  },
  Warwick: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Wit's End", "Death's Dance", "Spirit Visage", "Thornmail"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.7%",
    pickRate: "4.8%",
  },
  Wukong: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.4%",
    pickRate: "3.8%",
  },
  Xayah: {
    build: [
      "Kraken Slayer",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Presence of Mind", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "51.9%",
    pickRate: "4.7%",
  },
  Xerath: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "53.9%",
    pickRate: "7.1%",
  },
  "Xin Zhao": {
    build: ["Divine Sunderer", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Sudden Impact", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.6%",
    pickRate: "3.9%",
  },
  Yasuo: {
    build: [
      "Immortal Shieldbow",
      "Berserker's Greaves",
      "Infinity Edge",
      "Phantom Dancer",
      "Death's Dance",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Bone Plating", "Revitalize"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "49.8%",
    pickRate: "7.9%",
  },
  Yone: {
    build: [
      "Immortal Shieldbow",
      "Berserker's Greaves",
      "Infinity Edge",
      "Phantom Dancer",
      "Death's Dance",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: ["Bone Plating", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.2%",
    pickRate: "6.4%",
  },
  Yorick: {
    build: ["Divine Sunderer", "Plated Steelcaps", "Black Cleaver", "Death's Dance", "Sterak's Gage", "Guardian Angel"],
    runes: {
      primary: ["Conqueror", "Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: ["Conditioning", "Revitalize"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "51.8%",
    pickRate: "3.1%",
  },
  Yuumi: {
    build: [
      "Moonstone Renewer",
      "Ionian Boots of Lucidity",
      "Staff of Flowing Water",
      "Ardent Censer",
      "Chemtech Putrifier",
      "Redemption",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: ["Presence of Mind", "Cut Down"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "53.4%",
    pickRate: "4.2%",
  },
  Zac: {
    build: ["Sunfire Aegis", "Mercury's Treads", "Thornmail", "Spirit Visage", "Dead Man's Plate", "Warmog's Armor"],
    runes: {
      primary: ["Aftershock", "Font of Life", "Conditioning", "Overgrowth"],
      secondary: ["Cheap Shot", "Ultimate Hunter"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "52.9%",
    pickRate: "4.3%",
  },
  Zed: {
    build: ["Eclipse", "Ionian Boots of Lucidity", "Collector", "Edge of Night", "Serylda's Grudge", "Guardian Angel"],
    runes: {
      primary: ["Electrocute", "Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Triumph", "Coup de Grace"],
    },
    summoners: ["Flash", "Mark"],
    winRate: "50.1%",
    pickRate: "5.8%",
  },
  Zeri: {
    build: [
      "Trinity Force",
      "Berserker's Greaves",
      "Phantom Dancer",
      "Infinity Edge",
      "Lord Dominik's Regards",
      "Guardian Angel",
    ],
    runes: {
      primary: ["Lethal Tempo", "Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: ["Taste of Blood", "Ravenous Hunter"],
    },
    summoners: ["Flash", "Heal"],
    winRate: "49.7%",
    pickRate: "2.8%",
  },
  Ziggs: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Arcane Comet", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "55.2%",
    pickRate: "8.3%",
  },
  Zilean: {
    build: [
      "Liandry's Anguish",
      "Ionian Boots of Lucidity",
      "Zhonya's Hourglass",
      "Cosmic Drive",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Aery", "Manaflow Band", "Transcendence", "Scorch"],
      secondary: ["Perfect Timing", "Cosmic Insight"],
    },
    summoners: ["Flash", "Exhaust"],
    winRate: "53.8%",
    pickRate: "4.7%",
  },
  Zoe: {
    build: [
      "Luden's Tempest",
      "Sorcerer's Shoes",
      "Horizon Focus",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Electrocute", "Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Manaflow Band", "Transcendence"],
    },
    summoners: ["Flash", "Barrier"],
    winRate: "51.2%",
    pickRate: "4.3%",
  },
  Zyra: {
    build: [
      "Liandry's Anguish",
      "Sorcerer's Shoes",
      "Demonic Embrace",
      "Zhonya's Hourglass",
      "Void Staff",
      "Rabadon's Deathcap",
    ],
    runes: {
      primary: ["Dark Harvest", "Cheap Shot", "Eyeball Collection", "Ultimate Hunter"],
      secondary: ["Presence of Mind", "Coup de Grace"],
    },
    summoners: ["Flash", "Ignite"],
    winRate: "54.3%",
    pickRate: "5.7%",
  },
}

// Calculate Levenshtein distance between two strings
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = []

  // Initialize matrix
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }

  // Fill matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1, // deletion
        )
      }
    }
  }

  return matrix[b.length][a.length]
}

// Find the closest champion match
export function findClosestChampion(input: string): { match: string | null; suggestion: string | null } {
  if (!input) return { match: null, suggestion: null }

  const normalizedInput = input.trim().toLowerCase()

  // Check for exact match (case-insensitive)
  const exactMatch = champions.find((champ) => champ.toLowerCase() === normalizedInput)
  if (exactMatch) {
    return { match: exactMatch, suggestion: null }
  }

  // Find closest match
  let closestMatch = null
  let minDistance = Number.POSITIVE_INFINITY

  for (const champion of champions) {
    const distance = levenshteinDistance(normalizedInput, champion.toLowerCase())

    // If the distance is less than 3, it's a close match
    if (distance < minDistance && distance < 3) {
      minDistance = distance
      closestMatch = champion
    }
  }

  return { match: null, suggestion: closestMatch }
}

// Parse and validate a comma-separated list of champions
export function parseChampionList(input: string): {
  valid: string[]
  invalid: Array<{ input: string; suggestion: string | null }>
} {
  const result = {
    valid: [] as string[],
    invalid: [] as Array<{ input: string; suggestion: string | null }>,
  }

  if (!input.trim()) return result

  const championNames = input
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name.length > 0)

  for (const name of championNames) {
    const { match, suggestion } = findClosestChampion(name)

    if (match) {
      result.valid.push(match)
    } else {
      result.invalid.push({ input: name, suggestion })
    }
  }

  return result
}

// Get champion build data
export function getChampionBuild(championName: string): ChampionBuild | null {
  const { match } = findClosestChampion(championName)

  if (!match) return null

  return championData[match] || null
}

// Get all champion builds
export function getAllChampionBuilds(): { champion: string; build: ChampionBuild }[] {
  return Object.keys(championData).map((champion) => ({
    champion,
    build: championData[champion],
  }))
}

// Get top ARAM champions by win rate
export function getTopAramChampions(limit = 10): { champion: string; winRate: string; pickRate: string }[] {
  return Object.keys(championData)
    .filter((champion) => championData[champion].winRate)
    .map((champion) => ({
      champion,
      winRate: championData[champion].winRate || "0%",
      pickRate: championData[champion].pickRate || "0%",
    }))
    .sort((a, b) => {
      const aWinRate = Number.parseFloat(a.winRate.replace("%", ""))
      const bWinRate = Number.parseFloat(b.winRate.replace("%", ""))
      return bWinRate - aWinRate
    })
    .slice(0, limit)
}
