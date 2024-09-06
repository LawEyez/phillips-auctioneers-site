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

export default async function Detail({ params, searchParams }: { params: { slug: string }, searchParams: { id: string }}) {
  const { id } = searchParams
  const property = await getProperty(id)
  
  return (
    <section className="py-16 container">
      <div className="flex flex-col gap-8">
        <div className="space-y-5">
          <h1 className="text-2xl font-semibold font-secondary">
            {property.title}
          </h1>

          <div className="flex items-center gap-5">
            <p className="text-sm font-medium text-gray-500">{property.date}</p>
            <div className="text-sm font-medium">{property.categories.nodes[0].name}</div>
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