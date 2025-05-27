const _0x559736 = _0x12dc;
function _0x12dc($, x) {
    let a = _0x1c72();
    return (_0x12dc = function($, x) { return a[$ -= 137] })($, x)
}

!function($, x) {
    let a = _0x12dc,
        e = $();
    for (;;) try {
        let t = -parseInt(a(158)) / 1 * (parseInt(a(142)) / 2) + -parseInt(a(190)) / 3 * (-parseInt(a(178)) / 4) + parseInt(a(162)) / 5 + -parseInt(a(181)) / 6 + parseInt(a(174)) / 7 + parseInt(a(139)) / 8 + parseInt(a(156)) / 9 * (-parseInt(a(153)) / 10);
        if (904874 === t) break;
        e.push(e.shift())
    } catch (c) {
        e.push(e.shift())
    }
}(_0x1c72, 904874);

// Removed duplicate chalk import
const { prompt: $, logMessage: x, rl: a } = require(_0x559736(176)),
    ariChain = require("./src/classes/ariChain"),
    { generatePassword: e } = require(_0x559736(188)),
    { getRandomProxy: t, loadProxies: c } = require(_0x559736(166)),
    chalk = require("chalk"),
    fs = require("fs");

const emojis = ["👨‍💻", "👹", "👻", "👾", "🥶"]; // List of emojis for the effect

// Function to display a message with an emoji and random color
function logWithEmoji(message) {
    const randomColor = ["yellow", "red", "cyan", "magenta", "green", "blue"];
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    let randomTextColor = randomColor[Math.floor(Math.random() * randomColor.length)];

    console.log(chalk[randomTextColor](message) + " " + randomEmoji); // Print the message with color and emoji
}

function _0x1c72() {
    let $ = ["yellow", "white", "close", "Email: ", "5870792yOQuev", "Register Account Failed", "Reff To : ", "134lyownX", "sendEmailCode", "Choose CAPTCHA solver : \n1.2Captcha\n2.Anti-Captcha\n3.Gemini\nEnter number: ", "green", "magenta", "Password : ", "\n[*] Done Sir!", "createWriteStream", "invite_code", "exports", "log", "57320snndWS", "error", "process", "3114pinhvX", "Invite Code : ", "8960xTIiVk", "How many do you want? ", "\n░█▀█░█▀▄░▀█▀░█▀▀░█░█░█▀█░▀█▀░█▀█\n░█▀█░█▀▄░░█░░█░░░█▀█░█▀█░░█░░█░█\n░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░▀░▀░▀░▀▀▀░▀░▀\n     Author : cryptowithAryanog\n     Welcome & Enjoy Sir!\n  ", "from", "7893290upqmJs", "message", "write", "Email : ", "./src/classes/proxy", "success", "Checkin Daily Done", "Address : ", "chalk", "registerAccount", "No Proxy. Using default IP", "address", "843164voJFAi", "accountsbot.txt", "./src/utils/logger", "repeat", "28916AElxoO", "end", "master_key", "520050Vmlrkc", "cyan", "Failed checkin daily", "accounts.txt", "result", "Password: ", "Your gemini API key has reached the limit. Please wait for the quota to reset.", "./src/utils/generator", "Enter Referral Code: ", "474CVyjnI"];
    return (_0x1c72 = function() { return $ })()
}

async function main() {
    let r = _0x559736;
    console.log(`
██╗  ██╗ █████╗ ███████╗██╗   ██╗██╗  ██╗ █████╗ 
██║ ██╔╝██╔══██╗╚══███╔╝██║   ██║██║  ██║██╔══██╗
█████╔╝ ███████║  ███╔╝ ██║   ██║███████║███████║
██╔═██╗ ██╔══██║ ███╔╝  ██║   ██║██╔══██║██╔══██║
██║  ██╗██║  ██║███████╗╚██████╔╝██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
                                                 
 Only Follow the me in https://t.me/cryptowithAryanog
`);
    let n = await $(chalk[r(191)](r(144))),
        i = "1" === n,
        s = "2" === n,
        o = await $(chalk[r(191)](r(189))),
        l = parseInt(await $(chalk[r(191)](r(159)))),
        u = c();
    u || x(null, null, r(172), "warning");

    let f = 0,
        h = fs[r(149)](r(184), { flags: "a" }),
        d = fs[r(149)](r(175), { flags: "a" });
    try {
        for (let b = 0; b < l; b++) {
            logWithEmoji(chalk[r(191)]("Processing register account"));
            let _ = await t(b + 1, l),
                m = new ariChain(o, _, b + 1, l);
            try {
                let y = m.generateTempEmail(),
                    g = e(),
                    k = await m[r(143)](y, i, s);
                if (!k) continue;
                let w = await m[r(171)](y, g);
                if (w) {
                    h[r(164)](r(165) + y + "\n"),
                        h[r(164)](r(147) + g + "\n"),
                        h[r(164)](r(169) + w[r(185)].address + "\n"),
                        h[r(164)]("Master Key : " + w[r(185)][r(180)] + "\n"),
                        h[r(164)](r(157) + w.result[r(150)] + "\n"),
                        h[r(164)]("Reff To: " + o + "\n"),
                        d[r(164)](y + ":" + g + "\n"),
                        h[r(164)]("-".repeat(85) + "\n"),
                        f++,
                        logWithEmoji(b + 1 + "/" + l + " " + r(138) + y),
                        logWithEmoji(b + 1 + "/" + l + " " + r(186) + g),
                        logWithEmoji(b + 1 + "/" + l + " " + r(141) + o);
                    let C = w[r(185)][r(173)];
                    try {
                        let p = await m.checkinDaily(C);
                        if (logWithEmoji(b + 1 + "/" + l + " " + r(168)), !p) throw Error(r(183))
                    } catch (A) {
                        logWithEmoji(b + 1 + "/" + l + " " + A[r(163)], "error");
                        continue
                    }
                } else logWithEmoji(b + 1 + "/" + l + " " + r(140), "error")
            } catch (E) {
                if (E[r(163)] === r(187)) {
                    logWithEmoji(b + 1 + "/" + l + " " + E.message, "error");
                    break
                }
                logWithEmoji(b + 1 + "/" + l + " Error: " + E[r(163)], "error")
            }
        }
    } finally {
        h[r(179)](),
        d[r(179)](),
        console[r(152)](chalk[r(146)](r(148))),
        console[r(152)](chalk[r(145)]("[*] Account Done " + f + r(161) + l + " akun")),
        console.log(chalk.magenta("[*] Result in accounts.txt")),
        a[r(137)]()
    }
}

module[_0x559736(151)] = { main: main };
