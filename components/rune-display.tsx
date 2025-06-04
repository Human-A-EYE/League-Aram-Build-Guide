import {
  getRunePathIcon,
  getRuneKeystoneIcon,
  getRuneShardIcon,
  getRunePathColor,
  handleImageError,
} from "@/lib/riot-assets"

type RuneDisplayProps = {
  primaryPath: string
  primaryRunes: string[]
  secondaryPath: string
  secondaryRunes: string[]
  compact?: boolean
}

export default function RuneDisplay({
  primaryPath,
  primaryRunes,
  secondaryPath,
  secondaryRunes,
  compact = false,
}: RuneDisplayProps) {
  // The first rune in each path is the keystone
  const primaryKeystone = primaryRunes[0]
  const primaryShards = primaryRunes.slice(1)

  return (
    <div className={`${compact ? "space-y-2" : "space-y-4"}`}>
      {/* Primary Path */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div
            className="rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${getRunePathColor(primaryPath)} 0%, rgba(0,0,0,0.5) 100%)`,
              padding: compact ? "1px" : "2px",
            }}
          >
            <img
              src={getRunePathIcon(primaryPath) || "/placeholder.svg"}
              alt={primaryPath}
              className={compact ? "h-6 w-6 rounded-full" : "h-8 w-8 rounded-full"}
              onError={handleImageError}
              loading="lazy"
            />
          </div>
          <span
            className={`${compact ? "text-xs" : "text-sm"} font-medium`}
            style={{ color: getRunePathColor(primaryPath) }}
          >
            {primaryPath}
          </span>
        </div>

        <div className={`flex ${compact ? "gap-1" : "gap-2"} items-center`}>
          {/* Keystone */}
          <div
            className="rounded-md"
            style={{
              boxShadow: `0 0 5px ${getRunePathColor(primaryPath)}`,
              border: `1px solid ${getRunePathColor(primaryPath)}`,
            }}
          >
            <img
              src={getRuneKeystoneIcon(primaryKeystone) || "/placeholder.svg"}
              alt={primaryKeystone}
              className={compact ? "h-8 w-8 rounded-md" : "h-10 w-10 rounded-md"}
              onError={handleImageError}
              loading="lazy"
            />
          </div>

          {/* Shards */}
          <div className="flex gap-1">
            {primaryShards.map((shard, idx) => (
              <div key={`primary-${idx}`} className="rounded-md">
                <img
                  src={getRuneShardIcon(shard) || "/placeholder.svg"}
                  alt={shard}
                  className={compact ? "h-6 w-6 rounded-md" : "h-8 w-8 rounded-md"}
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Path */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div
            className="rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${getRunePathColor(secondaryPath)} 0%, rgba(0,0,0,0.5) 100%)`,
              padding: compact ? "1px" : "2px",
            }}
          >
            <img
              src={getRunePathIcon(secondaryPath) || "/placeholder.svg"}
              alt={secondaryPath}
              className={compact ? "h-6 w-6 rounded-full" : "h-8 w-8 rounded-full"}
              onError={handleImageError}
              loading="lazy"
            />
          </div>
          <span
            className={`${compact ? "text-xs" : "text-sm"} font-medium`}
            style={{ color: getRunePathColor(secondaryPath) }}
          >
            {secondaryPath}
          </span>
        </div>

        <div className="flex gap-1">
          {secondaryRunes.map((shard, idx) => (
            <div key={`secondary-${idx}`} className="rounded-md">
              <img
                src={getRuneShardIcon(shard) || "/placeholder.svg"}
                alt={shard}
                className={compact ? "h-6 w-6 rounded-md" : "h-8 w-8 rounded-md"}
                onError={handleImageError}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
