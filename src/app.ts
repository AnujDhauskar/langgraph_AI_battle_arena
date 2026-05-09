import express from 'express';
import useGraph from "./services/graph.ai.service.js"

const app = express();

app.get('/health',(req,res)=>{
    res.status(200).json({message:"Server is healthy"})
})

app.post("/use-graph", async (req,res)=>{
    const result = await useGraph("what is capital of france?")
    console.log(result)
    res.status(200).json(result)
}
)

export default app;
