import mongoose = require("mongoose")
import { connectMongoDB } from "./helpers"
import { ISucursal, getSucursal } from "./sucursal"

interface IVehiculo extends mongoose.Document{
    placa: string;
    tipo: string;
    marca: string;
    modelo: string;
    color: string;
    chasis: string;
    precio: number;
    sucursal: ISucursal
}

const VehiculoSchema = new mongoose.Schema({
    placa: { type: String, required: true},
    tipo: { type: String, required: true},
    marca: { type: String, required: true},
    modelo: { type: String, required: true},
    color: { type: String, required: true},
    chasis: { type: String, required: true},
    precio: { type: Number, required: true},
    sucursal: { type: mongoose.Schema.Types.ObjectId, ref: "Sucursal" }
});

export const Vehiculo = mongoose.model<IVehiculo>("Vehiculo", VehiculoSchema);

export const createVehiculo = async function(
    nombreSucursal: string,
    placa: string,
    tipo: string,
    marca: string,
    modelo: string,
    color: string,
    chasis: string,
    precio: number,
){
    await connectMongoDB;
    const suc:any = await getSucursal(nombreSucursal);

    const v = new Vehiculo();
    v.placa = placa
    v.tipo = tipo
    v.marca = marca
    v.modelo = modelo
    v.color = color
    v.chasis = chasis
    v.precio = precio
    v.sucursal = suc
    
    v.save((err:any) => {
        if(err){
            console.log(err.message);
        }else{
            console.log(v);
        }
    });
}