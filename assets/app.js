// create characters objects and variables
var attacker;
var defender;
var availableCharacters=[];
var dh = new Character("demonhunter", 100, 15, 2, "./assets/images/dh.png");
var dk = new Character("deathknight", 100, 15, 2, "./assets/images/dk.png");
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
    startGame();
});

// display available characters
var startGame = function() {
	availableCharacters=allCharacters;
	availableCharacters.forEach(function(character){
		var badge = $("<div>").attr("id", character.name);
		var characterImage = $("<img>").attr("src", character.imgSrc).attr("onClick", "selectChar()");
		var badgeText = $("<h2>").text("Name: " + character.name + " HP: " + character.hp + " Attack Power: " + character.attack + " Counter Attack: " + character.counterAttack);
		$(characterImage).appendTo(badge);
		$(badgeText).appendTo(badge);
		$(badge).appendTo("#charSelectArea");	
	});
}

// pick character remove selected character from the selection zone and move it to the attacker spot

// pick defender char and move it to the defnder area & hide selection zone

// attack function attack and counter attack

// if you reach 0 hp lose game (reset button) if you kill remove them from the defender area