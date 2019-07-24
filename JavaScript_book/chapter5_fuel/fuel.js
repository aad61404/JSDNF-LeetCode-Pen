var fiat = {
    make: "Fiat",
    model: "500",
    started: false,
    fuel: 0,
    start: function(){
        if(this.fuel <= 0) {
            alert("It's out of fuel, Please add fuel");
        }else {
            this.started = true;
        }
    },
    stop: function() {
        this.started = false;
    },
    drive: function() {
        if(this.started){
            if(this.fuel > 0) {
                alert(this.make+ " " + this.model + " goes zoom zoom");
                this.fuel = this.fuel -1;
            }else{ 
            alert("You need to start the engine first");
            this.stop();
            }
        }
    },
    addFuel: function(amount) {
        this.fuel = this.fuel + amount
    }

}

fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();