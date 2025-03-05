'use client'

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Encuentra el equilibrio en Zen Shiatsu
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
          Restaura la armonía de tu cuerpo y mente con la terapia de presión japonesa tradicional, desbloqueando tu potencial de sanación natural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToBooking}
              size="lg" 
              className="bg-transparent hover:bg-white/10 text-white border border-cyan-950"
            >
              Reservá tu sesión
            </button>
            <button
              variant="outline" 
              size="lg"
              className="bg-transparent text-white hover:bg-white/10 border border-cyan-950"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explorá los servicios disponibles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}