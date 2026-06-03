const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');

const app = express();
const db = new Database('zelva.db');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

db.exec(`
  CREATE TABLE IF NOT EXISTS chicas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL UNIQUE
  );
  CREATE TABLE IF NOT EXISTS servicios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    categoria TEXT NOT NULL,
    nombre TEXT NOT NULL,
    precio_ef REAL DEFAULT 0,
    precio_lista REAL DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS turnos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chica TEXT NOT NULL,
    clienta TEXT NOT NULL,
    pago TEXT NOT NULL,
    cobrado REAL NOT NULL,
    base_comision REAL NOT NULL,
    fecha TEXT NOT NULL,
    origen TEXT DEFAULT 'presencial',
    obs TEXT DEFAULT '',
    creado_at TEXT DEFAULT (datetime('now','localtime'))
  );
  CREATE TABLE IF NOT EXISTS turno_servicios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    turno_id INTEGER NOT NULL,
    servicio TEXT NOT NULL,
    precio_ef REAL NOT NULL,
    precio_lista REAL NOT NULL,
    FOREIGN KEY(turno_id) REFERENCES turnos(id) ON DELETE CASCADE
  );
`);

const cc = db.prepare('SELECT COUNT(*) as n FROM chicas').get();
if (cc.n === 0) {
  const ins = db.prepare('INSERT INTO chicas (nombre) VALUES (?)');
  ['Shan','Valentina','Lucía','Camila','Micaela'].forEach(n => ins.run(n));
}
const sc = db.prepare('SELECT COUNT(*) as n FROM servicios').get();
if (sc.n === 0) {
  const ins = db.prepare('INSERT INTO servicios (categoria,nombre,precio_ef,precio_lista) VALUES (?,?,?,?)');
  const servicios = [
    // MANOS
    ['Manos','Manicura sin esmaltar',18000,21600],
    ['Manos','Esmaltado tradicional',20000,24000],
    ['Manos','Esmaltado semipermanente',27000,32400],
    ['Manos','Nivelacion en gel',35000,42000],
    ['Manos','Capping dipping',30000,36000],
    ['Manos','Capping en perla',39000,39600],
    ['Manos','Capping en polygel',38000,39600],
    ['Manos','Esculpidas en poly',40000,48000],
    ['Manos','Esculpidas acrílicas',42000,50400],
    ['Manos','Soft gel',37000,44400],
    ['Manos','Service esculpidas',37000,44400],
    ['Manos','Service esculpida x uña',4500,5400],
    ['Manos','Service capping x uña',4000,4800],
    ['Manos','Cambio de esmalte',20000,24000],
    ['Manos','Manicura para niñas',15000,18000],
    ['Manos','Manicura para hombres',22000,26400],
    // PIES
    ['Pies','Belleza de pies sin esmaltar',23000,27600],
    ['Pies','Belleza con esmalte tradicional',25000,30000],
    ['Pies','Belleza con esmalte semipermanente',29000,34800],
    ['Pies','Pedicuria sin esmaltar',28000,33600],
    ['Pies','Pedicuria con esmalte tradicional',34000,40800],
    ['Pies','Pedicuria con esmalte semipermanente',38000,45600],
    ['Pies','Reconstruccion por uña (pie)',5000,6000],
    // RETIROS
    ['Retiros','Retiro de semipermanente',8000,9600],
    ['Retiros','Retiro de capping',10000,12000],
    ['Retiros','Retiro de esculpidas',14000,16800],
    ['Retiros','Retiro total de semi',10000,12000],
    // CEJAS Y PESTAÑAS
    ['Cejas y Pestañas','Lifting de pestañas + botox',32000,38400],
    ['Cejas y Pestañas','Perfilado de cejas',16000,19200],
    ['Cejas y Pestañas','Perfilado de cejas + Henna',24000,28800],
    ['Cejas y Pestañas','Laminado de cejas + botox',32000,38400],
    ['Cejas y Pestañas','Tinte de pestañas',5000,6000],
    ['Cejas y Pestañas','Retiro de pestañas',10000,12000],
    // COMBOS
    ['Combos','Lifting + Perfilado',43000,51600],
    ['Combos','Laminado + Perfilado',39000,46800],
    ['Combos','Lifting + Laminado',58000,69600],
    ['Combos','Lifting + Laminado + Perfilado',72000,86400],
    // PESTAÑAS TECNOLOGICAS
    ['Pestañas tecnológicas','3D - Volumen light',35000,42000],
    ['Pestañas tecnológicas','4D - Volumen medio',39000,46800],
    ['Pestañas tecnológicas','5D - Mega volumen',44000,52800],
    // PESTAÑAS CLASICAS
    ['Pestañas clásicas','Clásicas PXP',36000,43200],
    ['Pestañas clásicas','Volumen Brasilero',40000,48000],
    ['Pestañas clásicas','Volumen ruso',45000,54000],
  ];
  servicios.forEach(s => ins.run(...s));
}

// CHICAS
app.get('/api/chicas', (req, res) => res.json(db.prepare('SELECT * FROM chicas ORDER BY nombre').all()));
app.post('/api/chicas', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta nombre' });
  try { const r = db.prepare('INSERT INTO chicas (nombre) VALUES (?)').run(nombre); res.json({ id: r.lastInsertRowid, nombre }); }
  catch { res.status(409).json({ error: 'Ya existe' }); }
});
app.delete('/api/chicas/:id', (req, res) => { db.prepare('DELETE FROM chicas WHERE id=?').run(req.params.id); res.json({ ok: true }); });

// SERVICIOS
app.get('/api/servicios', (req, res) => res.json(db.prepare('SELECT * FROM servicios ORDER BY categoria, nombre').all()));
app.post('/api/servicios', (req, res) => {
  const { categoria, nombre, precio_ef, precio_lista } = req.body;
  if (!nombre) return res.status(400).json({ error: 'Falta nombre' });
  const r = db.prepare('INSERT INTO servicios (categoria,nombre,precio_ef,precio_lista) VALUES (?,?,?,?)').run(categoria||'Otros', nombre, precio_ef||0, precio_lista||precio_ef||0);
  res.json({ id: r.lastInsertRowid });
});
app.put('/api/servicios/:id', (req, res) => {
  const { precio_ef, precio_lista } = req.body;
  db.prepare('UPDATE servicios SET precio_ef=?, precio_lista=? WHERE id=?').run(precio_ef, precio_lista, req.params.id);
  res.json({ ok: true });
});
app.delete('/api/servicios/:id', (req, res) => { db.prepare('DELETE FROM servicios WHERE id=?').run(req.params.id); res.json({ ok: true }); });

// TURNOS
app.get('/api/turnos', (req, res) => {
  const { desde, hasta } = req.query;
  let q = 'SELECT * FROM turnos';
  const params = [];
  if (desde && hasta) { q += ' WHERE fecha BETWEEN ? AND ?'; params.push(desde, hasta); }
  else if (desde) { q += ' WHERE fecha >= ?'; params.push(desde); }
  q += ' ORDER BY creado_at DESC';
  const turnos = db.prepare(q).all(...params);
  const getServs = db.prepare('SELECT * FROM turno_servicios WHERE turno_id = ?');
  res.json(turnos.map(t => ({ ...t, servicios: getServs.all(t.id) })));
});

app.post('/api/turnos', (req, res) => {
  const { chica, clienta, servicios, pago, cobrado, base_comision, fecha, origen, obs } = req.body;
  if (!chica || !clienta || !servicios?.length || !pago) return res.status(400).json({ error: 'Faltan campos' });
  const insertTurno = db.prepare('INSERT INTO turnos (chica,clienta,pago,cobrado,base_comision,fecha,origen,obs) VALUES (?,?,?,?,?,?,?,?)');
  const insertServ = db.prepare('INSERT INTO turno_servicios (turno_id,servicio,precio_ef,precio_lista) VALUES (?,?,?,?)');
  const tx = db.transaction(() => {
    const r = insertTurno.run(chica, clienta, pago, cobrado, base_comision, fecha, origen||'presencial', obs||'');
    servicios.forEach(s => insertServ.run(r.lastInsertRowid, s.nombre, s.precio_ef, s.precio_lista));
    return r.lastInsertRowid;
  });
  res.json({ id: tx() });
});

app.delete('/api/turnos/:id', (req, res) => {
  db.prepare('DELETE FROM turno_servicios WHERE turno_id=?').run(req.params.id);
  db.prepare('DELETE FROM turnos WHERE id=?').run(req.params.id);
  res.json({ ok: true });
});

// RESUMEN
app.get('/api/resumen', (req, res) => {
  const { desde, hasta } = req.query;
  let where = ''; const params = [];
  if (desde && hasta) { where = 'WHERE fecha BETWEEN ? AND ?'; params.push(desde, hasta); }
  else if (desde) { where = 'WHERE fecha >= ?'; params.push(desde); }
  const COM = 0.37;
  const tot = db.prepare(`SELECT
    COUNT(*) as turnos,
    SUM(cobrado) as cobrado,
    SUM(base_comision) as base_ef,
    SUM(CASE WHEN pago='efectivo' THEN cobrado ELSE 0 END) as ef,
    SUM(CASE WHEN pago='transferencia' THEN cobrado ELSE 0 END) as tr,
    SUM(CASE WHEN pago='tarjeta' THEN cobrado ELSE 0 END) as tarjeta,
    SUM(CASE WHEN pago='qr' THEN cobrado ELSE 0 END) as qr,
    SUM(CASE WHEN origen='online' THEN 1 ELSE 0 END) as online
    FROM turnos ${where}`).get(...params);
  const porChica = db.prepare(`SELECT chica, COUNT(*) as turnos, SUM(base_comision) as base_ef, SUM(cobrado) as cobrado FROM turnos ${where} GROUP BY chica ORDER BY chica`).all(...params);
  res.json({
    turnos: tot.turnos||0, cobrado: tot.cobrado||0,
    comisiones: (tot.base_ef||0)*COM,
    salon: (tot.cobrado||0)-(tot.base_ef||0)*COM,
    efectivo: tot.ef||0, transferencia: tot.tr||0, tarjeta: tot.tarjeta||0, qr: tot.qr||0,
    online: tot.online||0,
    porChica: porChica.map(c=>({...c, comision: c.base_ef*COM}))
  });
});

app.listen(PORT, () => console.log(`Zelva Beauty en puerto ${PORT}`));
