import db from "../config/db/index.js";

const index = async(req, res) => {

    let query = 'select * from users;'

    const { rows } = await db.query(query)

    res.json( rows )
}

const show = async(req, res) => {  

    let query = "select * from users where phone like $1;"
    const {phone} = req.body;
    console.log(query, phone);
    const { rows } = await db.query(query, [phone])

    res.json( rows )
}

const showID = async(req, res) => {  

    let query = "select * from users where id = $1;"

    const {id} = req.params;

    const { rows } = await db.query(query, [id])

    res.json( rows )
}

const create = async (req, res) => {
    let query = 'insert into users(names, fathers_lastname, phone, password) values($1, $2, $3, $4);'
 
    //esto es lo mismo que decir const name = req.body.name
    //esto es para poner las users de la base de datos
    const {names, fathers_lastname, phone, password} = req.body;
    const roaster = await db.query(query, [names, fathers_lastname, phone, password])

    res.json('Area Creada Satisfactoriamente')

}

const update = async (req, res) => {
    let query = 'update users set names = $1, fathers_lastname = $2, mothers_lastname = $3, direction = $4, updated_at = now() where id = $5'
 
    //esto es lo mismo que decir const name = req.body.name
    //esto es para poner las users de la base de datos
    const {id} = req.params;
    console.log(req.params)
    console.log(req.body);
    const {names, fathers_lastname, mothers_lastname, direction} = req.body;
    const roaster = await db.query(query, [names, fathers_lastname, mothers_lastname, direction, id])

    res.json('Area Actualizada Satisfactoriamente')

}


module.exports = {
    index,
    show,
    showID,
    create,
    update,
}
