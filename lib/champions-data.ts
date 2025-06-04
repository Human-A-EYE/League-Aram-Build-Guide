// This file contains mock data for champion builds
// In a real application, this would be a more comprehensive dataset or API

export type ChampionBuild = {
  items: {
    early: Array<{
      id: number
      name: string
      icon: string
    }>
    core: Array<{
      id: number
      name: string
      icon: string
    }>
    late: Array<{
      id: number
      name: string
      icon: string
    }>
  }
  runes: {
    primary: {
      path: string
      icon: string
      keystone: {
        id: number
        name: string
        description: string
        icon: string
      }
      slots: Array<{
        id: number
        name: string
        description: string
        icon: string
      }>
    }
    secondary: {
      path: string
      icon: string
      slots: Array<{
        id: number
        name: string
        description: string
        icon: string
      }>
    }
    statRunes: Array<{
      id: number
      name: string
      icon: string
    }>
  }
  summonerSpells: Array<{
    id: number
    name: string
    description: string
    icon: string
  }>
}

export type ChampionData = {
  [champion: string]: {
    [gameMode: string]: ChampionBuild
  }
}

// Mock data for champion builds
const championsData: ChampionData = {
  jinx: {
    aram: {
      items: {
        early: [
          { id: 1, name: "Doran's Blade", icon: "/placeholder.svg?height=40&width=40" },
          { id: 2, name: "Berserker's Greaves", icon: "/placeholder.svg?height=40&width=40" },
        ],
        core: [
          { id: 3, name: "Kraken Slayer", icon: "/placeholder.svg?height=40&width=40" },
          { id: 4, name: "Runaan's Hurricane", icon: "/placeholder.svg?height=40&width=40" },
          { id: 5, name: "Infinity Edge", icon: "/placeholder.svg?height=40&width=40" },
        ],
        late: [
          { id: 6, name: "Bloodthirster", icon: "/placeholder.svg?height=40&width=40" },
          { id: 7, name: "Guardian Angel", icon: "/placeholder.svg?height=40&width=40" },
        ],
      },
      runes: {
        primary: {
          path: "Precision",
          icon: "/placeholder.svg?height=32&width=32",
          keystone: {
            id: 1,
            name: "Press the Attack",
            description: "Hitting an enemy champion 3 consecutive times makes them vulnerable, dealing bonus damage.",
            icon: "/placeholder.svg?height=40&width=40",
          },
          slots: [
            {
              id: 2,
              name: "Triumph",
              description: "Takedowns restore 12% of your missing health and grant additional gold.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 3,
              name: "Legend: Alacrity",
              description: "Gain attack speed for every Legend stack, up to a maximum amount.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 4,
              name: "Coup de Grace",
              description: "Deal more damage to low health enemy champions.",
              icon: "/placeholder.svg?height=40&width=40",
            },
          ],
        },
        secondary: {
          path: "Domination",
          icon: "/placeholder.svg?height=32&width=32",
          slots: [
            {
              id: 5,
              name: "Taste of Blood",
              description: "Heal when you damage an enemy champion.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 6,
              name: "Ravenous Hunter",
              description: "Heal for a percentage of the damage you deal.",
              icon: "/placeholder.svg?height=40&width=40",
            },
          ],
        },
        statRunes: [
          { id: 7, name: "Adaptive Force", icon: "/placeholder.svg?height=24&width=24" },
          { id: 8, name: "Attack Speed", icon: "/placeholder.svg?height=24&width=24" },
          { id: 9, name: "Armor", icon: "/placeholder.svg?height=24&width=24" },
        ],
      },
      summonerSpells: [
        {
          id: 1,
          name: "Flash",
          description: "Teleports your champion a short distance toward your cursor's location.",
          icon: "/placeholder.svg?height=64&width=64",
        },
        {
          id: 2,
          name: "Heal",
          description:
            "Restores health to your champion and a nearby ally champion and grants both a brief movement speed boost.",
          icon: "/placeholder.svg?height=64&width=64",
        },
      ],
    },
    "summoner's rift": {
      items: {
        early: [
          { id: 1, name: "Doran's Blade", icon: "/placeholder.svg?height=40&width=40" },
          { id: 2, name: "Berserker's Greaves", icon: "/placeholder.svg?height=40&width=40" },
        ],
        core: [
          { id: 3, name: "Immortal Shieldbow", icon: "/placeholder.svg?height=40&width=40" },
          { id: 4, name: "Phantom Dancer", icon: "/placeholder.svg?height=40&width=40" },
          { id: 5, name: "Infinity Edge", icon: "/placeholder.svg?height=40&width=40" },
        ],
        late: [
          { id: 6, name: "Lord Dominik's Regards", icon: "/placeholder.svg?height=40&width=40" },
          { id: 7, name: "Guardian Angel", icon: "/placeholder.svg?height=40&width=40" },
        ],
      },
      runes: {
        primary: {
          path: "Precision",
          icon: "/placeholder.svg?height=32&width=32",
          keystone: {
            id: 1,
            name: "Lethal Tempo",
            description: "Gain attack speed when attacking enemy champions, stacking up to 6 times.",
            icon: "/placeholder.svg?height=40&width=40",
          },
          slots: [
            {
              id: 2,
              name: "Triumph",
              description: "Takedowns restore 12% of your missing health and grant additional gold.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 3,
              name: "Legend: Bloodline",
              description: "Gain lifesteal for every Legend stack, up to a maximum amount.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 4,
              name: "Coup de Grace",
              description: "Deal more damage to low health enemy champions.",
              icon: "/placeholder.svg?height=40&width=40",
            },
          ],
        },
        secondary: {
          path: "Sorcery",
          icon: "/placeholder.svg?height=32&width=32",
          slots: [
            {
              id: 5,
              name: "Nimbus Cloak",
              description: "After casting a summoner spell, gain movement speed.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 6,
              name: "Gathering Storm",
              description: "Gain increasing amounts of AD or AP over the course of the game.",
              icon: "/placeholder.svg?height=40&width=40",
            },
          ],
        },
        statRunes: [
          { id: 7, name: "Adaptive Force", icon: "/placeholder.svg?height=24&width=24" },
          { id: 8, name: "Attack Speed", icon: "/placeholder.svg?height=24&width=24" },
          { id: 9, name: "Armor", icon: "/placeholder.svg?height=24&width=24" },
        ],
      },
      summonerSpells: [
        {
          id: 1,
          name: "Flash",
          description: "Teleports your champion a short distance toward your cursor's location.",
          icon: "/placeholder.svg?height=64&width=64",
        },
        {
          id: 2,
          name: "Heal",
          description:
            "Restores health to your champion and a nearby ally champion and grants both a brief movement speed boost.",
          icon: "/placeholder.svg?height=64&width=64",
        },
      ],
    },
  },
  maokai: {
    aram: {
      items: {
        early: [
          { id: 1, name: "Doran's Ring", icon: "/placeholder.svg?height=40&width=40" },
          { id: 2, name: "Mercury's Treads", icon: "/placeholder.svg?height=40&width=40" },
        ],
        core: [
          { id: 3, name: "Sunfire Aegis", icon: "/placeholder.svg?height=40&width=40" },
          { id: 4, name: "Demonic Embrace", icon: "/placeholder.svg?height=40&width=40" },
          { id: 5, name: "Thornmail", icon: "/placeholder.svg?height=40&width=40" },
        ],
        late: [
          { id: 6, name: "Spirit Visage", icon: "/placeholder.svg?height=40&width=40" },
          { id: 7, name: "Warmog's Armor", icon: "/placeholder.svg?height=40&width=40" },
        ],
      },
      runes: {
        primary: {
          path: "Resolve",
          icon: "/placeholder.svg?height=32&width=32",
          keystone: {
            id: 1,
            name: "Aftershock",
            description: "After immobilizing an enemy champion, increase your Armor and Magic Resist.",
            icon: "/placeholder.svg?height=40&width=40",
          },
          slots: [
            {
              id: 2,
              name: "Font of Life",
              description: "Immobilizing an enemy champion marks them. Ally champions who attack marked enemies heal.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 3,
              name: "Conditioning",
              description: "After 12 min, gain Armor and Magic Resist and increase your Armor and Magic Resist by 5%.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 4,
              name: "Overgrowth",
              description: "Gain permanent max health when minions or monsters die near you.",
              icon: "/placeholder.svg?height=40&width=40",
            },
          ],
        },
        secondary: {
          path: "Sorcery",
          icon: "/placeholder.svg?height=32&width=32",
          slots: [
            {
              id: 5,
              name: "Manaflow Band",
              description: "Hitting an enemy champion with an ability permanently increases your maximum mana.",
              icon: "/placeholder.svg?height=40&width=40",
            },
            {
              id: 6,
              name: "Transcendence",
              description: "Gain CDR at level 5 and 8. CDR exceeding the cap is converted to AP or AD.",
              icon: "/placeholder.svg?height=40&width=40",
            },
          ],
        },
        statRunes: [
          { id: 7, name: "Adaptive Force", icon: "/placeholder.svg?height=24&width=24" },
          { id: 8, name: "Armor", icon: "/placeholder.svg?height=24&width=24" },
          { id: 9, name: "Magic Resist", icon: "/placeholder.svg?height=24&width=24" },
        ],
      },
      summonerSpells: [
        {
          id: 1,
          name: "Flash",
          description: "Teleports your champion a short distance toward your cursor's location.",
          icon: "/placeholder.svg?height=64&width=64",
        },
        {
          id: 2,
          name: "Mark",
          description: "Throw a snowball in a straight line. If it hits an enemy, you can reactivate to dash to them.",
          icon: "/placeholder.svg?height=64&width=64",
        },
      ],
    },
  },
  // Add more champions as needed
}

// Default build for when a specific champion build is not found
const defaultBuild: ChampionBuild = {
  items: {
    early: [
      { id: 1, name: "Starting Item", icon: "/placeholder.svg?height=40&width=40" },
      { id: 2, name: "Boots", icon: "/placeholder.svg?height=40&width=40" },
    ],
    core: [
      { id: 3, name: "Mythic Item", icon: "/placeholder.svg?height=40&width=40" },
      { id: 4, name: "Core Item 1", icon: "/placeholder.svg?height=40&width=40" },
      { id: 5, name: "Core Item 2", icon: "/placeholder.svg?height=40&width=40" },
    ],
    late: [
      { id: 6, name: "Situational Item 1", icon: "/placeholder.svg?height=40&width=40" },
      { id: 7, name: "Situational Item 2", icon: "/placeholder.svg?height=40&width=40" },
    ],
  },
  runes: {
    primary: {
      path: "Default Path",
      icon: "/placeholder.svg?height=32&width=32",
      keystone: {
        id: 1,
        name: "Default Keystone",
        description: "This is a placeholder for when a specific build is not found.",
        icon: "/placeholder.svg?height=40&width=40",
      },
      slots: [
        {
          id: 2,
          name: "Default Rune 1",
          description: "This is a placeholder rune.",
          icon: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 3,
          name: "Default Rune 2",
          description: "This is a placeholder rune.",
          icon: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 4,
          name: "Default Rune 3",
          description: "This is a placeholder rune.",
          icon: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    secondary: {
      path: "Default Secondary",
      icon: "/placeholder.svg?height=32&width=32",
      slots: [
        {
          id: 5,
          name: "Default Secondary 1",
          description: "This is a placeholder rune.",
          icon: "/placeholder.svg?height=40&width=40",
        },
        {
          id: 6,
          name: "Default Secondary 2",
          description: "This is a placeholder rune.",
          icon: "/placeholder.svg?height=40&width=40",
        },
      ],
    },
    statRunes: [
      { id: 7, name: "Stat 1", icon: "/placeholder.svg?height=24&width=24" },
      { id: 8, name: "Stat 2", icon: "/placeholder.svg?height=24&width=24" },
      { id: 9, name: "Stat 3", icon: "/placeholder.svg?height=24&width=24" },
    ],
  },
  summonerSpells: [
    {
      id: 1,
      name: "Flash",
      description: "Teleports your champion a short distance toward your cursor's location.",
      icon: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 2,
      name: "Default Spell",
      description: "This is a placeholder spell.",
      icon: "/placeholder.svg?height=64&width=64",
    },
  ],
}

// List of valid champion names for validation
export const validChampions = [
  "jinx",
  "maokai",
  "talon",
  "lulu",
  "malphite",
  "nasus",
  "teemo",
  "morgana",
  "evelynn",
  "darius",
  // Add more champions as needed
]

// List of valid game modes
export const validGameModes = ["aram", "summoner's rift", "urf", "twisted treeline"]

// Function to get champion build data
export function getChampionBuild(champion: string, gameMode: string): ChampionBuild {
  const normalizedChampion = champion.toLowerCase()
  const normalizedGameMode = gameMode.toLowerCase()

  // Check if champion exists in our data
  if (championsData[normalizedChampion]) {
    // Check if game mode exists for this champion
    if (championsData[normalizedChampion][normalizedGameMode]) {
      return championsData[normalizedChampion][normalizedGameMode]
    }

    // If game mode doesn't exist, return the first available game mode for this champion
    const availableGameModes = Object.keys(championsData[normalizedChampion])
    if (availableGameModes.length > 0) {
      return championsData[normalizedChampion][availableGameModes[0]]
    }
  }

  // Return default build if champion or game mode not found
  return defaultBuild
}
