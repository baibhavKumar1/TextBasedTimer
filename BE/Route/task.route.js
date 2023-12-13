const express = require('express');
const TaskRouter = express.Router();
const t3 = require('text-to-time');


TaskRouter.get('/', async (req, res) => {
    res.send("On")
})

TaskRouter.post('/create', async (req, res) => {
    let textData=""
    let callback = (err, evaluated) => {
        if (err) console.log(err)
        else {
            const data = new Date((evaluated.timestamp) + 19800000);
            textData=data;
        }
    }
    const {data} = req.body;
    const timer = /\btimer\b/i;
    const forRegex = /\bfor\b\s*(.*)$/i;
    const match = data.match(forRegex);
    const wordsAfterFor = match ? match[1].trim() : null;
    t3().timeZone('Asia/Kolkata').evaluate(wordsAfterFor, callback)
    res.status(200).send(textData);
})

module.exports = TaskRouter