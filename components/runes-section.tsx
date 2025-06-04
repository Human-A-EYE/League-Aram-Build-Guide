type RuneItem = {
  id: number
  name: string
  description: string
  icon: string
}

type StatRune = {
  id: number
  name: string
  icon: string
}

type RunePath = {
  path: string
  icon: string
  keystone?: RuneItem
  slots: RuneItem[]
}

type Runes = {
  primary: RunePath
  secondary: RunePath
  statRunes: StatRune[]
}

interface RunesSectionProps {
  runes: Runes
}

export default function RunesSection({ runes }: RunesSectionProps) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-yellow-500/20 p-1 rounded-full">
              <img src={runes.primary.icon || "/placeholder.svg"} alt={runes.primary.path} className="h-8 w-8" />
            </div>
            <h3 className="font-medium">{runes.primary.path} (Primary)</h3>
          </div>

          <div className="space-y-3">
            {runes.primary.keystone && (
              <div className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
                <img
                  src={runes.primary.keystone.icon || "/placeholder.svg"}
                  alt={runes.primary.keystone.name}
                  className="h-10 w-10 rounded-md mt-1"
                />
                <div>
                  <h4 className="font-medium text-sm">{runes.primary.keystone.name}</h4>
                  <p className="text-xs text-muted-foreground">{runes.primary.keystone.description}</p>
                </div>
              </div>
            )}

            {runes.primary.slots.map((rune) => (
              <div key={rune.id} className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
                <img src={rune.icon || "/placeholder.svg"} alt={rune.name} className="h-10 w-10 rounded-md mt-1" />
                <div>
                  <h4 className="font-medium text-sm">{rune.name}</h4>
                  <p className="text-xs text-muted-foreground">{rune.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-500/20 p-1 rounded-full">
              <img src={runes.secondary.icon || "/placeholder.svg"} alt={runes.secondary.path} className="h-8 w-8" />
            </div>
            <h3 className="font-medium">{runes.secondary.path} (Secondary)</h3>
          </div>

          <div className="space-y-3">
            {runes.secondary.slots.map((rune) => (
              <div key={rune.id} className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
                <img src={rune.icon || "/placeholder.svg"} alt={rune.name} className="h-10 w-10 rounded-md mt-1" />
                <div>
                  <h4 className="font-medium text-sm">{rune.name}</h4>
                  <p className="text-xs text-muted-foreground">{rune.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-3">Stat Runes</h3>
            <div className="flex gap-2">
              {runes.statRunes.map((rune) => (
                <div key={rune.id} className="flex flex-col items-center gap-1 bg-background/50 p-2 rounded-md">
                  <img src={rune.icon || "/placeholder.svg"} alt={rune.name} className="h-6 w-6" />
                  <span className="text-xs">{rune.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
