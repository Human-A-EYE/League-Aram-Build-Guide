"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Mic, Send, ChevronDown, ChevronUp, Sun, Moon, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useTheme } from "next-themes"
import BuildOrderSection from "@/components/build-order-section"
import RunesSection from "@/components/runes-section"
import SummonerSpellsSection from "@/components/summoner-spells-section"
import { parseInput, type ParsedInput } from "@/lib/input-parser"
import { getChampionBuild, type ChampionBuild } from "@/lib/champions-data"

declare global {
  interface Window {
    SpeechRecognition: any
    webkitSpeechRecognition: any
  }
}

export default function BuildAssistant() {
  const [inputText, setInputText] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [buildOrderOpen, setBuildOrderOpen] = useState(true)
  const [runesOpen, setRunesOpen] = useState(true)
  const [summonerSpellsOpen, setSummonerSpellsOpen] = useState(true)
  const [parsedInput, setParsedInput] = useState<ParsedInput | null>(null)
  const [buildData, setBuildData] = useState<ChampionBuild | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  // Reference to the speech recognition object
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  // Initialize speech recognition
  useEffect(() => {
    if (typeof window !== "undefined" && ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()

      if (recognitionRef.current) {
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false
        recognitionRef.current.lang = "en-US"

        recognitionRef.current.onresult = (event) => {
          const transcript = event.results[0][0].transcript
          setInputText(transcript)
          setIsListening(false)
        }

        recognitionRef.current.onerror = (event) => {
          console.error("Speech recognition error", event.error)
          setIsListening(false)
          setError(`Speech recognition error: ${event.error}. Please try again or use text input.`)
        }

        recognitionRef.current.onend = () => {
          setIsListening(false)
        }
      }
    }
  }, [])

  // Handle voice input
  const handleVoiceInput = () => {
    setError(null)

    if (!recognitionRef.current) {
      setError("Speech recognition is not supported in your browser. Please use text input instead.")
      return
    }

    if (!isListening) {
      setIsListening(true)
      recognitionRef.current.start()
    } else {
      setIsListening(false)
      recognitionRef.current.stop()
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (inputText.trim()) {
      try {
        // Parse the input text
        const parsed = parseInput(inputText)
        setParsedInput(parsed)

        // Check if we have a player champion
        if (!parsed.playerChampion) {
          setError("Could not identify which champion you're playing. Please specify your champion.")
          return
        }

        // Get build data for the player champion
        const build = getChampionBuild(parsed.playerChampion, parsed.gameMode)
        setBuildData(build)

        // Show unrecognized champions warning if any
        if (parsed.unrecognizedChampions.length > 0) {
          setError(`Some champions were not recognized: ${parsed.unrecognizedChampions.join(", ")}`)
        }

        setHasSubmitted(true)
      } catch (err) {
        console.error("Error processing input:", err)
        setError("An error occurred while processing your input. Please try again.")
      }
    }
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-foreground">LoL Build Assistant</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <Card className="mb-8 border-2 border-teal-500/20">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <p className="text-lg font-medium mb-4">Tell me about your game</p>
            <Button
              onClick={handleVoiceInput}
              className={`rounded-full h-16 w-16 ${isListening ? "bg-red-500 hover:bg-red-600" : "bg-teal-500 hover:bg-teal-600"}`}
              aria-label="Activate voice input"
            >
              <Mic className="h-8 w-8" />
            </Button>
            {isListening && <p className="mt-2 text-sm text-muted-foreground animate-pulse">Listening...</p>}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="I am Jinx, in an ARAM, with Maokai, Talon..."
              className="flex-1"
            />
            <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
              <Send className="h-4 w-4" />
              <span className="sr-only">Submit</span>
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {hasSubmitted && parsedInput && buildData && (
        <>
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <h2 className="text-lg font-medium mb-2">Build Summary</h2>
            <p>
              <span className="font-medium">Champion:</span>{" "}
              {parsedInput.playerChampion.charAt(0).toUpperCase() + parsedInput.playerChampion.slice(1)}
            </p>
            <p>
              <span className="font-medium">Game Mode:</span>{" "}
              {parsedInput.gameMode.charAt(0).toUpperCase() + parsedInput.gameMode.slice(1)}
            </p>
            {parsedInput.teamChampions.length > 0 && (
              <p>
                <span className="font-medium">Team:</span>{" "}
                {parsedInput.teamChampions.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}
              </p>
            )}
            {parsedInput.enemyChampions.length > 0 && (
              <p>
                <span className="font-medium">Enemies:</span>{" "}
                {parsedInput.enemyChampions.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setBuildOrderOpen(!buildOrderOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-medium"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-teal-500 rounded-md p-1">
                    <img src="/placeholder.svg?height=24&width=24" alt="Build icon" className="h-6 w-6" />
                  </div>
                  <span>Build Order</span>
                </div>
                {buildOrderOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {buildOrderOpen && <BuildOrderSection buildItems={buildData.items} />}
            </div>

            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setRunesOpen(!runesOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-medium"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-teal-500 rounded-md p-1">
                    <img src="/placeholder.svg?height=24&width=24" alt="Runes icon" className="h-6 w-6" />
                  </div>
                  <span>Runes</span>
                </div>
                {runesOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {runesOpen && <RunesSection runes={buildData.runes} />}
            </div>

            <div className="bg-muted/30 rounded-lg overflow-hidden">
              <button
                onClick={() => setSummonerSpellsOpen(!summonerSpellsOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-medium"
              >
                <div className="flex items-center gap-2">
                  <div className="bg-teal-500 rounded-md p-1">
                    <img src="/placeholder.svg?height=24&width=24" alt="Summoner spells icon" className="h-6 w-6" />
                  </div>
                  <span>Summoner Spells</span>
                </div>
                {summonerSpellsOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {summonerSpellsOpen && <SummonerSpellsSection spells={buildData.summonerSpells} />}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
