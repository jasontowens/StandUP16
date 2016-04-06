module Game{
	export class Model{
	
		chosenCategories:boolean[]; 
		Categories:string[][];//decide which ones are which
		currentItem:string;
		
		recentlyUsedWords:string[];
		playedWords:string[];
		correctPlayedWords:boolean[];
		gameOver:boolean;
		newItem:boolean;
		gameStarted:boolean;
		
		currentWordCategory:number;
		
		constructor(){
			this.chosenCategories = [];
			this.playedWords = [];
			this.recentlyUsedWords = [];
			this.correctPlayedWords = [];
			this.generateItems();
			this.gameOver = false;
			
		}
		clearVariables(){
			this.changeWord();
			this.gameOver = false;
			this.newItem = false;
			this.gameStarted = false;
			while(this.playedWords.length > 0) {
   				 this.playedWords.pop();
   				 this.correctPlayedWords.pop();
			}
		}
		generateItems(){
		
		
			//VERY IMPORTANT: FIRST ELEMENT IN EACH CATEGORY IS THE NAME OF THE CATEGORY, DO NOT PRINT IT
			this.Categories= 
				[
                    
                    ["Disney", "Mickey Mouse", "Donald Duck","The Lion King","Goofy","Pluto","Cinderella","Snow White","The Little Mermaid","Up","Nemo","Monsters Inc","The Incredibles","Aladdin","Alice in Wonderland","Beauty and The Beast","Minnie Mouse","Pinocchio","Jiminy Cricket","Wish upon a star","Bambi","101 Dalmatians","Mulan","Pocahontas","Toy Story","Frozen"],
                    
                    ["Outer Space","Astronaut","Space Ship","Moon","Sun","Alien","UFO","Mars","Galaxy","The Milky Way","Pluto","Constellation","Black Hole","Star","Gravity","Dark Matter","Orbit","asteroid","the Big Dipper","comet","shooting star","gas giant","planet","satellite","white dwarf","world","nova"],
                    
                    ["DMA's Award Show", "trophy", "honour", "Speech", "George Clooney", "Jennifer Anniston", "Jennifer Lawrence", "Robert Downey Jr", "Leonardo DiCaprio", "Bradley Cooper", "Dwayne \"The Rock\" Johnson", "Tom Cruise", "Hugh Jackman", "Sandra Bullock", "Channing Tatum", "Scarlett Johanson", "Chris Pratt", "Tom Hanks", "Matt Damon", "Matthew McChonaughey", "Brad Pitt", "Angelina Jolie", "Liam Neeson", "Ben Affleck", "Denzel Washington", "Vin Diesel ", "Johnny Depp", "Will Smith", "Christian Bale", "Mark Wahlberg", "Kevin Hart", "Emma Stone", "Daniel Craig", "Benedict Cumberbatch", "Natalie Portman", "Amy Schumer", "Ryan Gosling", "Zach Galifianakis", "Anne Hathaway", "Seth Rogen", "Will Ferrell", "Ryan Reynolds", "Julia Roberts", "Jonah Hill", "James Franco", "Jamie Foxx", "Justin Timberlake", "Daniel Radcliffe", "Emma Watson", "Mila Kunis", "Daniel Day-Lewis", "Jason Segel"],
                    
                    ["Prom", "Limo", "Dancing", "Corsage", "Acne", "Date", "gown", "tuxedo", "senior", "teens", "dress", "Prom Queen", "Wallflower", "Hairspray", "puffy hair ", "puffy sleeves ", "Awesome", "Radical", "Under the Sea", "Slow Dance", "Prom photos", "Cassette Tapes", "Mohawk", "Side Pony Tail", "MTV", "Walkman", "Laser Lights", "Neon", "Leg Warmers"],
                    
                    ["School of Rock", "Guitar", "Drums", "Air guitar", "Guitar solo", "Bass", "Drop the bass", "Rock & Roll", "Crowdsurfing", "Welcome to the Jungle", "Led Zeppelin", "Aerosmith", "Substitute Teacher", "Ned Schneebly", "Jack Black", "The Band", "Battle of the Bands", "Tacky and I hate you", "Rolling Stones", "Grateful Dead", "Beastie Boys", "Nirvana", "Pearl Jam", "Black Sabbath", "ZZ Top", "Van Halen", "Amps"],
                    
                    ["Finding Neverland", "The Darlings", "Tinkerbell", "Captain Hook", "The Lost Boys", "Neverland", "Wendy", "Alligator", "Peter Pan", "Tiger Lily", "Mr. Smee", "Pirates", "Mermaids", "indians ", "nana ", "Fairies", "Clapping", "Never grow up", "Lagoon", "Flying", "Pixie Dust"],
                    
                    ["Camp DM", "Campfire", "tent", "Under the stars", "forest", "moonlight", "flashlight", "sleeping bag", "bug repellant", "Camp Counselor", "Smores", "fishing", "canoes", "Hiking", "fire ", "hot dogs", "Animal tracks", "Bear", "Wolf", "moss", "Mosquito", "Deer", "Salmon", "Summer", "Lake", "Cabins"],
                    
                    ["ArcaDM", "Galaga", "Pacman", "Snake", "Dance Dance Revolution", "Donkey Kong", "Mortal Kombat", "Asteroids", "Ms Pacman", "Street Fighter", "Space Invaders", "Tron", "Mario Cart ", "Frogger", "Quarters", "Game Over", "Insert Coin", "Press Start", "High Score", "Centipede", "Snake", "Tetris", "Nintendo"],
                    
                    /* 4: NickeloDM*/ ["NickeloDM","Dancing Lobsters", "Orange Soda", "Penelope", "Totally Kyle", "Crazy Courtney", "The Girls Room", "All That", "Tommy Pickles", "Cynthia & Angelica", "Phil & Lil", "Chuckie", "Football Head", "Helga Patnki", "Orange Blimp", "Slime Time Live", "Ren & Shrimpy", "Keenan & Kel", "Are You Afraid of the Dark?", "Ahh Real Monsters", "Spongebob", "The Amanda Show", "The Wild Thornberries", "Rocket Power", "Cat Dog", "Angry Beavers", "Fairly Odd Parents", "Legends of the Hidden Temple"],
                    
                    /* 7: Dance ‘Merica*/ ["Dance 'Merica","Statue of Liberty", "Bald Eagle", "American Flag", "Fireworks", "Obama", "Golden Retriever", "Football", "Baseball", "BBQ", "Mount Rushmore", "Hot Dog", "Frat", "Miss America", "Shucking Corn", "McDonalds", "Jorts", "Oprah", "George Washington", "Beyonce", "Thanksgiving", "4th of July", "Black Friday", "Pearl Harbor", "Great Depression", "Civil War", "Prohibition", "Michael Jackson", "Forrest Gump", "United States", "Louis and Clark", "Sacagawea", "White House", "Grand Canyon", "Niagra Falls", "Declaration of Independence", "Martin Luther King Jr", "Secret Service", "The Kennedys", "NYPD", "FBI", "CIA", "Coca Cola", "New York", "Washington D.C."],
                    
					/* 0: College Teams*/ ["College Teams","Florida Gators","LSU Tigers","Tenessee Volunteers","Georgia Bulldogs","Oregon Ducks","Florida State Seminoles","Arkansas Razorbacks",
					"Alabama Crimson Tide","South Carolina Gamecocks","Ole Miss Rebels","Kentucky Wildcats","Texas A&M Aggies","Michigan Wolverines","Michigan State Spartans",
					"Texas Longhorns","Ohio State Buckeyes","Notre Dame FIghting Irish","Duke Blue Devils","Nebraska Cornhuskers","TCU Horned Frogs"],
					
					/* 1: dances*/["Dances","Macarena", "Teach me how to dougie", "Cat Daddy", "Cha Cha Slide", "Cupid Shuffle", "Thriller", "Gangnam Style"],
					
					/* 2: ESPN*/["ESPN","Erin Andrews", "Tim Tebow", "Soccer", "Football", "Baseball", "Softball", "Tennis", "Champion", "Hockey", "Basketball", "College Gameday", "The Gators", "Referee", "Yellow Card", "Red Card", "Goalie", "First Down", "Kicker", "Defense", "Offense", "Punt", "Quarterback", "Michael Jordan", "Sideline", "Cheerleaders", "Halftime Show", "Cleats", "Superbowl", "National Championship", "3 Strikes You’re Out", "Foul Ball", "Heisman", "Overtime", "Sweat", "Tackle", "Wide Receiver", "Striker", "Scoreboard", "Head Coach", "Conditioning", "Two-a-Days", "Gatorade", "Practice Makes Perfect", "Jersey", "Puck", "Kick Off", "Rain Delay", "Fans", "Underdog", "Comeback", "Undefeated Season", "Marching Band", "Umpire", "Nike", "3-pointer", "Dribble", "Homerun", "Pitcher", "Stadium", "Under Armor", "Dazzlers", "Time Out", "Fantasy Football", "Just Do It", "Get Your Head in the Game", "Rivalry", "Sponsor", "Tie", "Semi-Finals"],

					/* 3: Medieval*/ ["Medieval","Chivalry", "Jousting", "Dark Ages", "Sword in the Stone", "Duke", "Knight", "Renaissance", "Melee", "Gauntlet", "Chalice", "Alms", "Prince", "Queen", "King", "Princess", "Jester", "Feast", "Cannon", "Chainmail", "Goblet", "Armor", "Axe", "Bow", "Arrow", "Duel", "Castle", "Helmet"],

					

					/* 5: Dr. Seuss*/ ["Dr. Seuss","The Lorax", "Cat in the Hat", "Green Eggs and Ham", "Andy Lou Who", "The Grinch", "Thing 1 and Thing 2", "Truffala Trees", "Fish", "39 and ½ Foot Pole", "Horton", "Theodore Geisel", "Star-bellied Sneetch", "Sam I am", "Max"],

					/* 6: Morale Royale*/ ["Morale Royale","Captain", "Karaoke", "Royal Caribbean", "Carnival", "Buffet", "Casino", "Pool Deck", "Formal Night", "Anchor", "Port", "Dock", "Excursion", "Cabin", "Stateroom", "Putt-Putt Golf", "Life Vest", "Titanic", "Comedy Show", "Beach", "Towel", "Swimsuit", "Sunglasses", "Sunscreen", "Spa", "Massage", "Jacuzzi", "Night Club", "Newlyweds", "Vacation", "Bahamas", "Cazumel", "Hair Braiding", "Kids Club", "Tourists", "Sandals", "Soft Serve Ice Cream"],

					
					
					/* 8: DM Restaurants*/["DM Restaurants","PDQ","Chipotle","Zaxby's","Chick-fil-a","Dominos","Mcdonalds","Moes","Yogurtology","Sweet Dreams","Vellos","Panda Express","Texas Roadhouse","The Gelato Company","IHOP","Burrito Famous!","Relish","Pita Pit","4 Rivers"],
					
					/*9: Kids' Games*/["Kids' Games","Tag","Hopscotch","Hide and Seek","Catch","Jump-rope","4 Square","Corn Hole","Kickball","Tetherball","Cops and Robbers","Red Rover","Wiffle Ball","Ring Around the Rosie","Red Light Green Light","Simon Says"],
					
					/*10: Sponsors*/ ["DM Sponsors","Kiss 105.3 FM","1 Greek Store","StateFarm","IFC","Yogurtology","Kaplan","Alley Gatorz","Tropical Smoothie","The Independent Florida Alligator","The Odyssey","Pink Narcissus","UBER"],
					
					/*11: Toy Story*/ ["Toy Story","","Woody","Buzz Lightyear","Pizza Planet","You've Got a Friend in Me","To Infinity and Beyond","Mr Potato Head","Mrs. Potato Head","Spike","Jessie","Slinky Dog","Andy","Rex","Sid","Hamm"],
					
					/*12: Impressions*/["Impressions","Christopher Walken","Sylvester Stalone","Arnold Schwarzenegger","Taylor Swift","Kanye West","Mickey Mouse","Iggie Azalea","Richard Simmons","Dolly Parton","Harry Potter","Tim Tebow","Dr. Phil","George W Bush","Barack Obama","Oprah","Spongebob Squarepants","Porky Pig","Forest Gump","Elmo","Jersey Shore"],
					
					/*13: Cruise*/ ["Cruise","Bahamas","Ice Cream","Sunburn","Cabin","Sea sick","Mustard drill","Bingo","Super Slide ","24 hour pizza","Hot tub","Port of call","Buffet","Karaoke","Belly Flop","Casino","Ship Captain ","Titanic","Towel Animals","Sunscreen","Sunglasses","Swimming Pool","Hula Dancing ","Bathing Suit","Fish","Mexico","Ship Wreck","Life Boat","Carnival","Spa","Tanning","Life Guard","Beach","Waves","Hawaiian shirt ","Old People","flip flops"],
					
					/*14: Animals*/["Animals","Elephant","Dog","Giraffe","Cat","Fish","Dolphin","Bird","Anteater ","Walrus","Lion","Tiger","Bear","Chinchilla","Gorilla","Monkey","Hampster","Kangaroo","Snail","Sloth","Lobster","Caterpiller","Rabbit","Jellyfish ","Ladybug","Butterfly","Shark","Cow","Sheep","Pig","Leech","Goat","Bee","Mouse","Owl","Squirrel","Peacock","Chicken","Turkey ","Otter","Penguin","Iguana ","Alligator","Parrot ","Platypus","Hippo","Donkey","Turtle","Chameleon","Slug","Inchworm ","Butterfly","Porcupine"],
					
					/*15: Superheroes*/["Superheroes","Superman","Batman","Spider-Man","The Green Lantern","Quick Silver","Wolverine","Cyclops","Wonder woman","Bat-mobile","Catwoman","Daredevil","Green Arrow","The Hulk","Iron Man","Black Widow","Hawkeye","The Thing","Human Torch","Mr. Fantastic","Invisible Woman","Silver Surfer","Thor","Loki","Captain America","Beast Boy","Aquaman","Mermaid Man & Barnacle Boy","Captain Planet","Chuck Norris","Deadpool","Rorschach","Elastigirl","Mr. Incredible","Starlord","Groot","Dr. Who","Hancock"],
					
					/*16: Blockbusters*/["Blockbusters","Titanic","Frozen","Finding Nemo","The Emperor's New Groove","The Interview","Avatar","The Matrix","Shawshank Redemption","Gone Girl","The Godfather ","Toy Story ","Jurassic Park","Star Wars","Jaws","Indiana Jones","Lord of the Rings","King Kong","Rocky","Harry Potter","Twilight","Twister","The Hunger Games","James Bond","Pirates of the Caribbean ","Terminator","Ghost Busters","Home Alone","E.T.","The Sound of Music","Men in Black","The Exorcist","Shrek","The Lion King","Forrest Gump","Independence Day","The Sixth Sense","Nightmare on Elm Street","Friday the 13th","Halloween","Monster's Inc.","Despicable Me","Aladdin","The Graduate","Transformers","Interstellar","Planet of the Apes"],
					
					/*17: Pop Culture*/["Pop Culture","Taylor Swift","Miley Cyrus","The Jonas Brothers","One Direction","Lana Del Rey","Lady Gaga","Katy Perry","Left Shark","Snoop Lion","Mumford and Sons","Call Me Maybe","House of Cards","Breaking Bad","Better Call Saul","Game of Thrones","Orange is the New Black","Snapchat","Maroon 5","Uptown Funk","Bruno Mars","Ed Sheeran","Ellie Goulding","Rhianna","Kanye West","Paul McCartney","The Weeknd","Ariana Grande","Hozier","Pitbull ","Usher","2pac","Benedict Cumberbatch ","Megan Trainor","Sam Smith","Fallout Boy","Kelly Clarkson","Seth Rogan","Chris Brown","Big Sean","James Franco","Kim Jong-un","Zed","Selena Gomez","Calvin Harris","Perfect Pitch"],
					
					/*18: Technology*/ ["Technology","iPhone","Google Glass","Virtual Reality","Xbox","Playstation","Wii","iWatch","USB","GoPro","Kinect","FaceTime","Skype","Soundboard","Google Fiber","Linux","PC","Mac","Kindle","Artificial Intelligence","Robot","Netflix"],

					/*19: Video Games*/ ["Video Games","Super Mario Bros.","Call of Duty","Super Smash Brothers","The Sims","Minecraft","Runescape","Destiny ","Assassin's Creed","Bioshock","Starcraft","Skyrim","Civilization","League of Legends","Dota","Halo","Battlefield","Dragon Age","Fable","Shadow of Mordor","World of Warcraft","Flappy Bird","Angry Birds","Fruit Ninja","Words With Friends","Heads Up!","Clash of Clans","Temple Run","Pokemon","Zelda","Dance Dance Revolution","Candy Crush","Trivia Crack","Cut the Rope!","Animal Crossing","Star Wars Battlefront","Final Fantasy","Kingdom Hearts","Solitaire","Minesweeper","Guitar Hero","Rock Band","Madden","NBA2K15"],
					
					/*20: Sci Fi*/ ["Sci Fi","Light Saber","C3PO","Time Travel","Star Trek","Warp Drive","Aliens","UFO","Hoverboard","Black Hole","Laser Gun","Spaceship","Immortality","The Singularity","SkyNet"],
					
					/*21: Children's Stories*/ ["Children's Stories","Humpty Dumpty","Little Red Riding Hood","Cinderella","Goldie Locks","Clifford the Big Red Dog","Miss Muffet","Tortoise and the Hare","Pinocchio","The Ant and the Grasshopper","Cinderella"],
					
				];
			for(var i=0; i!= this.Categories.length; ++i){
				this.chosenCategories[i] = true;
			}
		}
	
		
		changeWord(){
			var currentCategory = this.randomUsableCategory();
			this.currentWordCategory = currentCategory;
			this.currentItem = this.randomWordInCategory(currentCategory);//category, phrase in category
			
			for(var i=0; i < this.recentlyUsedWords.length; ++i){
				if(this.recentlyUsedWords[i]){
					if(this.currentItem == this.recentlyUsedWords[i]){
						this.changeWord();
						break;
					}
				}
				else{
					console.log("game.recentlyUsedWords[i] not found");
				}
				
				if(this.recentlyUsedWords.length >= this.numberOfActivePhrases()){ // if we're almost out of possible words not used this game
					while(this.recentlyUsedWords.length != 0){
						this.recentlyUsedWords.pop();
					}
				}
				
				
			}
		 }
		 
		 numberOfActiveCategories(){ //returns number of selected categories
			var count = 0;
			for(var i = 0; i!= this.chosenCategories.length; ++i){
				if(this.chosenCategories[i]){
					++count;
				}
			}
			return count;
		 }
		 
		 numberOfActivePhrases(){ //returns number of possible phrases under selected categories
			var count = 0;
			for(var i = 0; i!= this.chosenCategories.length; ++i){
				if(this.chosenCategories[i]){
					count += (this.Categories[i].length -1); // -1 is for first element which is name of category 
				}
			}
			return count;
		 }
		 
		 
		 
		randomUsableCategory(){	//returns an int
			var usableCategories=0;
			for(var i=0; i!=this.chosenCategories.length; ++i){
				if(this.chosenCategories[i]==true){
					++usableCategories;
				}
			}
			//generate random number from 0 to usableCategories -1
			if(usableCategories > 0){	//need at least one category
				var returnCategory =0;
				var categoryToUse = Math.floor((Math.random() * usableCategories)); //note: this is OF the usable categories, still need to skip unusable categories
				console.log("category#: "+categoryToUse);
				var i =0;
				do{
					if(this.chosenCategories[i] == false){
						++categoryToUse; // increments forloop check as it encounters an unused category
					}
					++i;
				}
				while( i <= categoryToUse);
				
				return categoryToUse; //is an int
			}
		 }
		gameCanStart():boolean{
			for(var i = 0; i != this.chosenCategories.length; ++i){
				if(this.chosenCategories[i] == true){
					console.log(i);
					return true;
				}
			}
			return false;
		}
		 changeChosenCat(i:number){
			 if(i < this.chosenCategories.length){
				if(this.chosenCategories[i]){
					this.chosenCategories[i] = false;
				}else{
					this.chosenCategories[i] = true;
				}
			 }
		 }
		 randomWordInCategory(currentCategory){	//returns a random word in give category (parameter is int)
			var sizeOfCategory = this.Categories[currentCategory].length;
			var currentItemNumber = Math.floor((Math.random() * (sizeOfCategory-1)))+1;//location in select category of used word, should not be 0 because of category name
			
			return this.Categories[currentCategory][currentItemNumber];
		 }
		 
	}
}