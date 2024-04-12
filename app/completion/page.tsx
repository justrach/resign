'use client';
 
import { useCompletion } from 'ai/react';
import { useState } from 'react';
 
export default function Completion() {
    const [employeeName, setEmployeeName] = useState(""); 
 
    const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion({
    api: '/api/completion',
    body:{
      employeeName: employeeName
    }
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Enter your prompt..."
          onChange={handleInputChange}
        />
         <input
        id="employee-name" placeholder="Enter your name" value={employeeName} onChange={(e) => setEmployeeName(e.target.value)} 
        />
        <p>Completion result: {completion}</p>
        <button type="button" onClick={stop}>
          Stop
        </button>
        <button disabled={isLoading} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}