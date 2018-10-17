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
	availableCharacters=allCharacters;
    displayAvail();
});

// display available characters
var displayAvail = function() {
	$("#charSelectArea").empty();
	availableCharacters.forEach(function(character){
		var badge = $("<div>").addClass("col-xs-3").addClass("avail");
		var characterImage = $("<img>").attr("id", character.name).attr("src", character.imgSrc).attr("onClick", "selectChar(this)");
		var badgeText = $("<p>").text("Name: " + character.name + " HP: " + character.hp + " Attack Power: " + character.attack + " Counter Attack: " + character.counterAttack);
		$(characterImage).appendTo(badge);
		$(badgeText).appendTo(badge);
		$(badge).appendTo("#charSelectArea");	
	});
}

// pick character remove selected character from the selection zone and move it to the attacker spot
var selectChar = function(element) {
	console.log(element.id);
	console.log(allCharacters.indexOf(attacker));
	for (var i = 0; i<availableCharacters.length; i++) {console.log(availableCharacters[i].name);
		if (availableCharacters[i].name==element.id && allCharacters.indexOf(attacker)<0) {
			attacker=availableCharacters[i];
			console.log(attacker);
		}
		else if (availableCharacters[i].name==element.id) {
			defender=availableCharacters[i];
		}
	}
}

// pick defender char and move it to the defnder area & hide selection zone

// attack function attack and counter attack

// if you reach 0 hp lose game (reset button) if you kill remove them from the defender area