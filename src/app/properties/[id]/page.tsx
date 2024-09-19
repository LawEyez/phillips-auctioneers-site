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
    <section className="py-16 container">
      <div className="flex flex-col gap-8">
        <div className="space-y-5">
          <h1 className="text-xl sm:text-2xl font-semibold font-secondary">
            {property.title}
          </h1>

          <div className="flex gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-500">Guide Price (KES)</p>
              <p className="text-sm md:text-base font-medium">{property.guidePrice.toLocaleString()}</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm text-neutral-500">Auction Date</p>
              <p className="text-sm md:text-base font-medium">{property.auctionDate}</p>
            </div>

            <div className="px-2 py-1 border border-black/10 rounded-full text-sm bg-neutral-50 h-max">{property.location}</div>
          </div>
        </div>

        <LineSeparator type="dark" />

        <div
          className="space-y-5 text-gray-600 leading-relaxed text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: property.content}}
        />
      </div>
    </section>
  )
}