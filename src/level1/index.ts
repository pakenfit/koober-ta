import 'module-alias/register';
import { checkout } from '@level1/services/checkout.service';

async function main() {
  await checkout();
}

if (require.main === module) {
  main();
}
