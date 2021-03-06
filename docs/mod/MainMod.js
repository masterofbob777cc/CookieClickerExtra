// Mod
Game.Win('Third-party');
if (MainMod === undefined) var MainMod = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');
MainMod.name = 'Cookie Clicker Extra';
MainMod.version = '1.0';
MainMod.GameVersion = '2.022';

MainMod.launch = function () {
	MainMod.init = function () {
		let iconsURL = 'https://masterofbob777cc.github.io/CookieClickerExtra/mod/CookieClickerMod.png';
		// Upgrade Arrays
		MainMod.Upgrades = [];
		MainMod.HeavenlyUpgrades = [];
		MainMod.Achievements = [];
		
		// Order Vars
		let LoreolOrder = 10030.126 + 1 / 1000;
		let LumpAchevementOrder = 21100.396 + 1/1000;
		
		// Random Vars
		let TransMouse = false;
		let DiscookieCalc = false;
		
		// Easier Upgrade / Achievement Functions
		MainMod.NewUpgrade = function(obj) {
			/*
			name : string
			desc : string
			pool : can be '', 'cookie', 'toggle', 'debug', 'prestige', 'prestigeDecor', 'tech', or 'unused'
			price : int
			power : int
			unlockAt : obj : optional
				cookies : int
				require : string : optional 
			iconx : int
			icony : int
			startOrder : int
			*/
			MainMod.Upgrades.push(CCSE.NewUpgrade(obj.name,obj.desc,obj.price,[obj.iconx, obj.icony, iconsURL]));
			MainMod.Upgrades[MainMod.Upgrades.length - 1].power = obj.power;
			MainMod.Upgrades[MainMod.Upgrades.length - 1].pool = obj.pool;
			MainMod.Upgrades[MainMod.Upgrades.length - 1].order = obj.startOrder;
			if (obj.pool == 'cookie') 
			{
				Game.cookieUpgrades.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
			}
			if (!(obj.unlockAt === undefined)) {
				MainMod.Upgrades[MainMod.Upgrades.length - 1].unlockAt = {cookies: obj.unlockAt.cookies, name: obj.name, require: obj.unlockAt.require === undefined  ? '' : obj.unlockAt.require};
				Game.UnlockAt.push(MainMod.Upgrades[MainMod.Upgrades.length - 1]);
			}
		}
		
		MainMod.NewHeavenlyUpgrade = function(obj) {
			/*
			name : string
			desc : string
			price : int	
			iconx : int
			icony : int
			posx : int
			posy : int
			parents : array of string
			*/
			MainMod.HeavenlyUpgrades.push(CCSE.NewHeavenlyUpgrade(obj.name, obj.desc, obj.price, [obj.iconx, obj.icony, iconsURL], obj.posx, obj.posy, obj.parents));
		}
		
		MainMod.NewAchievement = function(obj) {
			/*
			name : string
			desc : string
			iconx : int
			icony : int
			startOrder : int
			*/
			MainMod.Achievements.push(CCSE.NewAchievement(obj.name, obj.desc, [obj.iconx,obj.icony,iconsURL]));
			MainMod.Achievements[MainMod.Achievements.length - 1].order = obj.startOrder;
		}
		
		//// Upgrades
		
		/// Cookies
		
		// Loreols
		MainMod.NewUpgrade({
			name : "Birthday Cake Loreols",
			desc : "Cookie production multiplier <b>+1%</b> for every year Cookie Clicker has existed (currently : <b>+" + Beautify(Math.floor((Date.now()-new Date(2013,7,8))/(1000*60*60*24*365))) + "%</b>).<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : Math.floor((Date.now()-new Date(2013,7,8))/(1000*60*60*24*365)),
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 10,
			icony : 12,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Mint Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 11,
			icony : 12,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Chocolate Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 12,
			icony : 12,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Peanut Butter Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 13,
			icony : 12,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Red Velvet Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 14,
			icony : 12,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Peanut Butter Chocolate Pie Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 15,
			icony : 12,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Spring Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 10,
			icony : 13,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Dark Chocolate Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 11,
			icony : 13,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Carrot Cake Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 12,
			icony : 13,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Golden Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 13,
			icony : 13,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Lemon Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 14,
			icony : 13,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		MainMod.NewUpgrade({
			name : "Cinnamon Bun Loreols",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 999999999999999*5,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 15,
			icony : 13,
			startOrder : LoreolOrder
		}); LoreolOrder+=1/1000;
		
		let PortalOrder = 25000.168 + 1/1000;
		/*MainMod.NewUpgrade({
			name : "Cinnamon Bun Loreos",
			desc : "Placeholder Text.<br><q>Placeholder Text</q>",
			pool : "cookie",
			price : 1,
			power : 2,
			unlockAt : { cookies : 249999999999999.75, require : "Box of brand biscuits" },
			iconx : 15,
			icony : 13,
			startOrder : PortalOrder
		}); PortalOrder+=1/1000;
		*/
		
		// Misc. Flavored Cookies
		
		/// Misc. Upgrades
		
		/// Heavenly Upgrades
		
		//// Achievements
		
		//// Buffs
                /*
		CCSE.NewBuff("Exploring", function(time){
			return {
				name: 'Exploring',
				desc: "Your milk power is halved for " + Game.sayTime(time * Game.fps, -1) + " while some of your kittens are exploring.",
				icon: [29,14],
				time: time * Game.fps,
				add: false,
				onDie:function(){expl}
			};
		}})
                */
		
		//// Debug
		
		
		//// Game Logic
		Game.customLogic.push( 
			function(){
				// Transdimentional Mouse
				if(Game.Has("Transdimentional mouse [on]") && Game.Has("Transdimentional clicking")) 
				{
					Game.customMouseCpsMult.push(function(){return 2;});
					TransMouse = true;
				} else {
					if(TransMouse) {Game.customMouseCpsMult = [];}
					TransMouse = false;
				}
				// Discookie
				if(Game.Has("Discookie") && !DiscookieCalc) 
				{
					// +30,000cps
					DiscookieCalc = true;
				} else if (!Game.Has("Discookie") && DiscookieCalc){
					// -30,000cps
					DiscookieCalc = false;
				}
				// Remeber :
				// Game.effs.milk = Game.effs.milk ? Game.effs.milk * 0.5 : 0.5
			}
		);
	
		Game.customChecks.push( 
			function(){
				if(Game.Has("Loreols")) {
					Game.Unlock("Birthday Cake Loreols");
					Game.Unlock("Mint Loreols");
					Game.Unlock("Chocolate Loreols");
					Game.Unlock("Peanut Butter Loreols");
					Game.Unlock("Red Velvet Loreols");
					Game.Unlock("Peanut Butter Chocolate Pie Loreols");
					Game.Unlock("Spring Loreols");
					Game.Unlock("Dark Chocolate Loreols");
					Game.Unlock("Carrot Cake Loreols");
					Game.Unlock("Golden Loreols");
					Game.Unlock("Lemon Loreols");
					Game.Unlock("Cinnamon Bun Loreols");
				}
			}
		);
		
		/*
		Game.customComputeLumpType.push(function () {
		
		Type of lump to be chosen 
		1 : Bifurcated
		2 : Golden
		3 : Meaty
		4 : Caramelized
		5 : Golden Bifurcated
		6 : Meaty Bifurcated
		7 : Caramelized Bifurcated 
		8 : Cookie Lump
		9 : Bifurcated Cookie Lump
		10 : Dragon-Roasted Cookie Lump 
		11 : Bifurcated Dragon-Roasted Cookie Lump
		/
		var moddedTypes = [];
		var vanillaTypes = [];
		if (vanillaTypes.includes(1)) { moddedTypes.splice(moddedTypes.indexOf(1), 1); var isbifurcated = true;};
		if (types) var vanillaTypes = vanillaTypes.concat(types);
		
		// Modded
		if (Math.random()<1/100) moddedTypes.push(8); // Cookie Lump
		if (Math.random()<1/100) moddedTypes.push(10); // Dragon-Roasted Cookie Lump
		
		// Bifurcated
		if (vanillaTypes.includes(2) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(2), 1); moddedTypes.push(5); };
		if (vanillaTypes.includes(3) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(3), 1); moddedTypes.push(6); };
		if (vanillaTypes.includes(4) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(4), 1); moddedTypes.push(7); };
		if (moddedTypes.includes(8) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(8), 1); moddedTypes.push(9); };
		if (moddedTypes.includes(10) && isbifurcated) { moddedTypes.splice(moddedTypes.indexOf(8), 1); moddedTypes.push(11); };
		types = types.concat(moddedTypes);
				
		});
		
		Game.customDoLumps.push(function () {
			// TODO
		});
		*/
		Game.customStatsMenu.push(function () {
			CCSE.AppendStatsVersionNumber(MainMod.name, MainMod.version);
		});
		// Finish up
		MainMod.isLoaded = 1;
		if (MainMod.postloadHooks) {
			for (var i = 0; i < MainMod.postloadHooks.length; ++i) MainMod.postloadHooks[i]();
		}
		if (Game.prefs.popups) 
		{
			Game.Popup(MainMod.name + ' loaded!'); 
		} else {
			Game.Notify(MainMod.name + ' loaded!', '', '', 1, 1);
		}
	}
	if(CCSE.ConfirmGameVersion(MainMod.name, MainMod.version, MainMod.GameVersion)) MainMod.init();
}

if (!MainMod.isLoaded) {
	if (CCSE && CCSE.isLoaded) {
		MainMod.launch();
	}
	else {
		if (!CCSE) var CCSE = {};
		if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(MainMod.launch);
	}
}
