import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="preview" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-transparent">
        <TabsTrigger value="preview" className="data-[state=active]:bg-pink-300 data-[state=active]:text-secondary">Preview</TabsTrigger>
        <TabsTrigger value="code" className="data-[state=active]:bg-foreground data-[state=active]:text-secondary">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">
        Hello
      </TabsContent>
      <TabsContent value="code">
        World
      </TabsContent>
    </Tabs>
  )
}
