import charsArr from '../models';
import Team from '../iterator';

test('Iteration through Team test', () => {
  const team = new Team(charsArr);
  let i = 0;
  for (const char of team) {
    expect(char).toEqual(charsArr[i]);
    i += 1;
  }
});
