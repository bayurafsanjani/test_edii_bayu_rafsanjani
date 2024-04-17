import express from "express";
import {
    getTrainings,
    getTrainingById,
    createTraining,
    updateTraining,
    deleteTraining
} from "../controllers/Training.js"

const router=express.Router();

router.get('/trainings', getTrainings)
router.get('/trainings/:id', getTrainingById)
router.post('/trainings', createTraining)
router.patch('/training/:id', updateTraining)
router.delete('/training/:id', deleteTraining)

export default router