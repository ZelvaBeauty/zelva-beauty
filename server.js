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
    {id:1,categoria:'Manos',nombre:'Manicura sin esmaltar',precio_ef:18000,precio_lista:21600},
    {id:2,categoria:'Manos',nombre:'Esmaltado tradicional',precio_ef:20000,precio_lista:24000},
    {id:3,categoria:'Manos',nombre:'Esmaltado semipermanente',precio_ef:27000,precio_lista:32400},
    {id:4,categoria:'Manos',nombre:'Nivelacion en gel',precio_ef:35000,precio_lista:42000},
    {id:5,categoria:'Manos',nombre:'Capping dipping',precio_ef:30000,precio_lista:36000},
    {id:6,categoria:'Manos',nombre:'Capping en perla',precio_ef:39000,precio_lista:46800},
    {id:7,categoria:'Manos',nombre:'Capping en polygel',precio_ef:38000,precio_lista:45600},
    {id:8,categoria:'Manos',nombre:'Esculpidas en poly',precio_ef:40000,precio_lista:48000},
    {id:9,categoria:'Manos',nombre:'Esculpidas acrílicas',precio_ef:42000,precio_lista:50400},
    {id:10,categoria:'Manos',nombre:'Soft gel',precio_ef:37000,precio_lista:44400},
    {id:11,categoria:'Manos',nombre:'Service esculpidas',precio_ef:37000,precio_lista:44400},
    {id:12,categoria:'Manos',nombre:'Service esculpida x uña',precio_ef:4500,precio_lista:5400},
    {id:13,categoria:'Manos',nombre:'Service capping x uña',precio_ef:4000,precio_lista:4800},
    {id:14,categoria:'Manos',nombre:'Cambio de esmalte',precio_ef:20000,precio_lista:24000},
    {id:15,categoria:'Manos',nombre:'Manicura para niñas',precio_ef:15000,precio_lista:18000},
    {id:16,categoria:'Manos',nombre:'Manicura para hombres',precio_ef:22000,precio_lista:26400},
    {id:17,categoria:'Pies',nombre:'Belleza de pies sin esmaltar',precio_ef:23000,precio_lista:27600},
    {id:18,categoria:'Pies',nombre:'Belleza con esmalte tradicional',precio_ef:25000,precio_lista:30000},
    {id:19,categoria:'Pies',nombre:'Belleza con esmalte semipermanente',precio_ef:29000,precio_lista:34800},
    {id:20,categoria:'Pies',nombre:'Pedicuria sin esmaltar',precio_ef:28000,precio_lista:33600},
    {id:21,categoria:'Pies',nombre:'Pedicuria con esmalte tradicional',precio_ef:34000,precio_lista:40800},
    {id:22,categoria:'Pies',nombre:'Pedicuria con esmalte semipermanente',precio_ef:38000,precio_lista:45600},
    {id:23,categoria:'Pies',nombre:'Reconstruccion por uña (pie)',precio_ef:5000,precio_lista:6000},
    {id:24,categoria:'Retiros',nombre:'Retiro de semipermanente',precio_ef:8000,precio_lista:9600},
    {id:25,categoria:'Retiros',nombre:'Retiro de capping',precio_ef:10000,precio_lista:12000},
    {id:26,categoria:'Retiros',nombre:'Retiro de esculpidas',precio_ef:14000,precio_lista:16800},
    {id:27,categoria:'Retiros',nombre:'Retiro total de semi',precio_ef:10000,precio_lista:12000},
    {id:28,categoria:'Cejas y Pestañas',nombre:'Lifting de pestañas + botox',precio_ef:32000,precio_lista:38400},
    {id:29,categoria:'Cejas y Pestañas',nombre:'Perfilado de cejas',precio_ef:16000,precio_lista:19200},
    {id:30,categoria:'Cejas y Pestañas',nombre:'Perfilado de cejas + Henna',precio_ef:24000,precio_lista:28800},
    {id:31,categoria:'Cejas y Pestañas',nombre:'Laminado de cejas + botox',precio_ef:32000,precio_lista:38400},
    {id:32,categoria:'Cejas y Pestañas',nombre:'Tinte de pestañas',precio_ef:5000,precio_lista:6000},
    {id:33,categoria:'Cejas y Pestañas',nombre:'Retiro de pestañas',precio_ef:10000,precio_lista:12000},
    {id:34,categoria:'Combos',nombre:'Lifting + Perfilado',precio_ef:43000,precio_lista:51600},
    {id:35,categoria:'Combos',nombre:'Laminado + Perfilado',precio_ef:39000,precio_lista:46800},
    {id:36,categoria:'Combos',nombre:'Lifting + Laminado',precio_ef:58000,precio_lista:69600},
    {id:37,categoria:'Combos',nombre:'Lifting + Laminado + Perfilado',precio_ef:72000,precio_lista:86400},
    {id:38,categoria:'Pestañas tecnológicas',nombre:'3D - Volumen light',precio_ef:35000,precio_lista:42000},
    {id:39,categoria:'Pestañas tecnológicas',nombre:'4D - Volumen medio',precio_ef:39000,precio_lista:46800},
    {id:40,categoria:'Pestañas tecnológicas',nombre:'5D - Mega volumen',precio_ef:44000,precio_lista:52800},
    {id:41,categoria:'Pestañas clásicas',nombre:'Clásicas PXP',precio_ef:36000,precio_lista:43200},
    {id:42,categoria:'Pestañas clásicas',nombre:'Volumen Brasilero',precio_ef:40000,precio_lista:48000},
    {id:43,categoria:'Pestañas clásicas',nombre:'Volumen ruso',precio_ef:45000,precio_lista:54000},
    {id:44,categoria:'Service Pestañas clásicas',nombre:'Service Clásicas PXP',precio_ef:32400,precio_lista:38880},
    {id:45,categoria:'Service Pestañas clásicas',nombre:'Service Volumen Brasilero',precio_ef:37000,precio_lista:44400},
    {id:46,categoria:'Service Pestañas clásicas',nombre:'Service Volumen Ruso',precio_ef:40500,precio_lista:48600},
    {id:47,categoria:'Service Pestañas tecnológicas',nombre:'Service 3D - Volumen light',precio_ef:31500,precio_lista:37800},
    {id:48,categoria:'Service Pestañas tecnológicas',nombre:'Service 4D - Volumen medio',precio_ef:35100,precio_lista:42120},
    {id:49,categoria:'Service Pestañas tecnológicas',nombre:'Service 5D - Mega volumen',precio_ef:39600,precio_lista:47520},
  ],
  turnos: [],
  adelantos: [],
  liquidaciones: [],
  gastos: [],
  nextId: { chicas: 8, servicios: 50, turnos: 1, adelantos: 1, liquidaciones: 1, gastos: 1 }
};

const db = new Low(adapter, defaultData);
await db.read();
if (!db.data.nextId) db.data.nextId = defaultData.nextId;
if (!db.data.chicas?.length) db.data.chicas = defaultData.chicas;
if (!db.data.servicios?.length) db.data.servicios = defaultData.servicios;
if (!db.data.turnos) db.data.turnos = [];
if (!db.data.adelantos) db.data.adelantos = [];
if (!db.data.liquidaciones) db.data.liquidaciones = [];
if (!db.data.gastos) db.data.gastos = [];
if (!db.data.nextId.adelantos) db.data.nextId.adelantos = 1;
if (!db.data.nextId.liquidaciones) db.data.nextId.liquidaciones = 1;
if (!db.data.nextId.gastos) db.data.nextId.gastos = 1;
await db.write();

const nextId = (key) => { const id = db.data.nextId[key]++; db.write(); return id; };
const COM = 0.37;

// CHICAS
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

// SERVICIOS
app.get('/api/servicios', (req, res) => res.json(db.data.servicios.sort((a,b)=>a.categoria.localeCompare(b.categoria)||a.nombre.localeCompare(b.nombre))));
app.post('/api/servicios', async (req, res) => {
  const { categoria, nombre, precio_ef, precio_lista } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta nombre' });
  const id = nextId('servicios');
  db.data.servicios.push({ id, categoria: categoria||'Otros', nombre, precio_ef: precio_ef||0, precio_lista: precio_lista||precio_ef||0 });
  await db.write(); res.json({ id });
});
app.put('/api/servicios/:id', async (req, res) => {
  const { precio_ef, precio_lista } = req.body;
  const s = db.data.servicios.find(x=>x.id===parseInt(req.params.id));
  if (!s) return res.status(404).json({ error: 'No encontrado' });
  s.precio_ef = precio_ef; s.precio_lista = precio_lista;
  await db.write(); res.json({ ok: true });
});
app.delete('/api/servicios/:id', async (req, res) => {
  db.data.servicios = db.data.servicios.filter(s=>s.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

// TURNOS
app.get('/api/turnos', (req, res) => {
  const { desde, hasta } = req.query;
  let turnos = db.data.turnos;
  if (desde && hasta) turnos = turnos.filter(t=>t.fecha>=desde&&t.fecha<=hasta);
  else if (desde) turnos = turnos.filter(t=>t.fecha>=desde);
  res.json([...turnos].sort((a,b)=>b.creado_at.localeCompare(a.creado_at)));
});
app.post('/api/turnos', async (req, res) => {
  const { chica, clienta, servicios, pago, cobrado, base_comision, fecha, origen, obs, sena_monto, descuento_monto, descuento_motivo } = req.body;
  if (!chica||!clienta||!servicios?.length||!pago) return res.status(400).json({ error: 'Faltan campos' });
  const id = nextId('turnos');
  db.data.turnos.push({ id, chica, clienta, servicios, pago, cobrado, base_comision, fecha, origen:origen||'presencial', obs:obs||'', sena_monto:sena_monto||0, descuento_monto:descuento_monto||0, descuento_motivo:descuento_motivo||'', creado_at: new Date().toISOString() });
  await db.write(); res.json({ id });
});
app.delete('/api/turnos/:id', async (req, res) => {
  db.data.turnos = db.data.turnos.filter(t=>t.id!==parseInt(req.params.id));
  await db.write(); res.json({ ok: true });
});

// ADELANTOS
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

// LIQUIDACIONES
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

// GASTOS
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

// RESUMEN
app.get('/api/resumen', (req, res) => {
  const { desde, hasta } = req.query;
  let turnos = db.data.turnos;
  if (desde && hasta) turnos = turnos.filter(t=>t.fecha>=desde&&t.fecha<=hasta);
  else if (desde) turnos = turnos.filter(t=>t.fecha>=desde);
  const sum = (fn) => turnos.reduce((s,t)=>s+(fn(t)||0),0);
  const base_ef = sum(t=>t.base_comision);
  const cobrado = sum(t=>t.cobrado);
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
  res.json({
    turnos: turnos.length, cobrado, comisiones: base_ef*COM, salon, gastos: totalGastos, neto: salon - totalGastos,
    efectivo: sum(t=>t.pago==='efectivo'?t.cobrado:0),
    transferencia: sum(t=>t.pago==='transferencia'?t.cobrado:0),
    qr: sum(t=>t.pago==='qr'?t.cobrado:0),
    debito: sum(t=>t.pago==='debito'?t.cobrado:0),
    credito: sum(t=>t.pago==='credito'?t.cobrado:0),
    openpay: sum(t=>t.pago==='openpay'?t.cobrado:0),
    online: turnos.filter(t=>t.origen==='online').length,
    porChica: Object.values(byChica).map(c=>({...c,comision:c.base_ef*COM})).sort((a,b)=>a.chica.localeCompare(b.chica)),
    rankingServicios: Object.values(srvCount).sort((a,b)=>b.cantidad-a.cantidad).slice(0,10)
  });
});

app.listen(PORT, () => console.log(`Zelva Beauty en puerto ${PORT}`));
