import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorown}`, `${await conn.getName(nomorown+'@s.whatsapp.net')}`, `💌 ZENI BOT `, `Made with Love`, `LOVE U`, `🇮🇩 Indonesia`, `📍 https://github.com/louisdpr0`, `👤 Owner Nao Bot`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `KSR CLOUD`, `Dont Spam`, `Nothing`, `🇮🇩 Indonesia`, `📍 https://github.com/louisdpr0`, `Hanya bot biasa yang kadang error`]
  ], fkontak)
  await m.reply(`Hello @${m.sender.split(`@`)[0]} (LouisdPro)`)
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
export default handler