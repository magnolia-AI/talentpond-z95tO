'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Briefcase, Users, Zap, Award } from 'lucide-react' // Example icons

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block xl:inline">Framtidens Karriärportal</span>
            <span className="block text-primary xl:inline"> för Svenska Studenter</span>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-lg text-muted-foreground sm:text-xl md:mt-8 md:max-w-2xl">
            Upptäck praktikplatser och jobb, knyt kontakter med ledande företag och kickstarta din karriär – allt på en och samma digitala plattform, året runt.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto">
              Registrera Dig Gratis
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Utforska Företag
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trött på överfulla mässhallar och missade chanser?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditionella arbetsmarknadsdagar är värdefulla, men KarriärPortalen tar nätverkandet och jobbsökandet till nästa nivå.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Utmaningarna med traditionella mässor:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-destructive flex-shrink-0" />
                  <span>Begränsad tid att prata med varje företag.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-destructive flex-shrink-0" />
                  <span>Svårt att sticka ut i mängden.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-destructive flex-shrink-0" />
                  <span>Möjligheter försvinner när mässan är över.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">KarriärPortalen är lösningen:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>Tillgång till företagsprofiler och jobblistor 24/7.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>Personligt anpassade matchningar och rekommendationer.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>Direktkontakt med rekryterare och enkel ansökningsprocess.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Allt Du Behöver För Din Karriärstart</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              KarriärPortalen erbjuder verktygen och resurserna som hjälper dig att lyckas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-8 w-8 text-primary mb-4" />,
                title: "Virtuella Företagsmontrar",
                description: "Utforska företagskulturer, projekt och karriärmöjligheter på djupet, när det passar dig."
              },
              {
                icon: <Zap className="h-8 w-8 text-primary mb-4" />,
                title: "Smart Jobbmatchning",
                description: "Få skräddarsydda rekommendationer baserade på din profil, dina intressen och studier."
              },
              {
                icon: <Users className="h-8 w-8 text-primary mb-4" />,
                title: "Nätverk & Events",
                description: "Delta i digitala workshops, webbinarier och nätverksevent med branschexperter."
              },
              {
                icon: <Award className="h-8 w-8 text-primary mb-4" />,
                title: "Kompetensutveckling",
                description: "Få tillgång till resurser för att vässa ditt CV, förbereda dig för intervjuer och utveckla nya färdigheter."
              },
            ].map((feature) => (
              <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  {feature.icon}
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Redo att ta nästa steg i din karriär?</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground sm:text-xl">
            Gå med i KarriärPortalen idag och missa inga möjligheter. Din framtid börjar nu!
          </p>
          <div className="mt-10">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
              Skapa Ditt Fria Konto Nu
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - A simple one for now, can be expanded in layout.tsx */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KarriärPortalen. Alla rättigheter förbehållna.</p>
          <p className="text-sm mt-1">Byggd för svenska universitetsstudenter.</p>
        </div>
      </footer>
    </div>
  )
}

