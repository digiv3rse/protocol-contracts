import { join } from 'path';
import { writeFileSync } from 'fs';

const addressesPath = '../../addresses.json';

const addresses = require(join(__dirname, addressesPath));

// If no arguments are passed - fail
if (process.argv.length < 5) {
  console.error('Usage: node saveAddress.js <targetEnv> <contractName> <address>');
  process.exit(1);
}

// If 3 arguments are passed - save the contract address
if (process.argv.length === 5) {
  const [targetEnv, contract, address] = process.argv.slice(2);
  addresses[targetEnv][contract] = address;

  writeFileSync(join(__dirname, addressesPath), JSON.stringify(addresses, null, 2) + '\n');
  console.log('Updated `addresses.json`');
  process.exit(0);
}

// If 5 arguments are passed - save the module address in modules
if (process.argv.length === 7) {
  const [targetEnv, moduleName, moduleAddress, digiVersion, moduleType] = process.argv.slice(2);
  if (addresses[targetEnv]['Modules'][digiVersion][moduleType] === undefined) {
    addresses[targetEnv]['Modules'][digiVersion][moduleType] = [];
  }

  // Check if the module with a same name is already in the list
  const moduleIndex = addresses[targetEnv]['Modules'][digiVersion][moduleType].findIndex(
    (module) => module.name === moduleName
  );

  if (moduleIndex === -1) {
    addresses[targetEnv]['Modules'][digiVersion][moduleType].push({
      name: moduleName,
      addy: moduleAddress,
    });
  } else {
    // Get the module object from the list by index and change the addy:
    addresses[targetEnv]['Modules'][digiVersion][moduleType][moduleIndex].addy = moduleAddress;
  }

  writeFileSync(join(__dirname, addressesPath), JSON.stringify(addresses, null, 2) + '\n');
  console.log('Updated `addresses.json`');
  process.exit(0);
}
