import 'module-alias/register';
import { checkout } from '@level1/services/checkout.service';

async function main() {
  try {
    await checkout();
  } catch (error: any) {
    console.log('OOPS This error occured ', error.message);
  }
}

if (require.main === module) {
  main();
}
