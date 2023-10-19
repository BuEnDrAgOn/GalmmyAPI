import db from "../config/db/index.js";

const index = async(req, res) => {

    let query = 'select * from areas;'

    const { rows } = await db.query(query)

    res.json( rows )
}

const create = async (req, res) => {
    let query = 'insert into areas(name, created_at, updated_at) values($1, now(), now());'
 
    //esto es lo mismo que decir const name = req.body.name
    //esto es para poner las areas de la base de datos
    const {name} = req.body;
    const roaster = await db.query(query, [name])

    res.json('Area Creada Satisfactoriamente')

}

const update = async (req, res) => {
    let query = 'update areas set name = $1, updated_at = now() where id = $2'
 
    //esto es lo mismo que decir const name = req.body.name
    //esto es para poner las areas de la base de datos
    const {id} = req.params;
    const {name} = req.body;
    const roaster = await db.query(query, [name, id])

    res.json('Area Actualizada Satisfactoriamente')

}


module.exports = {
    index,
    create,
    update,
}
