import db from "../config/db/index.js";

const index = async(req, res) => {

    let query = 'select * from appointment;'

    const { rows } = await db.query(query)

    res.json( rows )
}

const appointment = async(req, res) => {

    let query = "select * from appointment where service like $1;"

    const {service} = req.body.service
    console.log( req.body.service)

    const { rows } = await db.query(query, [req.body.service])

    res.json( rows )
}

const show = async(req, res) => {

    let query = `select 
                    a.id,
                    s.id,
                    a.id_user,
                    s.service,
                    s.treatment,
                    a.payment::float,
                    to_char(a.date, 'DD/MM/YYYY | hh:mm:ss AM') date
                    from appointment a
                    inner join services s on s.id = a.id_service
                    inner join users u on u.id = a.id_user
                    where u.id = $1;`

    const {id_user} = req.params;

    const { rows } = await db.query(query, [id_user])

    res.json( rows )
}

const showAll = async(req, res) => {

    let query = `select 
                    a.id,
                    s.id,
                    a.id_user,
                    u.names,
                    u.fathers_lastname,
                    u.mothers_lastname,
                    u.direction,
                    u.phone,
                    s.service,
                    s.treatment,
                    a.payment::float,
                    to_char(a.date, 'DD/MM/YYYY | hh:mm:ss AM') date
                    from appointment a
                    inner join services s on s.id = a.id_service
                    inner join users u on u.id = a.id_user`

    const { rows } = await db.query(query)

    res.json( rows )
}

const create = async (req, res) => {
    let query = 'insert into appointment(id_user, id_service, date, payment) values($1, $2, $3, $4);'
 
    //esto es lo mismo que decir const name = req.body.name
    //esto es para poner las appointment de la base de datos
    const {id_user, id_service, appointment, price} = req.body;
    const roaster = await db.query(query, [id_user, id_service, appointment, price])

    res.json('Area Creada Satisfactoriamente')

}

const update = async (req, res) => {
    let query = 'update appointment set service = $1, appointment = $2, updated_at = now() where id = $3'
 
    //esto es lo mismo que decir const name = req.body.name
    //esto es para poner las appointment de la base de datos
    const {id} = req.params;
    const {service, appointment} = req.body;
    const roaster = await db.query(query, [service, appointment, id])

    res.json('Area Actualizada Satisfactoriamente')

}


module.exports = {
    index,
    appointment,
    show,
    showAll,
    create,
    update,
}
