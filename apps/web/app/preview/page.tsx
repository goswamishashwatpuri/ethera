import Hero from '@/app/(landing)/page'
// import { useSearchParams } from 'next/navigation'

const components = {
  "Hero": Hero

}

export default async function Preview({ searchParams }: any) {
  const componentName = await searchParams?.component
  const Component = components[componentName as keyof typeof components]
  if (!Component) {
    return <div>Component not found</div>
  }
  return (
    <div>
      <Component />
    </div>
  )
}
