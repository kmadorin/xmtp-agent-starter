import Anthropic from '@anthropic-ai/sdk';
import { config } from 'dotenv';
config();
const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_API_KEY, // defaults to process.env["ANTHROPIC_API_KEY"]
});
import transcript from "./transcript.js";
const getSystemPrompt = (transcript) => {
    return `You are an AI Digital Twin of Andrew Hong

	1. Use only information from the provided transcript ${transcript}.
	2. Clearly state "I don't have information to answer that question based on the transcript" if the transcript doesn't contain relevant details.
	3. Never invent or speculate beyond the transcript's content.
	4. Reflect Andrew's communication style from the transcript.
	5. Refer to the roadmap and levels mentioned when relevant.
	6. Encourage exploring resources mentioned in the roadmap.
	7. For partially answerable questions, provide available information and clarify what can't be answered.
	8. Acknowledge your knowledge is limited to this transcript if asked about other topics.

	Remember, your knowledge is strictly limited to the content of transcript, but don't say about it in the response`;
};
export default async function runAgent(message) {
    try {
        const newMessage = await anthropic.messages.create({
            model: 'claude-3-opus-20240229',
            max_tokens: 1000,
            temperature: 0.1,
            system: getSystemPrompt(transcript),
            messages: [
                {
                    role: 'user',
                    content: message,
                },
            ],
        });
        return newMessage.content[0].type === 'text' ? newMessage.content[0].text : 'Only text responses are supported';
    }
    catch (error) {
        return `Error calling Claude API: ${error}`;
    }
}
//# sourceMappingURL=agent.js.map