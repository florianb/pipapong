import Phaser from '../static/phaser.js'

const game = new Phaser.Game({
	// antialias:   true,
	// enableDebug: true,
	// height:      600,
	// renderer:    Phaser.AUTO,
	// resolution:  1,
	// scaleMode:   Phaser.ScaleManager.NO_SCALE,
	// transparent: false,
	// width:       800,
	state: {
		init() {
		},

		preload() {
			// This base is equivalent to <https://examples.phaser.io/assets/>.
			this.load.baseURL = 'https://cdn.jsdelivr.net/gh/samme/phaser-examples-assets@v1.0.0/'
			// If you're pasting from <http://phaser.io/examples> you can use:
			// this.load.baseURL = 'https://examples.phaser.io/';
			this.load.crossOrigin = 'anonymous'
			this.load.image('dude', 'sprites/phaser-dude.png')
		},

		create() {
			const sprite = this.add.sprite(
				this.world.centerX,
				this.world.centerY,
				'dude'
			)
			// this.physics.enable(sprite)
		},

		update() {

		},

		render() {
			// const debug = this.game.debug
			this.renderLegend(10, 580)
		},

		shutdown() {
		},
		renderLegend(x, y) {
			const gameRenderType = [null, 'CANVAS', 'WEBGL'][this.game.renderType]
			this.game.debug.text(
				`Phaser ${Phaser.VERSION} ${gameRenderType}`,
				x,
				y,
				'white',
				debug.font
			)
		}
	}
});
