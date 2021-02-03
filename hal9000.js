console.log('Im alive');
const Discord = require('discord.js')
const client = new Discord.Client();
const fetch = require('node-fetch');
require('dotenv').config();

client.login(process.env.API_KEY);

client.on('ready', readyDiscord);