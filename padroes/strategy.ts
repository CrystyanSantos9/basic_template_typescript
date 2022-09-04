interface comportamentoVoarStrategy {
  fly():any
}

class VoamComAsas implements comportamentoVoarStrategy {
  public fly() {
    console.log('Esse pato voaaaaaa')
  }
}

class NaoVoam implements comportamentoVoarStrategy {
  public fly() {
    console.log('Esse pato não voa')
  }
}

abstract class Pato {
  // variável de instância
  comportamentoVoar: comportamentoVoarStrategy

  public constructor(comportamentoVoar: comportamentoVoarStrategy) {
    this.comportamentoVoar = comportamentoVoar
  }

  public setPerformFly(comportamentoVoar: comportamentoVoarStrategy){
    this.comportamentoVoar = comportamentoVoar
  }

   performFly():any {
    this.comportamentoVoar.fly()
  }
}

class PatoVerde extends Pato {
  constructor(){
    super(new VoamComAsas())
  }
}

class PatoDeMadeira extends Pato {
  constructor(){
    super(new NaoVoam())
  }
}

interface WeaponBehavior {
  UseWeapon():any
}

class SwordBehavior implements WeaponBehavior {
  UseWeapon() {
    console.log('Using a Big Sword')
  }
}

class GunBehavior implements WeaponBehavior {
  UseWeapon() {
    console.log('Using a Machine Gun')
  }
}

abstract class Character {
  weaponBehavior: WeaponBehavior

  constructor(weaponBehavior: WeaponBehavior){
    this.weaponBehavior = weaponBehavior
  }

  public performFight(){
    this.weaponBehavior.UseWeapon();
  }

  public setWeaponBehavior(weaponBehavior: WeaponBehavior){
    this.weaponBehavior = weaponBehavior
  }
}

export class Gladiator extends Character {
  constructor(){
    super(new SwordBehavior())
  }
}

export class Soldier extends Character {
  constructor(){
    super(new GunBehavior())
  }
}

