const route = require('express').Router()

route.get('/intro', (req, res) => {
    res.send('Hello Widia!')
  })

const todoRoutes = require('./todo');
route.use('/todos',todoRoutes);

route.get('/items', (req, res) => {
    res.send('Page item Utama')
  })

module.exports = route