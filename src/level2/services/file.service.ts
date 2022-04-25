import { OutputType } from '@level2/types/output.type';
import { InputType } from '@level2/types/input.type';
import { promises } from 'fs';
import path from 'path';

/**
 * This function loads dynamically the input.json file
 * @returns InputType
 */
export const getJson = async (
  file: string = path.join(__dirname, '../models/input.json'),
): Promise<InputType | OutputType> => (await import(file)).default;

/**
 * This function writes json data to the output file
 * @param data
 * @returns output.json
 */
export const writeOutput = async (data: OutputType): Promise<void> => {
  try {
    await promises.mkdir(path.join(__dirname, '../output/'));
  } catch (error) {
    //
  }

  await promises.writeFile(
    path.join(__dirname, '../output/output.json'),
    JSON.stringify(data, null, 2),
  );
};

/**
 * This function compares the output and
 * the expected output
 * @returns
 */
export const areEqual = async (): Promise<boolean> => {
  const output: OutputType = (await getJson(
    path.join(__dirname, '../output/output.json'),
  )) as OutputType;
  const expected_output: OutputType = (await getJson(
    path.join(__dirname, '../models/expected_output.json'),
  )) as OutputType;

  return JSON.stringify(expected_output) === JSON.stringify(output);
};
