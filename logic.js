			//This data comes from the proposed changes monster manual, and is of course subject to change by the balance team.
			class Mob {
				constructor(name, maxHp, initiative, tier, ac, proficiency) {
					this.ID = 0,
					this.Name = name,
					this.HP = 0,
					this.MaxHP = maxHp,
					this.Initiative = initiative,
					this.Tier = tier,
					this.AC = ac,
					this.Proficiency = proficiency
				}
			}
			
			class DiceInfo { 
				constructor(diceSize, diceRolled, modifier) {
					this.DiceSize = diceSize,
					this.DiceRolled = diceRolled,
					this.Modifier = modifier
				}
			}
			
			//Definine Mobs (Name, HP Dice, Initiative Dice, Tier, AC, Proficiency).
			
			//-----------------------------------
			//   BASE MONSTERS (T6-9 UPDATE)
			//-----------------------------------
			
			//Imp and variants
			var imp = new Mob("Imp", new DiceInfo(4, 5, -2), new DiceInfo(20, 1, 2), 1, 12, 0);
			var rustImp = new Mob("Rust Imp", new DiceInfo(4, 5, 10), new DiceInfo(20, 1, 2), 1, 12, 1);
			var caulkImp = new Mob("Caulk Imp", new DiceInfo(4, 2, 5), new DiceInfo(20, 1, 2), 1, 12, 0);
			var amberImp = new Mob("Amber Imp", new DiceInfo(4, 2, 13), new DiceInfo(20, 1, 2), 1, 15, 0);
			var shaleImp = new Mob("Shale Imp", new DiceInfo(4, 2, 5), new DiceInfo(20, 1, 2), 1, 12, 0);
			var chalkImp = new Mob("Aquamarine Imp", new DiceInfo(4, 2, 3), new DiceInfo(20, 1, 2), 1, 12, 0);
			var aquamarineImp = new Mob("Chalk Imp", new DiceInfo(4, 2, 3), new DiceInfo(20, 1, 2), 1, 12, 0);
			
			//Ogre and variants
			var ogre = new Mob("Ogre", new DiceInfo(8, 3, 6), new DiceInfo(20, 1, 0), 2, 12, 1);
			var obsidianOgre = new Mob("Obsidian Ogre", new DiceInfo(10, 4, 8), new DiceInfo(20, 1, -2), 2, 12, 1);
			var cobaltOgre = new Mob("Cobalt Ogre", new DiceInfo(10, 2, 4), new DiceInfo(20, 1, 0), 2, 10, 1);
			var jetOgre = new Mob("Jet Ogre", new DiceInfo(10, 2, 4), new DiceInfo(20, 1, 0), 2, 12, 1);
			var marbleOgre = new Mob("Marble Ogre", new DiceInfo(10, 2, 4), new DiceInfo(20, 1, 0), 2, 12, 1);
			
			//Basilisk and variants
			var basilisk = new Mob("Basilisk", new DiceInfo(12, 4, 4), new DiceInfo(20, 1, 5), 3, 15, 1);
			var electrumBasilisk = new Mob("Electrum Basilisk", new DiceInfo(12, 4, 4), new DiceInfo(20, 1, 5), 3, 15, 1);
			var sapphireBasilisk = new Mob("Sapphire Basilisk", new DiceInfo(12, 4, 4), new DiceInfo(20, 1, 5), 3, 15, 1);
			var fluoriteBasilisk = new Mob("Fluorite Basilisk", new DiceInfo(12, 4, 4), new DiceInfo(20, 1, 5), 3, 15, 1);
			var graniteBasilisk = new Mob("Granite Basilisk", new DiceInfo(12, 4, 4), new DiceInfo(20, 1, 3), 3, 15, 1);
			
			//T4+
			var lich = new Mob("Lich", new DiceInfo(10, 6, 0), new DiceInfo(20, 1, 2), 4, 15, 2);
			var giclops = new Mob("Giclops", new DiceInfo(12, 25, 5), new DiceInfo(20, 1, 1), 5, 14, 2);
			var titachnid = new Mob("Titachnid", new DiceInfo(10, 8, 40), new DiceInfo(20, 1, 8), 6, 18, 3);
			var acheron = new Mob("Acheron", new DiceInfo(10, 40, 50), new DiceInfo(20, 1, 5), 7, 15, 3);
			var hecatoncheries = new Mob("Hecatoncheires", new DiceInfo(12, 40, 60), new DiceInfo(20, 1, 4), 8, 16, 4);
			var lichQueen = new Mob("Lich Queen", new DiceInfo(10, 40, 50), new DiceInfo(20, 1, 3), 9, 17, 4);
			
			//----------------------
			//   SORO'S MONSTERS 
			//----------------------
			
			var kobold = new Mob("Kobold", new DiceInfo(4,4,-3), new DiceInfo(20,1,3), 1, 13, 0)
			var araneola = new Mob("Araneola", new DiceInfo(2,4,-3), new DiceInfo(20, 1, 2), 1, 14, 0)
			var caveCrawler = new Mob("Cave Crawler", new DiceInfo(8,3,6), new DiceInfo(20,1,3), 2, 13, 1)
			var alkali = new Mob("Alkali", new DiceInfo(6,7,14), new DiceInfo(20,1,4), 4, 15, 2)
			
			//----------------------
			//   GALAYIS MONSTERS 
			//----------------------

			//End Monsters
			
			var mobTemplatesInUse = [];
			
			//The mobs that can be rolled.
			var baseMobTemplates = [
				[imp, rustImp, caulkImp, amberImp, shaleImp, chalkImp, aquamarineImp],
				[ogre, obsidianOgre, cobaltOgre, jetOgre, marbleOgre],
				[basilisk, electrumBasilisk, sapphireBasilisk, fluoriteBasilisk, graniteBasilisk],
				[lich],
				[giclops],
				[titachnid],
				[acheron],
				[hecatoncheries],
				[lichQueen]
			];
			
			var soroMobTemplates = [
				[kobold],
				[araneola],
				[caveCrawler],
				[alkali]
			];
			
			//Temporary variable to allow for easier data entry by others.
			var galayisMobTemplates = [
				[imp]
			];
			
			var mobTemplatesRollingId = 0;
			
			//Active mobs that have been instanciated.
			var rolledMobs = [];
			
			//Define grist rolls for each tier.
			var gristRolls = [
				function () {
					var ExtraGrist = rollDice(new DiceInfo(2, 1, 0));
					if (ExtraGrist == 2){
						return rollDice(new DiceInfo(8, 2, 0));
					}
					else {
						return 0;
					}
				},
				function () {
					return rollDice(new DiceInfo(10, 1, 10));
				},
				function () {
					return rollDice(new DiceInfo(6, 3, 40));
				},
				function () {
					return rollDice(new DiceInfo(8, 8, 125));
				},
				function () {
					return rollDice(new DiceInfo(10, 20, 400));
				},
				function () {
					return rollDice(new DiceInfo(12, 40, 1400));
				},
				function () {
					return rollDice(new DiceInfo(20, 70, 4700));
				},
				function () {
					return rollDice(new DiceInfo(100, 40, 16000));
				},
				function () {
					return rollDice(new DiceInfo(100, 100, 55000));
				},
				function () {
					return rollDice(new DiceInfo(500, 100, 175000));
				},
				function () {
					return rollDice(new DiceInfo(1000, 150, 580000));
				}
			]
			
			//Define 3rd-party helper functions
			
			//Adds .contains() as an extension method to arrays, which is used in the check for duplicate prototypes.
			Array.prototype.contains = function(obj) {
				var i = this.length;
				while (i--) {
					if (this[i] === obj) {
						return true;
					}
				}
				return false;
			}
			
			//creates a uuid. Shamelessly copied off the internet.
			function uuidv4() {
				return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
			}
			
			//Returns an int between min and max, inclusive. Perfect for dice.
			function getRandomIntInclusive(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
			}
			
			//End 3rd-party helper functions
			
			//Is run once everything is in place, populating the monster drop-down list with all mobTemplates that have been instanciated.
			function addToDropdown(item, index) {
				monsterSelect.innerHTML += "<option value=\"" + mobTemplatesRollingId + "\">" + item[0].Name + " - T" + item[0].Tier + "</option>";
				mobTemplatesRollingId++;
			}
			
			function clearMobDropdown() {
				monsterSelect.innerHTML = "";
				mobTemplatesRollingId = 0;
				mobTemplatesInUse = [];
			}
			
			function addDisabled(disabledText) {
				monsterSelect.innerHTML += "<option disabled>" + disabledText + "</option>";
			}
			
			function addSeperator() {
				addDisabled("-------------------");
			}
			
			function populateMobsDropdown() {
				
				//Clear any mobs here
				clearMobDropdown();
				
				//Check if Base mobs are permitted. If so, add the relevant mobs.
				var baseEnabled = document.getElementById("enableBaseMobsCheckbox").checked;
				if (baseEnabled) {
					mobTemplatesInUse = mobTemplatesInUse.concat(baseMobTemplates)
					addSeperator();
					addDisabled("Base Mobs")
					addSeperator();
					baseMobTemplates.forEach(addToDropdown)
				}
				
				//Check if Soro is permitted. If so, add his mobs.
				var soroEnabled = document.getElementById("enableSoroMobsCheckbox").checked;
				if (soroEnabled) {
					mobTemplatesInUse = mobTemplatesInUse.concat(soroMobTemplates)
					addSeperator();
					addDisabled("Soro's Mobs")
					addSeperator();
					soroMobTemplates.forEach(addToDropdown)
				}
				
				//Check if Galayis' is permitted. If so, his too.
				var galayisEnabled = document.getElementById("enableGalayisMobsCheckbox").checked;
				if (galayisEnabled) {
					mobTemplatesInUse = mobTemplatesInUse.concat(galayisMobTemplates)
					addSeperator();
					addDisabled("Galayis's Mobs")
					addSeperator();
					galayisMobTemplates.forEach(addToDropdown)
				}
			}
			
			function rollDice(diceInfo) {
				var total = 0;
				for (i = 0; i < diceInfo.DiceRolled; i++){
					total += getRandomIntInclusive(1, diceInfo.DiceSize);
				}
				if (diceInfo.ModifIer == 0) {
					return total;
				}
				total = (total + diceInfo.Modifier);
				return total;
			}
			
			//Finds the selected prototype settings and populates a prototypes function array accordingly.
			function getPrototypes() {
				
				//No prototypes required, return empty array.
				if (protoTypeOptions.value == 0){
					return [];
				}
				
				//Generic numbered prototypes required, create variable-sized array as needed.
				else if (protoTypeOptions.value == 1){
					var prototypes = [];
					var prototypesCount = parseInt(document.getElementById("prototypeCount").value);
					var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
					for (var i = 0; i < prototypesCount; i++) {
						var x = numbers[i];
						var makeBasicProto = function (protoNumber) {
							var protoNum = protoNumber;
							prototypes.push(function (mob) {
								mob.Name = ("|P" + protoNum + "| " + mob.Name);
							})
						}
						makeBasicProto(x);
						prototypes[i]({});
					}
					return prototypes;
				}
				
				//C4S3 Prototypes
				else if (protoTypeOptions.value == 2){
					var prototypes = [
						function (mob) {
							mob.Name = "Antler " + mob.Name;
						},
						function (mob) {
							mob.Name = "Mario " + mob.Name;
						},
						function (mob) {
							mob.Name = "Fedora " + mob.Name;
						},
						function (mob) {
							mob.Name = "Welding " + mob.Name;
						},
						function (mob) {
							mob.Name = "MGSV " + mob.Name;
						},
						function (mob) {
							mob.Name = "Pencil " + mob.Name;
						},
						function (mob) {
							mob.Name = "Dragon " + mob.Name;
						},
						function (mob) {
							mob.Name = "Jackal " + mob.Name;
						},
					]
					return prototypes;
				}
				
				//C4S11 Prototypes
				else if (protoTypeOptions.value == 3){
					var prototypes = [
						function (mob) {
							mob.Name = "Bearded " + mob.Name;
						},
						function (mob) {
							mob.AC = mob.AC + 1;
							mob.Name = "Skull " + mob.Name;
						},
						function (mob) {
							mob.AC = mob.AC + 2;
							mob.MaxHP = Math.floor(mob.HP*1.1); //Increases MaxHP by 1.1x
							mob.Name = "Shiny " + mob.Name;
						},
						function (mob) {
							mob.Name = "Ribbed " + mob.Name;
						},
						function (mob) {
							mob.Name = "Floating " + mob.Name;
						},
						function (mob) {
							mob.Initiative = mob.Initiative + 1;
							mob.AC = mob.AC + 1;
							mob.Name = "Wrinkled " + mob.Name;
						},
						function (mob) {
							mob.Name = "Spring " + mob.Name;
						}
					]
					return prototypes;
				}
			}
			
			//Kicks off the creation of a mob instance
			function createMobInstance() {
				var mob = rollMob();
				rolledMobs.push(mob);
				
				//Sort the mobs in the list by Initiative descending.
				rolledMobs.sort(function(a, b) {
					if (a.Initiative > b.Initiative) {
						return -1;
					}
					if (a.Initiative < b.Initiative) {
						return 1;
					}
					return 0;
				})
				
				//Clear the displayed list of active mobs, then reprint them.
				clearMobs();
				printMobs();
				
				//A mob has been created, we shouldn't have inconsistend prototype generation between mobs.
				hidePrototypeOptions();
			}
			
			//Determines the variant of a mob to build
			function chooseVariant(mobVariants) {
				//Check if there are no variants of this mob
				if (mobVariants.length == 1) {
					return 0;
				}
				
				//Verify we are allowed to generate variants
				var variantsAllowed = document.getElementById("enableVariantMobsCheckbox").checked;
				
				if (!variantsAllowed) {
					return 0;
				}
				
				//Percent chance to give a regular mob, even when variants are enabled.
				var threshold = 0.70; 
				
				//Decide Variant
				if (Math.random() > threshold) {
					return getRandomIntInclusive(1, mobVariants.length);
				}
				return 0;
			}
			
			//Rolls a mob based on template, printing its info to the page.
			function rollMob() {
				var mobVariants = mobTemplatesInUse[monsterSelect.value];
				var variantToMake = chooseVariant(mobVariants);
				
				//Create a copy of the given mob template to fill out.
				var mob = Object.create(mobVariants[variantToMake]);
				//Create a unique identifier for the sake of lookup from the page.
				mob.ID = uuidv4();
				
				//Roll the HP and Initiative values, putting them where the diceInfo used to be.
				mob.MaxHP = rollDice(mob.MaxHP);
				mob.Initiative = rollDice(mob.Initiative);
				
				//Apply any prototype effects
				prototypeMob(mob);
				
				//Raise the HP of the mob from 0 to the mob's maximum. 
				mob.HP = mob.MaxHP
				
				return mob;
			}
			
			//Applies prototypes to a given mob, based on its Tier.
			function prototypeMob(mob) {
			
				//Generates a -1 or 0 for the number of extra prototypings to give a mob.
				var prototypeCountMod = rollDice({DiceSize: 2, DiceRolled: 1, Modifier: -2});
				
				//Loads the prototype possibilities given the page settings.
				var prototypes = getPrototypes();
				
				//Lists the indexes of already-applied prototypes so as to not use the same one twice.
				var usedPrototypeIndexes = [];
				
				
				//Mobs have a number of prototypes equal to either their tier or their tier minus one.
				//This means that in order to make sure imps always have their prototype, we manually set the modifier to 0.
				if (mob.Tier == 1 && prototypeCountMod == -1){
					prototypeCountMod = 0;
				}
				
				//Loops until all required prototypes have been made.
				for (v = 0; v < (mob.Tier+prototypeCountMod); v++){
					var prototypeIndex;
					
					//All available prototypes have been made.
					if (prototypes.length <= v){
						break;
					}
					
					//Randomly select the index of the prototype to use.
					prototypeIndex = rollDice({DiceSize: prototypes.length, DiceRolled: 1, Modifier: -1})
					
					//Check if this index has already been used. If it has, roll again.
					//TODO: Optimize this. This becomes exponentially inefficient as the number of possible prototypes increases.
					if (usedPrototypeIndexes.contains(prototypeIndex)){
						v--;
						continue;
					}
					
					//Once we have verified the prototype is unused, we mark it as used and call its function.
					usedPrototypeIndexes.push(prototypeIndex);
					prototypes[prototypeIndex](mob);
				}
			}
			
			//Remove all displayed mobs from the DOM
			function clearMobs() {
				document.getElementById("outputBox").innerHTML = "";
			}
			
			//Iterate through all the generate mobs and add them to the DOM
			function printMobs() {
				for (var i = 0; i < rolledMobs.length; i++){
					printMob(rolledMobs[i]);
				}
			}
			
			//Add a given mob to the DOM
			function printMob(mob){
				document.getElementById("outputBox").innerHTML +=  
					(mob.Name + 
					" | " +
					mob.AC +
					' AC - ' +
					'<input type="number" onchange="' +
					//This is updateMobHP. I couldn't get inline dynamically-generated HTML to recognize its existance.
					//Thus, I took the below, made it into a one-liner, and threw it into every generated input instance.
					//TODO: Not commit such a heinous coding sin
					//new function() { 
					//	for (var i = 0; i < rolledMobs.length; i++) {
					//		if (rolledMobs[i].ID == '{mobID}'){
					//			rolledMobs[i].HP = document.getElementById('{mobID}HP').value;
					//			return; 
					//		} 
					//	}
					//}
					'new function() { for (var i = 0; i < rolledMobs.length; i++) { if (rolledMobs[i].ID == \'' + mob.ID + '\'){rolledMobs[i].HP = document.getElementById(\'' + mob.ID + 'HP\').value; return;}}}" ' +
					'class="currentHP" min="0" value="' +
					mob.HP + 
					'" id ="' +
					mob.ID + 
					'HP"/> / ' +
					mob.MaxHP +
					' HP | ' + 
					mob.Initiative +
					' Initiative' +
					'<br/>');
			}
			
			function hidePrototypeOptions() {
				protoTypeOptions.style.visibility = 'hidden';
				document.getElementById("prototypeCountSpan").style.visibility = 'hidden';
			}
			
			//Takes all the generated mobs and rolls the grist for them, assuming all have been slain.
			function rollGrist() {
				var gristBox = document.getElementById("gristBox");
				var totalGrist = [0,0,0,0,0,0,0,0,0,0,0];
				
				//Roll grist for each mob
				rolledMobs.forEach(function (item, index) {
					var mobTier = item.Tier;
					
					for (var c = 0; c <= mobTier; c++){
						totalGrist[c] += gristRolls[mobTier-c]();
					}
				})
				
				//Put the tallied grist rolls into the page's HTML
				gristBox.innerHTML = "";
				totalGrist.forEach(function (item, index) {
					if (item > 0) {
						if (index == 0) {
							gristBox.innerHTML += ('Build Grist: ' + item + '<br/>');
						}
						else {
							gristBox.innerHTML += ('T'+index+' Grist: '+item + "<br/>");
						}
					}
				})
				
				//Prepend "Grist Rolled:" if any grist was rolled.
				if (gristBox.innerHTML != "") {
					gristBox.innerHTML = "Grist Rolled: <br/>" + gristBox.innerHTML;
				}
			}
			
			//Takes the simple dice roller fields and rolls using them.
			function userRollDice() {
				var diceSize = parseInt(document.getElementById("diceSizeNumBox").value);
				var diceCount = parseInt(document.getElementById("diceCountNumBox").value);
				var diceMod = parseInt(document.getElementById("diceModNumBox").value);
				var result = rollDice({DiceRolled: diceCount, DiceSize: diceSize, Modifier: diceMod});
				document.getElementById("diceResult").innerHTML = diceCount + "d" + diceSize + "+" + diceMod + " = " + '<span class="redText">' + result + '</span>';
			}
			
			
			
			//Elements that shouldn't have to be relocated every time they're needed.
			monsterSelect = document.getElementById("monsterSelect");
			protoTypeOptions = document.getElementById("prototypeSelect");
			
			function onPageLoad() {
				//Now that everything is ready, populate the mob dropdown...
				populateMobsDropdown();
				
				//Bind the inputs...
				document.getElementById("enableSoroMobsCheckbox").onclick = populateMobsDropdown;
				document.getElementById("enableBaseMobsCheckbox").onclick = populateMobsDropdown;
				document.getElementById("enableGalayisMobsCheckbox").onclick = populateMobsDropdown;
				document.getElementById("diceRollButton").onclick = userRollDice;
				document.getElementById("generateButton").onclick = createMobInstance;
				document.getElementById("gristButton").onclick = rollGrist;
				document.getElementById("clearButton").onclick = function () {
					clearMobs()
					protoTypeOptions.style.visibility = 'visible'; 
					document.getElementById("prototypeCountSpan").style.visibility = 'visible';
					rolledMobs = [];
				}

				
				//Make prototype settings consistent...
				protoTypeOptions.onchange = function () {
					if (protoTypeOptions.value == 1){
						document.getElementById("prototypeCountSpan").style.visibility = 'visible';
					}
					else {
						document.getElementById("prototypeCountSpan").style.visibility = 'hidden';
					}
				}
				
				//And hide the prototypecount. 
				document.getElementById("prototypeCountSpan").style.visibility = 'hidden';
				protoTypeOptions.value = 0;
			}
			
			window.onload = onPageLoad
