module.exports = app => {
    app.use('/', require('./base.routes.js'))
    app.use('/movies', require('./movies.routes.js'))
}