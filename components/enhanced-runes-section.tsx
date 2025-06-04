import {
  getRunePathIcon,
  getRuneKeystoneIcon,
  getRuneShardIcon,
  getRunePathColor,
  handleImageError,
} from "@/lib/riot-assets"

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

export default function EnhancedRunesSection({ runes }: RunesSectionProps) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Primary Rune Path */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="p-1 rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${getRunePathColor(runes.primary.path)} 0%, rgba(0,0,0,0.5) 100%)`,
                padding: "2px",
              }}
            >
              <img
                src={getRunePathIcon(runes.primary.path) || "/placeholder.svg"}
                alt={runes.primary.path}
                className="h-10 w-10 rounded-full"
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <h3 className="font-medium" style={{ color: getRunePathColor(runes.primary.path) }}>
              {runes.primary.path} (Primary)
            </h3>
          </div>

          <div className="space-y-3">
            {runes.primary.keystone && (
              <div
                className="flex items-start gap-3 bg-background/50 p-3 rounded-md border-l-4"
                style={{ borderColor: getRunePathColor(runes.primary.path) }}
              >
                <img
                  src={getRuneKeystoneIcon(runes.primary.keystone.name) || "/placeholder.svg"}
                  alt={runes.primary.keystone.name}
                  className="h-12 w-12 rounded-md mt-1"
                  style={{
                    boxShadow: `0 0 10px ${getRunePathColor(runes.primary.path)}`,
                    border: `1px solid ${getRunePathColor(runes.primary.path)}`,
                  }}
                  onError={handleImageError}
                  loading="lazy"
                />
                <div>
                  <h4 className="font-medium text-sm" style={{ color: getRunePathColor(runes.primary.path) }}>
                    {runes.primary.keystone.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{runes.primary.keystone.description}</p>
                </div>
              </div>
            )}

            {runes.primary.slots.map((rune) => (
              <div key={rune.id} className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
                <img
                  src={getRuneShardIcon(rune.name) || "/placeholder.svg"}
                  alt={rune.name}
                  className="h-8 w-8 rounded-md mt-1"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div>
                  <h4 className="font-medium text-sm">{rune.name}</h4>
                  <p className="text-xs text-muted-foreground">{rune.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Rune Path */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div
              className="p-1 rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${getRunePathColor(runes.secondary.path)} 0%, rgba(0,0,0,0.5) 100%)`,
                padding: "2px",
              }}
            >
              <img
                src={getRunePathIcon(runes.secondary.path) || "/placeholder.svg"}
                alt={runes.secondary.path}
                className="h-10 w-10 rounded-full"
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <h3 className="font-medium" style={{ color: getRunePathColor(runes.secondary.path) }}>
              {runes.secondary.path} (Secondary)
            </h3>
          </div>

          <div className="space-y-3">
            {runes.secondary.slots.map((rune) => (
              <div key={rune.id} className="flex items-start gap-3 bg-background/50 p-3 rounded-md">
                <img
                  src={getRuneShardIcon(rune.name) || "/placeholder.svg"}
                  alt={rune.name}
                  className="h-8 w-8 rounded-md mt-1"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div>
                  <h4 className="font-medium text-sm">{rune.name}</h4>
                  <p className="text-xs text-muted-foreground">{rune.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stat Runes */}
          <div className="mt-6">
            <h3 className="font-medium mb-3">Stat Runes</h3>
            <div className="flex gap-2">
              {runes.statRunes.map((rune) => (
                <div key={rune.id} className="flex flex-col items-center gap-1 bg-background/50 p-2 rounded-md">
                  <img
                    src={rune.icon || "/placeholder.svg"}
                    alt={rune.name}
                    className="h-6 w-6"
                    onError={handleImageError}
                  />
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
