import Data from "../models/DataModel.js";
import User from "../models/UserModel.js"
import {Op} from "sequelize"

export const getDatas = async(req,res) => {
    try{
        let response
        if(req.role === "admin"){
            response = await Data.findAll({
                include:[{
                    model: User
                }]
            })
        }else{
            response = await Data.findAll({
                where:{
                    userId: req.userId
                },
                include:[{
                    model: User
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getDataById = async(req,res) => {
    try{
        const data = await Data.findOne({
            where:{
                uuid: req.params.id
            }
        })
        if(!data) return res.status(404).json({msg: "Data tidak ditemukan"})
        let response
        if(req.role === "admin"){
            response = await Data.findOne({
                where: {
                    id: data.id
                },
                include:[{
                    model: User
                }]
            })
        }else{
            response = await Data.findOne({
                where:{
                    [Op.and]: [{id: data.id},{userId: req.userId}]
                },
                include:[{
                    model: User
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createData = async(req,res) => {
    const {name, ktp,birthday,sex,religion,blood,status,add_ktp,address,email,phone,skill,placement,salary}=req.body
    try{
        await Data.create({
            name: name,
            ktp: ktp,
            birthday: birthday,
            sex: sex,
            religion: religion,
            blood: blood,
            status: status,
            add_ktp: add_ktp,
            address: address,
            email: email,
            phone: phone,
            skill: skill,
            placement: placement,
            salary: salary,
            userId: req.userId
        })
        res.status(201).json({msg: "Data Created Successfuly"})
    } catch (error){
        res.status(500).json({msg: error.message})
    }
}

export const updateData = (req,res) => {

}

export const deleteData = (req,res) => {

}