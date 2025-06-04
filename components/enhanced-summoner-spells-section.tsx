import { getSummonerSpellIcon, handleImageError } from "@/lib/riot-assets"

type SummonerSpell = {
  id: number
  name: string
  description: string
  icon: string
}

interface SummonerSpellsSectionProps {
  spells: SummonerSpell[]
}

export default function EnhancedSummonerSpellsSection({ spells }: SummonerSpellsSectionProps) {
  const getSpellDescription = (spellName: string) => {
    const descriptions: { [key: string]: string } = {
      Flash: "Teleports your champion a short distance toward your cursor's location.",
      Heal: "Restores health to your champion and a nearby ally champion and grants both a brief movement speed boost.",
      Barrier: "Shields your champion from damage for a few seconds.",
      Exhaust: "Exhausts target enemy champion, slowing their movement and reducing their damage dealt.",
      Ignite: "Ignites target enemy champion, dealing true damage over time and reducing healing effects.",
      Ghost: "Grants increased movement speed and allows your champion to move through units.",
      Mark: "Throw a snowball in a straight line. If it hits an enemy, you can reactivate to dash to them.",
      Clarity: "Restores mana to your champion and nearby allied champions.",
      Cleanse: "Removes all disables and summoner spell debuffs affecting your champion.",
    }
    return descriptions[spellName] || "Summoner spell effect."
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {spells.map((spell) => (
          <div key={spell.id} className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
            <img
              src={getSummonerSpellIcon(spell.name) || "/placeholder.svg"}
              alt={spell.name}
              className="w-12 h-12 rounded-md border"
              onError={handleImageError}
              loading="lazy"
            />
            <div>
              <h4 className="font-medium text-purple-600">{spell.name}</h4>
              <p className="text-sm text-muted-foreground">{getSpellDescription(spell.name)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
