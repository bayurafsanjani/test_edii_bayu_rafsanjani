import express from "express";
import {
    getWorks,
    getWorkById,
    createWork,
    updateWork,
    deleteWork
} from "../controllers/Works.js"

const router=express.Router();

router.get('/Works', getWorks)
router.get('/Works/:id', getWorkById)
router.post('/Works', createWork)
router.patch('/Works/:id', updateWork)
router.delete('/Works/:id', deleteWork)

export default router