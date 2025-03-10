import Image from "next/image"
import Link from "next/link"

export const shortCourses = [{
  name: "Zen Shiatsu para todos",
  description: "Terapia Japonesa de excelentes beneficios",
  type: "Taller",
  duration: "15 horas"
},
{
  name: "Diagnóstico de espalda",
  description: "Nivel inicial de Diagnóstico de espalda",
  type: "Taller",
  duration: "15 horas"
},
{
  name: "Posturas de trabajo",
  description: "abc",
  type: "Taller",
  duration: "15 horas"
},
{
  name: "Respiración TUMMO",
  description: "Aprendé a trabajar con energia Ki",
  type: "Taller",
  duration: "15 horas"
},
{
  name: "Ejercicios de Yoga Zen Japones",
  description: "Técnicas terapeuticas del Zen Shiatsu",
  type: "Taller",
  duration: "15 horas"
}
]

export const workshops = [
  {
    name: "Arte de Sanar y Curar con las Manos",
    description: "Especializados en realizar tratamiento Patologías y Dolores Crónicos Originados por Problemas de las Vertebras",
    type: "Taller",
    duration: "15 horas"
  }
]


const CoursesAndWorkshop = () => {
  return (
    <div className="md:px-15 px-4 py-12 font-[sans-serif] my-20">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Cursos y Talleres</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {/* Tarjetas mapeadas */}
          {shortCourses.map((cursos, index) => (
            <div key={index} className="bg-white rounded overflow-hidden border">
              <Image src="/ejemplo1.jpg" alt={`Curso ${cursos.name}`} width={300} height={300} className="px-4 py-2 w-full" />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{cursos.name}</h3>
                <p className="text-gray-700 text-base">{cursos.description}</p>
                <p className="text-gray-900 text-base font-semibold mt-4">{cursos.type}</p>
                <p className="text-gray-900 text-base font-semibold mt-4">{cursos.duration}</p>
                <Link href="/" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-800 hover:bg-gray-600 text-white text-base w-full text-center">Leer más</Link>
              </div>
            </div>
          ))
          }
          {
            workshops.map((talleres, indexx) => (
              <div key={indexx} className="bg-white rounded overflow-hidden border">
                <Image src="/ejemplo2.jpg" alt={`Curso ${talleres.name}`} width={300} height={300} className="px-4 py-2 w-full" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{talleres.name}</h3>
                  <p className="text-gray-700 text-base">{talleres.description}</p>
                  <p className="text-gray-900 text-base font-semibold mt-4">{talleres.type}</p>
                  <p className="text-gray-900 text-base font-semibold mt-4">{talleres.duration}</p>
                  <Link href="/" className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-gray-800 hover:bg-gray-600 text-white text-base w-full text-center">Leer más</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default CoursesAndWorkshop