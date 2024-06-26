"use client";

import { useState } from "react";
import { useCompletion } from "ai/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReactMarkdown from 'react-markdown';
import { motion } from "framer-motion";
import Test from "./Editor/tiptap";
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React from "react";
import { Card } from "./ui/card";
import { Command, CommandInput, CommandItem, CommandList } from "./ui/command";

export function HomePage() {

  // TODO: Add copy button


  const [company, setCompany] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [date, setDate] = React.useState<Date>()
  const [reason, setReason] = useState("");
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
    body: {
      employeeName: employeeName,
      date: date,
      reason: reason,
      company: company
    }
  });

  return (
    <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl p-8 flex flex-col items-center justify-center min-h-screen w-full px-4"
  >
    <motion.h1
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      className="text-4xl font-bold text-slate-900 text-center mb-6"
    >
      Create resignation letters with AI 🤖
    </motion.h1>
    <motion.form
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      onSubmit={handleSubmit}
      className="w-full max-w-xl space-y-4">
      {/* <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4"> */}
        <div className="space-y-2">
          <Label htmlFor="employee-name">Employee Name</Label>
          <Input id="employee-name" placeholder="Enter your name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company-name">Company Name</Label>
          <Input id="company-name" placeholder="What company you quittin" value={company} onChange={(e) => setCompany(e.target.value)} />
        </div>
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
  <div className="space-y-2 w-full md:w-1/3">
    <Label htmlFor="date">Date</Label>
          <Popover>
      <PopoverTrigger asChild>
        <Button
          // variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal ",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Resignation Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover> </div>
          <div className="space-y-2 w-full md:w-1/2">
            <Label htmlFor="reason">Reason for Resignation</Label>
            <Textarea id="reason" className="min-h-[150px]" placeholder="Enter your reason for resignation" value={input} onChange={handleInputChange} />
          </div>
        </div>

   
      
<div className="flex justify-center w-full">
  <Button type="submit" className="w-full bg-[#87CEEB] text-white" disabled={isLoading}>Generate</Button>
</div>
      </motion.form>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
        className="mt-6 w-full max-w-xl"
      >
   {isLoading && (
 <Card className="">
  <div className=" px-5 py-4">
    <div
      className="htmlContent"
      dangerouslySetInnerHTML={{ __html: completion }}
    ></div>
  </div></Card>
)}

        {!isLoading && (
  <div>
  <Card className="">
    <div className="p-8">
    <Test content={completion} />
    </div>

  
  </Card> 

  </div>
)}
      </motion.div>
    </motion.main>
  );
}
