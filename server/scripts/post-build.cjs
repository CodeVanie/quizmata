const fs = require('fs');
const path = require('path');

const distPackageJson = {
  type: "module"
};

fs.writeFileSync(
  path.join(__dirname, '../dist/package.json'),
  JSON.stringify(distPackageJson, null, 2)
);

console.log('✓ Created dist/package.json with type: module');