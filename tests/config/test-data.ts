export type TestData = {
  appUrl: string;
  username: string;
  password: string;
  name: string;
};

function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not defined. Please check your .env file.`);
  }
  return value;
}

export const testData: TestData = {
  appUrl: getEnvVariable('APP_URL'),
  username: getEnvVariable('APP_USERNAME'),
  password: getEnvVariable('APP_PASSWORD'),
  name: 'tesst'
};
