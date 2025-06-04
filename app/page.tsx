import AramBuildGenerator from "@/components/aram-build-generator"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="lol-theme-preference">
      <main className="min-h-screen bg-background">
        <AramBuildGenerator />
      </main>
    </ThemeProvider>
  )
}
