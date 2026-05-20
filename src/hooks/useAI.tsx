
import { useGemini } from "./useGemini";
import { useGPT } from "./useGPT";
import { useGrok } from "./useGrok";
import { type Model } from "../types";
import { useCluade } from "./useCluade";

type responseType = {
    text: string,
    model: string
}

export function useAI(model: Model) {
    const { generateWithGemini } = useGemini();
    const { generateWithGrok } = useGrok();
    const { generateWithGPT } = useGPT();
    const { generateWithClaude } = useCluade()

    const chooseModel = {
        "gemini": async (prompt: string): Promise<responseType> => {
            const res = {
                text: String(await generateWithGemini(prompt)),
                model: "gemini",
            }
            return res;
        },

        "auto": async (prompt: string): Promise<responseType> => {
            const model = String(await generateWithGemini(`${prompt} hey, gemini which AI model is best suitable for this task just give me the name:if the suitable AI model for this task is Gemini then just write gemini. if the suitable AI model for this task is Grok then just write grok. if the suitable AI model for this task is GPT then just write gpt.if the suitable model for this task is Claude then just write claude. Don't write anything else.`)) as Model
            const result = await chooseModel[model](prompt)
            return result;
        },

        "gpt": async (prompt: string): Promise<responseType> => {
            const res = {
                text: String(await generateWithGPT(prompt)),
                model: "gpt"
            }
            return res;
        },

        "grok": async (prompt: string): Promise<responseType> => {
            const res = {
                text: String(await generateWithGrok(prompt)),
                model: "grok"
            }
            return res;
        },

        "claude": async (prompt: string): Promise<responseType> => {
            const res = {
                text: String(await generateWithClaude(prompt)),
                model: "claude"

            }
            return res;
        },

    }

    async function generate(prompt: string): Promise<responseType> {
        const res = await chooseModel[model](prompt)
        return res;
    }

    return { generate }


}

