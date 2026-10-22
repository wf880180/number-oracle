(function(root){
'use strict';
const trigrams=[null,['乾','天',7],['兌','澤',3],['離','火',5],['震','雷',1],['巽','風',6],['坎','水',2],['艮','山',4],['坤','地',0]];
// Rows: upper trigram; columns: lower trigram, both in 先天八卦 order.
const table=[[1,10,13,25,44,6,33,12],[43,58,49,17,28,47,31,45],[14,38,30,21,50,64,56,35],[34,54,55,51,32,40,62,16],[9,61,37,42,57,59,53,20],[5,60,63,3,48,29,39,8],[26,41,22,27,18,4,52,23],[11,19,36,24,46,7,15,2]];
const names='乾 坤 屯 蒙 需 訟 師 比 小畜 履 泰 否 同人 大有 謙 豫 隨 蠱 臨 觀 噬嗑 賁 剝 復 無妄 大畜 頤 大過 坎 離 咸 恆 遯 大壯 晉 明夷 家人 睽 蹇 解 損 益 夬 姤 萃 升 困 井 革 鼎 震 艮 漸 歸妹 豐 旅 巽 兌 渙 節 中孚 小過 既濟 未濟'.split(' ');
const themes='主動開創，持續精進|柔順承載，穩健配合|起步有阻，逐步建立基礎|虛心求教，釐清未知|耐心等待，先做準備|意見相左，宜協調分歧|組織力量，明確紀律|建立互信，尋找同伴|積蓄小成果，暫緩強推|謹慎行事，留意分寸|交流通暢，維持平衡|溝通受阻，先穩住自己|尋找共識，與人合作|資源充足，善用並分享|保持謙遜，踏實累積|預先準備，避免鬆懈|順勢調整，審慎選擇|整理積弊，修復根本|機會靠近，保留長遠眼光|觀察局勢，反省自身|面對阻礙，清楚處理|重視表達，也照顧實質|局勢削弱，保護基礎|重新出發，循序恢復|真誠行事，避免妄求|累積實力，適時節制|照顧需求，慎選滋養來源|負擔偏重，調整承擔|處境有險，謹慎求穩|保持清明，尋找依循|相互感應，真誠交流|持續耕耘，維持節奏|適時退讓，保存實力|力量增長，避免逞強|逐漸進展，穩步向前|收斂鋒芒，保護自己|各安其位，重視內部溝通|觀點不同，求同存異|前路受阻，尋求協助|舒緩困局，處理遺留問題|適度減少，回歸核心|善用增益，互相支持|果斷處理，兼顧分寸|突然相遇，審慎選擇|凝聚資源，建立共識|逐步上升，持續累積|受限之時，守住原則|維護根基，分享資源|適時改變，備妥條件|整合資源，建立新秩序|面對震動，先定心神|適時停下，安定思緒|循序漸進，避免躁進|關係與位置未穩，審慎承諾|成果豐盛，留意後續維持|身在過渡，保持彈性|柔和深入，持續溝通|交流喜悅，真誠相待|化解隔閡，重新凝聚|設定界限，適度節制|以誠相待，建立信任|小步調整，注意細節|事情初成，持續維護|尚未完成，審慎推進'.split('|');
function parse(text){
const s=text.normalize('NFKC').trim();
if(/^\d{9}$/.test(s))return s.match(/\d{3}/g);
const parts=s.split(/[\s,，、/／|｜-]+/);
if(parts.length!==3||!parts.every(p=>/^\d{3}$/.test(p)))throw Error('請輸入九位數，或三組各三位數，例如 178 589 006。');
return parts;
}
function hex(upper,lower){const id=table[upper-1][lower-1];return {id,name:upper===lower?trigrams[upper][0]+'為'+trigrams[upper][1]:trigrams[upper][1]+trigrams[lower][1]+names[id-1],theme:themes[id-1],bits:trigrams[lower][2]|(trigrams[upper][2]<<3)};}
function calculate(text){const numbers=parse(text),u=+numbers[0]%8||8,l=+numbers[1]%8||8,moving=+numbers[2]%6||6,base=hex(u,l),bits=base.bits^(1<<(moving-1)),bu=trigrams.findIndex(t=>t&&t[2]===(bits>>3)),bl=trigrams.findIndex(t=>t&&t[2]===(bits&7));return {numbers,upper:u,lower:l,moving,base,changed:hex(bu,bl)};}
const api={calculate,parse,trigrams,table,hex};
if(typeof module!=='undefined')module.exports=api;else root.Oracle=api;
})(globalThis);
