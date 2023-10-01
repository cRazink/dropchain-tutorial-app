const fs = require('fs');
const path = require('path');

const devlinkDir = path.join(__dirname, '/devlink');
const pagesDir = path.join(__dirname, '/pages');

// Get unique prefixes from the devlink directory
const getUniquePrefixes = () => {
  const files = fs.readdirSync(devlinkDir);
  const prefixes = new Set();
  
  files.forEach(file => {
    const prefix = file.split('.')[0];
    prefixes.add(prefix);
  });
  
  return Array.from(prefixes);
};

// Generate a page for each unique prefix
const generatePages = (prefixes) => {
  prefixes.forEach(prefix => {
    const pageContent = `
import RootLayout from '../../app/layout';
import { ${prefix} } from '@/devlink/${prefix}';

export default function ${prefix}Page() {
  return (
    <RootLayout>
      <${prefix} />
    </RootLayout>
  );
}
`;

    fs.writeFileSync(path.join(pagesDir, `${prefix}Page.tsx`), pageContent);
  });
};

// Run the script
const prefixes = getUniquePrefixes();
generatePages(prefixes);
