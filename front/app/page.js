import BookSession from "@/components/BookSession";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div>
      <Navbar />
      </div>
      <HeroSection />

      <section className="my-10">
        <h2 className="text-center text-3xl font-bold my-6">Nuestros Servicios</h2>
        <Services/>
      </section>

      <section className="my-4">
        <BookSession/>
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
