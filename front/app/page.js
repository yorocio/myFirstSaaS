import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <section className="my-4 mx-52">
      </section>

      <section className="my-4">
        <p className="text-lg">Esta es una sección del home</p>
      </section>

      <section className="my-4">
        <p className="text-lg">Esta es otra sección del home</p>
      </section>

      <section >
        <p className="text-lg">Esta es otra sección del home</p>
      </section>
    </main>
  );
}
