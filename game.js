Game.init = function () {
	Snake.init();
}

Game.update = function (delta) {
	//Snake.turn();
	Snake.update(delta);
};

Game.render = function () {
	Snake.render();
};
