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
                role: "system",
                content: "kamu adalah orang yang dapat menggunakan bahasa indonesia"
            },
            {
                role: "user",
                content: text || "hai"
            }
        ],
        model: "llama3-8b-8192"
    });
}
module.exports = {
    main,
    getGroqChatCompletion
};
