# Intro To Crypto
Welcome to the start of your journey! This guide's modules are level-coded (L1,L2,L3) and tied to each yellow node. Each level will have a "you should be able to..." at the end. You're not meant to reach level 3 on each node before moving on, level 3 on some of these can take months to built up to.

If you know nothing about crypto, check out some of these resources first:

- [Ultimate guide to guides (bankless)](https://www.bankless.com/the-best-of-bankless)
- [Daily Digest of Crypto Happenings (daily gwei)](https://www.youtube.com/channel/UCvCp6vKY5jDr87htKH6hgDA)
- [Composability Technical Guides](https://read.cryptodatabytes.com/t/ecosystem-overviews)


# Blockchains

The best way to learn how blockchains work is to use a blockchain. I highly recommend spinning up a wallet, funding from some CEX (coinbase), and then swapping on Uniswap (or some DEX equivalent). Doing so will help you understand the theoretical parts of the modules in this section.

- [Wallet](https://metamask.io/)
- [Uniswap](https://app.uniswap.org/swap)

## Traces/Transactions/Events
You submit a transaction (call a contract, send someone ETH). Each transaction occurs in specific blocks. Transactions have an index denoting the order in which transactions executed in the block.

That transaction will set off traces (contract calls other contracts, deploys a contract, sends ETH to somewhere, etc). Traces all have a trace_address (see traceAddress here).

Those function calls can emit events as they execute (stored in logs). Logs are ordered across the block based on index. Events cannot be emitted outside of a transaction!

You should build a good understanding of transactions and events by interacting onchain. Going to Etherscan and finding the contract called and events emitted by that contract should feel easy

Go through the guide linked below first to understand these concepts.

- [Guide to Transactions, Traces, and Logs](https://read.cryptodatabytes.com/p/how-to-understand-transactions-traces)


## Contracts and Standards
Smart contracts are deployed on the blockchain and can openly interact with each other. As such, we've developed standards (sets of functions/events) to make interactions more secure and predictable. Everyone using ERC20 for their tokens makes it easier to build compatible DEXs and Lending protocols.

On Ethereum we call these standards "ERCs", and I've linked my dashboard showcasing all ERCs.

You should be able to tell me the differences (tracking, functions, events) between the ERC20, ERC721, and ERC1155 standards. Understanding proxy standards like ERC1167 and ERC1967, which are very common, will also greatly help.

- [ERC Starter Kit](https://dune.com/ilemi/erc-and-eip-starter-kit)
- [ERC Token Explainer](https://read.cryptodatabytes.com/p/every-erceip-explained-with-trends)
- [Proxies and Upgradable Contracts](https://blog.openzeppelin.com/the-state)

## Ecosystem Overviews
Blockchain ecosystems can get really wide and complex. To give you a sense of how deep you can go in coverage, I've linked a few of my favorite deep-dive dashboards on different blockchains.

You should be able to tell me what some of the most common metrics for comparing and analyzing blockchains are

- [Solana Key Metrics](https://dune.com/21co/solana-key-metrics)
- [Optimism Protocol Metrics](https://dune.com/optimismfnd/Optimism)
- [Bitcoin Metrics](https://dune.com/ilemi/bitcoin-metrics)

# Exploration tools

Knowing how to explore trends, addresses, and transactions will be vital to building a solid base as an analyst. If you try to skip this and jump straight into querying, you will get completely lost. I've included my annual guide to all top crypto data tools in the links below.

- [[2024] Web3 Data Tools](https://read.cryptodatabytes.com/p/2024-annual-guide-web3-data-tools)
- [[2023] Web3 Data Tools](https://read.cryptodatabytes.com/p/2023-guide)

## Keeping Up With Trends
Trends can take many forms and are usually very noisy. A spike in TVL or transactions may be happening from one protocol/token and not really be sustainable.

You should use a combination of trend sites like dune.com, defillama, and artemis.xyz to see overall activity. At the start, you'll need help interpreting what's happening. This means hopping on Twitter and Warpcast and following some key crypto leaders to see the charts they share (as well as their commentary).

You should be able to find one relevant new chart a day if you've done this correctly

- [Community Built Dashboards](https://dune.com)
- [Project and Token Crypto Metrics](https://defillama.com/)
- [High Level Crypto Metrics](https://app.artemis.xyz/overview)

## Exploring Addresses
When looking at an address, you'll want to understand quickly:

Is this a contract or a wallet?
What protocols or tokens are most closely related (by interactions)?
Can I find any labels or documentation related to this address?
To sleuth this, I usually use the linked tools.

You should be able to figure out the most recent protocol Vitalik himself has interacted with that transferred some amount of tokens

- [Zerion Wallet Tracker](https://app.zerion.io/0xd8da6bf26964af9d7eed9e03e53415d37aa96045/overview?name=vitalik.eth)
- [Onceupon Explorer](https://www.onceupon.gg/0)

# Exploring Transactions

Transactions can become very complex, mostly due to traces (contracts calling contracts). I personally like to use Phalcon Blocksec's Explorer to view traces because it has contracts and functions nicely labeled. Generally, it looks like this pattern:

A
  CALLs B
    CALLs G
  CALLs C
    CALLs G

There will commonly be calls in the middle for delegate calls (forwarding a call), static calls (getting a read function, i.e., getting swap price), and lots of eth/token transfers.

Anytime you interact onchain or find an etherscan link, plug it into Phalcon to see if you can understand what's happening.

You should be able to quickly identify the token contracts, proxy contracts, and logical flow of functions in the linked example. They are separate calls linked together using a multicall method

- [Phalcon Blocksec](https://phalcon.blocksec.com/explorer/tx/optimism/0xedf413fbefb6ae164b417339d79fbb3bee4724ed8bbd956a2a8adb8b8b685147)

# Querying Tools

Now that you can read explorers, you're ready to start querying. You've learned "what" the data means; now it's time to learn where it comes from and how to "transform" it. Transforming data means taking the raw bytecode from a DEX swap and simplifying it to an abstracted table like dex.trades.

The important part is building a general sense for what data is "untouched" versus what data is "modified" and also what tool to use when. I've included my annual guide to all top crypto data tools in the links below.

- [[2024] Web3 Data Tools](https://read.cryptodatabytes.com/p/2024-annual-guide-web3-data-tools)
- [[2023] Web3 Data Tools](https://read.cryptodatabytes.com/p/2023-guide-to-web3-data-tools)

## Navigating Protocols
Every protocol is different, even Uniswap and Curve have very different contracts. It is tedious to learn to find the right contracts, understand the flow of functions/events, and then extract the data you need.

Going through the levels here will make it easier to build a mental checklist and framework.

### Finding Tables
To start your journey, you should always find a few key contract addresses (commonly in docs) and also transaction hashes. With these in hand, you can start using my quickstart dashboards. These will help you understand the functions and patterns related to a contract.

There are typically a few kinds of contracts and functions:

storage/parameter contracts, managing things like fees and token parameters (i.e. liquidation ratios)
factory contracts, used to create "pairs" or "pools"
user interface contracts, which handle all the logic and connections with other contracts. Such as Uniswap routers.
Events are then thrown in between, and you'll need to dive into the contracts to learn how they work.

You will need to know what an ABI is to have an easier time navigating these concepts.

You should be comfortable navigating Uniswap's Router02 swap traces and contracts using the tools given.

- [EVM Quickstart (Plug in contract address)](https://dune.com/ilemi/contract-quickstart)
- [EVM Transaction Table Finder (Plug in transaction)](https://dune.com/queries/2458023/4041368)
- [Solana Quickstart (Plug in program id)](https://dune.com/ilemi/solana-program-quickstart)
- [Solana Transaction Table Finder (Plug in transaction)](https://dune.com/queries/2654819/4412478)
- [Learn about ABIs](https://blog.chain.link/what-are-abi-and-bytecode-in-solidity/)

### Reading Contracts
While learning Solidity (EVM) or Rust (many other VMs) is not required to do data analysis, getting familiar with the structures of contracts will help you a lot with navigating functions and events.

No matter the blockchain, you must learn to read the "interfaces." An interface is the list of functions and events contained within a contract without any logic. Try to understand how they are tied together, and ctrl + F your way around the codebase to find connections.

This is mainly for figuring out when and where event logic is handled. The key is to find the event name, then search event EventName( to find where it's defined and then emit EventName( to find where it's used. Then just pen and paper draw the function lineage to see how each emitted event variable is created.

**You should feel comfortable finding the lineage of** `DelegateVotesChanged` **in the OP token,** [example transaction here](https://optimistic.etherscan.io/tx/0x97f86072f9912188ed50714697af3eb3621b5f72163e64a67eac4b83a44103b5#eventlog) **by sleuthing the** [contract code](https://optimistic.etherscan.io/address/0x4200000000000000000000000000000000000042#code).

- [Learn to read contract code (with Zora and Uniswap)](https://read.cryptodatabytes.com/p/how-to-navigate-contract-code-solidity)
- [Another example with Sudoswap](https://read.cryptodatabytes.com/p/web3-sql-weekly-9-sleuthing-a-sudoswap)

### Creating Feeds and Positions
What you want to build up to is a "feed" of enhanced data on key user "actions". With that, you can do simple aggregations to calculate "positions".

For example, I have a Jupiter Perps dashboard where:

I first created a "feed" of three events that capture all user position changes
I then created a positions tracker by user that only summed open positions
Finally, I created a system position tracker to give me overall open interest/size.
Whenever I analyze a protocol, I try to go through these steps: try to understand how I transformed the tables at each step (don't worry too much about what the exact SQL logic means).

You should be able to go to a protocol and understand what actions (events/functions) you need to string together to create a feed, and what position tables that feed would unlock

- [Step 1: Perp Feed Creation (3 events decoded and aggregated)](https://dune.com/queries/3338071)
- [Step 2: Perp User Open Positions](https://dune.com/queries/3343518)
- [Step 3: Perp Overall Stats (Summed Positions)](https://dune.com/queries/3338148/5593343)

### Adding Labels and Metrics

Product and business managers will always want to get deeper into the segmentation of data and meaningful metrics that they can drive. The total volume is great, but it's not targeted enough for people to plan or act upon. Up to this point, you're just creating "facts" where the data is not altered in any subjective way. Now, you need to add your own opinion or "perspective" to make it more impactful.

I'll give you two examples. The first one is [my tiering of users and channels in Farcaster](https://dune.com/ilemi/farcaster-explorer), which gives us an opinion on quality users and channels so that people can build better feeds and algorithms. The second example is my [tiering of developer quality based on contract complexity and interaction levels](https://warpcast.com/ilemi/0x88872890). This helps teams take a stronger opinion on what kinds of developers are growing on a chain (or aren't).

**You should be able to take any volume or user action feed and turn it into labels and metrics. Instead of just volume, maybe it's memecoin volume. Instead of just active users, it's high-value retained users.**

- [Farcaster Tiering Dashboard](https://dune.com/ilemi/farcaster-explorer)
- [Base Developer Tiering](https://warpcast.com/ilemi/0x88872890)

## Building in Public

Generally, there are three levels of analysis you can build. The first helps you build a sense of community, the second helps you build a career, the third builds your presence and reputation.

In this section, you'll learn that "writing queries" and "creating dashboards" is really only 50% of the work. There is a lot of noise in this industry, so let's walk through what you can do to stand out and get more out of the time you put in.

### Engaging online

The key here is **"contribute, don't apply."** There is a lot of noise in crypto, so people in the community don't just trust or respond to everything that gets shared. You need to learn storytelling, specifically how to build context and connection within your data work. I talked about building your data portfolio in [this podcast](https://read.cryptodatabytes.com/p/how-to-build-a-crypto-data-portfolio).

You should also learn with friends, by joining a community:

- [Bytexplorers is a group with ways to engage for beginners and experts](https://dune.com/cryptodatabytes/bytexplorers)
- [MetricsDAO runs occasional courses](https://twitter.com/MetricsDAO)
- [Outnetwork has weekly newsletters powered by community analysts](https://www.ournetwork.xyz/)

**You should be able to learn from the work of another analyst at least once a week. The work you share should also go directly to one or two people that you KNOW care about it.**


### Finding bounties

The way you get bounties/freelance work in crypto is by building relationships. All companies and communities are "open" by default, meaning they interact publicly on Twitter, Discord, Warpcast, and various governance/research forums. You will need to get in the habit of answering (and asking) good data questions so that people start to keep you on their mind for bigger data work.

I've started a "ByteLight" initiative to incentivize high-quality questions and answers on Warpcast. You can learn about [the program here](https://read.cryptodatabytes.com/p/the-bytelight-token-spotlight-any), and see any open or answered questions [in the bottom section of this dashboard](https://dune.com/cryptodatabytes/bytexplorers).

**You should be answering one question from the public every few weeks to build up a healthy relationship and reputation in the community.**


### High value contributions

After some work, you'll build a unique perspective or niche in a domain. This is when you can create something special and power your reputation.

Spellbook, domain dashboards, and deep research (state) are all great examples of top-tier work you can push yourself towards. When you do these, you will be recognized by other top contributors in the ecosystem. Only really maybe 100 people are contributing at this level at any given time.

I've linked the spellbook below and Optimism RPGF rounds where you can look for data people and see their work.

**You should aspire to complete multiple bounties across a domain, and then build up a domain dashboard/table/tool.**

# Graph Analysis

Crypto data is almost all peer-to-peer in shape:

- Wallet transfer to wallet
- Wallet interacting with token
- Contract calling another contract

Graph data analysis becomes a fundamental skill for a crypto data scientist. Familiarity with graph data libraries like networkx is a must, and building public graphs with communities like OpenRank is the equivalent of building dashboards on Dune.

- [Building an Openrank Eigentrust Graph](https://read.cryptodatabytes.com/p/openrank-powering-apps-with-contextual)  
- [Networkx Python Package](https://networkx.org/documentation/stable/index.html)

# Knowledge Domains

Below are some of the most common domains you'll encounter. Because of the composable nature of crypto, you will need to learn pretty much all of these over time to become an expert. But that keeps work fun!

This list is not all-inclusive; I didn't include niches like MEV and perps because they are much more challenging to navigate.

You should aim to understand a few queries on each dashboard, namely breaking down the tables analysts used and their logic.

## Wallets

You'll need to learn the difference between the following, and how to query them.

- EOA (normal private key)
- Smart Account (ERC4337)
- Multisig (Safe)

I did some basic wallet analysis of Farcaster and on-chain data together in the linked dashboard (see table at the bottom).

- [Onchain x Social Wallet Analysis](https://dune.com/ilemi/farpoll) 
- [ERC4337 Explained](https://read.cryptodatabytes.com/p/web3-sql-weekly-8-analyzing-account)
- [Safe (Multisig)](https://docs.safe.global/home/what-is-safe)

## Tokens
You should learn to analyze ERC20 tokens and NFTs. I've linked a dashboard showing you how to analyze various facets of ERC20 tokens.

- [Token Overview Dashboard](https://dune.com/ilemi/Token-Overview-Metrics)

## Bridges
There are many types of bridges, and they take different approaches to getting tokens from one blockchain to another. Some are "native" and others are "relayers".

I've linked one of my favorite bridge dashboards below to give some inspiration.

- [Scroll Bridge Dashboard](https://dune.com/gasweighing/scroll-on-mainnet)


## Rollups/Layers

Rollups can get very complex. For the most part, they operate like normal blockchains, except when it comes to fees. You should study the linked dashboard to learn how sequencers, proofs, and gas fees work on rollups.

- [Rollup Economics](https://dune.com/niftytable/rollup-economics)

## DEX Markets
There are many different ways of trading ERC20 tokens:

DEX
Limit Orders
Intents
Aggregators
Market Makers
Some relevant dashboards are included below.

- [EVM DEX Metrics](https://dune.com/hagaetc/dex-metrics)
- [Solana DEX Metrics](https://dune.com/ilemi/solana-dex-metrics)
- [Cowswap (Aggregator)](https://dune.com/cowprotocol/cowswap)
- [1inch (Aggregator)](https://dune.com/1inch/main)
- [Uniswap V2 Covered in 12 Days](https://www.youtube.com/playlist?list=PLK3b5d4iK10cIrN8c_au9RrC0_eBCOyR2)


## NFT Markets
NFTs don't have as many trading methods as ERC20 tokens, but some highlights include:

Bid/Ask (Opensea)
Order Book (Blur)
Lending (Blur)
Bonding Curves (Sudoswap)
Relevant dashboards linked

- [Ethereum NFTs](https://dune.com/hildobby/NFTs)
- [Solana NFTs](https://dune.com/ilemi/solana-nfts)
- [Blur Lend](https://dune.com/web3academypro/blend-blur)
- [Sudoswap](https://dune.com/ilemi/sudoswap-v2)


## Staking
Key concepts for staking include:

Validators
LSTs
Delegation (DPOS)
Rewards
Relevant dashboards below

- [Ethereum Staking](https://dune.com/hildobby/eth2-staking)
- [Solana Staking](https://dune.com/ilemi/solana-staking)