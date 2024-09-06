import { run, HandlerContext } from "@xmtp/message-kit";
import runAgent from './agent_xml.js';

run(async (context: HandlerContext) => {
	// Get the message and the address from the sender

	const content = context.message.content.content;

	if (!content) {
		await context.reply('Please provide a message to continue.');
		return;
	}

	const response = await runAgent(content);

	// To reply, just call `reply` on the HandlerContext.
	await context.reply(response);
}).then((res) => {
	console.log('####: res: ', res);
}).catch((e) => {
	console.error('####: e: ', e);
});
