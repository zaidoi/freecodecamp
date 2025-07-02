// class constructor

class Thermostat{
  constructor(temperature){
    this._temperature = temperature
  }

  get thermos(){
    return this._temperature
  }

  set thermos(updatethermos){
    this.temperature = updatethermos
  }
}