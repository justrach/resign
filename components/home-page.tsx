"use client";

import { useState } from "react";
import { useCompletion } from "ai/react";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// Assuming ResignationUI is a component you still want to use
import ResignationUI from "./homepage/resignationUI";

export function HomePage() {
  // const formRef = useRef(null); // Reference to the form element
  const [employeeName, setEmployeeName] = useState(""); // State to hold the employee name
  const [date, setDate] = useState(""); // State to hold the resignation date
  const [reason, setReason] = useState(""); // State to hold the resignation reason

  const {
    setInput,
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/completion',
    // body: {
    //   employeeName,
    //   date,
    //   reason,
    // }
  });

  // Manipulate formdata


  return (
    <main className="bg-white rounded-xl p-8 h-screen flex flex-1 w-full flex-col items-center justify-start text-start px-4">
      <h1 className="text-4xl font-bold text-slate-900 text-center max-w-[708px]">
        Create resignation letters with AI
      {JSON.stringify({
        employeeName,
        date,
        reason,
      })}
      </h1>
      <div className="px-4 py-6 md:py-12">
        <form onSubmit={handleSubmit} className="container flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Input fields for resignation letter details */}
          <div className="space-y-2">
            <Label htmlFor="employee-name">Employee Name</Label>
            <Input id="employee-name" placeholder="Enter your name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Resignation</Label>
            <Textarea id="reason" className="min-h-[150px]" placeholder="Enter your reason for resignation" value={input} onChange={handleInputChange} />
          </div>
          <button type="submit" disabled={isLoading}>Generate</button>
        </form>
        <p>Completion result :{completion}</p>
        {/* <ResignationUI /> */}
      </div>
    </main>
  );
}
