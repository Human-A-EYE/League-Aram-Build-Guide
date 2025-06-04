"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChevronDown, ChevronUp, AlertCircle, Sword, Zap, Shield } from "lucide-react"
import { getChampionBuild, findClosestChampion, parseChampionList, type ChampionBuild } from "@/lib/champion-data"
import { getChampionIcon, handleImageError } from "@/lib/riot-assets"
import EnhancedBuildOrderSection from "@/components/enhanced-build-order-section"
import EnhancedRunesSection from "@/components/enhanced-runes-section"
import EnhancedSummonerSpellsSection from "@/components/enhanced-summoner-spells-section"
import EnhancedChampionList from "@/components/enhanced-champion-list"

export default function AramBuildGenerator() {
  const [yourChampion, setYourChampion] = useState("")
  const [yourTeam, setYourTeam] = useState("")
  const [enemyTeam, setEnemyTeam] = useState("")
  const [buildData, setBuildData] = useState<ChampionBuild | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [warnings, setWarnings] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)
  const [validatedChampion, setValidatedChampion] = useState<string | null>(null)
  const [validatedTeam, setValidatedTeam] = useState<string[]>([])
  const [validatedEnemies, setValidatedEnemies] = useState<string[]>([])

  // Collapsible states
  const [buildOrderOpen, setBuildOrderOpen] = useState(true)
  const [runesOpen, setRunesOpen] = useState(true)
  const [summonersOpen, setSummonersOpen] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setWarnings([])
    setShowResults(false)

    // Validate player champion
    if (!yourChampion.trim()) {
      setError("Please enter your champion name")
      return
    }

    const { match: championMatch, suggestion: championSuggestion } = findClosestChampion(yourChampion)

    if (!championMatch) {
      setError(
        `Unknown champion: '${yourChampion}'. ${
          championSuggestion ? `Did you mean '${championSuggestion}'?` : "Please check the spelling."
        }`,
      )
      return
    }

    // Get build data for the player champion
    const build = getChampionBuild(championMatch)
    if (!build) {
      setError(`Build data not available for ${championMatch}. Please try another champion.`)
      return
    }

    // Validate team champions
    const teamResult = parseChampionList(yourTeam)
    const enemyResult = parseChampionList(enemyTeam)

    // Collect warnings for invalid champions
    const newWarnings: string[] = []

    teamResult.invalid.forEach(({ input, suggestion }) => {
      newWarnings.push(
        `Unknown team champion: '${input}'. ${
          suggestion ? `Did you mean '${suggestion}'?` : "Please check the spelling."
        }`,
      )
    })

    enemyResult.invalid.forEach(({ input, suggestion }) => {
      newWarnings.push(
        `Unknown enemy champion: '${input}'. ${
          suggestion ? `Did you mean '${suggestion}'?` : "Please check the spelling."
        }`,
      )
    })

    // Set validated data
    setValidatedChampion(championMatch)
    setValidatedTeam(teamResult.valid)
    setValidatedEnemies(enemyResult.valid)
    setBuildData(build)
    setWarnings(newWarnings)
    setShowResults(true)
  }

  const CollapsibleSection = ({
    title,
    icon,
    isOpen,
    onToggle,
    children,
  }: {
    title: string
    icon: React.ReactNode
    isOpen: boolean
    onToggle: () => void
    children: React.ReactNode
  }) => (
    <Card className="w-full">
      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={onToggle}>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </CardTitle>
      </CardHeader>
      {isOpen && <CardContent>{children}</CardContent>}
    </Card>
  )

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">ARAM Build Generator</h1>
        <p className="text-muted-foreground">Get optimized builds for Howling Abyss</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Enter Match Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="your-champion">Your Champion</Label>
              <Input
                id="your-champion"
                value={yourChampion}
                onChange={(e) => setYourChampion(e.target.value)}
                placeholder="e.g., Jinx"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="your-team">Your Team</Label>
              <Input
                id="your-team"
                value={yourTeam}
                onChange={(e) => setYourTeam(e.target.value)}
                placeholder="e.g., Maokai, Lux, Yasuo, Veigar"
                className="w-full"
              />
              <p className="text-sm text-muted-foreground">Comma-separated champion names</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="enemy-team">Enemy Team</Label>
              <Input
                id="enemy-team"
                value={enemyTeam}
                onChange={(e) => setEnemyTeam(e.target.value)}
                placeholder="e.g., Ashe, Malphite, Ziggs, Brand, Sona"
                className="w-full"
              />
              <p className="text-sm text-muted-foreground">Comma-separated champion names</p>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Get Build
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {warnings.length > 0 && (
        <Alert className="mb-6 border-yellow-500 bg-yellow-500/10">
          <AlertCircle className="h-4 w-4 text-yellow-500" />
          <AlertDescription className="text-yellow-700">
            <div className="font-medium mb-1">Warnings:</div>
            <ul className="list-disc pl-5 space-y-1">
              {warnings.map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {showResults && buildData && validatedChampion && (
        <div className="space-y-4">
          <div className="bg-muted/30 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <img
                src={getChampionIcon(validatedChampion) || "/placeholder.svg"}
                alt={validatedChampion}
                className="w-8 h-8 rounded-full border-2 border-blue-500"
                onError={handleImageError}
                loading="lazy"
              />
              Build for {validatedChampion}
            </h2>
            <div className="text-sm text-muted-foreground">
              {validatedTeam.length > 0 && (
                <p>
                  <span className="font-medium">Your Team:</span> {validatedTeam.join(", ")}
                </p>
              )}
              {validatedEnemies.length > 0 && (
                <p>
                  <span className="font-medium">Enemy Team:</span> {validatedEnemies.join(", ")}
                </p>
              )}
            </div>
          </div>

          <CollapsibleSection
            title="Build Order"
            icon={<Sword className="h-5 w-5 text-blue-600" />}
            isOpen={buildOrderOpen}
            onToggle={() => setBuildOrderOpen(!buildOrderOpen)}
          >
            <EnhancedBuildOrderSection
              buildItems={{
                early: buildData.build.slice(0, 2).map((item, index) => ({ id: index, name: item, icon: "" })),
                core: buildData.build.slice(2, 5).map((item, index) => ({ id: index + 2, name: item, icon: "" })),
                late: buildData.build.slice(5).map((item, index) => ({ id: index + 5, name: item, icon: "" })),
              }}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Runes"
            icon={<Zap className="h-5 w-5 text-yellow-600" />}
            isOpen={runesOpen}
            onToggle={() => setRunesOpen(!runesOpen)}
          >
            <EnhancedRunesSection
              runes={{
                primary: {
                  path: buildData.runes.primary[0].split(":")[0].trim() || "Precision",
                  icon: "",
                  keystone: {
                    id: 1,
                    name: buildData.runes.primary[0],
                    description: "Keystone rune that provides significant combat advantages.",
                    icon: "",
                  },
                  slots: buildData.runes.primary.slice(1).map((rune, index) => ({
                    id: index + 2,
                    name: rune,
                    description: "Enhances your champion's capabilities.",
                    icon: "",
                  })),
                },
                secondary: {
                  path: buildData.runes.secondary[0].split(":")[0].trim() || "Domination",
                  icon: "",
                  slots: buildData.runes.secondary.map((rune, index) => ({
                    id: index + 5,
                    name: rune,
                    description: "Provides additional strategic advantages.",
                    icon: "",
                  })),
                },
                statRunes: [
                  { id: 1, name: "Adaptive Force", icon: "/placeholder.svg?height=24&width=24" },
                  { id: 2, name: "Armor", icon: "/placeholder.svg?height=24&width=24" },
                  { id: 3, name: "Magic Resist", icon: "/placeholder.svg?height=24&width=24" },
                ],
              }}
            />
          </CollapsibleSection>

          <CollapsibleSection
            title="Summoner Spells"
            icon={<Shield className="h-5 w-5 text-purple-600" />}
            isOpen={summonersOpen}
            onToggle={() => setSummonersOpen(!summonersOpen)}
          >
            <EnhancedSummonerSpellsSection
              spells={buildData.summoners.map((spell, index) => ({
                id: index,
                name: spell,
                description: "",
                icon: "",
              }))}
            />
          </CollapsibleSection>
        </div>
      )}

      <div className="mt-8">
        <EnhancedChampionList />
      </div>
    </div>
  )
}
