class Vehicle {
     constructor(brand,model,fuelType) {
          this.brand = brand;
          this.model = model;
          this.fuelType = fuelType;
     };
};
class Bus extends Vehicle {
     constructor(brand, model, fuelType,capacity) {
          super(brand, model, fuelType);
          this.capacity = capacity;
          
     }
     
};
const cityBus = new Bus('Volvo', 'Brtc-100', 'patrol', 100);
const bus1 = Object.getPrototypeOf(cityBus);
console.log(bus1);
