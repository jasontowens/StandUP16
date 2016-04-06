/// <reference path="Resources.ts" />
module Game{
	export class HelpView{
		resources;
		context;
		width;
		height;
		gameMode;
		
		helpScreen1;
		helpScreen2;		
		constructor(resources,context,width,height,gameMode){
			this.resources = resources;
			this.helpScreen1 = resources.helpScreen1;
			this.helpScreen2 = resources.helpScreen2;
			this.context = context;
			this.width = width;
			this.height = height;
			/*this.buttons = this.resources.buttons;
			this.buttons2 = this.resources.buttons2;
			this.orangeBackground = this.resources.orangeBackground;
			this.balloon = this.resources.balloon;
			this.stand = this.resources.stand;
			this.blueBackground = this.resources.blueBackground;
			this.slime = this.resources.slime;
			this.menu_background1 = this.resources.menu_background1;
			this.kids = this.resources.kids;
			this.menu_background2 = this.resources.menu_background2;
			this.arrow = this.resources.leftArrowPressed;
			this.noCatSel = this.resources.noCatSel;
			this.context = context;
			this.width = width;
			var self = this;
			this.height = height;
			this.gameMode = gameMode;
			this.menuOptions = ["Play Game", "Categories", "Mode", "Help"];
			this.animationTwo = false;
			this.animationThree = false;
			this.youCanClick = false;
			this.balloonHeight = this.height*200/667;
			this.balloonDirection = false;
			*/
		}
		
		clearCanvas(){
			this.context.clearRect(0, 0, this.width, this.height);
		}
		
		
		drawHelpScreen(gameMode){
			if(gameMode == 1){
				this.context.drawImage(this.helpScreen1,0,0,this.width,this.height);
				
			}else{
				this.context.drawImage(this.helpScreen2,0,0,this.width,this.height);
			}
		}
		
		render(gameMode){
			this.drawHelpScreen(gameMode);		
		}
		/*
		balloonAnimation1(height,top,bottom,direction){
			if(height>=bottom){
				direction = true;
			}else if(height <= top){
				direction = false;
			}
			if(direction){
				this.clearCanvas();
				this.drawBackGround();
				this.context.drawImage(this.balloon,this.width - this.width*230/375,height,this.width*280/375,this.height*320/667);
				this.drawButtons();
				height-=.1;
				this.balloonHeight = height;
				this.balloonDirection = direction
				var self = this;
				var f = function(){self.balloonAnimation1(height,top,bottom,direction)};
				this.balloonAnimation = setTimeout(f, 1000/600);
			}else{
				this.clearCanvas();
				this.drawBackGround();
				this.context.drawImage(this.balloon,this.width - this.width*230/375,height,this.width*280/375,this.height*320/667);
				this.drawButtons();
				height+=.1;
				this.balloonHeight = height;
				this.balloonDirection = direction;
				var self = this;
				var f = function(){self.balloonAnimation1(height,top,bottom,direction)};
				this.balloonAnimation = setTimeout(f, 1000/600);
			}
		
		}
		*/
		
		
	}
}