import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

const adapter = new JSONFile(join(__dirname, 'zelva.json'));
const defaultData = {
  chicas: [
    {id:1,nombre:'Shan'},{id:2,nombre:'Valentina'},{id:3,nombre:'Lucía'},
    {id:4,nombre:'Camila'},{id:5,nombre:'Micaela'}
  ],
  servicios: [
    {id:1,categoria:'Manos',nombre:'Manicura sin esmaltar',precio_ef:18000,precio_lista:21600},
    {id:2,categoria:'Manos',nombre:'Esmaltado tradicional',precio_ef:20000,precio_lista:24000},
    {id:3,categoria:'Manos',nombre:'Esmaltado semipermanente',precio_ef:27000,precio_lista:32400},
    {id:4,categoria:'Manos',nombre:'Nivelacion en gel',precio_ef:35000,precio_lista:42000},
    {id:5,categoria:'Manos',nombre:'Capping dipping',precio_ef:30000,precio_lista:36000},
    {id:6,categoria:'Manos',nombr
