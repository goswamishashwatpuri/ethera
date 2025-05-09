import { notFound } from "next/navigation";
import { getComponentPathUsingSlug } from "@/actions/registry-actions";

export default async function Preview({ searchParams }: any) {
  const pageSlug = (await searchParams)?.pageSlug ?? null
  const variantSlug = (await searchParams)?.variantSlug ?? null

  const componentReference = getComponentPathUsingSlug(pageSlug, variantSlug)

  if (!componentReference) return notFound();
  const Component = (await componentReference())?.default

  return (
    <Component />
  )
}
