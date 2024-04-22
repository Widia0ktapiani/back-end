class TodoController {
    static getTodos(req, res){
        res.send('Page Todos Utama')
    }
    static addTodo(req, res){
        res.send('Page Add Todos Utama')
    }
}

module.exports = TodoController