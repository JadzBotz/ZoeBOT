exports.wait = () => {
	return`*「❗」Espere um pouco!*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「❗」Nivel ativo!*`
}

exports.lvloff = () => {
	return`*「❗」Nivel desativado!*`
}

exports.lvlnul = () => {
	return`*「❗」SEU NIVEL É INSUFICIENTEMENTE!*`
}

exports.lvlnoon = () => {
	return`*「❗」O NIVEL DO GRUPO NAO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「❗」NAO REGISTRADO*\n*como registrar ${prefix}daftar nome|idade* \n\n*exemplo ${prefix}daftar Irineu|15*`
}

exports.baned = () => {
	return`*「❗」Desculpa, mas voce foi banido de usar o BOT!*`
}

exports.premium = () => {
	return`*「❗」Desculpe, voce nao e um usuario premium ! entre em contato com o proprietario para ser de tipo premium ${prefix}owner*`
}

exports.rediregis = () => {
	return`*「 JA REGISTRADO 」*\n\n*Ja te conheço mano...*`
}

exports.stikga = () => {
	return`*「 FALHOU 」Tente mais tarde!*`
}

exports.linkga = () => {
	return`*「❗」desculpe o link e invalido sis*`
}

exports.groupo = () => {
	return`*「❗」SO EM GRUPO*`
}

exports.ownerb = () => {
	return`*「❗」DONO DO BOT APENAS*`
}

exports.ownerg = () => {
	return`*「❗」DONO GRUPO APENAS*`
}

exports.admin = () => {
	return`*「❗」ADM DO GRUPO APENAS*`
}

exports.badmin = () => {
	return`*「❗」O BOT DEVE SER ADM*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW EM ATIVO*`
}

exports.bug = () => {
	return`*O problema foi relatado ao proprietario de BOT, relatorios falsos/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🤔」Cade o texto?*`
}

exports.clears = () => {
	return`*「🚮」Chat limpo com sucesso!*`
}

exports.pc = () => {
	return`*「❗」CADASTRO*\n\n para saber se voce se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*se você nao entendeu a mensagem. significa que voce nao salvou o número de seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`*「 REGISTRO DE SUCESSO 」*\nPara Informacoes De Usuario :\n\n*➸ Nome : ${namaUser}*\n*➸ Numero : wa.me/${sender.split("@")[0]}*\n*➸ Idade : ${umurUser}*\n*➸ Hora Do Registro : ${time}*\n\n*「SN」: ${serialUser}*\n_NOTA : Esta mensagem e importante :v_`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 VOA MLK!!🚀 」*
➸ *Nome* : ${pushname}
➸ *Numero* : wa.me/${sender.split("@")[0]}
➸ *Grana* : ${getLevelingXp(sender)}
➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} O limite de hoje aumentou*\n*O limite e zerado a cada hora 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE CONTA 」*
Você chegou ao seu limite : ${limitCounts}

Suba seu nível ou vire PREMIUM!`
}

exports.satukos = () => {
	return`*Como ativar 1/habilitar ou 0/desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓\n┃╭───────────────────\n┃│➸ NOME : ${pushname}\n┃│➸ NOMOR : ${sender.split("@")[0]}\n┃│➸ UANG : ${uangkau}\n┃╰───────────────────\n┗━━━━━━━━━━━━━━━━━━━━┛`
}
