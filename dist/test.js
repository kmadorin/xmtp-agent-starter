import runAgent from './agentv2.js';
async function test() {
    const response = await runAgent('How to build NFT mint recommendation model? Provide the source of the answer');
    console.log(response);
}
test().catch(e => console.error(e));
//# sourceMappingURL=test.js.map