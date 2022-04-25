import { writeOutput } from '@level1/services/file.service';
import { OutputType } from '@level1/types/output.type';
import { getJson } from '@level1/services/file.service';
import { InputType } from '@level1/types/input.type';
import path from 'path';

describe('get Json function', () => {
  it('Should load dynamically the json file and get the data', async () => {
    const data: InputType = (await getJson(
      path.join(__dirname, '/input.json'),
    )) as InputType;

    const expected_data: InputType = {
      articles: [
        {
          id: 1,
          name: 'water',
          price: 100,
        },
      ],
      carts: [
        {
          id: 1,
          items: [
            {
              article_id: 1,
              quantity: 6,
            },
          ],
        },
      ],
    };

    expect(JSON.stringify(data)).toEqual(JSON.stringify(expected_data));
  });
});

describe('write output function', () => {
  it('Should write given json data to the file output.json', async () => {
    const data_to_write: OutputType = {
      carts: [
        { id: 1, total: 100 },
        { id: 2, total: 200 },
      ],
    };
    await writeOutput(data_to_write);
    //We read data from output.json and compare to the initial data
    const data_from_output_file: OutputType = (await getJson(
      '@level1/output/output.json',
    )) as OutputType;

    expect(JSON.stringify(data_to_write)).toEqual(
      JSON.stringify(data_from_output_file),
    );
  });
});
