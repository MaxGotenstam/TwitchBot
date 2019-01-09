const tmi = require("tmi.js");

const opts = {
  identity: {
    username: "argbotfan",
    password: "oauth:g9erooun01w51rggt1rrossp8afqet"
  },
  channels: ["arcadecat"]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);
client.on("chat", onSomethingHandler);
// client.on('chatter', onM)
// client.on('userstate')
// Connect to Twitch:
client.connect();

function onSomethingHandler(target, username, message, self) {
  if (self) return;

  else if (message.includes("VoHiYo")) {
    client.timeout("arcadecat", username['display-name'], 30, "Weeb");
    client.whisper(username['display-name'], "You have been naughty and are timed out for 30 seconds");
    client.say(
      target,
      "User " +
        username["display-name"] +
        " is now timed out! Reason: Weeb" 
    );
    console.log(`* Executed weeb defence`);
  } 
  else if (message.includes("lgwMlem")) {
    // client.say(target, "/Timeout " + username["display-name"]);
    client.timeout("arcadecat", username['display-name'], 30, "Furry");
    client.whisper(username['display-name'], "You have been naughty and are timed out for 30 seconds");
    client.say(
      target,
      "User " +
        username["display-name"] +
        " is now banned for using furry emote DansGame"
    );
    console.log(`* Executed furry defence`);
  }
  else if(message.toLowerCase().includes("bridge")){
    client.say(target,"⣿⣿⣿⣿⡟⠄⣌⠻⣿⣿⣿⣿⣿⠟⠋⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⡇⢸⣭⡇⢽⣿⣿⠏⣀⣶⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⣿⣿⣷⣾⢿⣿⣿⣿⣿⣶⣭⣛⢃⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⣿⣿⡛⠈⠛⠁⠙⠉⠛⠿⠛⢟⡿⣿⣷⡝⢿⡿⢻⣿⣿⣿⣿⣿⣿ ⣿⡹⠄⢀⣷⣶⣶⣿⣿⣿⣿⣷⣶⡍⠹⡿⠆⠙⣼⣿⣿⣿⣿⣿⣿ ⢫⣷⣧⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄⠄⢀⣴⣶⣏⡛⢿⣿⣿⣿⣿ ⢸⣿⣿⠛⠿⣿⣿⣿⣿⣿⣿⠿⠁⠄⠄⣾⣿⣿⣿⡟⣨⣿⣿⣿⣿ ⡘⣿⣿⣧⣀⣀⣹⣏⢀⣀⣀⣀⣠⡄⢸⣿⣿⣿⣿⢀⣿⣿⣿⣿⣿ ⣷⣼⣋⠈⣿⣿⣿⣿⣿⣿⣿⣿⠟⠄⠈⠛⢿⠏⢙⠈⠁⠄⠙⣿⣿ ⣿⣿⣿⠄⠹⠟⠛⠉⠡⠿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣿ ⣿⣿⠿⠃⠄⠄⣀⡀⠄⠄⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢹ ⠄⠄⢀⡆⣰⠟⠷⣤⠤⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄ ⠄⢀⠎⠄⠃⢀⠞⠉⢳⣴⣶⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀");
    console.log(`* Executed pewdiepie`)
  }
}

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  if (commandName === "!NaM") {
    client.say(target, `NaM`);
    console.log(`* Executed ${commandName} command`);
  } else if (commandName === "!TrafficNam") {
    client.say(
      target,
      `🏍🚑 NaM 🚜🚓🚛🚕 NaM 🚚🚗🏎🚜🚓🏍 NaM 🚕🚜🚕🚛🚕🚚🚗 SORRY FOR TRAFFIC NAM 🚕🚜🚕🚓🚛🏎🚑🚒 NaM 🚓🏍🚓🚜 NaM 🏎🏎🚜 NaM 🏎🚜🚓🚜 NaM 🚑🚑 NaM 🚗🚗🚚 NaM 🚗🏎🏎🚚🚛 NaM 🚓🚜🚕🚜🚙🏍 NaM 🚙🏍🚌🚲 NaM 🚌🚐🚌🚒 NaM 🚎🚒🚙🚕🚕🚑🏍🚓🚜🚛 NaM 🚚🚚🚗🚗🚜🚓 NaM 🚑🚒🚑🚲🚒🚲 NaM 🚎🏍🚌🚜🚙🚛🚕🚚 NaM 🚕🚚🚗🏎🏍🚓🏍🚓🚓🚓🏍🚒 NaM 🚒🚕🚕🚚🚚🏎🚜 NaM 🚓🚓🚓🏍🚑🚑🚒🚌🏍🚜`
    );
    console.log(`* Executed ${commandName} command`);
  } else if (commandName === "!scamaz") {
    client.say(
      target,
      `⣾⣿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠁⠄⠄⠄⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠙⠿⣿⣿⣿⣿⣿ ⠄⠄⠄⣀⣀⠄⠄⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⢀⣤⣴⣶⣾⣿⣿⣿⣿⣿ ⠄⠄⠄⠄⠈⠁⠄⠄⠄⠄⠉⠉⠙⠛⠛⠛⠉⠁⠄⠄⠚⠉⠉⠁⠄⠄⠄⠄⣀⠈⠉ ⠄⠄⠄⢀⡀⠄⠄⣠⣄⠠⠄⠄⠄⠄⠄⠄⢶⡤⠄⠤⠶⣀⣀⣠⣾⣶⣦⣦⣤⠄⠉ ⣿⡇⠄⠄⠄⠈⠉⠉⣠⣀⠄⢀⣾⣿⣦⠄⢹⣿⣷⣄⣀⣀⣈⣙⣛⣹⣿⣿⣿⠄⠄ ⣿⣇⣀⣀⣠⣤⣾⣿⣿⠟⢀⣾⣿⣿⣿⣧⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠄⣴ ⠄⠉⠉⠉⠉⠉⠉⠄⠄⢀⣾⣿⣿⣿⣿⣿⣷⣦⣀⠉⠉⠉⠙⠛⠋⢉⣭⣥⣤⣾⣿ ⠄⣠⣤⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠘⠻⣿⣿⣿⣿⣿⣿⠛⠉⠛⠛⠿⠿⠟⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠄⠻⣿⡿⠛⣿⣷⣄⡀⠄⠄⢀⣤⣴⣶⣾⣿⣿⣿⡟⠛⢿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⣴⣿⣿⣇⠄⠈⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⣄⣨⣿⣿⣿⣿⣿⣿⣿ ⠄⠴⣿⣿⣿⣿⣿⣤⣀⣀⠘⠻⢿⣿⣿⣿⡿⠟⣁⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿ ⠄⠄⠙⠋⠹⣿⣿⣿⣿⣿⣿⣷⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿ ⠄⠄⠄⠄⠄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋`
    );
    client.say(target, `WutFace`);
    console.log(`* Executed ${commandName} command`);
  } else if (msg.toLowerCase().includes("arcadecat")) {
    //using string.includes is case-sensitive, so it is better to just make it lowercase
    client.say(target, `@${target} Hello!`);
    console.log(`* Executed ${commandName} command`);
  }

  // If the command is known, let's execute it
  else if (commandName === "!dice") {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else if (commandName.charAt(0) == "!" && commandName.length > 1) {
    console.log(`* Unknown command ${commandName}`);
  }
}

// Function called when the "dice" command is issued
function rollDice() {
  return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
