import { validChampions, validGameModes } from "./champions-data"

export type ParsedInput = {
  playerChampion: string
  teamChampions: string[]
  enemyChampions: string[]
  gameMode: string
  unrecognizedChampions: string[]
}

// Function to parse input text and extract relevant information
export function parseInput(text: string): ParsedInput {
  const normalizedText = text.toLowerCase()

  // Initialize result object
  const result: ParsedInput = {
    playerChampion: "",
    teamChampions: [],
    enemyChampions: [],
    gameMode: "",
    unrecognizedChampions: [],
  }

  // Extract game mode
  for (const mode of validGameModes) {
    if (normalizedText.includes(mode.toLowerCase())) {
      result.gameMode = mode
      break
    }
  }

  // If no game mode found, default to ARAM if it contains "aram", otherwise Summoner's Rift
  if (!result.gameMode) {
    result.gameMode = normalizedText.includes("aram") ? "aram" : "summoner's rift"
  }

  // Extract player champion
  // Look for patterns like "I am X", "playing as X", "I'm X"
  const playerPatterns = [
    /i am ([a-z]+)/i,
    /playing as ([a-z]+)/i,
    /i'm ([a-z]+)/i,
    /i'm playing ([a-z]+)/i,
    /playing ([a-z]+)/i,
  ]

  for (const pattern of playerPatterns) {
    const match = normalizedText.match(pattern)
    if (match && match[1]) {
      const champion = match[1].toLowerCase()
      if (validChampions.includes(champion)) {
        result.playerChampion = champion
        break
      } else {
        result.unrecognizedChampions.push(champion)
      }
    }
  }

  // Extract team champions
  // Look for patterns like "with X, Y, Z", "allies are X, Y, Z", "team is X, Y, Z"
  let teamText = ""
  const teamPatterns = [/with ([^.]+)/i, /allies are ([^.]+)/i, /team is ([^.]+)/i, /teammates are ([^.]+)/i]

  for (const pattern of teamPatterns) {
    const match = normalizedText.match(pattern)
    if (match && match[1]) {
      teamText = match[1]
      break
    }
  }

  if (teamText) {
    // Split by commas and "and"
    const potentialTeammates = teamText
      .replace(/and/gi, ",")
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0)

    for (const name of potentialTeammates) {
      if (validChampions.includes(name.toLowerCase())) {
        result.teamChampions.push(name.toLowerCase())
      } else {
        result.unrecognizedChampions.push(name)
      }
    }
  }

  // Extract enemy champions
  // Look for patterns like "enemies are X, Y, Z", "against X, Y, Z", "enemy team is X, Y, Z"
  let enemyText = ""
  const enemyPatterns = [/enemies are ([^.]+)/i, /against ([^.]+)/i, /enemy team is ([^.]+)/i, /opponents are ([^.]+)/i]

  for (const pattern of enemyPatterns) {
    const match = normalizedText.match(pattern)
    if (match && match[1]) {
      enemyText = match[1]
      break
    }
  }

  if (enemyText) {
    // Split by commas and "and"
    const potentialEnemies = enemyText
      .replace(/and/gi, ",")
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0)

    for (const name of potentialEnemies) {
      if (validChampions.includes(name.toLowerCase())) {
        result.enemyChampions.push(name.toLowerCase())
      } else {
        result.unrecognizedChampions.push(name)
      }
    }
  }

  return result
}
