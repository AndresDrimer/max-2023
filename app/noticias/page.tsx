import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export type Noticia ={
  id: string;
  tag: string;
  image: string;
  title: string;
  description: string;
  alert: string;
  longDescription: string;
  titleButton: string;
  href:string;
}

export const gridElements = [
  {
    id:1,
    tag:"1",//1 single descriptive word for use as path
    image:"/noticias/1.jpeg",
    title:"TITULO",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid!",
    alert:"descuento!",//max 11ch.
    longDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid!",
    titleButton: "comprar",
    href:"/"
  },
  {
    id:2,
    tag:"2",
    image:"/noticias/2.jpg",
    title:"TITULO",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid!",
    alert:"", 
    longDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid!",
    titleButton: "comprar",
    href:"/"
  },
  {
    id:3,
    tag:"3",
    image:"/noticias/3.jpeg",
    title:"TITULO",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid!",
    alert:"descuento!",
    longDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid!",
    titleButton: "comprar",
    href:"/"
  },
  {
    id:4,
    tag:"4",
    image:"/noticias/1.jpeg",
    title:"TITULO",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid!",
    alert:"descuento!",
    longDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eaque, repudiandae molestias facere laboriosam, esse aliquid earum at vel unde natus dolor, saepe rerum sapiente quos cupiditate voluptas expedita. Aliquid!",
    titleButton: "comprar",
    href:"/"
  },
]

function Noticias() {

  
  return (
    <div className='flex flex-col justify-center p-8 mt-20 '>
      {/* grid container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-zinc-100 rounded-lg items-center justify-items-center shadow-2xl'>

      {gridElements.map(it=>
        <div key={it.id} className='max-w-[350px]  border-celesteMax shadow-2xl  m-4 rounded-lg p-2 mt-4 relative'>
        <Link href={`/noticias/${it.tag}`}>
            <div className='flex items-center justify-start relative  overflow-hidden hover:translate-x-2 '>
              <Image
                    src={it.image}
                    alt="imagen"
                    width={200}
                    height={200}
                    sizes='30vw'
                    className='rounded-xl border-celesteMax hover:border-2'
                    />
                      {it.alert && <div className='absolute bg-red-500 text-zinc-100 top-7 px-8 -left-7 -rotate-45 w-[150px]'><p className='text-center'>{it.alert}</p></div>}
            </div>
            </Link>
            <h3 className='font-bold text-2xl'>{it.title}</h3>
            <p className='text-celesteOscuro'>{it.description}</p>
        </div>)
        }

        


      </div>
    </div>
  )
}

export default Noticias