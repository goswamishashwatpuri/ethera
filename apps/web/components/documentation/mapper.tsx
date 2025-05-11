'use client'
import { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ComponentPreview from "@/components/component-preview"
import { Button } from "../ui/button"
import { CheckIcon, Clipboard } from "lucide-react"
import { ArrowBigRightDashIcon } from "lucide-react"

const keysToRender = [
  'pageTitle',
  'title',
  'description',
  'usageCode',
  'dependencies',
  'sourceCode'
]

const keyToComponentMapping: any = {
  'pageTitle': PageTitle,
  'title': Title,
  'description': Description,
  'usageCode': PreviewAndUsage,
  'dependencies': InstallationLabelAndDependencies,
  'sourceCode': SourceCodeAndLabel
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
    getRenderableComponent({ key: 'pageTitle', value: pageData.pageTitle }),
    // getRenderableComponent({ key: 'description', value: pageData.description }),
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

function PageTitle({ value }: { value: string }) {
  return (
    <div
      className="text-4xl font-bold">
      {value}
    </div>
  )
}

function Title({ variantObject, value }: { variantObject: any, value: string }) {
  return (
    <div id={variantObject?.slug ?? ''}
      className="mt-12 mb-2 text-3xl font-bold">
      {value}
    </div>
  )
}

function Heading({ value }: { value: string }) {
  return (
    <div
      className="mt-7 mb-2 text-2xl font-semibold">
      {value}
    </div>
  )
}


function Description({ value }: { value: string }) {
  return (
    <div className="mb-5 text-lg text-muted-foreground">
      {value}
      <div className="mt-2 p-px border-b border-border" />
    </div>
  )
}

function CodeBlock({ pageData, variantObject, value }: { pageData: any, variantObject: any, value: string }) {
  const [copied, setCopied] = useState(false)
  const pageSlug = pageData.slug
  const variantSlug = variantObject.slug
  return (
    <div className="my-6 bg-primary-foreground relative w-[90%]  border rounded-[0.7rem]">
      <Button
        className="absolute top-5 right-5"
        variant="outline"
        size="icon"
        onClick={() => {
          navigator.clipboard.writeText(value)
          setCopied(true)
          setTimeout(() => {
            setCopied(false)
          }, 3000)
        }}
      >
        {copied ? <CheckIcon className="w-4 h-4" /> : <Clipboard className="w-4 h-4" />}
      </Button>
      <SyntaxHighlighter language="typescript" style={dracula} class="customThinScrollbar"
        customStyle={{
          width: '100%',
          overflowX: 'auto',
          overflowY: 'auto',
          fontSize: '1rem',
          backgroundColor: 'var(--syntax-background)',
          padding: '1.5rem',
          borderRadius: '0.7rem',
          maxHeight: '60vh',
          placeSelf: 'center',
        }}>
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

function InstallationLabelAndDependencies({ pageData, variantObject, value }: { pageData: any, variantObject: any, value: string }) {
  const pageSlug = pageData.slug
  const variantSlug = variantObject.slug
  return (
    <div>
      <Heading value="How to use" />
      <div className="mb-5 text-lg text-muted-foreground">
        <p className="flex gap-1 items-center">
          <ArrowBigRightDashIcon /> First install these dependencies
        </p>
      </div>
      <CodeBlock
        pageData={pageData}
        variantObject={variantObject}
        value={value}
      />
    </div>
  )
}

function SourceCodeAndLabel({ pageData, variantObject, value }: { pageData: any, variantObject: any, value: string }) {
  const pageSlug = pageData.slug
  const variantSlug = variantObject.slug
  return (
    <div className="pb-7 border-b border-border ">
      {/* <Heading value="How to use" /> */}
      <div className="mb-5 text-lg text-muted-foreground">
        <p className="flex gap-1 items-center">
          <ArrowBigRightDashIcon /> Paste the source code into your project.
        </p>
      </div>
      <CodeBlock
        pageData={pageData}
        variantObject={variantObject}
        value={value}
      />
      <p className="flex gap-1 items-center text-muted-foreground">
        <ArrowBigRightDashIcon /> Use the above provided Block code to get started.
      </p>
    </div>
  )
}

export function PreviewAndUsage({ pageData, variantObject, value }: { pageData: any, variantObject: any, value: string }) {
  const pageSlug = pageData.slug
  const variantSlug = variantObject.slug

  const [codeTabSelected, setCodeTabSelected] = useState<Boolean>(false)

  return (
    <div>
      <div className="flex border-b mb-5">
        <button
          onClick={() => { setCodeTabSelected(false) }}
          className={`py-2 px-4 font-medium border-b 
            ${!codeTabSelected ? "border-foreground text-foreground" : "text-muted-foreground border-transparent"}
            `}
        >
          Preview
        </button>
        <button
          onClick={() => { setCodeTabSelected(true) }}
          className={`py-2 px-4 font-medium border-b 
          ${codeTabSelected ? "border-foreground text-foreground" : "text-muted-foreground border-transparent"}
          `}
        >
          Code
        </button>
      </div>
      <div>
        <div className={`${codeTabSelected ? "hidden" : ""}`}>
          <ComponentPreview
            src={`${process.env.NEXT_PUBLIC_BASE_URL}/preview?pageSlug=${pageSlug}&variantSlug=${variantSlug}`}
          />
        </div>
        {
          codeTabSelected &&
          <CodeBlock
            pageData={pageData}
            variantObject={variantObject}
            value={value}
          />
        }
      </div>
    </div>
  )
}
