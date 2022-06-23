let handler = async m => m.reply(`
╭─「 Donasi • GOPAY 」
│ •  [085795005004]
│ SEIKHLASNYA YA KAK
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
