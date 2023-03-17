const TelegramApi = require('node-telegram-bot-api');
const express = require('express');
const server = express();
const dotenv = require('dotenv').config();
const connectDB = require('./db');

var cors = require('cors');

const PORT = 3001;

server.use(cors());

server.use(express.json());
server.use('/public', express.static('public'));

connectDB();

const token = process.env.BOT_TOKEN;

const bot = new TelegramApi(token, { polling: true });

function getRandomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

bot.on('message', async (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  switch (text) {
    case '/start':
      await bot.sendSticker(
        chatId,
        'CAACAgIAAxkBAANGZBTHhyAI3v2himIPQqTTC4i5fZMAAgEBAAJWnb0KIr6fDrjC5jQvBA',
      );
      bot.sendMessage(
        chatId,
        `Welcome to Duck a Job, the ultimate freelancing app that leverages the power of smart contracts on the TON blockchain to facilitate secure and transparent transactions between employers and freelancers. You can start using the bot by pressing button "Open app"`,
      );
      break;
    case '/help':
      bot.sendMessage(chatId, `Text for help command`);
      break;
    default:
      const randomNumber = getRandomNumber();
      switch (randomNumber) {
        case 1:
          bot.sendSticker(
            chatId,
            'CAACAgIAAxkBAANrZBTKGK32Pt_Z55C0fcsPSXQl2iUAAvkAA1advQqVZW6rKisbNi8E',
          );
          break;

        case 2:
          bot.sendSticker(
            chatId,
            'CAACAgIAAxkBAAN_ZBTLEBOkBbxjIXDpk3h1A3g_BQoAAgsBAAJWnb0KTrHnpgj77UkvBA',
          );
          break;

        default:
          bot.sendSticker(
            chatId,
            'CAACAgIAAxkBAANvZBTKVZDmZn0XnOKD0fHeOdrpApsAAgIBAAJWnb0KTuJsgctA5P8vBA',
          );
          break;
      }

      break;
  }
});

// bot.on('sticker', (msg) => {
//   console.log(msg.sticker);
// });

server.use('/', require('./Routes/index'));

const startApp = async () => {
  // try {
  //   db.authenticate()
  //     .then(() => console.log('Database connected...'))
  //     .catch((err) => console.log('Error ', err));
  // } catch (error) {
  //   console.log('DB ERROR');
  // }

  try {
    server.listen(PORT, () => {
      console.log(`Listening server on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
