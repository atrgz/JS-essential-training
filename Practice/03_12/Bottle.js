class Bottle {
  constructor(
    capacity,
    material,
    lidMaterial,
    contentState,
    contentType,
    contentQuantity
  ) {
    (this.capacity = capacity),
      (this.material = material),
      (this.lidMaterial = lidMaterial),
      (this.content = {
        state: contentState,
        type: contentType,
        quantity: contentQuantity,
      });
  }

  drinkFromBottle(amountDrink) {
    this.content.quantity = this.content.quantity - amountDrink;
  }
}

export default Bottle;
