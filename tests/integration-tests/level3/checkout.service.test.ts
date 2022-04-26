import { areEqual } from '@level3/services/file.service';
import { checkout } from '@level3/services/checkout.service';
describe('test checkout function', () => {
  it('checkout() should generate output.json to be equal to expected_output.json', async () => {
    await checkout();
    const equal: boolean = await areEqual();
    expect(equal).toBeTruthy();
  });
});
