/*
	bare bones main.js file for phaser
	edit at your own risk:)
*/
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player;
var cursors;

function preload() {
	game.load.image('background','assets/tests/debug-grid-1920x1920.png');
	//very important that the width and height be correct otherwise animations will not look right.
	game.load.spritesheet('dude', 'assets/sprites/characters/newguy.png', 30, 32);
}

function create() {
	//set up the background and the player
	game.add.tileSprite(0, 0, 1920, 1920, 'background');
	game.world.setBounds(0, 0, 1920, 1920);
	game.physics.startSystem(Phaser.Physics.P2JS);
	//setting the player in center for fun
	player = game.add.sprite(game.world.centerX, game.world.centerY, 'dude');
	game.physics.p2.enable(player);
	player.anchor.setTo(0.5, 0.5);
	game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);

	//animations
	player.animations.add('down', [0, 1, 2], 10, true);
	player.animations.add('left', [3, 4, 5], 10, true);
	player.animations.add('right', [6, 7,8], 10, true);
	player.animations.add('up', [9, 10, 11], 10, true);
	cursors = game.input.keyboard.createCursorKeys();
}

function update() {
	//have to always reset the player's velocity otherwise when you move him he'll keep going
	player.body.setZeroVelocity();

	if (cursors.left.isDown)
	{
		player.body.moveLeft(300);
		player.animations.play('left');
	}
	else if (cursors.right.isDown)
	{
		player.body.moveRight(300);
		player.animations.play('right');
	}
	else if (cursors.up.isDown)
	{
		player.body.moveUp(300);
		player.animations.play('up');
	}
	else if (cursors.down.isDown)
	{
		player.body.moveDown(300);
		player.animations.play('down');
	}
	else {
		player.animations.stop();
	}

}