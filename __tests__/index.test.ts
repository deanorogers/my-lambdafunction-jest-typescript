// const name = require('../index');
import {nameConcat} from '../src-ts/index';

test('name is concatenated successfully', () => {
  expect(nameConcat("Dean", "Rogers")).toBe("Rogers, Dean");
});