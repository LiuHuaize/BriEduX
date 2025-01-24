import { HeroDemo } from "@/components/hero-demo"
import { SectionDivider } from "@/components/ui/section-divider"
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main>
      <HeroDemo />
      <SectionDivider />
      <Testimonials />
    </main>
  )
}
