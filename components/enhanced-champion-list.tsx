"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAllChampionBuilds, getTopAramChampions } from "@/lib/champion-data"
import { getChampionIcon, getItemIcon, getSummonerSpellIcon, handleImageError } from "@/lib/riot-assets"
import { ChevronDown, ChevronUp, Search, Trophy, Users, Eye, EyeOff } from "lucide-react"
import RuneDisplay from "@/components/rune-display"

export default function EnhancedChampionList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedChampion, setExpandedChampion] = useState<string | null>(null)
  const [showAllChampions, setShowAllChampions] = useState(false)
  const [showTopPerformers, setShowTopPerformers] = useState(false)

  const allChampions = getAllChampionBuilds()
  const topChampions = getTopAramChampions(10)

  const filteredChampions = allChampions.filter((item) =>
    item.champion.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredTopChampions = topChampions.filter((item) =>
    item.champion.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleChampion = (champion: string) => {
    if (expandedChampion === champion) {
      setExpandedChampion(null)
    } else {
      setExpandedChampion(champion)
    }
  }

  const toggleAllChampions = () => {
    setShowAllChampions(!showAllChampions)
    if (!showAllChampions) {
      setShowTopPerformers(false) // Close top performers when opening all champions
    }
    setExpandedChampion(null) // Close any expanded champion
  }

  const toggleTopPerformers = () => {
    setShowTopPerformers(!showTopPerformers)
    if (!showTopPerformers) {
      setShowAllChampions(false) // Close all champions when opening top performers
    }
    setExpandedChampion(null) // Close any expanded champion
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>ARAM Champion Builds</span>
        </CardTitle>

        {/* Search Bar - Always Visible */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search champions..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-2">
          <Button
            variant={showAllChampions ? "default" : "outline"}
            onClick={toggleAllChampions}
            className="flex items-center gap-2"
          >
            <Users className="h-4 w-4" />
            <span>All Champions</span>
            {showAllChampions ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>

          <Button
            variant={showTopPerformers ? "default" : "outline"}
            onClick={toggleTopPerformers}
            className="flex items-center gap-2"
          >
            <Trophy className="h-4 w-4" />
            <span>Top Performers</span>
            {showTopPerformers ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        {/* All Champions Section */}
        {showAllChampions && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">All Champions ({filteredChampions.length})</h3>
              {searchQuery && (
                <span className="text-sm text-muted-foreground">
                  Showing {filteredChampions.length} of {allChampions.length} champions
                </span>
              )}
            </div>

            {filteredChampions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {searchQuery ? `No champions found matching "${searchQuery}"` : "No champions found"}
              </div>
            ) : (
              <div className="space-y-2">
                {filteredChampions.map((item) => (
                  <div key={item.champion} className="border rounded-lg overflow-hidden">
                    <div
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleChampion(item.champion)}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={getChampionIcon(item.champion) || "/placeholder.svg"}
                          alt={item.champion}
                          className="w-12 h-12 rounded-full border-2 border-blue-500"
                          onError={handleImageError}
                          loading="lazy"
                        />
                        <div className="font-medium">{item.champion}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.build.winRate && (
                          <span className="text-sm text-green-600 font-medium">WR: {item.build.winRate}</span>
                        )}
                        {expandedChampion === item.champion ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </div>
                    </div>

                    {expandedChampion === item.champion && (
                      <div className="p-4 border-t bg-muted/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Build Order</h4>
                            <div className="space-y-2">
                              {item.build.build.map((buildItem, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm">
                                  <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                                    {index + 1}
                                  </span>
                                  <img
                                    src={getItemIcon(buildItem) || "/placeholder.svg"}
                                    alt={buildItem}
                                    className="w-6 h-6 rounded border"
                                    onError={handleImageError}
                                    loading="lazy"
                                  />
                                  <span>{buildItem}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Runes</h4>
                            <RuneDisplay
                              primaryPath={item.build.runes.primary[0].split(":")[0].trim() || "Precision"}
                              primaryRunes={item.build.runes.primary}
                              secondaryPath={item.build.runes.secondary[0].split(":")[0].trim() || "Domination"}
                              secondaryRunes={item.build.runes.secondary}
                            />
                          </div>

                          <div>
                            <h4 className="font-medium mb-2">Summoner Spells</h4>
                            <div className="flex gap-2">
                              {item.build.summoners.map((spell, index) => (
                                <div key={index} className="flex items-center gap-1">
                                  <img
                                    src={getSummonerSpellIcon(spell) || "/placeholder.svg"}
                                    alt={spell}
                                    className="w-8 h-8 rounded border"
                                    onError={handleImageError}
                                    loading="lazy"
                                  />
                                  <span className="text-xs">{spell}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Top Performers Section */}
        {showTopPerformers && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Top Performers ({filteredTopChampions.length})
              </h3>
              {searchQuery && (
                <span className="text-sm text-muted-foreground">
                  Showing {filteredTopChampions.length} of {topChampions.length} top champions
                </span>
              )}
            </div>

            {filteredTopChampions.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                {searchQuery ? `No top performers found matching "${searchQuery}"` : "No top performers found"}
              </div>
            ) : (
              <>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Champion</TableHead>
                      <TableHead>Win Rate</TableHead>
                      <TableHead>Pick Rate</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTopChampions.map((champion, index) => (
                      <TableRow key={champion.champion}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-1">
                            {index + 1 <= 3 && <Trophy className="h-4 w-4 text-yellow-500" />}
                            {index + 1}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <img
                              src={getChampionIcon(champion.champion) || "/placeholder.svg"}
                              alt={champion.champion}
                              className="w-8 h-8 rounded-full border"
                              onError={handleImageError}
                              loading="lazy"
                            />
                            {champion.champion}
                          </div>
                        </TableCell>
                        <TableCell className="text-green-600 font-medium">{champion.winRate}</TableCell>
                        <TableCell>{champion.pickRate}</TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleChampion(champion.champion)}
                            className="h-8 w-8 p-0"
                          >
                            {expandedChampion === champion.champion ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {/* Expanded Champion Details for Top Performers */}
                {filteredTopChampions.map(
                  (champion) =>
                    expandedChampion === champion.champion && (
                      <div key={`details-${champion.champion}`} className="p-4 border rounded-lg bg-muted/20">
                        <h4 className="font-medium mb-3 flex items-center gap-2">
                          <img
                            src={getChampionIcon(champion.champion) || "/placeholder.svg"}
                            alt={champion.champion}
                            className="w-6 h-6 rounded-full border"
                            onError={handleImageError}
                            loading="lazy"
                          />
                          {champion.champion} Build Details
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h5 className="font-medium mb-2 text-sm">Build Order</h5>
                            <div className="space-y-1">
                              {allChampions
                                .find((c) => c.champion === champion.champion)
                                ?.build.build.map((buildItem, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm">
                                    <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                                      {index + 1}
                                    </span>
                                    <img
                                      src={getItemIcon(buildItem) || "/placeholder.svg"}
                                      alt={buildItem}
                                      className="w-5 h-5 rounded border"
                                      onError={handleImageError}
                                      loading="lazy"
                                    />
                                    <span>{buildItem}</span>
                                  </div>
                                ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="font-medium mb-2 text-sm">Runes</h5>
                            {allChampions.find((c) => c.champion === champion.champion) && (
                              <RuneDisplay
                                primaryPath={
                                  allChampions
                                    .find((c) => c.champion === champion.champion)
                                    ?.build.runes.primary[0].split(":")[0]
                                    .trim() || "Precision"
                                }
                                primaryRunes={
                                  allChampions.find((c) => c.champion === champion.champion)?.build.runes.primary || []
                                }
                                secondaryPath={
                                  allChampions
                                    .find((c) => c.champion === champion.champion)
                                    ?.build.runes.secondary[0].split(":")[0]
                                    .trim() || "Domination"
                                }
                                secondaryRunes={
                                  allChampions.find((c) => c.champion === champion.champion)?.build.runes.secondary ||
                                  []
                                }
                                compact={true}
                              />
                            )}
                          </div>

                          <div>
                            <h5 className="font-medium mb-2 text-sm">Summoner Spells</h5>
                            <div className="flex gap-2">
                              {allChampions
                                .find((c) => c.champion === champion.champion)
                                ?.build.summoners.map((spell, index) => (
                                  <div key={index} className="flex items-center gap-1">
                                    <img
                                      src={getSummonerSpellIcon(spell) || "/placeholder.svg"}
                                      alt={spell}
                                      className="w-6 h-6 rounded border"
                                      onError={handleImageError}
                                      loading="lazy"
                                    />
                                    <span className="text-xs">{spell}</span>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                )}
              </>
            )}
          </div>
        )}

        {/* Default State - No sections open */}
        {!showAllChampions && !showTopPerformers && (
          <div className="text-center py-12 text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium mb-2">Champion Database</p>
            <p className="mb-4">Choose a section to explore champion builds and statistics</p>
            <div className="flex gap-2 justify-center">
              <Button variant="outline" onClick={toggleAllChampions} className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Browse All Champions
              </Button>
              <Button variant="outline" onClick={toggleTopPerformers} className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                View Top Performers
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
