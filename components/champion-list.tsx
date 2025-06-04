"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAllChampionBuilds, getTopAramChampions } from "@/lib/champion-data"
import { ChevronDown, ChevronUp, Search, Trophy } from "lucide-react"

export default function ChampionList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedChampion, setExpandedChampion] = useState<string | null>(null)

  const allChampions = getAllChampionBuilds()
  const topChampions = getTopAramChampions(10)

  const filteredChampions = allChampions.filter((item) =>
    item.champion.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const toggleChampion = (champion: string) => {
    if (expandedChampion === champion) {
      setExpandedChampion(null)
    } else {
      setExpandedChampion(champion)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>ARAM Champion Builds</span>
        </CardTitle>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search champions..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All Champions</TabsTrigger>
            <TabsTrigger value="top" className="flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              <span>Top Performers</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="space-y-4">
              {filteredChampions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">No champions found</div>
              ) : (
                filteredChampions.map((item) => (
                  <div key={item.champion} className="border rounded-lg overflow-hidden">
                    <div
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50"
                      onClick={() => toggleChampion(item.champion)}
                    >
                      <div className="font-medium">{item.champion}</div>
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
                            <h3 className="font-medium mb-2">Build Order</h3>
                            <ul className="space-y-1">
                              {item.build.build.map((buildItem, index) => (
                                <li key={index} className="text-sm flex items-center gap-2">
                                  <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                                    {index + 1}
                                  </span>
                                  {buildItem}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="font-medium mb-2">Runes</h3>
                            <div className="text-sm">
                              <div className="mb-2">
                                <span className="text-yellow-600 font-medium">Primary: </span>
                                {item.build.runes.primary.join(", ")}
                              </div>
                              <div>
                                <span className="text-green-600 font-medium">Secondary: </span>
                                {item.build.runes.secondary.join(", ")}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="font-medium mb-2">Summoner Spells</h3>
                            <div className="text-sm">{item.build.summoners.join(", ")}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="top" className="mt-4">
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
                {topChampions.map((champion, index) => (
                  <TableRow key={champion.champion}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{champion.champion}</TableCell>
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

            {topChampions.map(
              (champion) =>
                expandedChampion === champion.champion && (
                  <div key={`details-${champion.champion}`} className="mt-2 p-4 border rounded-lg bg-muted/20">
                    <h3 className="font-medium mb-3">{champion.champion} Build</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-sm">Build Order</h4>
                        <ul className="space-y-1">
                          {allChampions
                            .find((c) => c.champion === champion.champion)
                            ?.build.build.map((buildItem, index) => (
                              <li key={index} className="text-sm flex items-center gap-2">
                                <span className="bg-blue-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">
                                  {index + 1}
                                </span>
                                {buildItem}
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-sm">Runes</h4>
                        <div className="text-sm">
                          <div className="mb-2">
                            <span className="text-yellow-600 font-medium">Primary: </span>
                            {allChampions.find((c) => c.champion === champion.champion)?.build.runes.primary.join(", ")}
                          </div>
                          <div>
                            <span className="text-green-600 font-medium">Secondary: </span>
                            {allChampions
                              .find((c) => c.champion === champion.champion)
                              ?.build.runes.secondary.join(", ")}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 text-sm">Summoner Spells</h4>
                        <div className="text-sm">
                          {allChampions.find((c) => c.champion === champion.champion)?.build.summoners.join(", ")}
                        </div>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
