import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Editor from "@/editor"

export function HomePage() {
  return (
    <main className="bg-white rounded-xl p-8 h-screen flex flex-1 w-full flex-col items-center justify-start text-start px-4">
         <h1 className="sm:text-6xl text-center justify-center text-4xl max-w-[708px] font-bold text-slate-900">
         Create resignation letters with AI
        </h1>
        {/* <div className="mt-7">
          <Toggle isGPT={isGPT} setIsGPT={setIsGPT} />
        </div> */}
    <div className="px-4 py-6 md:py-12">
      <div className="container flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full max-w-lg space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Resignation Letter Generator</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Enter your information below to generate your resignation letter.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="employee-name">Employee Name</Label>
            <Input id="employee-name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Resignation</Label>
            <Textarea id="reason" className="min-h-[150px]" placeholder="Enter your reason for resignation" />
          </div>
          <Button type="submit">Generate</Button>
        </div>
      <Editor /> 
      </div>
    </div>
  </main>
  )
}
