const cors = require("cors");
const app = require("express")()
const port = 5000

app.use(cors());

app.get("/",(req,res) => {
    return res.json({msg:"success"});
})

app.listen(port,() => console.log("Server on"));
