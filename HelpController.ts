/// <reference path="GameLoop.ts" />
module Game{
	export class HelpController{
		
		gameloop;
		canvas;
		width;
		height;
		model;
		helpView;
		
		gameMode;

		constructor(gameloop,canvas,width,height,model,helpView, gameMode){
			this.gameloop = gameloop;
			this.canvas = canvas;
			this.model = model
			this.height = height;
			this.width = width;
			this.helpView = helpView;
			this.gameMode = gameMode;
		}
		takeInput(){
			this.mobileClick = <any>this.mobileClick.bind(this);
			this.canvas.addEventListener('touchstart', this.mobileClick);   
		}
		mobileClick(e){
			var mobileClickX = e.targetTouches[0].pageX;
			var mobileClickY = e.targetTouches[0].pageY;
		/*
			var mobileClickY = event.y;
 			mobileClickY -= this.canvas.offsetTop;
			var mobileClickX = event.x;
		 	mobileClickX -= this.canvas.offsetLeft;
		*/
		 	if(mobileClickY>this.height*250/640 &&mobileClickY<this.height*340/640 && mobileClickX< this.width*125/360 ){
 				if(this.gameMode == 1){
					this.helpView.render(2);
					this.gameMode = 2;
				}
				else{
					this.helpView.render(1);
					this.gameMode = 1;
				}
 			}
			else if(mobileClickY <this.height*100/640 && mobileClickX< this.width*100/360 ){
				this.switchToMenuState();
			}
		}
		/*
		catClick(X,Y){
			clearTimeout(this.menuView.animationOne);
			this.notEnoughCat = false;
			this.menuView.render(this.gameloop.currentGame);
		}
			*/	 
		switchStates(){
			this.canvas.removeEventListener('touchstart', this.mobileClick); 
			console.log("switching states");
		}
		
		switchToMenuState(){
			this.switchStates();
			this.gameloop.switchToMenuState();
		}
		
	
	}
}