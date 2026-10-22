const assert=require('node:assert/strict');const {calculate,parse,hex,table}=require('./core.js');
assert.deepEqual(parse('178589006'),['178','589','006']);assert.deepEqual(parse('１７８／５８９／００６'),['178','589','006']);
const r=calculate('178 589 006');assert.equal(r.base.name,'澤風大過');assert.equal(r.moving,6);assert.equal(r.changed.name,'天風姤');
assert.equal(calculate('000 000 000').base.id,2);assert.equal(calculate('008 016 012').moving,6);
for(const s of ['178 589 6','12345678','-123 456 789','123 456 789 000','abc','123.456.789'])assert.throws(()=>parse(s));
assert.equal(new Set(table.flat()).size,64);
for(let u=1;u<=8;u++)for(let l=1;l<=8;l++)for(let m=1;m<=6;m++){const r=calculate(`${String(u).padStart(3,'0')} ${String(l).padStart(3,'0')} ${String(m).padStart(3,'0')}`);assert.equal(r.base.id,hex(u,l).id);assert.equal(r.base.bits^r.changed.bits,1<<(m-1));assert.ok(r.changed.theme);}
console.log('通過：輸入格式、前導零、範例、餘零規則、64卦及全部384種動爻轉換。');
