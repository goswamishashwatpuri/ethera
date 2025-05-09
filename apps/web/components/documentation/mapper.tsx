import ComponentPreview from "@/components/component-preview"

const keysToRender = [
  'title',
  'description',
  'usageCode',
  'dependencies',
  'sourceCode'
]

const keyToComponentMapping: any = {
  'title': Title,
  'description': Description,
  'usageCode': PreviewAndUsage,
  'dependencies': CodeBlock,
  'sourceCode': CodeBlock
}

function getRenderableComponent({ key, value, pageData, variantObject }:
  { key: string, value: string, pageData?: any, variantObject?: any }) {

  const ComponentToRender = keyToComponentMapping[key]
  // not jsx children syntax cause value is being passed as normal prop not as children.
  return ComponentToRender({ pageData, variantObject, value })
}

// takes page data and returns an array of components
export const generateMappedData = (pageData: any) => {
  const variantSectionArray = Object.values(pageData.variantSections)

  const componentsArray = [
    getRenderableComponent({ key: 'title', value: pageData.title }),
    getRenderableComponent({ key: 'description', value: pageData.description }),
  ]
  const tempComponentsArray = variantSectionArray.flatMap((variantObject: any) => {
    return keysToRender.map((key: string) => {
      if (variantObject[key]) {
        return getRenderableComponent({ key, value: variantObject[key], pageData, variantObject });
      }
      return null;
    });
  }).filter(component => component !== null);
  return [...componentsArray, ...tempComponentsArray]
}



function Title({ variantObject, value }: { variantObject: any, value: string }) {
  return (
    <div id={variantObject?.slug ?? ''}
      className="text-2xl font-bold">
      {value}
    </div>
  )
}

function Description({ value }: { value: string }) {
  return (
    <div className="text-base text-muted-foreground">
      {value}
    </div>
  )
}

function CodeBlock({ pageData, variantObject, value }: { pageData: any, variantObject: any, value: string }) {
  const pageSlug = pageData.slug
  const variantSlug = variantObject.slug
  return (
    <div className="my-3 p-2 bg-secondary rounded-md">
      <pre className="overflow-x-auto max-h-[60vh]">
        {value}
      </pre>
    </div>
  )
}

function PreviewAndUsage({ pageData, variantObject, value }: { pageData: any, variantObject: any, value: string }) {
  const pageSlug = pageData.slug
  const variantSlug = variantObject.slug
  return (
    <div className="rounded-md">
      <ComponentPreview src={`${process.env.NEXT_PUBLIC_BASE_URL}/preview?pageSlug=${pageSlug}&variantSlug=${variantSlug}`} />
      <pre className="my-3 bg-secondary overflow-x-auto p-2">
        {value}
      </pre>
    </div>
  )
}
