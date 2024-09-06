export default `<section name="Intro To Crypto"><content>Welcome to the start of your journey! This guide's modules are level-coded (L1,L2,L3) and tied to each yellow node. Each level will have a "you should be able to..." at the end. You're not meant to reach level 3 on each node before moving on, level 3 on some of these can take months to built up to.

If you know nothing about crypto, check out some of these resources first:
</content>

<resources>
  <resource>
    <name>Ultimate guide to guides (bankless)</name>
    <url>https://www.bankless.com/the-best-of-bankless</url>
  </resource>
  <resource>
    <name>Daily Digest of Crypto Happenings (daily gwei)</name>
    <url>https://www.youtube.com/channel/UCvCp6vKY5jDr87htKH6hgDA</url>
  </resource>
  <resource>
    <name>Composability Technical Guides</name>
    <url>https://read.cryptodatabytes.com/t/ecosystem-overviews</url>
  </resource>
</resources>

</section><section name="Blockchains"><content>
The best way to learn how blockchains work is to use a blockchain. I highly recommend spinning up a wallet, funding from some CEX (coinbase), and then swapping on Uniswap (or some DEX equivalent). Doing so will help you understand the theoretical parts of the modules in this section.

<resources>
  <resource>
    <name>Wallet</name>
    <url>https://metamask.io/</url>
  </resource>
  <resource>
    <name>Uniswap</name>
    <url>https://app.uniswap.org/swap</url>
  </resource>
</resources>

</content><subsection name="Traces/Transactions/Events"><content>You submit a transaction (call a contract, send someone ETH). Each transaction occurs in specific blocks. Transactions have an index denoting the order in which transactions executed in the block.

That transaction will set off traces (contract calls other contracts, deploys a contract, sends ETH to somewhere, etc). Traces all have a trace_address (see traceAddress here).

Those function calls can emit events as they execute (stored in logs). Logs are ordered across the block based on index. Events cannot be emitted outside of a transaction!

You should build a good understanding of transactions and events by interacting onchain. Going to Etherscan and finding the contract called and events emitted by that contract should feel easy

Go through the guide linked below first to understand these concepts.

</content>
<resources>
  <resource>
    <name>Guide to Transactions, Traces, and Logs</name>
    <url>https://read.cryptodatabytes.com/p/how-to-understand-transactions-traces</url>
  </resource>
</resources>
</subsection><subsection name="Contracts and Standards"><content>Smart contracts are deployed on the blockchain and can openly interact with each other. As such, we've developed standards (sets of functions/events) to make interactions more secure and predictable. Everyone using ERC20 for their tokens makes it easier to build compatible DEXs and Lending protocols.

On Ethereum we call these standards "ERCs", and I've linked my dashboard showcasing all ERCs.

You should be able to tell me the differences (tracking, functions, events) between the ERC20, ERC721, and ERC1155 standards. Understanding proxy standards like ERC1167 and ERC1967, which are very common, will also greatly help.

</content>
<resources>
  <resource>
    <name>ERC Starter Kit</name>
    <url>https://dune.com/ilemi/erc-and-eip-starter-kit</url>
  </resource>
  <resource>
    <name>ERC Token Explainer</name>
    <url>https://read.cryptodatabytes.com/p/every-erceip-explained-with-trends</url>
  </resource>
  <resource>
    <name>Proxies and Upgradable Contracts</name>
    <url>https://blog.openzeppelin.com/the-state</url>
  </resource>
</resources>
</subsection></section><section name="Exploration tools"><content>
Knowing how to explore trends, addresses, and transactions will be vital to building a solid base as an analyst. If you try to skip this and jump straight into querying, you will get completely lost. I've included my annual guide to all top crypto data tools in the links below.
</content>
<resources>
  <resource>
    <name>[2024] Web3 Data Tools</name>
    <url>https://read.cryptodatabytes.com/p/2024-annual-guide-web3-data-tools</url>
  </resource>
  <resource>
    <name>[2023] Web3 Data Tools</name>
    <url>https://read.cryptodatabytes.com/p/2023-guide</url>
  </resource>
</resources>
<subsection name="Keeping Up With Trends"><content>Trends can take many forms and are usually very noisy. A spike in TVL or transactions may be happening from one protocol/token and not really be sustainable.

You should use a combination of trend sites like dune.com, defillama, and artemis.xyz to see overall activity. At the start, you'll need help interpreting what's happening. This means hopping on Twitter and Warpcast and following some key crypto leaders to see the charts they share (as well as their commentary).

You should be able to find one relevant new chart a day if you've done this correctly
</content>
<resources>
  <resource>
    <name>Community Built Dashboards</name>
    <url>https://dune.com</url>
  </resource>
  <resource>
    <name>Project and Token Crypto Metrics</name>
    <url>https://defillama.com/</url>
  </resource>
  <resource>
    <name>High Level Crypto Metrics</name>
    <url>https://app.artemis.xyz/overview</url>
  </resource>
</resources>
</subsection></section><section name="Exploring Transactions"><content>
Transactions can become very complex, mostly due to traces (contracts calling contracts). I personally like to use Phalcon Blocksec's Explorer to view traces because it has contracts and functions nicely labeled. Generally, it looks like this pattern:

A
  CALLs B
    CALLs G
  CALLs C
    CALLs G

There will commonly be calls in the middle for delegate calls (forwarding a call), static calls (getting a read function, i.e., getting swap price), and lots of eth/token transfers.

Anytime you interact onchain or find an etherscan link, plug it into Phalcon to see if you can understand what's happening.

You should be able to quickly identify the token contracts, proxy contracts, and logical flow of functions in the linked example. They are separate calls linked together using a multicall method
</content>
<resources>
  <resource>
    <name>Phalcon Blocksec</name>
    <url>https://phalcon.blocksec.com/explorer/tx/optimism/0xedf413fbefb6ae164b417339d79fbb3bee4724ed8bbd956a2a8adb8b8b685147</url>
  </resource>
</resources>
</section><section name="Querying Tools"><content>
Now that you can read explorers, you're ready to start querying. You've learned "what" the data means; now it's time to learn where it comes from and how to "transform" it. Transforming data means taking the raw bytecode from a DEX swap and simplifying it to an abstracted table like dex.trades.

The important part is building a general sense for what data is "untouched" versus what data is "modified" and also what tool to use when. I've included my annual guide to all top crypto data tools in the links below.
</content>
<resources>
  <resource>
    <name>[2024] Web3 Data Tools</name>
    <url>https://read.cryptodatabytes.com/p/2024-annual-guide-web3-data-tools</url>
  </resource>
  <resource>
    <name>[2023] Web3 Data Tools</name>
    <url>https://read.cryptodatabytes.com/p/2023-guide-to-web3-data-tools</url>
  </resource>
</resources>
<subsection name="Navigating Protocols"><content>Every protocol is different, even Uniswap and Curve have very different contracts. It is tedious to learn to find the right contracts, understand the flow of functions/events, and then extract the data you need.

Going through the levels here will make it easier to build a mental checklist and framework.

To start your journey, you should always find a few key contract addresses (commonly in docs) and also transaction hashes. With these in hand, you can start using my quickstart dashboards. These will help you understand the functions and patterns related to a contract.

There are typically a few kinds of contracts and functions:

storage/parameter contracts, managing things like fees and token parameters (i.e. liquidation ratios)
factory contracts, used to create "pairs" or "pools"
user interface contracts, which handle all the logic and connections with other contracts. Such as Uniswap routers.
Events are then thrown in between, and you'll need to dive into the contracts to learn how they work.

You will need to know what an ABI is to have an easier time navigating these concepts.

You should be comfortable navigating Uniswap's Router02 swap traces and contracts using the tools given.

Here's the parsed XML format of the markdown links you provided:

<resources>
  <resource>
    <name>EVM Quickstart (Plug in contract address)</name>
    <url>https://dune.com/ilemi/contract-quickstart</url>
  </resource>
  <resource>
    <name>EVM Transaction Table Finder (Plug in transaction)</name>
    <url>https://dune.com/queries/2458023/4041368</url>
  </resource>
  <resource>
    <name>Solana Quickstart (Plug in program id)</name>
    <url>https://dune.com/ilemi/solana-program-quickstart</url>
  </resource>
  <resource>
    <name>Solana Transaction Table Finder (Plug in transaction)</name>
    <url>https://dune.com/queries/2654819/4412478</url>
  </resource>
  <resource>
    <name>Learn about ABIs</name>
    <url>https://blog.chain.link/what-are-abi-and-bytecode-in-solidity/</url>
  </resource>
</resources>

While learning Solidity (EVM) or Rust (many other VMs) is not required to do data analysis, getting familiar with the structures of contracts will help you a lot with navigating functions and events.

No matter the blockchain, you must learn to read the "interfaces." An interface is the list of functions and events contained within a contract without any logic. Try to understand how they are tied together, and ctrl + F your way around the codebase to find connections.

This is mainly for figuring out when and where event logic is handled. The key is to find the event name, then search event EventName( to find where it's defined and then emit EventName( to find where it's used. Then just pen and paper draw the function lineage to see how each emitted event variable is created.

**You should feel comfortable finding the lineage of** \`DelegateVotesChanged\` **in the OP token,** [example transaction here](https://optimistic.etherscan.io/tx/0x97f86072f9912188ed50714697af3eb3621b5f72163e64a67eac4b83a44103b5#eventlog) **by sleuthing the** [contract code](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000042#code).

<resources>
  <resource>
    <name>Learn to read contract code (with Zora and Uniswap)</name>
    <url>https://read.cryptodatabytes.com/p/how-to-navigate-contract-code-solidity</url>
  </resource>
  <resource>
    <name>Another example with Sudoswap</name>
    <url>https://read.cryptodatabytes.com/p/web3-sql-weekly-9-sleuthing-a-sudoswap</url>
  </resource>
</resources>

What you want to build up to is a "feed" of enhanced data on key user "actions". With that, you can do simple aggregations to calculate "positions".

For example, I have a Jupiter Perps dashboard where:

I first created a "feed" of three events that capture all user position changes
I then created a positions tracker by user that only summed open positions
Finally, I created a system position tracker to give me overall open interest/size.
Whenever I analyze a protocol, I try to go through these steps: try to understand how I transformed the tables at each step (don't worry too much about what the exact SQL logic means).

You should be able to go to a protocol and understand what actions (events/functions) you need to string together to create a feed, and what position tables that feed would unlock

<resources>
  <resource>
    <name>Step 1: Perp Feed Creation (3 events decoded and aggregated)</name>
    <url>https://dune.com/queries/3338071</url>
  </resource>
  <resource>
    <name>Step 2: Perp User Open Positions</name>
    <url>https://dune.com/queries/3343518</url>
  </resource>
  <resource>
    <name>Step 3: Perp Overall Stats (Summed Positions)</name>
    <url>https://dune.com/queries/3338148/5593343</url>
  </resource>
</resources>


Product and business managers will always want to get deeper into the segmentation of data and meaningful metrics that they can drive. The total volume is great, but it's not targeted enough for people to plan or act upon. Up to this point, you're just creating "facts" where the data is not altered in any subjective way. Now, you need to add your own opinion or "perspective" to make it more impactful.

I'll give you two examples. The first one is [my tiering of users and channels in Farcaster](https://dune.com/ilemi/farcaster-explorer), which gives us an opinion on quality users and channels so that people can build better feeds and algorithms. The second example is my [tiering of developer quality based on contract complexity and interaction levels](https://warpcast.com/ilemi/0x88872890). This helps teams take a stronger opinion on what kinds of developers are growing on a chain (or aren't).

**You should be able to take any volume or user action feed and turn it into labels and metrics. Instead of just volume, maybe it's memecoin volume. Instead of just active users, it's high-value retained users.**

<resources>
  <resource>
    <name>Farcaster Tiering Dashboard</name>
    <url>https://dune.com/ilemi/farcaster-explorer</url>
  </resource>
  <resource>
    <name>Base Developer Tiering</name>
    <url>https://warpcast.com/ilemi/0x88872890</url>
  </resource>
</resources>

</content><content text="Finding Tables" /><content text="Reading Contracts" /><content text="Creating Feeds and Positions" /><content text="Adding Labels and Metrics" /></subsection></section><section name="Graph Analysis"><content>
Crypto data is almost all peer-to-peer in shape:

- Wallet transfer to wallet
- Wallet interacting with token
- Contract calling another contract

Graph data analysis becomes a fundamental skill for a crypto data scientist. Familiarity with graph data libraries like networkx is a must, and building public graphs with communities like OpenRank is the equivalent of building dashboards on Dune.

<resources>
  <resource>
    <name>Building an Openrank Eigentrust Graph</name>
    <url>https://read.cryptodatabytes.com/p/openrank-powering-apps-with-contextual</url>
  </resource>
  <resource>
    <name>Networkx Python Package</name>
    <url>https://networkx.org/documentation/stable/index.html</url>
  </resource>
</resources>

</content></section><section name="Knowledge Domains"><content>
Below are some of the most common domains you'll encounter. Because of the composable nature of crypto, you will need to learn pretty much all of these over time to become an expert. But that keeps work fun!

This list is not all-inclusive; I didn't include niches like MEV and perps because they are much more challenging to navigate.

You should aim to understand a few queries on each dashboard, namely breaking down the tables analysts used and their logic.

</content><subsection name="Wallets"><content>
You'll need to learn the difference between the following, and how to query them.

- EOA (normal private key)
- Smart Account (ERC4337)
- Multisig (Safe)

I did some basic wallet analysis of Farcaster and on-chain data together in the linked dashboard (see table at the bottom).

<resources>
  <resource>
    <name>Onchain x Social Wallet Analysis</name>
    <url>https://dune.com/ilemi/farpoll</url>
  </resource>
  <resource>
    <name>ERC4337 Explained</name>
    <url>https://read.cryptodatabytes.com/p/web3-sql-weekly-8-analyzing-account</url>
  </resource>
  <resource>
    <name>Safe (Multisig)</name>
    <url>https://docs.safe.global/home/what-is-safe</url>
  </resource>
</resources>

</content></subsection><subsection name="Tokens"><content>You should learn to analyze ERC20 tokens and NFTs. I've linked a dashboard showing you how to analyze various facets of ERC20 tokens.

<resources>
  <resource>
    <name>Token Overview Dashboard</name>
    <url>https://dune.com/ilemi/Token-Overview-Metrics</url>
  </resource>
</resources>

</content></subsection><subsection name="Bridges"><content>There are many types of bridges, and they take different approaches to getting tokens from one blockchain to another. Some are "native" and others are "relayers".

I've linked one of my favorite bridge dashboards below to give some inspiration.

<resources>
  <resource>
    <name>Scroll Bridge Dashboard</name>
    <url>https://dune.com/gasweighing/scroll-on-mainnet</url>
  </resource>
</resources>


</content></subsection><subsection name="Rollups/Layers"><content>
Rollups can get very complex. For the most part, they operate like normal blockchains, except when it comes to fees. You should study the linked dashboard to learn how sequencers, proofs, and gas fees work on rollups.

<resources>
  <resource>
    <name>Rollup Economics</name>
    <url>https://dune.com/niftytable/rollup-economics</url>
  </resource>
</resources>

</content></subsection><subsection name="DEX Markets"><content>There are many different ways of trading ERC20 tokens:

DEX
Limit Orders
Intents
Aggregators
Market Makers
Some relevant dashboards are included below.

<resources>
  <resource>
    <name>EVM DEX Metrics</name>
    <url>https://dune.com/hagaetc/dex-metrics</url>
  </resource>
  <resource>
    <name>Solana DEX Metrics</name>
    <url>https://dune.com/ilemi/solana-dex-metrics</url>
  </resource>
  <resource>
    <name>Cowswap (Aggregator)</name>
    <url>https://dune.com/cowprotocol/cowswap</url>
  </resource>
  <resource>
    <name>1inch (Aggregator)</name>
    <url>https://dune.com/1inch/main</url>
  </resource>
  <resource>
    <name>Uniswap V2 Covered in 12 Days</name>
    <url>https://www.youtube.com/playlist?list=PLK3b5d4iK10cIrN8c_au9RrC0_eBCOyR2</url>
  </resource>
</resources>


</content></subsection><subsection name="NFT Markets"><content>NFTs don't have as many trading methods as ERC20 tokens, but some highlights include:

Bid/Ask (Opensea)
Order Book (Blur)
Lending (Blur)
Bonding Curves (Sudoswap)
Relevant dashboards linked

<resources>
  <resource>
    <name>Ethereum NFTs</name>
    <url>https://dune.com/hildobby/NFTs</url>
  </resource>
  <resource>
    <name>Solana NFTs</name>
    <url>https://dune.com/ilemi/solana-nfts</url>
  </resource>
  <resource>
    <name>Blur Lend</name>
    <url>https://dune.com/web3academypro/blend-blur</url>
  </resource>
  <resource>
    <name>Sudoswap</name>
    <url>https://dune.com/ilemi/sudoswap-v2</url>
  </resource>
</resources>


</content></subsection><subsection name="Staking"><content>Key concepts for staking include:

Validators
LSTs
Delegation (DPOS)
Rewards
Relevant dashboards below

<resources>
  <resource>
    <name>Ethereum Staking</name>
    <url>https://dune.com/hildobby/eth2-staking</url>
  </resource>
  <resource>
    <name>Solana Staking</name>
    <url>https://dune.com/ilemi/solana-staking</url>
  </resource>
</resources>

</content></subsection></section>`