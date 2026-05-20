export function useCluade(){
    async function generateWithClaude(promt:string) {
  try {
    const response = await fetch('https://gen.pollinations.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        // Insert your AIML API Key instead of YOUR_AIMLAPI_KEY
        'Authorization': `Bearer ${import.meta.env.VITE_CLAUDE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai',
        modalities: ['text'],
        messages:[
            {
                role:'user',

                
                content: promt
            }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`);
    }

    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    return data.choices[0].message.content;

  } catch (error) {
    console.error('Error', error);
  }
}

return {generateWithClaude}
}