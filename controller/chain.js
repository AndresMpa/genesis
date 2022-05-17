const config = {
    port: 7347,
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "8NVG6BbuwW4uM2UH2uKVWDtWgxcEYB1LXVX8Y4JkeGA9"
}

let multichain = require("multichain-node")(config);

module.exports = {
    getInfo: async (req, res, next) => {
        multichain.getInfo((err, info) => {
            if(err){
                console.log(err);
            }
            res.status(200).json(info);
        })
    }
}