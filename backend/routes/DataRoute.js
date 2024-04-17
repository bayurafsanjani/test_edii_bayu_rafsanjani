import express from "express";
import {
    getDatas,   
    getDataById,
    createData,
    updateData,
    deleteData
} from "../controllers/Datas.js"

import { verifyUser } from"../middleware/AuthUser.js"

const router=express.Router();

router.get('/datas', verifyUser, getDatas)
router.get('/datas/:id', verifyUser, getDataById)
router.post('/datas', verifyUser, createData)
router.patch('/datas/:id', verifyUser, updateData)
router.delete('/datas/:id', verifyUser, deleteData)

export default router