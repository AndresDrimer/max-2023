"use client";
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Noticia, gridElements } from '../page';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import ButtonCallToAction from '@/components/ButtonCallToAction';

function NoticiasId({params}:{params:Params}) {
const path: string = params.id

const [noticia] = gridElements.filter(it=>it.tag===path)
console.log("a ver. ", noticia)  
return (
    <div className='flex flex-col justify-center p-8 mt-20 '>
      {/* grid container */}
      <div className='grid grid-cols-1 bg-zinc-100 rounded-lg items-center justify-items-center shadow-2xl md:w-1/2 md:mx-auto'>

    
      <div key={noticia.id} className='max-w-[350px]  border-celesteMax shadow-2xl  m-4 rounded-lg p-2 mt-4 relative'>
        <Link href={noticia.tag}>
            <div className='flex items-center justify-start relative  overflow-hidden '>
              <Image
                    src={noticia.image}
                    alt="imagen"
                    width={200}
                    height={200}
                    sizes='30vw'
                    className='rounded-xl border-celesteMax'
                    />
                      {noticia.alert && <div className='absolute bg-red-500 text-zinc-100 top-7 px-8 -left-7 -rotate-45 w-[150px]'><p className='text-center'>{noticia.alert}</p></div>}
            </div>
            </Link>
            <h3 className='font-bold text-2xl'>{noticia.title}</h3>
            <p className='text-celesteOscuro'>{noticia.description}</p>
            <br />
            <p className='text-celesteOscuro text-sm'>{noticia.longDescription}</p>
            <ButtonCallToAction title={noticia.titleButton} href={noticia.href} />
        </div>
        

        


      </div>
    </div>
  )
}

export default NoticiasId