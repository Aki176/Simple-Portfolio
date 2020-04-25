var matrix = [];
for(var i=0; i<80; i++) {
    matrix[i] = new Array(100);
}


window.onload = function() {
  VanillaTilt.init(document.querySelector(".window"), {
			max: 5,
			reverse: true,
			speed: 2000
    });
    initGame();
};

function initGame() {
    var game = new GameOfLife({
			canvas_id:    "life",
			cell_width:   15,
			cell_height:  15,
			init_cells:   matrix,
            colorful:     true
    });
    var interval = setInterval(game.step, 50);
}
