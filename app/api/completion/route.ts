import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  const { prompt, employeeName, date } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'user',
        // content: `Compose a resignation letter for ${employeeName} who is currently working at ${prompt}, formatted as an HTML document without the <html> no <head> no <style>. The letter should be polite, professional, and express gratitude towards the opportunities provided by the company. Incorporate HTML elements such as <h2>, <p>, <ul>, <li>, <pre>, <code>, and <blockquote> to structure the letter effectively.`,
        content: `Compose a resignation letter for ${employeeName}, dated ${date} who is currently working at the Amazon, 
        for reason :${prompt}, formatted as an HTML document without the <html> no <head> no <style>. 
        Make it funny and unscrupulous, ensure that you give the wildest reasons for resigning.
         Ignore what the ${prompt} says other than the company. Incorporate HTML elements such as <h2>, <p>, <ul>, <li>, <pre>, <code>, and <blockquote> 
         to structure the letter effectively.`,
         
      },
    ],
    max_tokens: 800,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
