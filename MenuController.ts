/// <reference path="GameLoop.ts" />
module Game{
	export class MenuController{
		
		gameloop;
		canvas;
		width;
		height;
		model;
		menuView;
		notEnoughCat;

		constructor(gameloop,canvas,width,height,model,menuView){
			this.gameloop = gameloop;
			this.canvas = canvas;
			this.model = model
			this.height = height;
			this.width = width;
			this.menuView = menuView;
			this.notEnoughCat = false;
		}
		takeInput(){
			this.mobileClick = <any>this.mobileClick.bind(this);
			this.canvas.addEventListener('click', this.mobileClick);   
		}
		mobileClick(e){
			var mobileClickY = (event as any).y;
 			mobileClickY -= this.canvas.offsetTop;
			var mobileClickX = (event as any).x;
		 	mobileClickX -= this.canvas.offsetLeft;
		 	if(this.notEnoughCat){
 				this.catClick(mobileClickX,mobileClickY);
 			}else{
 				this.click(mobileClickX,mobileClickY);
 			}	
		}
		
		catClick(X,Y){
			clearTimeout(this.menuView.animationOne);
			this.notEnoughCat = false;
			this.menuView.render(this.gameloop.currentGame);
		}
		click(X,Y){
			if(X<183*this.width/375 && X>7*this.width/375){
				if(Y<342*this.height/667 && Y>291*this.height/667){
					this.switchToGameState();		
				}
				else if(Y<410*this.height/667 && Y>352*this.height/667){
					this.switchToCategoriesState();	
				}
				else if(Y<475*this.height/667 && Y>425*this.height/667){
					this.gameloop.switchGameModes();
				}
				else if(Y<540*this.height/667 && Y>483*this.height/667){
					this.switchToHelpState();
				}
			}
		
			 
		 }
		 
		 
		switchStates(){
			clearTimeout(this.menuView.balloonAnimation);
			this.canvas.removeEventListener('click', this.mobileClick); 
			console.log("switching states");
		}
	
		switchToGameState(){
			if(this.model.gameCanStart()){
				var m = this.model;
				var s = m.gameView;
				//s.inMenu = false;
				
				this.switchStates();
				this.gameloop.switchToGameState();
			}else{
				this.notEnoughCat =true;
				this.menuView.renderNotEnoughCategories(-10,1,0);
			}
			
		}
		switchToCategoriesState(){
			this.switchStates();
			this.gameloop.switchToCategoriesState();
		}
		switchToHelpState(){
			this.switchStates();
			this.gameloop.switchToHelpState();
		}
	
	}
}