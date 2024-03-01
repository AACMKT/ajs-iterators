export default class Team {
  constructor(team) {
    this.team = team;
  }

  [Symbol.iterator]() {
    let i = 0;
    const team = this.team;
    return {
      next() {
        if (i < team.length) {
          i += 1;
          return {
            value: team[i - 1],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
