const notFound = (req, res) => {
    res.status(404).send({msg: 'Route not found!'})
}

module.exports = notFound