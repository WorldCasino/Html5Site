function CHelpPanel(){var a,c,b,d;this._init=function(){b=createBitmap(s_oSpriteLibrary.getSprite("msg_box"));s_oStage.addChild(b);a=new createjs.Text(TEXT_HELP1," 34px ZombieA","#fff2af");a.x=CANVAS_WIDTH/2-50;a.y=CANVAS_HEIGHT/2-130;a.textAlign="center";a.lineWidth=400;c=new createjs.Text(TEXT_HELP2," 36px ZombieA","#fff2af");c.x=CANVAS_WIDTH/2+1;c.y=CANVAS_HEIGHT/2+80;c.textAlign="center";c.lineWidth=500;d=new createjs.Container;d.addChild(b,a,c);s_oStage.addChild(d);var f=this;d.on("pressup",
function(){f._onExitHelp()})};this.unload=function(){s_oStage.removeChild(d);var a=this;d.off("pressup",function(){a._onExitHelp()})};this._onExitHelp=function(){this.unload();s_oGame._onExitHelp()};this._init()}
var DEATH_FRAMES=[57,53,57,57,57],RUN_FRAMES=[28,28,19,20,16],OFFSET_ANIMATION=[70,-50,50,80,70],ANIM_DELAY=[0,0,0,0,1],OFFSET_BLOOD=[{x:0,y:50},{x:50,y:50},{x:0,y:50},{x:0,y:50},{x:0,y:50}],CORRECTION=[{x:20,y:10,w:90,h:180},{x:35,y:20,w:80,h:165},{x:25,y:10,w:70,h:140},{x:45,y:15,w:90,h:180},{x:45,y:15,w:90,h:180}],BAR_POS=[{x:120,y:0},{x:120,y:10},{x:100,y:0},{x:150,y:0},{x:130,y:0}],SPEED=[1E4,8E3,9E3,4E3,7E3],LIFE=[],DAMAGE=[],SCORE=[];
function CGfxButton(a,c,b){var d,f,e;this._init=function(a,b,c){d=[];f=[];e=createBitmap(c);e.x=a;e.y=b;e.regX=c.width/2;e.regY=c.height/2;s_oStage.addChild(e);this._initListener()};this.unload=function(){e.off("mousedown",this.buttonDown);e.off("pressup",this.buttonRelease);s_oStage.removeChild(e)};this.setVisible=function(a){e.visible=a};this._initListener=function(){e.on("mousedown",this.buttonDown);e.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){d[a]=b;f[a]=c};this.buttonRelease=
function(){e.scaleX=1;e.scaleY=1;d[ON_MOUSE_UP]&&d[ON_MOUSE_UP].call(f[ON_MOUSE_UP])};this.buttonDown=function(){e.scaleX=.9;e.scaleY=.9;d[ON_MOUSE_DOWN]&&d[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN])};this.setPosition=function(a,b){e.x=a;e.y=b};this.setX=function(a){e.x=a};this.setY=function(a){e.y=a};this.getButtonImage=function(){return e};this.getX=function(){return e.x};this.getY=function(){return e.y};this._init(a,c,b);return this}
function CGame(a){var c,b,d,f,e,h,g,l,k,p,m,r=!1,C=!1,x,w=null,u,q,y,v,z,n,A,t;this._init=function(){l=f=d=0;e=SPAWN_TIME;h=STAGE_START_TIME;m=c=g=0;b=PLAYER_LIFE;t=[];A=[];this._setProbability();x=new CInterface;var a=createBitmap(s_oSpriteLibrary.getSprite("bg_game"));s_oStage.addChild(a);k=s_oStage.getChildIndex(a);n=[];u=new createjs.Container;s_oStage.addChild(u);var a=s_oSpriteLibrary.getSprite("bridge"),p=createBitmap(a);q=new createjs.Container;q.regY=a.height;q.y=CANVAS_HEIGHT;s_oStage.addChild(q);
q.addChild(p);x=new CInterface;y=new createjs.Shape;y.graphics.beginFill("rgba(255,0,0,1)").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);y.alpha=0;s_oStage.addChild(y);v=new createjs.Shape;v.graphics.beginFill("rgba(0,255,0,1)").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);v.alpha=0;s_oStage.addChild(v);new CHelpPanel};this.unload=function(){r=!1;createjs.Tween.removeAllTweens();s_oStage.removeAllChildren();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)z.volume=0,s_oSoundtrack.volume=1;x.unload();null!==w&&
w.unload()};this.onExit=function(){createjs.Ticker.paused=!1;s_bPlayActive=!0;this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this._onExitHelp=function(){r=!0;x.newStage(g+1);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack.volume=.4,z=createjs.Sound.play("zombie_crowd",{loop:100}),z.volume=1};this.pauseGame=function(){(s_bPlayActive=!s_bPlayActive)?(r=!0,createjs.Ticker.paused=!1):(r=!1,createjs.Ticker.paused=!0)};this.gameOver=function(){if(!1===DISABLE_SOUND_MOBILE||!1===
s_bMobile)s_oSoundtrack.volume=1;w=CEndPanel(s_oSpriteLibrary.getSprite("game_over_bg"));w.show(c)};this.getBgDepth=function(){return k};this.subtractLife=function(a){b+=DAMAGE[a];0>=b?(r=!1,createjs.Tween.removeAllTweens(),this.gameOver()):b>PLAYER_LIFE&&(b=PLAYER_LIFE);x.refreshBar(b/PLAYER_LIFE+.001);4===a?createjs.Tween.get(v,{override:!0}).to({alpha:.5},150,createjs.Ease.linear).to({alpha:0},150,createjs.Ease.linear):createjs.Tween.get(y,{override:!0}).to({alpha:.6},150,createjs.Ease.linear).to({alpha:0},
150,createjs.Ease.linear)};this.updateScore=function(a){c+=SCORE[a];0>c&&(c=0);x.refreshScore(c)};this._checkHit=function(a,b){for(var c=0;c<n.length;c++)a>n[c].target().x&&a<n[c].target().x+n[c].target().w&&b>n[c].target().y&&b<n[c].target().y+n[c].target().h&&n[c].kill(),n[c].checkGone()&&n.splice(c,1)};this._setProbability=function(){g===ZOMBIE_ON_STAGE.length&&g--;m++;A=[];for(var a=0;a<ZOMBIE_ON_STAGE[g].length;a++)for(var b=0;b<ZOMBIE_ON_STAGE[g][a];b++)A.push(a);p=SURVIVOR_ON_STAGE[g]};this._sortZombie=
function(){for(var a=0;a<n.length;a++)t[a]={y:n[a].getPos().y,zombie:n[a]},n[a].checkGone()&&n.splice(a,1);t.sort(function(a,b){return a.y<b.y?-1:a.y>b.y?1:0});for(a=0;a<t.length;a++){var b=t[a].zombie;b.scaleMe(8.57143E-4*t[a].y+.442857);"run"===b.getState()?u.setChildIndex(b.getContainerRun(),a):u.setChildIndex(b.getContainerDeath(),a)}};this._spawnZombie=function(){var a,b,c,d,e;d=Math.ceil(Math.random()*MAX_SPAWN[l]);for(var g=0;g<d;g++)a=Math.random()*START_SIZE+MAX_START_TOP,b=Math.random()*
END_SIZE+MAX_END_TOP,e=Math.floor(300*Math.random()),c=Math.floor(Math.random()*A.length),n.push(new CCharacter(A[c],a,b,e,u))};this._spawnSurvivor=function(){var a,b,c;100*Math.random()<p&&(a=Math.random()*START_SIZE+MAX_START_TOP,b=Math.random()*END_SIZE+MAX_END_TOP,c=Math.floor(200*Math.random()),n.push(new CCharacter(4,a,b,c,u)))};this.startStage=function(){r=!0;C=!1};this.update=function(){if(r){C&&(s_iTimeElaps=0);d+=s_iTimeElaps;d>e&&(d=0,this._spawnZombie(),this._spawnSurvivor());f+=s_iTimeElaps;
f>h&&(f=0,g++,l++,l===MAX_SPAWN.length&&l--,this._setProbability(),h+=STAGE_TIME_INCREASE,550<e&&(e-=SPAWN_TIME_DECREASE),C=!0);for(var a=0;a<n.length;a++)n[a].update();0===n.length&&(r=!1,u.removeAllChildren(),x.newStage(m));this._sortZombie()}};s_oGame=this;PLAYER_LIFE=a.playerlife;DAMAGE[0]=a.damage_zombie_0;DAMAGE[1]=a.damage_zombie_1;DAMAGE[2]=a.damage_zombie_2;DAMAGE[3]=a.damage_zombie_3;DAMAGE[4]=a.damage_survivor;LIFE[0]=a.life_zombie_0;LIFE[1]=a.life_zombie_1;LIFE[2]=a.life_zombie_2;LIFE[3]=
a.life_zombie_3;LIFE[4]=a.life_survivor;SCORE[0]=a.score_zombie_0;SCORE[1]=a.score_zombie_1;SCORE[2]=a.score_zombie_2;SCORE[3]=a.score_zombie_3;SCORE[4]=a.score_survivor;SPAWN_TIME=a.start_spawn_time;SPAWN_TIME_DECREASE=a.spawn_time_decrease;STAGE_START_TIME=a.stage_start_time;STAGE_TIME_INCREASE=a.stage_time_increase;MAX_SPAWN=a.max_spawn_onstages;ZOMBIE_ON_STAGE[0]=a.zombie_rate_onstage_0;ZOMBIE_ON_STAGE[1]=a.zombie_rate_onstage_1;ZOMBIE_ON_STAGE[2]=a.zombie_rate_onstage_2;ZOMBIE_ON_STAGE[3]=a.zombie_rate_onstage_3;
ZOMBIE_ON_STAGE[4]=a.zombie_rate_onstage_4;ZOMBIE_ON_STAGE[5]=a.zombie_rate_onstage_5;ZOMBIE_ON_STAGE[6]=a.zombie_rate_onstage_6;ZOMBIE_ON_STAGE[7]=a.zombie_rate_onstage_7;SURVIVOR_ON_STAGE=a.survivor_rate_onstages;this._init()}var s_oGame;
function CEndPanel(a){var c,b,d,f;this._init=function(a){c=createBitmap(a);d=new createjs.Text(""," 60px ZombieA","#fff2af");d.x=CANVAS_WIDTH/2;d.y=CANVAS_HEIGHT/2-102;d.textAlign="center";f=new createjs.Text(""," 40px ZombieA","#fff2af");f.x=CANVAS_WIDTH/2;f.y=CANVAS_HEIGHT/2+52;f.textAlign="center";b=new createjs.Container;b.alpha=0;b.visible=!1;b.addChild(c,f,d);s_oStage.addChild(b)};this.unload=function(){b.off("mousedown",this._onExit)};this._initListener=function(){b.on("mousedown",this._onExit)};
this.show=function(a){d.text=TEXT_GAMEOVER;f.text=TEXT_SCORE+": "+a;b.visible=!0;var c=this;createjs.Tween.get(b).to({alpha:1},500).call(function(){c._initListener()});$(s_oMain).trigger("save_score",a)};this._onExit=function(){b.off("mousedown",this._onExit);s_oStage.removeChild(b);s_oGame.onExit()};this._init(a);return this}
function CCharacter(a,c,b,d,f){var e,h,g,l,k,p,m,r,C,x,w,u,q,y,v=!0,z=!1,n,A,t=1,E,G,H,D,B,F;this._init=function(a,b,c,d,f){F=f;n=DEATH_FRAMES[a];A=RUN_FRAMES[a];y=!0;h="run";e=0;D=[];B=[];g=new createjs.Container;l=new createjs.Container;k=new createjs.Container;c=4===a?"survivor_death":"zombie"+a+"_death";for(var p=0;p<=n;p++)D[p]=createBitmap(s_oSpriteLibrary.getSprite(c+p)),D[p].visible=!1,l.addChild(D[p]);c=4===a?"survivor_run":"zombie"+a+"_run";for(p=0;p<=A;p++)B[p]=createBitmap(s_oSpriteLibrary.getSprite(c+
p)),B[p].visible=!1,g.addChild(B[p]);c=s_oSpriteLibrary.getSprite(4===a?"survivor_run"+a:"zombie"+a+"_run"+a);g.regX=c.width/2;g.regY=c.height;c=s_oSpriteLibrary.getSprite(4===a?"survivor_death"+a:"zombie"+a+"_death"+a);l.regX=c.width/2;l.regY=c.height;l.visible=!1;f.addChild(g);f.addChild(l);g.x=CANVAS_WIDTH+g.regX+d;g.y=b;r=CORRECTION[a];w=BAR_POS[a];E=LIFE[a];a=s_oSpriteLibrary.getSprite("enemy_bar_bg");C=createBitmap(a);C.x=w.x;C.y=w.y;k.addChild(C);a=s_oSpriteLibrary.getSprite("enemy_bar_fill");
x=createBitmap(a);x.x=w.x+4;x.y=w.y+4;k.addChild(x);u=new createjs.Shape;u.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0,0,a.width,a.height);u.regX=a.width;u.regY=a.height;u.x=w.x+a.width+4;u.y=w.y+a.height+4;k.addChild(u);x.mask=u;k.alpha=0;g.addChild(k);a=s_oSpriteLibrary.getSprite("blood_floor");q=createBitmap(a);q.regX=a.width/2;q.regY=a.height/2;q.alpha=0;H=s_oGame.getBgDepth()+1;a=(new createjs.Graphics).beginFill("rgba(158,158,158,0.01)").drawRect(r.x,r.y,r.w,r.h);m=new createjs.Shape(a);
m.on("click",this.hitZombie);g.addChild(m)};this.unload=function(){F.removeChild(g);F.removeChild(l);m.off("click",this.hitZombie)};this.hitZombie=function(){s_bPlayActive&&(E--,k.alpha=1,G=E/LIFE[a]+.001,!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("tap_zombie"),createjs.Tween.get(u).to({scaleY:G},150,createjs.Ease.linear),createjs.Tween.get(k,{override:!0}).to({alpha:0},1E3,createjs.Ease.linear),0===E&&p.kill())};this.scaleMe=function(a){g.scaleX=a;g.scaleY=a};this._getScale=function(){return g.scaleX};
this._animRun=function(){0===t?(B[A].visible=!1,B[0].visible=!0):(B[t-1].visible=!1,B[t].visible=!0);t++;t>A&&(t=0)};this._bloodOnFloor=function(){q.x=l.x-OFFSET_BLOOD[a].x;q.y=l.y-OFFSET_BLOOD[a].y;q.scaleX=l.scaleX;q.scaleY=l.scaleY;q.rotation=Math.floor(360*Math.random());s_oStage.addChild(q);s_oStage.setChildIndex(q,H);createjs.Tween.get(q).to({alpha:1},200,createjs.Ease.linear)};this._animDeath=function(){0===t?(B[0].visible=!0,this._bloodOnFloor()):(D[t-1].visible=!1,D[t].visible=!0);t++;t>
n&&(y=!1,createjs.Tween.get(D[t-1]).to({alpha:0},2500,createjs.Ease.linear).call(function(){p._isDead()}),createjs.Tween.get(q).to({alpha:0},15E3,createjs.Ease.linear))};this.kill=function(){"run"===h&&(4===a&&(!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("survivor_scream")),h="death",s_oGame.updateScore(a),createjs.Tween.removeTweens(g),l.x=g.x-OFFSET_ANIMATION[a],l.y=g.y,l.scaleX=this._getScale(),l.scaleY=this._getScale(),t=0,l.addChild(k),1===a&&(k.regX=w.x),k.x=w.x,createjs.Tween.get(k).to({alpha:0},
500,createjs.Ease.linear),g.visible=!1,F.removeChild(g),l.visible=!0,D[0].visible=!0)};this._isDead=function(){z=!0;this.unload()};this._isGone=function(){z=!0;this.unload();s_oGame.subtractLife(a)};this.checkGone=function(){return z};this._move=function(){createjs.Tween.get(g).to({x:-g.regX,y:b},SPEED[a],createjs.Ease.linear).call(function(){p._isGone()})};this.getPos=function(){return{x:g.x,y:g.y}};this.getContainerRun=function(){return g};this.getContainerDeath=function(){return l};this.getState=
function(){return h};this.update=function(){if(y)switch(h){case "run":e===ANIM_DELAY[a]?(e=0,this._animRun()):e++;break;case "death":this._animDeath()}v&&(this._move(),v=!1)};p=this;this._init(a,c,b,d,f)}
function CSpriteLibrary(){var a,c,b,d,f,e;this.init=function(h,g,l){b=c=0;d=h;f=g;e=l;a={}};this.addSprite=function(b,d){a.hasOwnProperty(b)||(a[b]={szPath:d,oSprite:new Image},c++)};this.getSprite=function(b){return a.hasOwnProperty(b)?a[b].oSprite:null};this._onSpritesLoaded=function(){f.call(e)};this._onSpriteLoaded=function(){d.call(e);++b==c&&this._onSpritesLoaded()};this.loadSprites=function(){for(var b in a)a[b].oSprite.oSpriteLibrary=this,a[b].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[b].oSprite.src=a[b].szPath};this.getNumSprites=function(){return c}}
var CANVAS_WIDTH=1136,CANVAS_HEIGHT=640,DISABLE_SOUND_MOBILE=!1,FPS_TIME=1E3/30,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,ON_PRESS_MOVE=6,PLAYER_LIFE,SPAWN_TIME,SPAWN_TIME_DECREASE,STAGE_START_TIME,STAGE_TIME_INCREASE,MAX_START_TOP=300,MAX_START_BOT=600,MAX_END_TOP=400,MAX_END_BOT=650,START_SIZE=MAX_START_BOT-MAX_START_TOP,END_SIZE=MAX_END_BOT-MAX_END_TOP,ZOMBIE_ON_STAGE=[],MAX_SPAWN=[],SURVIVOR_ON_STAGE;
function CToggle(a,c,b,d){var f,e,h,g;this._init=function(a,b,c,d){e=[];h=[];var r=new createjs.SpriteSheet({images:[c],frames:{width:c.width/2,height:c.height,regX:c.width/2/2,regY:c.height/2},animations:{state_true:[0],state_false:[1]}});f=d;g=createSprite(r,"state_"+f,c.width/2/2,c.height/2,c.width/2,c.height);g.x=a;g.y=b;g.stop();s_oStage.addChild(g);this._initListener()};this.unload=function(){g.off("mousedown",this.buttonDown);g.off("pressup",this.buttonRelease);s_oStage.removeChild(g)};this._initListener=
function(){g.on("mousedown",this.buttonDown);g.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){e[a]=b;h[a]=c};this.setActive=function(a){f=a;g.gotoAndStop("state_"+f)};this.buttonRelease=function(){g.scaleX=1;g.scaleY=1;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");f=!f;g.gotoAndStop("state_"+f);e[ON_MOUSE_UP]&&e[ON_MOUSE_UP].call(h[ON_MOUSE_UP],f)};this.buttonDown=function(){g.scaleX=.9;g.scaleY=.9;e[ON_MOUSE_DOWN]&&e[ON_MOUSE_DOWN].call(h[ON_MOUSE_DOWN])};
this._init(a,c,b,d)}var s_iScaleFactor=1,s_oCanvasLeft,s_oCanvasTop;
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||
navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}
function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,c=CANVAS_HEIGHT,b=window.innerWidth;multiplier=s_iScaleFactor=Math.min(window.innerHeight/c,b/a);a*=multiplier;c*=multiplier;$("#canvas").css("width",a+"px");$("#canvas").css("height",c+"px");$("#canvas").css("left",b/2-a/2+"px");s_oCanvasLeft=$("#canvas").offset().left;s_oCanvasTop=$("#canvas").offset().top}}
function createBitmap(a,c,b){var d=new createjs.Bitmap(a),f=new createjs.Shape;c&&b?f.graphics.beginFill("#fff").drawRect(0,0,c,b):f.graphics.beginFill("#ff0").drawRect(0,0,a.width,a.height);d.hitArea=f;return d}function createSprite(a,c,b,d,f,e){a=null!==c?new createjs.Sprite(a,c):new createjs.Sprite(a);c=new createjs.Shape;c.graphics.beginFill("#000000").drawRect(-b,-d,f,e);a.hitArea=c;return a}
function randomFloatBetween(a,c,b){"undefined"===typeof b&&(b=2);return parseFloat(Math.min(a+Math.random()*(c-a),c).toFixed(b))}function shuffle(a){for(var c=a.length,b,d;0!==c;)d=Math.floor(Math.random()*c),--c,b=a[c],a[c]=a[d],a[d]=b;return a}function bubbleSort(a){var c;do{c=!1;for(var b=0;b<a.length-1;b++)a[b]>a[b+1]&&(c=a[b],a[b]=a[b+1],a[b+1]=c,c=!0)}while(c)}function easeLinear(a,c,b,d){return b*a/d+c}function easeInQuad(a,c,b,d){return b*(a/=d)*a+c}
function easeInSine(a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c}function easeInCubic(a,c,b,d){return b*(a/=d)*a*a+c}function getTrajectoryPoint(a,c){var b=new createjs.Point,d=(1-a)*(1-a),f=a*a;b.x=d*c.start.x+2*(1-a)*a*c.traj.x+f*c.end.x;b.y=d*c.start.y+2*(1-a)*a*c.traj.y+f*c.end.y;return b}function formatTime(a){a/=1E3;var c=Math.floor(a/60);a=parseFloat(a-60*c).toFixed(1);var b="",b=10>c?b+("0"+c+":"):b+(c+":");return b=10>a?b+("0"+a):b+a}function degreesToRadians(a){return a*Math.PI/180}
function checkRectCollision(a,c){var b,d;b=getBounds(a,.9);d=getBounds(c,.98);return calculateIntersection(b,d)}function calculateIntersection(a,c){var b,d,f,e,h,g,l,k;b=a.x+(f=a.width/2);d=a.y+(e=a.height/2);h=c.x+(g=c.width/2);l=c.y+(k=c.height/2);b=Math.abs(b-h)-(f+g);d=Math.abs(d-l)-(e+k);return 0>b&&0>d?(b=Math.min(Math.min(a.width,c.width),-b),d=Math.min(Math.min(a.height,c.height),-d),{x:Math.max(a.x,c.x),y:Math.max(a.y,c.y),width:b,height:d,rect1:a,rect2:c}):null}
function getBounds(a,c){var b={x:Infinity,y:Infinity,width:0,height:0};if(a instanceof createjs.Container){b.x2=-Infinity;b.y2=-Infinity;var d=a.children,f=d.length,e,h;for(h=0;h<f;h++)e=getBounds(d[h],1),e.x<b.x&&(b.x=e.x),e.y<b.y&&(b.y=e.y),e.x+e.width>b.x2&&(b.x2=e.x+e.width),e.y+e.height>b.y2&&(b.y2=e.y+e.height);Infinity==b.x&&(b.x=0);Infinity==b.y&&(b.y=0);Infinity==b.x2&&(b.x2=0);Infinity==b.y2&&(b.y2=0);b.width=b.x2-b.x;b.height=b.y2-b.y;delete b.x2;delete b.y2}else{var g,l;a instanceof createjs.Bitmap?
(f=a.sourceRect||a.image,h=f.width*c,g=f.height*c):a instanceof createjs.Sprite?a.spriteSheet._frames&&a.spriteSheet._frames[a.currentFrame]&&a.spriteSheet._frames[a.currentFrame].image?(f=a.spriteSheet.getFrame(a.currentFrame),h=f.rect.width,g=f.rect.height,d=f.regX,l=f.regY):(b.x=a.x||0,b.y=a.y||0):(b.x=a.x||0,b.y=a.y||0);d=d||0;h=h||0;l=l||0;g=g||0;b.regX=d;b.regY=l;f=a.localToGlobal(0-d,0-l);e=a.localToGlobal(h-d,g-l);h=a.localToGlobal(h-d,0-l);d=a.localToGlobal(0-d,g-l);b.x=Math.min(Math.min(Math.min(f.x,
e.x),h.x),d.x);b.y=Math.min(Math.min(Math.min(f.y,e.y),h.y),d.y);b.width=Math.max(Math.max(Math.max(f.x,e.x),h.x),d.x)-b.x;b.height=Math.max(Math.max(Math.max(f.y,e.y),h.y),d.y)-b.y}return b}function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}function shuffle(a){for(var c=a.length,b,d;0<c;)d=Math.floor(Math.random()*c),c--,b=a[c],a[c]=a[d],a[d]=b;return a}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3==a.nodeType&&(a=a.parentNode);var c=document.createEvent("MouseEvents");c.initEvent("click",!0,!0);a.dispatchEvent(c)}}};
(function(){function a(a){var d={focus:"visible",focusin:"visible",pageshow:"visible",blur:"hidden",focusout:"hidden",pagehide:"hidden"};a=a||window.event;a.type in d?document.body.className=d[a.type]:(document.body.className=this[c]?"hidden":"visible","hidden"===document.body.className?s_oMain.stopUpdate():s_oMain.startUpdate())}var c="hidden";c in document?document.addEventListener("visibilitychange",a):(c="mozHidden")in document?document.addEventListener("mozvisibilitychange",a):(c="webkitHidden")in
document?document.addEventListener("webkitvisibilitychange",a):(c="msHidden")in document?document.addEventListener("msvisibilitychange",a):"onfocusin"in document?document.onfocusin=document.onfocusout=a:window.onpageshow=window.onpagehide=window.onfocus=window.onblur=a})();
function CTextButton(a,c,b,d,f,e,h){var g,l,k;this._init=function(a,b,c,d,f,e,h){g=[];l=[];var q=createBitmap(c),y=Math.ceil(h/20),v=new createjs.Text(d,""+h+"px "+f,"#000000");v.textAlign="center";v.textBaseline="alphabetic";var z=v.getBounds();v.x=c.width/2+y;v.y=Math.floor(c.height/2)+z.height/3+y;d=new createjs.Text(d,""+h+"px "+f,e);d.textAlign="center";d.textBaseline="alphabetic";z=d.getBounds();d.x=c.width/2;d.y=Math.floor(c.height/2)+z.height/3;k=new createjs.Container;k.x=a;k.y=b;k.regX=
c.width/2;k.regY=c.height/2;k.addChild(q,v,d);s_oStage.addChild(k);this._initListener()};this.unload=function(){k.off("mousedown");k.off("pressup");s_oStage.removeChild(k)};this.setVisible=function(a){k.visible=a};this._initListener=function(){oParent=this;k.on("mousedown",this.buttonDown);k.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,c){g[a]=b;l[a]=c};this.buttonRelease=function(){k.scaleX=1;k.scaleY=1;g[ON_MOUSE_UP]&&g[ON_MOUSE_UP].call(l[ON_MOUSE_UP])};this.buttonDown=
function(){k.scaleX=.9;k.scaleY=.9;g[ON_MOUSE_DOWN]&&g[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])};this.setPosition=function(a,b){k.x=a;k.y=b};this.setX=function(a){k.x=a};this.setY=function(a){k.y=a};this.getButtonImage=function(){return k};this.getX=function(){return k.x};this.getY=function(){return k.y};this._init(a,c,b,d,f,e,h);return this}
function CPreloader(){var a,c,b,d,f,e,h;this._init=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("progress_bar","./sprites/progress_bar.png");s_oSpriteLibrary.loadSprites();h=new createjs.Container;s_oStage.addChild(h)};this.unload=function(){h.removeAllChildren()};this.hide=function(){var a=this;setTimeout(function(){createjs.Tween.get(e).to({alpha:1},500).call(function(){a.unload();
s_oMain.gotoMenu()})},1E3)};this._onImagesLoaded=function(){};this._onAllImagesLoaded=function(){this.attachSprites();s_oMain.preloaderReady()};this.attachSprites=function(){var g=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));h.addChild(g);g=s_oSpriteLibrary.getSprite("progress_bar");d=createBitmap(g);d.x=CANVAS_WIDTH/2-g.width/2;d.y=CANVAS_HEIGHT-170;h.addChild(d);a=g.width;c=g.height;f=new createjs.Shape;f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x,d.y,1,c);h.addChild(f);d.mask=
f;b=new createjs.Text("","30px ZombieA","#fff");b.x=CANVAS_WIDTH/2;b.y=CANVAS_HEIGHT-125;b.shadow=new createjs.Shadow("#000",2,2,2);b.textBaseline="alphabetic";b.textAlign="center";h.addChild(b);e=new createjs.Shape;e.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);e.alpha=0;h.addChild(e)};this.refreshLoader=function(e){b.text=e+"%";f.graphics.clear();e=Math.floor(e*a/100);f.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(d.x,d.y,e,c)};this._init()}
function CMenu(){var a,c,b,d;this._init=function(){a=createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var f=s_oSpriteLibrary.getSprite("but_play");c=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-80,f,TEXT_PLAY,"ZombieA","#ffffff",50);c.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)f=s_oSpriteLibrary.getSprite("audio_icon"),d=new CToggle(CANVAS_WIDTH-f.height/2-10,f.height/2+10,f,s_bAudioActive),d.addEventListener(ON_MOUSE_UP,
this._onAudioToggle,this);b=new createjs.Shape;b.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(b);createjs.Tween.get(b).to({alpha:0},1E3).call(function(){b.visible=!1})};this.unload=function(){c.unload();c=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)d.unload(),d=null;s_oStage.removeChild(a);a=null};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onButPlayRelease=function(){this.unload();!1!==
DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");s_oMain.gotoGame()};this._init()}
function CMain(a){var c,b=0,d=0,f=STATE_LOADING,e,h,g;this.initContainer=function(){s_oCanvas=document.getElementById("canvas");s_oStage=new createjs.Stage(s_oCanvas);createjs.Touch.enable(s_oStage);s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&(s_oStage.enableMouseOver(20),$("body").on("contextmenu","#canvas",function(a){return!1}));s_iPrevTime=(new Date).getTime();createjs.Ticker.addEventListener("tick",this._update);createjs.Ticker.setFPS(30);navigator.userAgent.match(/Windows Phone/i)&&(DISABLE_SOUND_MOBILE=
!0);s_oSpriteLibrary=new CSpriteLibrary;h=new CPreloader};this.soundLoaded=function(){b++;if(b===d){h.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:100});this.gotoMenu()}};this._initSounds=function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["m4a"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,
this)),createjs.Sound.registerSound("./sounds/soundtrack.ogg","soundtrack"),createjs.Sound.registerSound("./sounds/press_button.ogg","click"),createjs.Sound.registerSound("./sounds/survivor_scream.ogg","survivor_scream"),createjs.Sound.registerSound("./sounds/tap_zombie.ogg","tap_zombie"),createjs.Sound.registerSound("./sounds/zombie_crowd.ogg","zombie_crowd")):(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.soundLoaded,this)),createjs.Sound.registerSound("./sounds/soundtrack.m4a",
"soundtrack"),createjs.Sound.registerSound("./sounds/press_button.m4a","click"),createjs.Sound.registerSound("./sounds/survivor_scream.m4a","survivor_scream"),createjs.Sound.registerSound("./sounds/tap_zombie.m4a","tap_zombie"),createjs.Sound.registerSound("./sounds/zombie_crowd.m4a","zombie_crowd")),d+=5)};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");s_oSpriteLibrary.addSprite("msg_box",
"./sprites/msg_box.png");s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("bg_game","./sprites/bg_game.jpg");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");s_oSpriteLibrary.addSprite("pause_icon","./sprites/pause_icon.png");s_oSpriteLibrary.addSprite("bridge","./sprites/bridge.png");s_oSpriteLibrary.addSprite("energy_bar_bg","./sprites/energy_bar_bg.png");s_oSpriteLibrary.addSprite("energy_bar_fill",
"./sprites/energy_bar_fill.png");s_oSpriteLibrary.addSprite("enemy_bar_bg","./sprites/enemy_bar_bg.png");s_oSpriteLibrary.addSprite("enemy_bar_fill","./sprites/enemy_bar_fill.png");s_oSpriteLibrary.addSprite("blood_floor","./sprites/blood_floor.png");s_oSpriteLibrary.addSprite("game_over_bg","./sprites/game_over_bg.png");for(var a=0;57>=a;a++)s_oSpriteLibrary.addSprite("zombie0_death"+a,"./sprites/zombie_00/death/zombiedeath0_"+a+".png");for(a=0;28>=a;a++)s_oSpriteLibrary.addSprite("zombie0_run"+
a,"./sprites/zombie_00/run/zombierun0_"+a+".png");for(a=0;53>=a;a++)s_oSpriteLibrary.addSprite("zombie1_death"+a,"./sprites/zombie_01/death/zombiedeath1_"+a+".png");for(a=0;28>=a;a++)s_oSpriteLibrary.addSprite("zombie1_run"+a,"./sprites/zombie_01/run/zombierun1_"+a+".png");for(a=0;57>=a;a++)s_oSpriteLibrary.addSprite("zombie2_death"+a,"./sprites/zombie_02/death/zombiedeath2_"+a+".png");for(a=0;19>=a;a++)s_oSpriteLibrary.addSprite("zombie2_run"+a,"./sprites/zombie_02/run/zombierun2_"+a+".png");for(a=
0;57>=a;a++)s_oSpriteLibrary.addSprite("zombie3_death"+a,"./sprites/zombie_03/death/zombiedeath3_"+a+".png");for(a=0;20>=a;a++)s_oSpriteLibrary.addSprite("zombie3_run"+a,"./sprites/zombie_03/run/zombierun3_"+a+".png");for(a=0;57>=a;a++)s_oSpriteLibrary.addSprite("survivor_death"+a,"./sprites/survivor/death/survivordeath_"+a+".png");for(a=0;16>=a;a++)s_oSpriteLibrary.addSprite("survivor_run"+a,"./sprites/survivor/run/survivorrun_"+a+".png");d+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};
this._onImagesLoaded=function(){b++;h.refreshLoader(Math.floor(b/d*100));if(b===d){h.unload();if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundtrack=createjs.Sound.play("soundtrack",{loop:100});this.gotoMenu()}};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.preloaderReady=function(){this._loadImages();!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds()};this.gotoMenu=function(){new CMenu;f=STATE_MENU};this.gotoGame=function(){g=
new CGame(e);f=STATE_GAME;$(s_oMain).trigger("game_start")};this.gotoHelp=function(){new CHelp;f=STATE_HELP};this.stopUpdate=function(){c=!1};this.startUpdate=function(){c=!0};this._update=function(a){if(!1!==c){var b=(new Date).getTime();s_iTimeElaps=b-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=b;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);f===STATE_GAME&&g.update();s_oStage.update(a)}};s_oMain=this;e=a;this.initContainer()}
var s_bMobile,s_bAudioActive=!0,s_bPlayActive=!0,s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_oSoundTrackSnd,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary,s_oSoundTrack,s_oCanvas;TEXT_GAMEOVER="GAME OVER";TEXT_SCORE="SCORE";TEXT_PLAY="PLAY";TEXT_HEALTH="HEALTH";WAVE_TEXT="WAVE";TEXT_HELP1="TAP THE SCREEN TO KILL THE ZOMBIES. SAVE THE SURVIVOR TO GET EXTRA ENERGY!";TEXT_HELP2="IF YOU LOSE ALL YOUR HEALTH, YOU WILL DIE!";
function CInterface(){var a,c,b,d,f,e,h,g,l,k;this._init=function(){var k,m=s_oSpriteLibrary.getSprite("but_exit");c=new CGfxButton(CANVAS_WIDTH-m.height/2-10,m.height/2+10,m,!0);c.addEventListener(ON_MOUSE_UP,this._onExit,this);k=CANVAS_WIDTH-m.width/2-80;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)m=s_oSpriteLibrary.getSprite("audio_icon"),a=new CToggle(k,10+m.height/2,m,s_bAudioActive),a.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this),k=CANVAS_WIDTH-m.width/2-130;m=s_oSpriteLibrary.getSprite("pause_icon");
b=new CToggle(k,10+m.height/2,m,s_bPlayActive);b.addEventListener(ON_MOUSE_UP,this._onPauseToggle,this);f=new createjs.Text("","60px ZombieA","#ffffff");f.x=CANVAS_WIDTH/2+2;f.y=-98;f.textAlign="center";s_oStage.addChild(f);e=new createjs.Text("","60px ZombieA","#fe0000");e.x=CANVAS_WIDTH/2;e.y=-100;e.textAlign="center";s_oStage.addChild(e);d=new createjs.Text(TEXT_SCORE,"45px ZombieA","#fff2af");d.x=30;d.y=610;d.textBaseline="textBaseline";s_oStage.addChild(d);h=new createjs.Text("0","45px ZombieA",
"#fff2af");h.x=200;h.y=610;h.textBaseline="textBaseline";s_oStage.addChild(h);g=new createjs.Text(TEXT_HEALTH,"40px ZombieA","#fff2af");g.x=1110;g.y=610;g.textAlign="right";g.textBaseline="textBaseline";s_oStage.addChild(g);m=s_oSpriteLibrary.getSprite("energy_bar_fill");k=createBitmap(m);k.x=755;k.y=615;s_oStage.addChild(k);var m=s_oSpriteLibrary.getSprite("energy_bar_bg"),r=createBitmap(m);r.x=750;r.y=610;s_oStage.addChild(r);l=new createjs.Shape;l.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0,
0,m.width,m.height);l.x=755;l.y=615;s_oStage.addChild(l);k.mask=l};this.refreshBar=function(a){createjs.Tween.get(l,{override:!0}).to({scaleX:a},250,createjs.Ease.linear)};this.refreshScore=function(a){h.text=a};this.newStage=function(a){e.text=WAVE_TEXT+" "+a;f.text=WAVE_TEXT+" "+a;createjs.Tween.get(e).to({y:CANVAS_HEIGHT/2-220},2E3,createjs.Ease.bounceOut).to({alpha:0},2E3,createjs.Ease.linear);createjs.Tween.get(f).to({y:CANVAS_HEIGHT/2-218},2E3,createjs.Ease.bounceOut).to({alpha:0},2E3,createjs.Ease.linear).call(function(){k._removeTweens()});
s_oGame.startStage()};this._removeTweens=function(){e.alpha=1;e.y=-100;f.alpha=1;f.y=-98;createjs.Tween.removeTweens(e);createjs.Tween.removeTweens(f)};this.unload=function(){if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)a.unload(),a=null};this.onExitFromHelp=function(){_oHelpPanel.unload()};this._onAudioToggle=function(){createjs.Sound.setMute(s_bAudioActive);s_bAudioActive=!s_bAudioActive};this._onPauseToggle=function(){s_oGame.pauseGame()};this._onExit=function(){s_oGame.onExit()};k=this;this._init();
return this};