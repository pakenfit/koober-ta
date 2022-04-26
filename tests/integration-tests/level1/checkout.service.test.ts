import { areEqual } from '@level1/services/file.service';
import { checkout } from '@level1/services/checkout.service';
describe('test checkout function', () => {
  it('checkout() should generate output.json to be equal to expected_output.json', async () => {
    await checkout();
    const equal: boolean = await areEqual();
    expect(equal).toBeTruthy();
  });
});
