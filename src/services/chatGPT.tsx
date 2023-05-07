import { env } from "~/env.mjs";
import {
  Configuration,
  OpenAIApi,
  type ChatCompletionRequestMessage,
  type CreateChatCompletionRequest,
} from "openai";

const configuration = new Configuration({
  apiKey: env.OPENAI_API_DALLE_KEY,
});

const openAi = new OpenAIApi(configuration);

const DEFAULT_SYSTEM_MESSAGE: ChatCompletionRequestMessage = {
  role: "system",
  content:
    ("Hello, I am your personal Content Creation Assitant.\n" +
    "I am going to help you on POSTS, ADS, and BRAND KITS generation, based on your needs. " +
    "My purpose is to provide you with the best experience and results, so your product grows. " + 
    "I want to optimize your workflow and save your time and money."),
};

const DEFAULT_CONFIG: CreateChatCompletionRequest = {
  max_tokens: 150,
  n: 1,
  stop: "\n",
  model: "gpt-3.5-turbo",
  messages: [],
  temperature: 0.9,
};

const generatePrompt = async (
  message: string,
  options?: CreateChatCompletionRequest
) => {
  const { data: prompt } = await openAi.createChatCompletion({
    ...DEFAULT_CONFIG,
    ...options,
    messages: [
      {
        role: "user",
        content: message,
      },
      DEFAULT_SYSTEM_MESSAGE,
    ],
  });

  const { content } = prompt?.choices[0]?.message || {};

  const generatedMessage = content?.trim();

  if (!message) {
    throw new Error("No AI message generated");
  }

  return generatedMessage;
};

export const chatGptService = {
  generatePrompt,
};
