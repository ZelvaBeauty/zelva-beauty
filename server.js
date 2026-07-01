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

const DATA_PATH = process.env.RENDER ? '/var/data/zelva.json' : join(__dirname, 'zelva.json');
const adapter = new JSONFile(DATA_PATH);
const defaultData = {
  chicas: [
    {id:1,nombre:'Shan'},{id:2,nombre:'Mica'},{id:3,nombre:'Giuli'},
    {id:4,nombre:'Yami'},{id:5,nombre:'Marla'},{id:6,nombre:'Martu'},{id:7,nombre:'Yessi'}
  ],
  servicios: [
    {id:1,categoria:'Manos',nombre:'Manicura sin esmaltar',precio_ef:18000,precio_lista:21600,costo_insumos:977},
    {id:2,categoria:'Manos',nombre:'Esmaltado tradicional',precio_ef:20000,precio_lista:24000,costo_insumos:1163},
    {id:3,categoria:'Manos',nombre:'Esmaltado semipermanente',precio_ef:27000,precio_lista:32400,costo_insumos:1905},
    {id:4,categoria:'Manos',nombre:'Nivelacion en gel',precio_ef:35000,precio_lista:42000,costo_insumos:3277},
    {id:5,categoria:'Manos',nombre:'Capping dipping',precio_ef:30000,precio_lista:36000,costo_insumos:3268},
    {id:6,categoria:'Manos',nombre:'Capping en perla',precio_ef:39000,precio_lista:46800,costo_insumos:2444},
    {id:7,categoria:'Manos',nombre:'Capping en polygel',precio_ef:38000,precio_lista:45600,costo_insumos:2444},
    {id:8,categoria:'Manos',nombre:'Esculpidas en poly',precio_ef:42000,precio_lista:50400,costo_insumos:2858},
    {id:9,categoria:'Manos',nombre:'Esculpidas acrílicas',precio_ef:44000,precio_lista:52800,costo_insumos:6887},
    {id:10,categoria:'Manos',nombre:'Soft gel',precio_ef:37000,precio_lista:44400,costo_insumos:1911},
    {id:11,categoria:'Manos',nombre:'Service esculpidas en poly',precio_ef:40000,precio_lista:48000,costo_insumos:755},
    {id:58,categoria:'Manos',nombre:'Service esculpidas acrílico',precio_ef:42000,precio_lista:50400,costo_insumos:755},
    {id:12,categoria:'Manos',nombre:'Service esculpida x uña',precio_ef:4500,precio_lista:5400,costo_insumos:0},
    {id:13,categoria:'Manos',nombre:'Service capping x uña',precio_ef:4000,precio_lista:4800,costo_insumos:0},
    {id:14,categoria:'Manos',nombre:'Cambio de esmalte',precio_ef:20000,precio_lista:24000,costo_insumos:1163},
    {id:15,categoria:'Manos',nombre:'Manicura para niñas',precio_ef:15000,precio_lista:18000,costo_insumos:977},
    {id:16,categoria:'Manos',nombre:'Manicura para hombres',precio_ef:22000,precio_lista:26400,costo_insumos:977},
    {id:17,categoria:'Pies',nombre:'Belleza de pies sin esmaltar',precio_ef:23000,precio_lista:27600,costo_insumos:1242},
    {id:18,categoria:'Pies',nombre:'Belleza con esmalte tradicional',precio_ef:25000,precio_lista:30000,costo_insumos:2549},
    {id:19,categoria:'Pies',nombre:'Belleza con esmalte semipermanente',precio_ef:29000,precio_lista:34800,costo_insumos:2881},
    {id:20,categoria:'Pies',nombre:'Pedicuria sin esmaltar',precio_ef:28000,precio_lista:33600,costo_insumos:1896},
    {id:21,categoria:'Pies',nombre:'Pedicuria con esmalte tradicional',precio_ef:34000,precio_lista:40800,costo_insumos:3085},
    {id:22,categoria:'Pies',nombre:'Pedicuria con esmalte semipermanente',precio_ef:38000,precio_lista:45600,costo_insumos:4470},
    {id:23,categoria:'Pies',nombre:'Reconstruccion por uña (pie)',precio_ef:5000,precio_lista:6000,costo_insumos:0},
    {id:24,categoria:'Retiros',nombre:'Retiro de semipermanente',precio_ef:8000,precio_lista:9600,costo_insumos:742},
    {id:25,categoria:'Retiros',nombre:'Retiro de capping',precio_ef:10000,precio_lista:12000,costo_insumos:742},
    {id:26,categoria:'Retiros',nombre:'Retiro de esculpidas',precio_ef:14000,precio_lista:16800,costo_insumos:755},
    {id:27,categoria:'Retiros',nombre:'Retiro total de semi',precio_ef:10000,precio_lista:12000,costo_insumos:742},
    {id:28,categoria:'Cejas y Pestañas',nombre:'Lifting de pestañas + botox',precio_ef:32000,precio_lista:38400,costo_insumos:5992},
    {id:29,categoria:'Cejas y Pestañas',nombre:'Perfilado de cejas',precio_ef:16000,precio_lista:19200,costo_insumos:946},
    {id:30,categoria:'Cejas y Pestañas',nombre:'Perfilado de cejas + Henna',precio_ef:24000,precio_lista:28800,costo_insumos:1824},
    {id:31,categoria:'Cejas y Pestañas',nombre:'Laminado de cejas + botox',precio_ef:32000,precio_lista:38400,costo_insumos:5261},
    {id:32,categoria:'Cejas y Pestañas',nombre:'Tinte de pestañas',precio_ef:5000,precio_lista:6000,costo_insumos:91},
    {id:33,categoria:'Cejas y Pestañas',nombre:'Retiro de pestañas',precio_ef:10000,precio_lista:12000,costo_insumos:0},
    {id:34,categoria:'Combos',nombre:'Lifting + Perfilado',precio_ef:43000,precio_lista:51600,costo_insumos:6938},
    {id:35,categoria:'Combos',nombre:'Laminado + Perfilado',precio_ef:39000,precio_lista:46800,costo_insumos:6207},
    {id:36,categoria:'Combos',nombre:'Lifting + Laminado',precio_ef:58000,precio_lista:69600,costo_insumos:11253},
    {id:37,categoria:'Combos',nombre:'Lifting + Laminado + Perfilado',precio_ef:72000,precio_lista:86400,costo_insumos:12199},
    {id:38,categoria:'Pestañas tecnológicas',nombre:'3D - Volumen light',precio_ef:35000,precio_lista:42000,costo_insumos:9585},
    {id:39,categoria:'Pestañas tecnológicas',nombre:'4D - Volumen medio',precio_ef:39000,precio_lista:46800,costo_insumos:9585},
    {id:40,categoria:'Pestañas tecnológicas',nombre:'5D - Mega volumen',precio_ef:44000,precio_lista:52800,costo_insumos:9585},
    {id:41,categoria:'Pestañas clásicas',nombre:'Clásicas PXP',precio_ef:36000,precio_lista:43200,costo_insumos:6345},
    {id:42,categoria:'Pestañas clásicas',nombre:'Volumen Brasilero',precio_ef:40000,precio_lista:48000,costo_insumos:6491},
    {id:43,categoria:'Pestañas clásicas',nombre:'Volumen ruso',precio_ef:45000,precio_lista:54000,costo_insumos:6491},
    {id:44,categoria:'Service Pestañas clásicas',nombre:'Service Clásicas PXP',precio_ef:32400,precio_lista:38880,costo_insumos:6345},
    {id:45,categoria:'Service Pestañas clásicas',nombre:'Service Volumen Brasilero',precio_ef:37000,precio_lista:44400,costo_insumos:6491},
    {id:46,categoria:'Service Pestañas clásicas',nombre:'Service Volumen Ruso',precio_ef:40500,precio_lista:48600,costo_insumos:6491},
    {id:47,categoria:'Service Pestañas tecnológicas',nombre:'Service 3D - Volumen light',precio_ef:31500,precio_lista:37800,costo_insumos:9585},
    {id:48,categoria:'Service Pestañas tecnológicas',nombre:'Service 4D - Volumen medio',precio_ef:35100,precio_lista:42120,costo_insumos:9585},
    {id:49,categoria:'Service Pestañas tecnológicas',nombre:'Service 5D - Mega volumen',precio_ef:39600,precio_lista:47520,costo_insumos:9585},
    {id:50,categoria:'Cejas y Pestañas',nombre:'Nutrición de pestañas o cejas',precio_ef:20000,precio_lista:24000,costo_insumos:0},
    {id:51,categoria:'Deco',nombre:'French',precio_ef:4000,precio_lista:4800,costo_insumos:0},
    {id:52,categoria:'Deco',nombre:'Doble french',precio_ef:6000,precio_lista:7200,costo_insumos:0},
    {id:53,categoria:'Deco',nombre:'Baby boomer (acrílico)',precio_ef:9000,precio_lista:10800,costo_insumos:0},
    {id:54,categoria:'Deco',nombre:'Baby boomer (color)',precio_ef:7000,precio_lista:8400,costo_insumos:0},
    {id:55,categoria:'Deco',nombre:'Full deco / Extra alto',precio_ef:14000,precio_lista:16800,costo_insumos:0},
    {id:56,categoria:'Deco',nombre:'Cromado',precio_ef:5000,precio_lista:6000,costo_insumos:0},
    {id:57,categoria:'Deco',nombre:'Ojo de gato',precio_ef:5000,precio_lista:6000,costo_insumos:0},
  ],
  insumos: [
    {id:1,categoria:'Uñas',nombre:'Ablandador Las Varano 1L',proveedor:'La Manola',precio_unitario:13.9},
    {id:2,categoria:'Uñas',nombre:'Aceite para cutículas Charm 15ml',proveedor:'La Manola',precio_unitario:116.67},
    {id:3,categoria:'Uñas',nombre:'Acrílico (Polímero) Nail Show 45gr',proveedor:'Nail Show',precio_unitario:270.11},
    {id:4,categoria:'Uñas',nombre:'Acrílico Pinky 20gr',proveedor:'La Manola',precio_unitario:120},
    {id:5,categoria:'Uñas',nombre:'Base coat Meline 15ml',proveedor:'La Manola',precio_unitario:333.33},
    {id:6,categoria:'Uñas',nombre:'Base esmalte tradicional Cherimoya 10ml',proveedor:'La Manola',precio_unitario:175},
    {id:7,categoria:'Uñas',nombre:'Base niveladora Angela Bresciano 15ml',proveedor:'MG - AB',precio_unitario:453.33},
    {id:8,categoria:'Uñas',nombre:'Esmalte Charm 10ml',proveedor:'La Manola',precio_unitario:220},
    {id:9,categoria:'Uñas',nombre:'Esmalte City Girl 10ml',proveedor:'City Girl',precio_unitario:250},
    {id:10,categoria:'Uñas',nombre:'Esmalte Meline 15ml',proveedor:'Las Marg',precio_unitario:355.33},
    {id:11,categoria:'Uñas',nombre:'Esmalte Mely 12ml',proveedor:'Mely',precio_unitario:208.33},
    {id:12,categoria:'Uñas',nombre:'Esmalte Navi 10ml',proveedor:'Paris',precio_unitario:300},
    {id:13,categoria:'Uñas',nombre:'Esmalte semipermanente OPI 15ml',proveedor:'La Magia',precio_unitario:1146.67},
    {id:14,categoria:'Uñas',nombre:'Esmalte tradicional OPI 15ml',proveedor:'La Magia',precio_unitario:526.67},
    {id:15,categoria:'Uñas',nombre:'Gel de construcción Angela Bresciano 30gr',proveedor:'MG - AB',precio_unitario:333.33},
    {id:16,categoria:'Uñas',nombre:'Lima buffer x10u',proveedor:'La Manola',precio_unitario:430},
    {id:17,categoria:'Uñas',nombre:'Lima SK x25u',proveedor:'La Manola',precio_unitario:292},
    {id:18,categoria:'Uñas',nombre:'Limas circulares pedicuría x60u',proveedor:'ML',precio_unitario:249.83},
    {id:19,categoria:'Uñas',nombre:'Moldes para esculpidas 300u',proveedor:'City Girl',precio_unitario:28.33},
    {id:20,categoria:'Uñas',nombre:'Monómero Cherimoya vidrio 100ml',proveedor:'La Manola',precio_unitario:90},
    {id:21,categoria:'Uñas',nombre:'Polygel Navi 60gr',proveedor:'Navi - MG/AB',precio_unitario:135},
    {id:22,categoria:'Uñas',nombre:'Prep Nail Show 8ml',proveedor:'Nail Show',precio_unitario:275},
    {id:23,categoria:'Uñas',nombre:'Primer Nail Show 8ml',proveedor:'Nail Show',precio_unitario:475},
    {id:24,categoria:'Uñas',nombre:'Remover Las Varano 1L',proveedor:'La Manola',precio_unitario:19.9},
    {id:25,categoria:'Uñas',nombre:'Solución para polygel Pinky 250ml',proveedor:'La Manola',precio_unitario:13.2},
    {id:26,categoria:'Uñas',nombre:'Tips soft gel Mely x504u',proveedor:'Mely',precio_unitario:10.52},
    {id:27,categoria:'Uñas',nombre:'Top coat Meline 15ml',proveedor:'La Manola',precio_unitario:333.33},
    {id:28,categoria:'Uñas',nombre:'Top esmalte tradicional Cherimoya 10ml',proveedor:'La Manola',precio_unitario:190},
    {id:29,categoria:'Uñas',nombre:'Ultrabond Cherimoya 15ml',proveedor:'La Manola',precio_unitario:400},
    {id:30,categoria:'Uñas',nombre:'Xtrabond Mia Secret 30ml',proveedor:'La Lupita',precio_unitario:599.67},
    {id:31,categoria:'Pestañas y cejas',nombre:'Adhesivo pestañas ODIN 5gr',proveedor:'La Lupita',precio_unitario:5780},
    {id:32,categoria:'Pestañas y cejas',nombre:'Lifting paso 1 Lion Beauty 1gr x10',proveedor:'La Lupita',precio_unitario:1130},
    {id:33,categoria:'Pestañas y cejas',nombre:'Lifting paso 2 Lion Beauty 1gr x10',proveedor:'La Lupita',precio_unitario:1130},
    {id:34,categoria:'Pestañas y cejas',nombre:'Lifting paso 3 Lion Beauty 1gr x10',proveedor:'La Lupita',precio_unitario:1130},
    {id:35,categoria:'Pestañas y cejas',nombre:'Lifting paso 4 Lion Beauty 1gr x10',proveedor:'La Lupita',precio_unitario:1130},
    {id:36,categoria:'Pestañas y cejas',nombre:'Shampoo cejas Lion Beauty 150ml',proveedor:'La Lupita',precio_unitario:95.13},
    {id:37,categoria:'Pestañas y cejas',nombre:'Lash Bonder Iconsign 15ml',proveedor:'ML',precio_unitario:966},
    {id:38,categoria:'Pestañas y cejas',nombre:'Henna + Fijador Makiaj 10ml',proveedor:'Jennifer B',precio_unitario:455},
    {id:39,categoria:'Pestañas y cejas',nombre:'Cinta pestañas hipoalergénica 2000u',proveedor:'La Manola',precio_unitario:0.3},
    {id:40,categoria:'Pestañas y cejas',nombre:'Parches hidrogel x50 pares',proveedor:'La Manola',precio_unitario:67.5},
    {id:41,categoria:'Pestañas y cejas',nombre:'Lash Pro Glue Melania 7gr',proveedor:'La Manola',precio_unitario:2000},
    {id:42,categoria:'Pestañas y cejas',nombre:'Cera en perla Depimiel 800gr',proveedor:'La Manola',precio_unitario:12.125},
    {id:43,categoria:'Pestañas y cejas',nombre:'Hilo diseñador de cejas 10mts',proveedor:'La Manola',precio_unitario:0.25},
    {id:44,categoria:'Pestañas y cejas',nombre:'Pestañas Lion Beauty 3D W 0.07 D 11MM',proveedor:'La Lupita',precio_unitario:721.875},
    {id:45,categoria:'Pestañas y cejas',nombre:'Pestañas Lion Beauty 3D W 0.07 D 12MM',proveedor:'La Lupita',precio_unitario:721.875},
    {id:46,categoria:'Pestañas y cejas',nombre:'Pestañas Lion Beauty 4D W 0.07 D 14MM',proveedor:'La Lupita',precio_unitario:961.875},
    {id:47,categoria:'Pestañas y cejas',nombre:'Pestañas clásicas Lion Beauty 0.15 D 9MM',proveedor:'Ese Beauty',precio_unitario:343.125},
    {id:48,categoria:'Pestañas y cejas',nombre:'Pestañas clásicas Lion Beauty 0.15 D 10MM',proveedor:'Ese Beauty',precio_unitario:343.125},
    {id:49,categoria:'Pestañas y cejas',nombre:'Pestañas clásicas Lion Beauty 0.15 D 11MM',proveedor:'Ese Beauty',precio_unitario:343.125},
    {id:50,categoria:'Pestañas y cejas',nombre:'Pestañas clásicas Lion Beauty 0.15 D 12MM',proveedor:'Ese Beauty',precio_unitario:343.125},
    {id:51,categoria:'Pestañas y cejas',nombre:'Pestañas clásicas Lion Beauty 0.15 D 13MM',proveedor:'Ese Beauty',precio_unitario:343.125},
    {id:52,categoria:'Pestañas y cejas',nombre:'Pestañas clásicas Lion Beauty 0.15 D 14MM',proveedor:'Ese Beauty',precio_unitario:343.125},
    {id:53,categoria:'Descartables',nombre:'Algodón Doncella 500gr',proveedor:'Neoclean',precio_unitario:13.02},
    {id:54,categoria:'Descartables',nombre:'Alcohol 96% 5L',proveedor:'Neoclean',precio_unitario:3.146},
    {id:55,categoria:'Descartables',nombre:'Barbijos x100',proveedor:'ML',precio_unitario:29.99},
    {id:56,categoria:'Descartables',nombre:'Compresas x50',proveedor:'La Manola',precio_unitario:54},
    {id:57,categoria:'Descartables',nombre:'Crema exfoliante Libra 1K',proveedor:'La Lupita',precio_unitario:18.4},
    {id:58,categoria:'Descartables',nombre:'Crema hidratante Libra 1K',proveedor:'ML',precio_unitario:18.9},
    {id:59,categoria:'Descartables',nombre:'Guantes x100u',proveedor:'La Manola',precio_unitario:60},
    {id:60,categoria:'Descartables',nombre:'Hojas de bisturí N15 x100',proveedor:'ML',precio_unitario:157},
    {id:61,categoria:'Descartables',nombre:'Hojas de bisturí N20 x100',proveedor:'ML',precio_unitario:157},
    {id:62,categoria:'Descartables',nombre:'Palito de naranjo 50u',proveedor:'La Manola',precio_unitario:16},
    {id:63,categoria:'Descartables',nombre:'Papel aluminio 25mt',proveedor:'ML',precio_unitario:0.228},
    {id:64,categoria:'Descartables',nombre:'Papel film 300mt',proveedor:'ML',precio_unitario:0.02633},
    {id:65,categoria:'Descartables',nombre:'Papel film 42mm x200mt',proveedor:'La Manola',precio_unitario:0.0065},
    {id:66,categoria:'Descartables',nombre:'Servilletas rollo cocina x200u',proveedor:'Neoclean',precio_unitario:11.975},
    {id:67,categoria:'Descartables',nombre:'Toallitas desmaquillantes Nivea 25u',proveedor:'ML',precio_unitario:181.2},
    {id:68,categoria:'Descartables',nombre:'Hisopos Farmacity x150u',proveedor:'Farmacity',precio_unitario:19.93},
    {id:69,categoria:'Descartables',nombre:'Cepillitos x50u',proveedor:'La Manola',precio_unitario:24},
    {id:70,categoria:'Descartables',nombre:'Wipes sin pelusa x1000u',proveedor:'La Manola',precio_unitario:2.2},
  ],
  depi_servicios: [
    {id:1,categoria:'Zonas individuales',nombre:'Bozo',precio_ef:7000,precio_lista:8100},
    {id:2,categoria:'Zonas individuales',nombre:'Mentón',precio_ef:7000,precio_lista:8100},
    {id:3,categoria:'Zonas individuales',nombre:'Patillas',precio_ef:7000,precio_lista:8100},
    {id:4,categoria:'Zonas individuales',nombre:'Barbilla',precio_ef:7000,precio_lista:8100},
    {id:5,categoria:'Zonas individuales',nombre:'Rostro completo',precio_ef:16000,precio_lista:18400},
    {id:6,categoria:'Zonas individuales',nombre:'Nuca',precio_ef:7000,precio_lista:8100},
    {id:7,categoria:'Zonas individuales',nombre:'Axilas',precio_ef:9500,precio_lista:11000},
    {id:8,categoria:'Zonas individuales',nombre:'Areolas',precio_ef:7000,precio_lista:8100},
    {id:9,categoria:'Zonas individuales',nombre:'Línea alba',precio_ef:7000,precio_lista:8100},
    {id:10,categoria:'Zonas individuales',nombre:'Panza',precio_ef:9200,precio_lista:10600},
    {id:11,categoria:'Zonas individuales',nombre:'Pecho',precio_ef:11000,precio_lista:12700},
    {id:12,categoria:'Zonas individuales',nombre:'Espalda baja',precio_ef:10000,precio_lista:11500},
    {id:13,categoria:'Zonas individuales',nombre:'Espalda completa',precio_ef:17500,precio_lista:20200},
    {id:14,categoria:'Zonas individuales',nombre:'Medios brazos',precio_ef:10500,precio_lista:12100},
    {id:15,categoria:'Zonas individuales',nombre:'Brazos completos',precio_ef:15000,precio_lista:17300},
    {id:16,categoria:'Zonas individuales',nombre:'Manos',precio_ef:6000,precio_lista:6900},
    {id:17,categoria:'Zonas individuales',nombre:'Cavado completo',precio_ef:17500,precio_lista:20200},
    {id:18,categoria:'Zonas individuales',nombre:'Cavado profundo (labios)',precio_ef:10000,precio_lista:11500},
    {id:19,categoria:'Zonas individuales',nombre:'Tira de cola',precio_ef:8000,precio_lista:9200},
    {id:20,categoria:'Zonas individuales',nombre:'Pelvis',precio_ef:9000,precio_lista:10400},
    {id:21,categoria:'Zonas individuales',nombre:'Media pierna',precio_ef:11500,precio_lista:13300},
    {id:22,categoria:'Zonas individuales',nombre:'Pierna entera',precio_ef:17000,precio_lista:19600},
    {id:23,categoria:'Zonas individuales',nombre:'Glúteos',precio_ef:9500,precio_lista:11000},
    {id:24,categoria:'Zonas individuales',nombre:'Dedos pies',precio_ef:6000,precio_lista:6900},
    {id:25,categoria:'Zonas individuales',nombre:'Empeine',precio_ef:6000,precio_lista:6900},
    {id:26,categoria:'Combos',nombre:'Combo 1 - Axilas + Cavado completo + Pierna entera + Tira de cola',precio_ef:32000,precio_lista:36800},
    {id:27,categoria:'Combos',nombre:'Combo 2 - Axilas + Cavado completo + ½ pierna + Tira de cola',precio_ef:27000,precio_lista:31100},
    {id:28,categoria:'Combos',nombre:'Combo 3 - Axilas + Cavado completo',precio_ef:17000,precio_lista:19600},
    {id:29,categoria:'Combos',nombre:'Combo 4 - Rostro + Axilas + Cavado completo + Pierna entera + Tira de cola',precio_ef:39000,precio_lista:44900},
    {id:30,categoria:'Combos',nombre:'Combo 5 - Axilas + Cavado + Rostro',precio_ef:29000,precio_lista:33400},
    {id:31,categoria:'Combos',nombre:'Cuerpo entero mujer',precio_ef:60000,precio_lista:69000},
    {id:32,categoria:'Combos',nombre:'Cuerpo entero hombre',precio_ef:70000,precio_lista:80500},
  ],
  depi_turnos: [],
  depi_jornadas: [],
  turnos: [],
  adelantos: [],
  liquidaciones: [],
  gastos: [],
  nextId: { chicas:8, servicios:59, turnos:1, adelantos:1, liquidaciones:1, gastos:1, insumos:71, depi_turnos:1, depi_jornadas:1 }
};

const db = new Low(adapter, defaultData);
await db.read();

if (!db.data) db.data = defaultData;
if (!db.data.nextId) db.data.nextId = { ...defaultData.nextId };
if (!db.data.chicas?.length) db.data.chicas = defaultData.chicas;
if (!db.data.servicios?.length) db.data.servicios = defaultData.servicios;
if (!db.data.insumos?.length) db.data.insumos = defaultData.insumos;
if (!db.data.depi_servicios?.length) db.data.depi_servicios = defaultData.depi_servicios;
if (!db.data.depi_turnos) db.data.depi_turnos = [];
if (!db.data.depi_jornadas) db.data.depi_jornadas = [];
if (!db.data.turnos) db.data.turnos = [];
if (!db.data.adelantos) db.data.adelantos = [];
if (!db.data.liquidaciones) db.data.liquidaciones = [];
if (!db.data.gastos) db.data.gastos = [];
if (!db.data.nextId.adelantos) db.data.nextId.adelantos = 1;
if (!db.data.nextId.liquidaciones) db.data.nextId.liquidaciones = 1;
if (!db.data.nextId.gastos) db.data.nextId.gastos = 1;
if (!db.data.nextId.insumos) db.data.nextId.insumos = 71;
if (!db.data.nextId.depi_turnos) db.data.nextId.depi_turnos = 1;
if (!db.data.nextId.depi_jornadas) db.data.nextId.depi_jornadas = 1;

// Agregar servicios nuevos por id si no existen
const serviciosNuevosIds = [50,51,52,53,54,55,56,57,58];
serviciosNuevosIds.forEach(idNuevo => {
  const nuevo = defaultData.servicios.find(d => d.id === idNuevo);
  if (nuevo && !db.data.servicios.find(s => s.id === nuevo.id)) {
    db.data.servicios.push(nuevo);
  }
});

// Reemplazar "Service esculpidas" genérico (id 11, precio 37000) por los dos nuevos si todavía existe el viejo
const servicioViejo = db.data.servicios.find(s => s.id === 11 && s.precio_ef === 37000 && s.nombre === 'Service esculpidas');
if (servicioViejo) {
  servicioViejo.nombre = 'Service esculpidas en poly';
  servicioViejo.precio_ef = 40000;
  servicioViejo.precio_lista = 48000;
}

// Actualizar precios de Esculpidas en poly y Esculpidas acrílicas si están en el valor viejo
const escPoly = db.data.servicios.find(s => s.id === 8);
if (escPoly && escPoly.precio_ef === 40000) { escPoly.precio_ef = 42000; escPoly.precio_lista = 50400; }
const escAcr = db.data.servicios.find(s => s.id === 9);
if (escAcr && escAcr.precio_ef === 42000) { escAcr.precio_ef = 44000; escAcr.precio_lista = 52800; }

db.data.servicios.forEach(s => {
  const def = defaultData.servicios.find(d => d.id === s.id);
  if (def && s.costo_insumos === undefined) s.costo_insumos = def.costo_insumos;
});

await db.write();

const nextId = (key) => { const id = db.data.nextId[key]++; db.write(); return id; };
const COM = 0.37;

app.get('/api/chicas', (req, res) => res.json(db.data.chicas.sort((a,b)=>a.nombre.localeCompare(b.nombre))));
app.post('/api/chicas', async (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta nombre' });
  if (db.data.chicas.find(c=>c.nombre===nombre)) return res.status(409).json({ error: 'Ya existe' });
  const id = nextId('chicas');
  db.data.chicas.push({ id, nombre });
  await db.write(); res.json({ id, nombre });
});
app.delete('/api/chicas/:id', async (req, res) => {
  db.data.chicas = db.data.chicas.filter(c=>c.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/servicios', (req, res) => res.json(db.data.servicios.sort((a,b)=>a.categoria.localeCompare(b.categoria)||a.nombre.localeCompare(b.nombre))));
app.post('/api/servicios', async (req, res) => {
  const { categoria, nombre, precio_ef, precio_lista, costo_insumos } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta nombre' });
  const id = nextId('servicios');
  db.data.servicios.push({ id, categoria: categoria||'Otros', nombre, precio_ef: precio_ef||0, precio_lista: precio_lista||precio_ef||0, costo_insumos: costo_insumos||0 });
  await db.write(); res.json({ id });
});
app.put('/api/servicios/:id', async (req, res) => {
  const { precio_ef, precio_lista, costo_insumos } = req.body;
  const s = db.data.servicios.find(x=>x.id===parseInt(req.params.id));
  if (!s) return res.status(404).json({ error: 'No encontrado' });
  s.precio_ef = precio_ef; s.precio_lista = precio_lista;
  if (costo_insumos !== undefined) s.costo_insumos = costo_insumos;
  await db.write(); res.json({ ok: true });
});
app.delete('/api/servicios/:id', async (req, res) => {
  db.data.servicios = db.data.servicios.filter(s=>s.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/insumos', (req, res) => res.json(db.data.insumos.sort((a,b)=>a.categoria.localeCompare(b.categoria)||a.nombre.localeCompare(b.nombre))));
app.post('/api/insumos', async (req, res) => {
  const { categoria, nombre, proveedor, precio_unitario } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta nombre' });
  const id = nextId('insumos');
  db.data.insumos.push({ id, categoria: categoria||'Otros', nombre, proveedor: proveedor||'', precio_unitario: precio_unitario||0 });
  await db.write(); res.json({ id });
});
app.put('/api/insumos/:id', async (req, res) => {
  const ins = db.data.insumos.find(x=>x.id===parseInt(req.params.id));
  if (!ins) return res.status(404).json({ error: 'No encontrado' });
  if (req.body.nombre !== undefined) ins.nombre = req.body.nombre;
  if (req.body.proveedor !== undefined) ins.proveedor = req.body.proveedor;
  if (req.body.precio_unitario !== undefined) ins.precio_unitario = req.body.precio_unitario;
  await db.write(); res.json({ ok: true });
});
app.delete('/api/insumos/:id', async (req, res) => {
  db.data.insumos = db.data.insumos.filter(i=>i.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/depi-servicios', (req, res) => res.json(db.data.depi_servicios.sort((a,b)=>a.categoria.localeCompare(b.categoria)||a.nombre.localeCompare(b.nombre))));
app.put('/api/depi-servicios/:id', async (req, res) => {
  const s = db.data.depi_servicios.find(x=>x.id===parseInt(req.params.id));
  if (!s) return res.status(404).json({ error: 'No encontrado' });
  if (req.body.precio_ef !== undefined) s.precio_ef = req.body.precio_ef;
  if (req.body.precio_lista !== undefined) s.precio_lista = req.body.precio_lista;
  await db.write(); res.json({ ok: true });
});

app.get('/api/depi-turnos', (req, res) => {
  const { jornada_id, fecha } = req.query;
  let t = db.data.depi_turnos;
  if (jornada_id) t = t.filter(x=>x.jornada_id===parseInt(jornada_id));
  if (fecha) t = t.filter(x=>x.fecha===fecha);
  res.json([...t].sort((a,b)=>b.creado_at.localeCompare(a.creado_at)));
});
app.post('/api/depi-turnos', async (req, res) => {
  const { clienta, servicio, precio_ef, precio_lista, pago, sena, sena_fecha, fecha, obs, jornada_id } = req.body;
  if (!clienta||!servicio) return res.status(400).json({ error: 'Faltan campos' });
  const id = nextId('depi_turnos');
  db.data.depi_turnos.push({ id, clienta, servicio, precio_ef, precio_lista, pago:pago||'efectivo', sena:sena||0, sena_fecha:sena_fecha||null, fecha, obs:obs||'', jornada_id:jornada_id||null, creado_at: new Date().toISOString() });
  await db.write(); res.json({ id });
});
app.delete('/api/depi-turnos/:id', async (req, res) => {
  db.data.depi_turnos = db.data.depi_turnos.filter(t=>t.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/depi-jornadas', (req, res) => res.json([...db.data.depi_jornadas].sort((a,b)=>b.fecha.localeCompare(a.fecha))));
app.post('/api/depi-jornadas', async (req, res) => {
  const { fecha, alquiler_maquina, horas_operadora, tarifa_operadora, viaticos, comida, obs } = req.body;
  if (!fecha) return res.status(400).json({ error: 'Falta fecha' });
  if (db.data.depi_jornadas.find(j=>j.fecha===fecha)) return res.status(409).json({ error: 'Ya existe jornada para esa fecha' });
  const id = nextId('depi_jornadas');
  db.data.depi_jornadas.push({ id, fecha, abierta:true, alquiler_maquina:alquiler_maquina||0, horas_operadora:horas_operadora||0, tarifa_operadora:tarifa_operadora||7000, viaticos:viaticos||0, comida:comida||0, obs:obs||'', creado_at: new Date().toISOString() });
  await db.write(); res.json({ id });
});
app.put('/api/depi-jornadas/:id', async (req, res) => {
  const j = db.data.depi_jornadas.find(x=>x.id===parseInt(req.params.id));
  if (!j) return res.status(404).json({ error: 'No encontrada' });
  Object.assign(j, req.body);
  await db.write(); res.json({ ok: true });
});
app.delete('/api/depi-jornadas/:id', async (req, res) => {
  db.data.depi_jornadas = db.data.depi_jornadas.filter(j=>j.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/depi-resumen/:jornada_id', (req, res) => {
  const jid = parseInt(req.params.jornada_id);
  const jornada = db.data.depi_jornadas.find(j=>j.id===jid);
  if (!jornada) return res.status(404).json({ error: 'No encontrada' });
  const turnos = db.data.depi_turnos.filter(t=>t.jornada_id===jid);
  const total_senas = turnos.reduce((s,t)=>s+(t.sena||0),0);
  const total_ef = turnos.filter(t=>t.pago==='efectivo').reduce((s,t)=>s+(t.precio_ef-(t.sena||0)),0);
  const total_transf = turnos.filter(t=>t.pago==='transferencia').reduce((s,t)=>s+(t.precio_ef-(t.sena||0)),0) + total_senas;
  const total_cobrado = turnos.reduce((s,t)=>s+t.precio_ef,0);
  const costo_operadora = jornada.horas_operadora * jornada.tarifa_operadora;
  const total_costos = jornada.alquiler_maquina + costo_operadora + jornada.viaticos + jornada.comida;
  const ganancia = total_cobrado - total_costos;
  res.json({ jornada, turnos, total_senas, total_ef, total_transf, total_cobrado, costo_operadora, total_costos, ganancia });
});

app.get('/api/turnos', (req, res) => {
  const { desde, hasta } = req.query;
  let turnos = db.data.turnos;
  if (desde && hasta) turnos = turnos.filter(t=>t.fecha>=desde&&t.fecha<=hasta);
  else if (desde) turnos = turnos.filter(t=>t.fecha>=desde);
  res.json([...turnos].sort((a,b)=>b.creado_at.localeCompare(a.creado_at)));
});
app.post('/api/turnos', async (req, res) => {
  const { chica, clienta, servicios, pago, pago2, monto_pago1, monto_pago2, cobrado, base_comision, fecha, origen, obs, sena_monto, descuento_monto, descuento_motivo } = req.body;
  if (!chica||!clienta||!servicios?.length||!pago) return res.status(400).json({ error: 'Faltan campos' });
  const costo_insumos = servicios.reduce((sum, s) => {
    const srv = db.data.servicios.find(x => x.nombre === s.nombre);
    return sum + (srv?.costo_insumos || s.costo_insumos || 0);
  }, 0);
  const id = nextId('turnos');
  db.data.turnos.push({ id, chica, clienta, servicios, pago, pago2:pago2||null, monto_pago1:monto_pago1||null, monto_pago2:monto_pago2||null, cobrado, base_comision, costo_insumos, fecha, origen:origen||'presencial', obs:obs||'', sena_monto:sena_monto||0, descuento_monto:descuento_monto||0, descuento_motivo:descuento_motivo||'', creado_at: new Date().toISOString() });
  await db.write(); res.json({ id });
});
app.delete('/api/turnos/:id', async (req, res) => {
  db.data.turnos = db.data.turnos.filter(t=>t.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/adelantos', (req, res) => {
  const { chica } = req.query;
  let a = db.data.adelantos;
  if (chica) a = a.filter(x=>x.chica===chica);
  res.json([...a].sort((a,b)=>b.fecha.localeCompare(a.fecha)));
});
app.post('/api/adelantos', async (req, res) => {
  const { chica, monto, fecha, obs } = req.body;
  if (!chica||!monto) return res.status(400).json({ error: 'Faltan campos' });
  const id = nextId('adelantos');
  db.data.adelantos.push({ id, chica, monto, fecha: fecha||new Date().toISOString().slice(0,10), obs:obs||'', descontado:false, creado_at: new Date().toISOString() });
  await db.write(); res.json({ id });
});
app.put('/api/adelantos/:id', async (req, res) => {
  const a = db.data.adelantos.find(x=>x.id===parseInt(req.params.id));
  if (!a) return res.status(404).json({ error: 'No encontrado' });
  if (req.body.descontado !== undefined) a.descontado = req.body.descontado;
  await db.write(); res.json({ ok: true });
});
app.delete('/api/adelantos/:id', async (req, res) => {
  db.data.adelantos = db.data.adelantos.filter(a=>a.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/liquidaciones', (req, res) => res.json([...db.data.liquidaciones].sort((a,b)=>b.creado_at.localeCompare(a.creado_at))));
app.post('/api/liquidaciones', async (req, res) => {
  const { chica, desde, hasta, comisiones, adelantosMonto, adelantosIds, total } = req.body;
  const id = nextId('liquidaciones');
  db.data.liquidaciones.push({ id, chica, desde, hasta, comisiones, adelantosMonto, total, pagada:false, creado_at: new Date().toISOString() });
  if (adelantosIds?.length) {
    adelantosIds.forEach(aid => {
      const a = db.data.adelantos.find(x=>x.id===aid);
      if (a) a.descontado = true;
    });
  }
  await db.write(); res.json({ id });
});
app.put('/api/liquidaciones/:id', async (req, res) => {
  const liq = db.data.liquidaciones.find(x=>x.id===parseInt(req.params.id));
  if (!liq) return res.status(404).json({ error: 'No encontrada' });
  if (req.body.pagada !== undefined) liq.pagada = req.body.pagada;
  await db.write(); res.json({ ok: true });
});
app.delete('/api/liquidaciones/:id', async (req, res) => {
  db.data.liquidaciones = db.data.liquidaciones.filter(l=>l.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/gastos', (req, res) => {
  const { desde, hasta } = req.query;
  let gastos = db.data.gastos||[];
  if (desde && hasta) gastos = gastos.filter(g=>g.fecha>=desde&&g.fecha<=hasta);
  else if (desde) gastos = gastos.filter(g=>g.fecha>=desde);
  res.json([...gastos].sort((a,b)=>b.fecha.localeCompare(a.fecha)));
});
app.post('/api/gastos', async (req, res) => {
  const { categoria, descripcion, monto, fecha } = req.body;
  if (!categoria||!monto) return res.status(400).json({ error: 'Faltan campos' });
  const id = nextId('gastos');
  db.data.gastos.push({ id, categoria, descripcion:descripcion||'', monto, fecha: fecha||new Date().toISOString().slice(0,10), creado_at: new Date().toISOString() });
  await db.write(); res.json({ id });
});
app.delete('/api/gastos/:id', async (req, res) => {
  db.data.gastos = db.data.gastos.filter(g=>g.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

app.get('/api/resumen', (req, res) => {
  const { desde, hasta } = req.query;
  let turnos = db.data.turnos;
  if (desde && hasta) turnos = turnos.filter(t=>t.fecha>=desde&&t.fecha<=hasta);
  else if (desde) turnos = turnos.filter(t=>t.fecha>=desde);
  const sum = (fn) => turnos.reduce((s,t)=>s+(fn(t)||0),0);
  const base_ef = sum(t=>t.base_comision);
  const cobrado = sum(t=>t.cobrado);
  const costo_insumos = sum(t=>t.costo_insumos||0);
  const byChica = {};
  turnos.forEach(t => {
    if (!byChica[t.chica]) byChica[t.chica]={chica:t.chica,turnos:0,base_ef:0,cobrado:0};
    byChica[t.chica].turnos++; byChica[t.chica].base_ef+=t.base_comision; byChica[t.chica].cobrado+=t.cobrado;
  });
  const srvCount = {};
  turnos.forEach(t => (t.servicios||[]).forEach(s => {
    const n = s.servicio||s.nombre;
    if (!srvCount[n]) srvCount[n]={nombre:n,cantidad:0,facturado:0};
    srvCount[n].cantidad++; srvCount[n].facturado+=s.precio_ef||0;
  }));
  let gastos = db.data.gastos||[];
  if (desde && hasta) gastos = gastos.filter(g=>g.fecha>=desde&&g.fecha<=hasta);
  else if (desde) gastos = gastos.filter(g=>g.fecha>=desde);
  const totalGastos = gastos.reduce((s,g)=>s+g.monto,0);
  const salon = cobrado - base_ef*COM;
  const ganancia_real = salon - costo_insumos - totalGastos;
  res.json({
    turnos: turnos.length, cobrado, comisiones: base_ef*COM, salon,
    costo_insumos, gastos: totalGastos, ganancia_real,
    efectivo: sum(t=>t.pago==='efectivo'?(t.monto_pago1||t.cobrado):0),
    transferencia: sum(t=>(t.pago==='transferencia'?(t.monto_pago1||t.cobrado):0)+(t.pago2==='transferencia'?(t.monto_pago2||0):0)),
    qr: sum(t=>(t.pago==='qr'?(t.monto_pago1||t.cobrado):0)+(t.pago2==='qr'?(t.monto_pago2||0):0)),
    debito: sum(t=>(t.pago==='debito'?(t.monto_pago1||t.cobrado):0)+(t.pago2==='debito'?(t.monto_pago2||0):0)),
    credito: sum(t=>(t.pago==='credito'?(t.monto_pago1||t.cobrado):0)+(t.pago2==='credito'?(t.monto_pago2||0):0)),
    openpay: sum(t=>(t.pago==='openpay'?(t.monto_pago1||t.cobrado):0)+(t.pago2==='openpay'?(t.monto_pago2||0):0)),
    online: turnos.filter(t=>t.origen==='online').length,
    porChica: Object.values(byChica).map(c=>({...c,comision:c.base_ef*COM})).sort((a,b)=>a.chica.localeCompare(b.chica)),
    rankingServicios: Object.values(srvCount).sort((a,b)=>b.cantidad-a.cantidad).slice(0,10)
  });
});

app.listen(PORT, () => console.log(`Zelva Beauty en puerto ${PORT}`));
