const {Telegraf} = require("telegraf")

const bot = new Telegraf('5713230132:AAHhnw3Pg-5T9ql0ytO_mizjlVQy9Yr-pqw')

bot.on("text", ctx => {
    let value = ctx.message.text.includes("bin")
    if (value === true) {
        let text = ctx.message.text

        let array = text.split("\n")

        for(let i = 1; i < array.length; i++) {
            setTimeout(function mandar() {
                ctx.reply(`.cc ${array[i]}`)
            }, i*15000)
        }
    }
})

bot.launch();