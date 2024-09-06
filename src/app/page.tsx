import Card from "@/components/global/Card";
import Image from "next/image";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";

async function getProperties() {
  const query = `
    {
      posts {
        nodes {
          title
          excerpt
          slug
          id
          date
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `
  
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 10 }
    }
  )

  const { data } = await res.json()

  return data.posts.nodes
}

export default async function Home() {
  const properties = await getProperties()
  console.log(properties[0].categories)

  return (
    <section className="">
      {/* UPCOMING AUCTIONS */}
      <div className="bg-gradient-to-b from-neutral-800 to-neutral-950 py-16 text-white">
        <div className="container flex flex-col gap-8">
          <h2 className="flex flex-col font-secondary text-3xl leading-tight">
            <span className="font-bold">Upcoming</span>
            <span className="font-light">auctions</span>
          </h2>

          <div className="h-px w-full bg-white/10">
            <div className="h-full w-20 bg-white"></div>
          </div>

          <div className="overflow-x-auto pb-5 scrollbar">
            <div className="w-max flex gap-3">
              {properties.sort((a: any, b: any) => a.date - b.date).slice(5).map((property: any) => (
                <Card
                  key={property.id}
                  id={property.id}
                  type="sm"
                  img='https://images.unsplash.com/photo-1590075700133-9246b1f367b1?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  date={property.date}
                  title={property.title}
                  location={property.categories.nodes[0].name}
                />

              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-5 mt-20">
            <div className="flex items-center gap-3">
              <RiMailLine />
              <span className='text-sm'>info@phillipsauctioneers.co.ke</span>
            </div>

            <div className="flex items-center gap-3">
              <RiPhoneLine />
              <span className='text-sm'>+254 (0)20 553 701/2/3</span>
            </div>
          </div>
        </div>
      </div>

      {/* PROPERTIES ON SALE */}
      <div className="container py-16 space-y-10">
        <div className="h-px w-full bg-black/10">
          <div className="h-full w-20 bg-black"></div>
        </div>

        <h2 className="flex flex-col font-secondary text-2xl leading-tight">
          <span className="font-bold">Properties</span>
          <span className="font-light">on sale</span>
        </h2>

        <div className="flex flex-col gap-3">
          {properties.map((property: any, i: number) => (
            <Card
              key={property.id}
              id={property.id}
              type="lg"
              title={property.title}
              date={property.date}
              location={property.categories.nodes[0].name}
              idx={i}
            />
          ))}

        </div>
      </div>
    </section>
  );
}
