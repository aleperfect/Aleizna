import axios from "axios";
import akaneko from "akaneko";
import CLUB from "club-atticus";
import fetch from "node-fetch";
const handler = async (m, {command, conn}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*';

if (command == 'nsfwmuslos') {
        const muslo = await akaneko.nsfw.thighs();  
    const caption = `*乂 ⺀ NSFW MUSLOS ⺀ 乂*` 
    await conn.sendFile(m.chat, muslo, "zirax.jpg", caption, m);
  }

if (command == 'nsfwsuccubus') {
        const sucu = await akaneko.nsfw.succubus();  
    const caption = `*乂 ⺀ NSFW SUCCUBUS ⺀ 乂*` 
    await conn.sendFile(m.chat, sucu, "zirax.jpg", caption, m);
  }

if (command == 'nsfwfeet') {
  const pies = await akaneko.nsfw.feet();  
    const caption = `*乂 ⺀ NSFW PIES⺀ 乂*` 
    await conn.sendFile(m.chat, pies, "zirax.jpg", caption, m); 
 }  

  if (command == 'nsfwloli') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

if (command == 'nsfwchupada') {
        const bloxd = await akaneko.nsfw.blowjob();  
    const caption = `*乂 ⺀ NSFW CHUPADA ⺀ 乂*` 
    await conn.sendFile(m.chat, bloxd, "zirax.jpg", caption, m);
  }

if (command == 'nsfwuniform') {
  const uniform = await akaneko.nsfw.uniform();  
    const caption = `*乂 ⺀ NSFW UNIFORM ⺀ 乂*` 
    await conn.sendFile(m.chat, uniform, "zirax.jpg", caption, m); 
 }  

if (command == 'nsfwschool') {
  const Ziraxpro = await akaneko.nsfw.school();  
    const caption = `*乂 ⺀ NSFW SCHOOL ⺀ 乂*` 
    await conn.sendFile(m.chat, Ziraxpro, "zirax.jpg", caption, m); 
 }  

  if (command == 'nsfwass') {
        const assxd = await akaneko.nsfw.ass();  
    const caption = `*乂 ⺀ NSFW ASS ⺀ 乂*` 
    await conn.sendFile(m.chat, assxd, "zirax.jpg", caption, m);
  }

  if (command == 'nsfwbdsm') {
       const skidputo = await akaneko.nsfw.bdsm();  
    const caption = `*乂 ⺀ NSFW - BDSM ⺀ 乂*` 
    await conn.sendFile(m.chat, skidputo, "zirax.jpg", caption, m); 
 };

  if (command == 'nsfwcum') {
     const cumfw = await akaneko.nsfw.cum();  
    const caption = `*乂 ⺀ NSFW - CUM ⺀ 乂*` 
    await conn.sendFile(m.chat, cumfw, "zirax.jpg", caption, m); 
 }

  if (command == 'nsfwero') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwero.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'nsfwfemdom') {
    const elpepexd = await akaneko.nsfw.femdom();  
    const caption = `*乂 ⺀ NSFW - FEMDOM ⺀ 乂*` 
    await conn.sendFile(m.chat, elpepexd, "zirax.jpg", caption, m); 
 }

  if (command == 'nsfwglass') {
  const gatapendeja = await akaneko.nsfw.glasses();  
    const caption = `*乂 ⺀ NSFW GLASS ⺀ 乂*` 
    await conn.sendFile(m.chat, gatapendeja, "zirax.jpg", caption, m); 
 }  

 if (command == 'pussy') {
   const pussyxd = new CLUB();
  const skidputoidiota = await pussyxd.pussy(); 
    const caption = `*乂 ⺀ NSFW - PUSSY ⺀ 乂*` 
    await conn.sendFile(m.chat, skidputoidiota, "zirax.jpg", caption, m); 
}
  if (command == 'hentai') {
        const akafw = await akaneko.nsfw.hentai();  
    const caption = `*乂 ⺀ HENTAI ⺀ 乂*` 
    await conn.sendFile(m.chat, akafw, "zirax.jpg", caption, m); 
 }
if (command == 'tetas2') {
   const tetasgodx = new CLUB();
  const tetasgodV = await tetasgodx.hboobs(); 
    const caption = `*乂 ⺀ NSFW - TETAS ⺀ 乂*` 
    await conn.sendFile(m.chat, tetasgodV, "zirax.jpg", caption, m); 
}

  if (command == 'nsfworgy') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfworgy.json`)).data;
    const haha = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'tetas') {
   const tetasgodxd = new CLUB();
  const tetasgod2 = await tetasgodxd.boobs(); 
    const caption = `*乂 ⺀ NSFW - TETAS ⺀ 乂*` 
    await conn.sendFile(m.chat, tetasgod2, "zirax.jpg", caption, m); 
}
  if (command == 'booty') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'ecchi') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'furro') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'trapito') {
    const res = await fetch(`https://api.waifu.pics/nsfw/trap`);
    const json = await res.json();
    const url = json.url;
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'imagenlesbians') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'panties') {
   const pantixd = await akaneko.nsfw.panties();  
    const caption = `*乂 ⺀ NSFW - PANTIES ⺀ 乂*` 
    await conn.sendFile(m.chat, pantixd, "zirax.jpg", caption, m); 
 }

  if (command == 'pene') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pene.json`)).data;
    let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`).data;
    if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: res}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'porno') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'randomxxx') {
    const rawjsonn = ['https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json'];
    const rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())];
    const res = (await axios.get(rawjson)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }

  if (command == 'pechos') {
    const res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pechos.json`)).data;
    const url = await res[Math.floor(res.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }


  if (command == 'yuri') {
    const akxdSkidputo = await akaneko.nsfw.yuri();  
    const caption = `*乂 ⺀ NSFW - YURI ⺀ 乂*` 
    await conn.sendFile(m.chat, akxdSkidputo, "zirax.jpg", caption, m); 
 }
  if (command == 'yuri2') {
    const resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data;
    const res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`);
    const json = await res.json();
    let url = json.link;
    if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())];
    conn.sendMessage(m.chat, {image: {url: url}, caption: `_${command}_`.trim()}, {quoted: m});
  }
};

handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos', 'pussy', 'tetas2', 'nsfwuniform', 'nsfwschool', 'nsfwchupada', 'nsfwfeet', 'nsfwsuccubus'];
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos', 'pussy', 'tetas2', 'nsfwuniform', 'nsfwschool', 'nsfwchupada', 'nsfwfeet', 'nsfwsuccubus'];
handler.tags = ['nsfw'];
handler.dolares = 7
export default handler
