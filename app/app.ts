import { createSucursal, getSucursal } from "./sucursal"
import { createVehiculo } from "./vehiculo"

createSucursal("Sucursal1", "Honduras", "Francisco Morazan", "Tegucigalpa", "Direccion Exacta .jpg")
//async function wg(){ const suc:any = await getSucursal("Sucursal1");console.log(suc);} wg()
createVehiculo("Sucursal1","BAF4087", "Camioneta", "Toyota", "Prado", "Negro", "KJHUI89786567", 2000)
