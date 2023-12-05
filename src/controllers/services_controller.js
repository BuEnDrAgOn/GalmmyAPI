import db from "../config/db/index.js";

const index = async(req, res) => {

    let query = 'select * from services;'

    const { rows } = await db.query(query)

    res.json( rows )
}

const treatment = async(req, res) => {

    let query = "select * from services where service like $1;"

    const {service} = req.body.service
    console.log( req.body.service)

    const { rows } = await db.query(query, [req.body.service])

    res.json( rows )
}

const show = async(req, res) => {

    let query = 'select * from services where id = $1;'

    const {id} = req.params;

    const { rows } = await db.query(query, [id])

    res.json( rows )
}

const create = async (req, res) => {
    let query = 'insert into services(service, treatment, price) values($1, $2, $3);'
 
    //esto es lo mismo que decir const name = req.body.name
    //esto es para poner las services de la base de datos
    const {service, treatment, price} = req.body;
    const roaster = await db.query(query, [service, treatment, price])

    res.json('Area Creada Satisfactoriamente')

}

const update = async (req, res) => {
    let query = 'update services set service = $1, treatment = $2, updated_at = now() where id = $3'
 
    //esto es lo mismo que decir const name = req.body.name
    //esto es para poner las services de la base de datos
    const {id} = req.params;
    const {service, treatment} = req.body;
    const roaster = await db.query(query, [service, treatment, id])

    res.json('Area Actualizada Satisfactoriamente')

}


module.exports = {
    index,
    treatment,
    show,
    create,
    update,
}
