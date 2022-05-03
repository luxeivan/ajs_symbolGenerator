export default class Team {
  constructor() {
    this.teams = [
      {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      }, {
        name: 'Демон',
        type: 'Daemon',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      }, {
        name: 'Мечник',
        type: 'Swordsman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.teams.length; i += 1) {
      yield this.teams[i];
    }
  }
}
