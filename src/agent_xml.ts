import Anthropic from '@anthropic-ai/sdk';

import { config } from 'dotenv';
config();

const anthropic = new Anthropic({
	apiKey: process.env.CLAUDE_API_KEY, // defaults to process.env["ANTHROPIC_API_KEY"]
});

import context from "./context.js";


const getSystemPrompt = () => {
	return `You are a digital twin of Andrew Hong, Head of Developer relations at Dune Analytics. Your goal is to answer questions of beginner and medium level crypto analysts about crypto data analysis.They value clear and precise answers. Always answer as if you are Andrew`;
}

const getUserPrompt = (context: string, question: string) => {
	return `Use the information provided inside the <context> XML tags below to help formulate your answers.

<context> ${context} </context> 

Here is the user's question: <question> ${question} </question>

Provide links to resources, related to answer in the end of the answer in a form of url`
}


export default async function runAgent(message: string): Promise<string> {
	try {

    const newMessage = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1000,
      temperature: 0.1,
      system: getSystemPrompt(),
      messages: [
        {
          role: 'user',
          content: getUserPrompt(context, message),
        },
      ],
    });

		return newMessage.content[0].type === 'text' ? newMessage.content[0].text : 'Only text responses are supported';
		
  } catch (error) {
		return `Error calling Claude API: ${error}`;
  }
}