import { SimpleDirectoryReader, SummaryIndex, VectorStoreIndex, SummaryRetrieverMode, OpenAI, OpenAIEmbedding, Settings, RouterQueryEngine, LLMSingleSelector } from 'llamaindex';
import { config } from 'dotenv';
config();

export default async function runAgent(query: string) {
    // Set your OpenAI API key
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    Settings.llm = new OpenAI({ model: 'gpt-4o', apiKey: OPENAI_API_KEY });
    Settings.embedModel = new OpenAIEmbedding({ model: 'text-embedding-ada-002', apiKey: OPENAI_API_KEY });

    // Load documents from a web page
    const reader = new SimpleDirectoryReader();
    const documents = await reader.loadData("data");


    // Create Summary and Vector Indexes
    const summaryIndex = await SummaryIndex.fromDocuments(documents);
    const vectorIndex = await VectorStoreIndex.fromDocuments(documents);

    // Create Query Engines for summary and vector search
    const summaryQueryEngine = summaryIndex.asQueryEngine({
        retriever: summaryIndex.asRetriever({ mode: SummaryRetrieverMode.LLM })
    });

    const vectorQueryEngine = vectorIndex.asQueryEngine();


    const queryEngine = RouterQueryEngine.fromDefaults({
        queryEngineTools: [
            {
                queryEngine: vectorQueryEngine,
                description: "Useful for summarization questions related to Andrew Hong articles",
            },
            {
                queryEngine: summaryQueryEngine,
                description: "Useful for summarization questions related to Andrew Hong articles",
            },
        ],
        verbose: true,
        selector: new LLMSingleSelector({ llm: Settings.llm }),
    });



    // Create a Router Query Engine

    return await queryEngine.query({
        query,
    });
}