type SummonerSpell = {
  id: number
  name: string
  description: string
  icon: string
}

interface SummonerSpellsSectionProps {
  spells: SummonerSpell[]
}

export default function SummonerSpellsSection({ spells }: SummonerSpellsSectionProps) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {spells.map((spell) => (
          <div key={spell.id} className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
            <img src={spell.icon || "/placeholder.svg"} alt={spell.name} className="h-16 w-16 rounded-md" />
            <div>
              <h4 className="font-medium">{spell.name}</h4>
              <p className="text-sm text-muted-foreground">{spell.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
