type BuildItem = {
  id: number
  name: string
  icon: string
}

type BuildItems = {
  early: BuildItem[]
  core: BuildItem[]
  late: BuildItem[]
}

interface BuildOrderSectionProps {
  buildItems: BuildItems
}

export default function BuildOrderSection({ buildItems }: BuildOrderSectionProps) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Early Game</h3>
          <div className="space-y-2">
            {buildItems.early.map((item) => (
              <div key={item.id} className="flex items-center gap-2 bg-background/50 p-2 rounded-md">
                <img src={item.icon || "/placeholder.svg"} alt={item.name} className="h-10 w-10 rounded-md" />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Core Items</h3>
          <div className="space-y-2">
            {buildItems.core.map((item) => (
              <div key={item.id} className="flex items-center gap-2 bg-background/50 p-2 rounded-md">
                <img src={item.icon || "/placeholder.svg"} alt={item.name} className="h-10 w-10 rounded-md" />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Late Game</h3>
          <div className="space-y-2">
            {buildItems.late.map((item) => (
              <div key={item.id} className="flex items-center gap-2 bg-background/50 p-2 rounded-md">
                <img src={item.icon || "/placeholder.svg"} alt={item.name} className="h-10 w-10 rounded-md" />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
