import express from "express";
import {
    getEducations,
    getEducationById,
    createEducation,
    updateEducation,
    deleteEducation
} from "../controllers/Educations.js"

const router=express.Router();

router.get('/educations', getEducations)
router.get('/educations/:id', getEducationById)
router.post('/educations', createEducation)
router.patch('/educations/:id', updateEducation)
router.delete('/educations/:id', deleteEducation)

export default router