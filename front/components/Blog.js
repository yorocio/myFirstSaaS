import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const blog = [{
    title: "Blog 1",
    description: "Esta es la descripción del blog 1",
    date: "dia/mes/año"
},
{
    title: "Blog 2",
    description: "Esta es la descripción del blog 2",
    date: "dia/mes/año"
},
{
    title: "Blog 3",
    description: "Esta es la descripción del blog 3",
    date: "dia/mes/año"
},
{
    title: "Blog 4",
    description: "Esta es la descripción del blog 4",
    date: "dia/mes/año"
},
{
    title: "Blog 5",
    description: "Esta es la descripción del blog 5",
    date: "dia/mes/año"
}]

const Blog = () => {
    return (
        <section className="bg-white dark:bg-gray-900 my-12">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Blog</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">

                    {blog.map((text, index) =>
                        <div className="lg:flex" key={index}>
                            <Image width={300} height={300} className="object-cover w-full h-56 rounded-lg lg:w-64" src="/blog.jpg" alt="" />

                            <div className="flex flex-col justify-between py-6 lg:mx-6" >
                                <Link href="#" className="text-xl font-semibold text-gray-900 hover:underline dark:text-white">
                                    {text.title}
                                </Link>
                                <span className="text-sm text-gray-700 dark:text-gray-200">{text.description}</span>
                                <span className="text-sm text-gray-700 dark:text-gray-200">{text.date}</span>
                                <button className='w-full bg-gray-800 backdrop-blur-md border-2 border-gray-800 text-white px-6 py-1 rounded-md hover:bg-gray-600 transition-all duration-300'>Ver más</button>
                            </div>
                            
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}

export default Blog