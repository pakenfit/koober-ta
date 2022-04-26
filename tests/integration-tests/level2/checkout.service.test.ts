import { areEqual } from '@level2/services/file.service';
import { checkout } from '@level2/services/checkout.service';
describe('test checkout function', () => {
  it('checkout() should generate output.json to be equal to expected_output.json', async () => {
    await checkout();
    const equal: boolean = await areEqual();
    expect(equal).toBeTruthy();
  });
});
