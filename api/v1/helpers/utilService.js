const notFound = 'Nothing found!!';
async function utilCreate(req, res, Entity, Params = {}) {
    return Entity.create(Params)
        .then((entity) => {
            return res.status(201).json({ data: entity });
        })
        .catch((err) => {
            console.log(err.message);
            res.status(422).json(err);
        });
}
async function utilGetOne(req, res, Entity, id) {
    await Entity.findOne({
        where: {
            id,
        },
    })
        .then((entity) => {
            if (!entity) {
                res.status(404).json(notFound);
            } else {
                console.log(`retrived : ${JSON.stringify(entity, null, 2)}`);
                res.status(200).json(entity);
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(422).json(err.message);
        });
}
async function utilGetAll(req, res, Entity) {
    return Entity.findAll()
        .then((entity) => {
            if (!entity) {
                res.status(404).json(notFound);
            }
            res.status(200).json({
                data: entity,
            });
        })
        .catch(function (err) {
            res.status(422).json({
                err,
            });
        });
}
async function utilUpdate(req, res, Entity, Params = {}, id) {
    Entity.findOne({ where: { id } }).then((entity) => {
        if (!entity) {
            res.status(404).json(notFound);
        }
        console.log(`retrived : ${JSON.stringify(entity, null, 2)}`);
        Entity.update(Params, { where: { id }, returning: true, plain: true })
            .then((updatedEntity) => {
                res.status(200).json(updatedEntity);
            })
            .catch((err) => {
                res.status(422).json('Unable to update');
                console.log(err);
            });
    });
}

async function utilDelete(req, res, Entity, id) {
    Entity.findOne({ where: { id } }).then((entity) => {
        if (!entity) {
            res.status(404).json(notFound);
        }
        Entity.destroy({ where: { id }, returning: true, plain: true })
            .then(() => {
                res.status(200).json(`Successfully deleted the item with the id  ${id}`);
            })
            .catch((err) => {
                res.status(422).json('Unable to delete');
                console.log(err);
            });
    });
}
module.exports = { utilGetAll, utilCreate, utilGetOne, utilUpdate, utilDelete };
