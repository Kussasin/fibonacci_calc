const express = require("express");
const redis = require("redis");
const app = express();
const port = 3001;

const redisClient = redis.createClient({
    socket: {
        port: 6379,
        host: "redis"
    }
});

function fibonacci(number) {
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n2;
}


app.listen(port, () => {
    console.log(`gs cal nasłuchuje się na porcie ${port}`);
});

app.get("/api/gscal", async (req, res) => {

    if (req.query.count == null) {
        res.sendStatus(400);
        return;
    }
    
    const count = req.query.count;
    await redisClient.connect();
    let value = await redisClient.get(count + "");
    if (value == null) {
        value = fibonacci(count);
        redisClient.set(count + "", value + "");
    }

    redisClient.quit();
    res.status(200).send({ result: value });
});