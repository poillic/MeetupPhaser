var data = localStorage.getItem('clicker') || {money: 0, parSeconde: 0};

var States = {
	preload : function(){
		game.load.image('crystal', 'img/crystal.jpg');
		game.load.image('diamond', 'img/diamond.png');
	},
	create : function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
		emitter = game.add.emitter(0,0,100);
		emitter.makeParticles('diamond');
		emitter.gravity = 200;

		image = game.add.image(200,0,'crystal');
		data.currentClickIncome = 1;
		var style = { font: "35px Arial", fill: "#ff0044", align: "center" };
		text = game.add.text(20, 20, "Gold : 0", style );
		textPerSec = game.add.text(20, 60, "Crystal/s : 0", style );
		game.world.bringToTop(emitter);
		image.inputEnabled = true;
		image.events.onInputDown.add(more, this);
	},
	update: function(){

	},
	render : function(){
		text.text = "Crystal : " + data.money;
		textPerSec = "Crystal/s :" + data.parSeconde;
	}
};

var game = new Phaser.Game(800,600, Phaser.CANVAS, null, States);

console.log(data);

function more(pointer){
	emitter.x = pointer.input.downPoint.x;
    emitter.y = pointer.input.downPoint.y;
	data.money += data.currentClickIncome;
	emitter.start(true, 2000, null, 1);
}