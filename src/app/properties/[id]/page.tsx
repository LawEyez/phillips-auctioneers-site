import { properties } from "@/app/propertiesData"
import LineSeparator from "@/components/global/LineSeparator"

async function getProperty(id: string) {
  const query = `
    {
      post(id: "${id}") {
        categories {
          nodes {
            name
          }
        }
        date
        title
        content
      }
    }
  `

  const res = await fetch(
    `${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  const data = await res.json()
  
  return data.data.post
}

export default async function Detail({ params, searchParams }: { params: { id: string }, searchParams: { id: string }}) {
  const { id } = params
  const property = properties.find(prop => prop.id === parseInt(id))
  
  return (
    <section className="min-h-[calc(100vh-462px)] pb-16">
      <div className="">
        <div className="py-16 bg-gradient-to-b from-neutral-800 to-neutral-950">
          <div className="container space-y-8">
            <h1 className="text-xl sm:text-2xl font-semibold font-secondary text-white">
              {property?.title}
            </h1>

            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-neutral-300">Auction Date</p>
                <p className="text-sm md:text-base font-medium text-white">{property?.auctionDate}</p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm text-neutral-300">Guide Price (KES)</p>
                <p className="text-sm md:text-base font-medium text-white">{property?.guidePrice.toLocaleString()}</p>
              </div>

              <div className="px-3 py-1 border border-white/10 rounded-full text-sm bg-neutral-800 h-max text-sky-200">
                {property?.location}
              </div>
            </div>
          </div>
        </div>

        <div
          className="prose prose-sm md:prose-base max-w-none container py-10"
          dangerouslySetInnerHTML={{ __html: property?.content as string}}
        />
      </div>
    </section>
  )
}