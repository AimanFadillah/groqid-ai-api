const cors = require("cors");
const app = require("express")()
const dotenv = require("dotenv")

dotenv.config();

const port = 5000
const {main,getGroqChatCompletion} = require("./chat")

app.use(cors());

app.get("/",async (req,res) => {
    const question = req.query.q
    const answer = question === "" ? "tambahkan ?q= untuk memberikan pertanyaan" : await main(question);
    return res.json({answer});
})

app.listen(port,() => console.log("Server on"));
