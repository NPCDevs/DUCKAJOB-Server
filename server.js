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

// const bot = new TelegramApi(token, { polling: true });

// bot.on('message', (msg) => {
//   const text = msg.text;
//   const chatId = msg.chat.id;
//   switch (text) {
//     case '/help':
//       bot.sendMessage(chatId, `Text for help command`);
//       break;
//     default:
//       break;
//   }
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
