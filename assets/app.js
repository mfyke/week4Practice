// create characters objects and variables
var attacker;
var defender;
var availableCharacters=[];
var dh = new Character("demonhunter", 100, 15, 2, "./assets/images/dh.png");
var dk = new Character("deathknight", 100, 45, 2, "./assets/images/dk.png");
var druid = new Character("druid", 100, 15, 2, "./assets/images/drood.png");
var hunter = new Character("hunter", 100, 15, 2, "./assets/images/hunter.png");
var lock = new Character("warlock", 100, 15, 2, "./assets/images/lock.png");
var mage = new Character("mage", 100, 15, 2, "./assets/images/mage.png");
var monk = new Character("monk", 100, 15, 2, "./assets/images/monk.png");
var pally = new Character("paladin", 100, 15, 2, "./assets/images/pally.png");
var priest = new Character("priest", 100, 15, 2, "./assets/images/priest.png");
var rogue = new Character("rogue", 100, 15, 2, "./assets/images/rogue.png");
var shaman = new Character("shaman", 100, 15, 2, "./assets/images/shaman.png");
var warrior = new Character("warrior", 100, 15, 2, "./assets/images/warrior.png");
var allCharacters = [dh, dk, druid, hunter, lock, mage, monk, pally, priest, rogue, shaman, warrior];


function Character(name, hp, attack, counterAttack, imgSrc) {
	this.name=name;
	this.hp=hp;
	this.attack=attack;
	this.counterAttack=counterAttack;
	this.imgSrc=imgSrc;
}

$( document ).ready(function() {
	availableCharacters=allCharacters;
    displayAvail();
    $("#instructionArea").html("<h1>Choose your character.</h1>");
});

// display available characters
var displayAvail = function() {
	$("#charSelectArea").empty();
	if(typeof availableCharacters[0] != "object") {
		winGame();
	}
	availableCharacters.forEach(function(character){
		var badge = $("<div>").addClass("col-xs-3").addClass("avail");
		var characterImage = $("<img>").attr("id", character.name).attr("src", character.imgSrc).attr("onClick", "selectChar(this)");
		var badgeText = $("<p>").text("Name: " + character.name + " HP: " + character.hp + " Attack Power: " + character.attack + " Counter Attack: " + character.counterAttack);
		$(characterImage).appendTo(badge);
		$(badgeText).appendTo(badge);
		$(badge).appendTo("#charSelectArea");	
	});
}
// pick defender char and move it to the defnder area & hide selection zone
// pick character remove selected character from the selection zone and move it to the attacker spot
var selectChar = function(element) {
	for (var i = 0; i<availableCharacters.length; i++) {
		if (availableCharacters[i].name==element.id && typeof attacker != 'object') {
			attacker=availableCharacters[i];
			availableCharacters.splice(i,1);
			displayAvail();
			displayAttacker();
			$("#instructionArea").html("<h1>Choose the Defender.</h1>")
		}
		else if (availableCharacters[i].name==element.id) {
			defender=availableCharacters[i];
			availableCharacters.splice(i,1);
			$("#charSelectArea").empty();
			$("#enemyChar").empty();
			$("#instructionArea").html("<h1>Attack the defender!</h1>");
			displayDefender();
			displayAttackButton(); 
		}
	}
}

var displayAttacker = function() {
	$("#yourChar").empty();
	var badge = $('<div>');
	var characterImage = $('<img>').attr("id", attacker.name).attr("src", attacker.imgSrc);
	var badgeText = $("<h1>").text("HP: " + attacker.hp);
	$(characterImage).appendTo(badge);
	$(badgeText).appendTo(badge);
	$(badge).appendTo("#yourChar");
}
var displayDefender = function() {
	$("#enemyChar").empty();
	var badge = $('<div>');
	var characterImage = $('<img>').attr("id", defender.name).attr("src", defender.imgSrc);
	var badgeText = $("<h1>").text("HP: " + defender.hp);
	$(characterImage).appendTo(badge);
	$(badgeText).appendTo(badge);
	$(badge).appendTo("#enemyChar");
}
var displayAttackButton = function() {
	var attackButton = $("<button>").addClass("btn btn-danger").attr("onClick", "attack()");
	var buttonText = $("<h1>").text("ATTACK!");
	$(buttonText).appendTo(attackButton);
	$(attackButton).appendTo("#attackButton");
}

// attack function attack and counter attack
var attack = function () {
	attacker.hp-=defender.counterAttack;
	defender.hp-=attacker.attack;
	if (attacker.hp>0){
		displayAttacker();
	}
	else if (attacker.hp<=0) {
		loseGame();
	}
	if (defender.hp>0 && attacker.hp>0) {
		displayDefender();	
	} 
	else if (defender.hp<=0 ) {
		$("#instructionArea").html("<h1>Pick the next defender!</h1>");
		$("#enemyChar").empty();
		$("#attackButton").empty();
		displayAvail();
	}
}
// if you reach 0 hp lose game (reset button) if you kill remove them from the defender area

var loseGame = function () {
	$("#yourChar").empty();
	$("#attackButton").empty();
	$("#enemyChar").empty();
	$("#instructionArea").html("<h1>You lose!</h1><br><h1>Try Again?</h1><button class='btn btn-success' onClick='newGame()'>Yes!</button><button class='btn btn-danger' onClick='thanks()'>No!</button>");
}

var winGame = function() {
	$("#yourChar").empty();
	$("#attackButton").empty();
	$("#instructionArea").html("<h1>You win!</h1><br><h1>Try Again?</h1><button class='btn btn-success' onClick='newGame()'>Yes!</button><button class='btn btn-danger' onClick='thanks()'>No!</button>");
}

var thanks = function() {
	$("#instructionArea").html("<h1>Thanks for playing! If you change your mind refresh the page to play again!");
}

var newGame = function () {
	attacker = undefined;
	defender = undefined;
	availableCharacters=[dh, dk, druid, hunter, lock, mage, monk, pally, priest, rogue, shaman, warrior];
	for (var i = 0; i<availableCharacters.length; i++) {
		availableCharacters[i].hp=100;
	}
    displayAvail();
    $("#instructionArea").html("<h1>Choose your character.</h1>");
}
