export type Model =  "gpt" |"gemini"| "grok"|"claude"| "auto"

export interface Message{
     text: string,
     type: "user"|"none"|"gpt"|"gemini"|"grok"|"claude" |"auto",
}