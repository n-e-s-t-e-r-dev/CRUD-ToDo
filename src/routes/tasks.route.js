const { Router } = require('express');
const Task = require('../models/tasks.models');


const router = Router();

router.get('/api/v1/tasks', async (req,res)=> {
    try{
        const tasks = await Task.findAll({
            attributes: ["id", "title","description","status"]
        });
        res.json(tasks);
    } catch(error) {
        res.status(400).json(error);
    }
});

router.post('/api/v1/tasks', async (req,res)=> {
    try{
        const newTask = req.body;
        console.log(newTask)
        const result = await Task.create(newTask);
        res.status(201).send(result);
    } catch(error) {
        res.status(400).json(error);
    }
});

router.put("/api/v1/tasks/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        await Task.update(data, {
            where: {id}
        });
        res.status(204).send();
    } catch (error) {
        res.status(400).json(error);
    }
});

router.delete('/api/v1/tasks/:id', async (req,res)=> {
    //const { id } = req.params;
   // console.log()
    try{
        const {id} = req.params;
        console.log(id)
        const result = await Task.destroy({
            where: { id }
        });
        res.status(204).send();
    } catch(error) {
        res.status(400).json(error);
    }
});



module.exports = router;