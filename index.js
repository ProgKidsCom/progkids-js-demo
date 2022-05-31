const { setBlock } = require('progkids/lib/world');
const { getPos } = require('progkids/lib/player');
const { connect } = require('progkids/lib/server');
const dotenv = require('dotenv');

dotenv.config();

const main = async () => {
  try {
    await connect({
      nick: process.env.NICK,
      token: process.env.TOKEN
    });
  } catch (error) {
    console.log(error);
  }

  setInterval(async () => {
    const result = await getPos();

    const { ret } = result;
    if (ret && ret.length === 3) {
      await setBlock(ret[0], ret[1], ret[2], 1);
      console.log('done!');
    } else {
      console.log(result);
    }
  }, 5000);
};

main();
