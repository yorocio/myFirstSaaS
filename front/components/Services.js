import React from "react";

export const services = [
  {
    name: "Shiatsu Tradicional",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor arcu, at fermentum dui.",
    duration: "60 min",
    price: 10,
  },
  {
    name: "Relajación Zen",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor arcu, at fermentum dui.",
    duration: "60 min",
    price: 30,
  },
  {
    name: "Masaje Chino",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor arcu, at fermentum dui.",
    duration: "60 min",
    price: 20,
  },
  {
    name: "Reflexología",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor arcu, at fermentum dui.",
    duration: "50 min",
    price: 30,
  },
  {
    name: "Fitoterapia",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor arcu, at fermentum dui.",
    duration: "60 min",
    price: 25,
  },
];

const Services = () => {
  return (
    <div className="flex flex-wrap md:justify-between gap-6 my-16 max-w-[90%] mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="shadow-md border w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-center my-4">{service.name}</h3>
            <p className="my-4 text-sm text-gray-700 leading-relaxed">{service.description}</p>
            <p className="text-sm text-gray-700 leading-relaxed">Duración: {service.duration}</p>
            <p className="text-sm text-gray-700 leading-relaxed">Precio: ${service.price}</p>
            <button
              type="button"
              className="px-5 py-2.5 w-full my-4 rounded-lg text-white text-sm tracking-wider border-none outline-none hover:bg-gray-500 bg-gray-800">
              Reservar una sesión
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;