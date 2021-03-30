const storage = require('node-persist');

const createID = async () => {
  await storage.init({ dir: '../data/' });

  await storage.setItem('counter', counter).then(() => {
    res.json(counter);
  });

  fs.writeFileSync('./data/counter.json', JSON.stringify(count), (err) => {
    if (err) throw err;
    console.log('Bounties Built and Saved');
  });
  count++;
  return count;
};

module.exports = { createID };
