const getpost = (req, res) => {
    fs.readFile("./post.json", (err, data)=> {
        res.send(data);
    });
}

module.exports = getpost;