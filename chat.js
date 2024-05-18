const Groq = require("groq-sdk");
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});
async function main(text) {
    const chatCompletion = await getGroqChatCompletion(text);
    // return process.stdout.write(chatCompletion.choices[0]?.message?.content || "");
    return chatCompletion.choices[0]?.message?.content || ""
}
async function getGroqChatCompletion(text) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: text || "Hello selamat malam"
            }
        ],
        model: "llama3-8b-8192"
    });
}
module.exports = {
    main,
    getGroqChatCompletion
};
