function CSpriteLibrary(){var a,b,f,d,c,e;this.init=function(k,n,h){f=b=0;d=k;c=n;e=h;a={}};this.addSprite=function(e,c){a.hasOwnProperty(e)||(a[e]={szPath:c,oSprite:new Image},b++)};this.getSprite=function(b){return a.hasOwnProperty(b)?a[b].oSprite:null};this._onSpritesLoaded=function(){c.call(e)};this._onSpriteLoaded=function(){d.call(e);++f==b&&this._onSpritesLoaded()};this.loadSprites=function(){for(var b in a)a[b].oSprite.oSpriteLibrary=this,a[b].oSprite.onload=function(){this.oSpriteLibrary._onSpriteLoaded()},
a[b].oSprite.src=a[b].szPath};this.getNumSprites=function(){return b}}var CANVAS_WIDTH=768,CANVAS_HEIGHT=1024,FPS_TIME=1E3/24,DISABLE_SOUND_MOBILE=!0,STATE_LOADING=0,STATE_MENU=1,STATE_HELP=1,STATE_GAME=3,ON_MOUSE_DOWN=0,ON_MOUSE_UP=1,ON_MOUSE_OVER=2,ON_MOUSE_OUT=3,ON_DRAG_START=4,ON_DRAG_END=5,BOARD_COLS,BOARD_ROWS,ELEM_SIZE,NUM_COLORS,SCORE_PER_ELEM,SPEED_MOVE,NUM_LIVES,GAME_STATE_NO_MOVE=0,GAME_STATE_MOVE_VERTICAL=1,GAME_STATE_MOVE_HORIZONTAL=2,BOARD_OFFSET_X=28,BOARD_OFFSET_Y=130;
function CTweenController(a){var b=0,f=a.oNode.getX(),d=a.oNode.getY(),c=!1;this.tweenValue=function(a,b,c){return a+c*(b-a)};this.start=function(){c=!0};this.easeLinear=function(a,b,c,h){return c*a/h+b};this.easeInCubic=function(a,b,c,h){h=(a/=h)*a*a;return b+c*h};this.easeBackInQuart=function(a,b,c,h){h=(a/=h)*a;return b+c*(2*h*h+2*h*a+-3*h)};this.updateDown=function(){if(!1===c)return!1;var e;b+=s_iTimeElaps;b>=a.iDuration&&(b=a.iDuration,c=!1);e=this.easeInCubic(b,0,1,a.iDuration);a.oNode.setY(this.tweenValue(d,
a.iFinalY,e));return!0};this.updateRight=function(){if(!1===c)return!1;var e;b+=s_iTimeElaps;b>=a.iDuration&&(b=a.iDuration,c=!1);e=this.easeInCubic(b,0,1,a.iDuration);a.oNode.setX(this.tweenValue(f,a.iFinalX,e));return!0}}
function CToggle(a,b,f){var d,c,e;this._init=function(a,b,h){d=[];c=[];h=new createjs.SpriteSheet({images:[h],frames:{width:h.width/2,height:h.height,regX:h.width/2/2,regY:h.height/2},animations:{on:[0,1],off:[1,2]}});e=s_bAudioActive?new createjs.Sprite(h,"on"):new createjs.Sprite(h,"off");e.x=a;e.y=b;e.stop();s_oStage.addChild(e);this._initListener()};this.unload=function(){e.off("mousedown",this.buttonDown);e.off("pressup",this.buttonRelease);s_oStage.removeChild(e)};this._initListener=function(){e.on("mousedown",
this.buttonDown);e.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,h){d[a]=b;c[a]=h};this.buttonRelease=function(){e.scaleX=1;e.scaleY=1;(s_bAudioActive=!s_bAudioActive)?e.gotoAndStop("on"):e.gotoAndStop("off");d[ON_MOUSE_UP]&&d[ON_MOUSE_UP].call(c[ON_MOUSE_UP])};this.buttonDown=function(){e.scaleX=.9;e.scaleY=.9;d[ON_MOUSE_DOWN]&&d[ON_MOUSE_DOWN].call(c[ON_MOUSE_DOWN])};this._init(a,b,f)}
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
4))})(navigator.userAgent||navigator.vendor||window.opera);$(window).resize(function(){sizeHandler()});function trace(a){console.log(a)}$(window).ready(function(){sizeHandler()});window.addEventListener("orientationchange",onOrientationChange);function onOrientationChange(){window.matchMedia("(orientation: portrait)").matches&&sizeHandler();window.matchMedia("(orientation: landscape)").matches&&sizeHandler()}

function sizeHandler(){window.scrollTo(0,1);if($("#canvas")){var a=CANVAS_WIDTH,b=CANVAS_HEIGHT,c,d;!0===inIframe()&&"ios"==getMobileOperatingSystem()?top.location.href=document.location.href:(c=window.innerWidth,d=window.innerHeight,console.log("h: "+d),multiplier=Math.min(d/b,c/a),a*=multiplier,b*=multiplier,$("#canvas").css("width",a+"px"),$("#canvas").css("height",b+"px"),$("#canvas").css("left",c/2-a/2+"px"))}}
function getMobileOperatingSystem(){var a=navigator.userAgent||navigator.vendor||window.opera;return a.match(/iPad/i)||a.match(/iPhone/i)||a.match(/iPod/i)?"ios":a.match(/Android/i)?"android":"unknown"}function inIframe(){try{return window.self!==window.top}catch(a){return!0}};

function randomFloatBetween(a,b,f){"undefined"===typeof f&&(f=2);return parseFloat(Math.min(a+Math.random()*(b-a),b).toFixed(f))}
function shuffle(a){for(var b=a.length,f,d;0!==b;)d=Math.floor(Math.random()*b),b-=1,f=a[b],a[b]=a[d],a[d]=f;return a}function NoClickDelay(a){this.element=a;window.Touch&&this.element.addEventListener("touchstart",this,!1)}
NoClickDelay.prototype={handleEvent:function(a){switch(a.type){case "touchstart":this.onTouchStart(a);break;case "touchmove":this.onTouchMove(a);break;case "touchend":this.onTouchEnd(a)}},onTouchStart:function(a){a.preventDefault();this.moved=!1;this.element.addEventListener("touchmove",this,!1);this.element.addEventListener("touchend",this,!1)},onTouchMove:function(a){this.moved=!0},onTouchEnd:function(a){this.element.removeEventListener("touchmove",this,!1);this.element.removeEventListener("touchend",
this,!1);if(!this.moved){a=document.elementFromPoint(a.changedTouches[0].clientX,a.changedTouches[0].clientY);3==a.nodeType&&(a=a.parentNode);var b=document.createEvent("MouseEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}}};
function CTextButton(a,b,f,d,c,e,k,n){var h,m,l;this._init=function(a,b,c,e,k,f,d,n){h=[];m=[];var z=new createjs.Bitmap(c),y=Math.ceil(d/30),p=new createjs.Text(e,d+"px "+k,"#000000");p.textAlign="center";p.textBaseline="middle";p.lineHeight=1;var w=p.getBounds();p.x=c.width/2+y;p.y=Math.floor(c.height/2)+w.height/3+y;e=new createjs.Text(e,d+"px "+k,f);e.textAlign="center";e.textBaseline="middle";e.lineHeight=1;w=e.getBounds();e.x=c.width/2;e.y=Math.floor(c.height/2)+w.height/3;l=new createjs.Container;
l.x=a;l.y=b;l.regX=c.width/2;l.regY=c.height/2;l.addChild(z,p,e);!1!==n&&s_oStage.addChild(l);this._initListener()};this.unload=function(){l.off("mousedown");l.off("pressup");s_oStage.removeChild(l)};this.setVisible=function(a){l.visible=a};this._initListener=function(){oParent=this;l.on("mousedown",this.buttonDown);l.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,e){h[a]=b;m[a]=e};this.buttonRelease=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("click");
l.scaleX=1;l.scaleY=1;h[ON_MOUSE_UP]&&h[ON_MOUSE_UP].call(m[ON_MOUSE_UP])};this.buttonDown=function(){l.scaleX=.9;l.scaleY=.9;h[ON_MOUSE_DOWN]&&h[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])};this.setPosition=function(a,b){l.x=a;l.y=b};this.setX=function(a){l.x=a};this.setY=function(a){l.y=a};this.getButtonImage=function(){return l};this.getX=function(){return l.x};this.getY=function(){return l.y};this.getSprite=function(){return l};this._init(a,b,f,d,c,e,k,n);return this}
function CPreloader(){var a;this._init=function(){this._onAllPreloaderImagesLoaded()};this._onPreloaderImagesLoaded=function(){};this._onAllPreloaderImagesLoaded=function(){a=new createjs.Text("","bold 44px Arial center","#ffffff");a.x=CANVAS_WIDTH/2-40;a.y=CANVAS_HEIGHT/2;s_oStage.addChild(a)};this.unload=function(){s_oStage.removeChild(a)};this.refreshLoader=function(b){a.text=b+"%"};this._init()}
function CNextLevelPanel(a){var b,f,d,c;this._init=function(a){f=new createjs.Bitmap(a);c=new createjs.Text("","70px spookymagicregular","#000000");c.x=CANVAS_WIDTH/2+2;c.y=CANVAS_HEIGHT/2-28;c.textAlign="center";d=new createjs.Text("","70px spookymagicregular","#f1e10b");d.x=CANVAS_WIDTH/2;d.y=CANVAS_HEIGHT/2-30;d.textAlign="center";b=new createjs.Container;b.alpha=0;b.visible=!1;b.addChild(f,c,d);s_oStage.addChild(b);b.on("mousedown",this._onExit)};this.show=function(a){c.text=TEXT_LEVEL+" "+a;
d.text=TEXT_LEVEL+" "+a;b.visible=!0;createjs.Tween.get(b).to({alpha:1},500).call(function(){s_oGame.initNextLevel()})};this._onExit=function(){b.off("mousedown",this._onExit);s_oStage.removeChild(b)};this._init(a)}
function CMovingElem(a,b,f,d){var c,e,k,n,h,m,l,g,q=null;this._init=function(a,b,f,d){e=c=!1;k=a;n=b;h=f;g=new createjs.Sprite(d,"elem_"+f);g.stop();g.x=a;g.y=b;s_oStage.addChild(g)};this.moveDown=function(a,b,e){n=a;m=b;l=e;this.initTween(g.x,n);c=!0};this.moveSide=function(a,b,c){k=a;m=b;l=c;this.initTween(a,g.y);e=!0};this.initTween=function(a,b){q=new CTweenController({oNode:this,iFinalX:a,iFinalY:b,iDuration:SPEED_MOVE});q.start()};this.setY=function(a){g.y=a};this.setX=function(a){g.x=a};this.getX=
function(){return g.x};this.getY=function(){return g.y};this.update=function(a){c&&!1===q.updateDown()&&(c=!1,g.y=n,s_oGame.updateElemValue(m,l,h,g));e&&!1===q.updateRight()&&(e=!1,g.x=k,s_oGame.updateElemValue(m,l,h,g))};this._init(a,b,f,d)}
function CMenu(){var a,b,f,d;this._init=function(){a=new createjs.Bitmap(s_oSpriteLibrary.getSprite("bg_menu"));s_oStage.addChild(a);var c=s_oSpriteLibrary.getSprite("but_play");b=new CTextButton(CANVAS_WIDTH/2,CANVAS_HEIGHT-100,c,TEXT_PLAY,"spookymagicregular","#f1e10b",60);b.addEventListener(ON_MOUSE_UP,this._onButPlayRelease,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)f=new CToggle(CANVAS_WIDTH-60,60,s_oSpriteLibrary.getSprite("audio_icon")),f.addEventListener(ON_MOUSE_UP,this._onAudioToggle,
this);d=new createjs.Shape;d.graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s_oStage.addChild(d);createjs.Tween.get(d).to({alpha:0},1E3).call(function(){d.visible=!1})};this.unload=function(){b.unload();b=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)f.unload(),f=null;s_oStage.removeChild(a);a=null};this._onButPlayRelease=function(){this.unload();s_oMain.gotoGame()};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};this._init()}
function CMain(a){var b=0,f=0,d=STATE_LOADING,c,e,k;this.initContainer=function(){var a=document.getElementById("canvas");s_oStage=new createjs.Stage(a);createjs.Touch.enable(s_oStage);s_iPrevTime=(new Date).getTime();s_bMobile=jQuery.browser.mobile;!1===s_bMobile&&s_oStage.enableMouseOver(20);createjs.Ticker.addEventListener("tick",this._update);s_oSpriteLibrary=new CSpriteLibrary;e=new CPreloader;!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||this._initSounds();this._loadImages()};this._initSounds=
function(){createjs.Sound.initializeDefaultPlugins()&&(0<navigator.userAgent.indexOf("Opera")||0<navigator.userAgent.indexOf("OPR")?(createjs.Sound.alternateExtensions=["mp3"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.handleFileLoad,this)),createjs.Sound.registerSound("./sounds/gameover.ogg","gameover"),createjs.Sound.registerSound("./sounds/soundtrack.ogg","soundtrack"),createjs.Sound.registerSound("./sounds/matching.ogg","matching"),createjs.Sound.registerSound("./sounds/life_lost.ogg",
"life_lost")):(createjs.Sound.alternateExtensions=["ogg"],createjs.Sound.addEventListener("fileload",createjs.proxy(this.handleFileLoad,this)),createjs.Sound.registerSound("./sounds/gameover.mp3","gameover"),createjs.Sound.registerSound("./sounds/soundtrack.mp3","soundtrack"),createjs.Sound.registerSound("./sounds/matching.mp3","matching"),createjs.Sound.registerSound("./sounds/life_lost.mp3","life_lost")),f+=4)};this.handleFileLoad=function(){b++;if(b===f){e.unload();if(!1===DISABLE_SOUND_MOBILE||
!1===s_bMobile)s_oSoundTrackSnd=createjs.Sound.play("soundtrack",{interrupt:createjs.Sound.INTERRUPT_ANY,loop:-1,volume:.5});this.gotoMenu()}};this._loadImages=function(){s_oSpriteLibrary.init(this._onImagesLoaded,this._onAllImagesLoaded,this);s_oSpriteLibrary.addSprite("but_play","./sprites/but_play.png");s_oSpriteLibrary.addSprite("but_exit","./sprites/but_exit.png");s_oSpriteLibrary.addSprite("bg_menu","./sprites/bg_menu.jpg");s_oSpriteLibrary.addSprite("game_bg","./sprites/bg_game.jpg");s_oSpriteLibrary.addSprite("msg_box",
"./sprites/msg_box.png");s_oSpriteLibrary.addSprite("bg_help","./sprites/bg_help.png");s_oSpriteLibrary.addSprite("elems","./sprites/elems.png");s_oSpriteLibrary.addSprite("life","./sprites/life.png");s_oSpriteLibrary.addSprite("highlight","./sprites/highlight.png");s_oSpriteLibrary.addSprite("audio_icon","./sprites/audio_icon.png");f+=s_oSpriteLibrary.getNumSprites();s_oSpriteLibrary.loadSprites()};this._onImagesLoaded=function(){b++;e.refreshLoader(Math.floor(b/f*100));if(b===f){e.unload();if(!1===
DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundTrackSnd=createjs.Sound.play("soundtrack",{interrupt:createjs.Sound.INTERRUPT_ANY,loop:-1,volume:.5});this.gotoMenu()}};this._onAllImagesLoaded=function(){};this.onAllPreloaderImagesLoaded=function(){this._loadImages()};this.gotoMenu=function(){new CMenu;d=STATE_MENU};this.gotoGame=function(){k=new CGame(c);d=STATE_GAME;$(s_oMain).trigger("game_start")};this.gotoHelp=function(){new CHelp;d=STATE_HELP};this._update=function(a){var b=(new Date).getTime();
s_iTimeElaps=b-s_iPrevTime;s_iCntTime+=s_iTimeElaps;s_iCntFps++;s_iPrevTime=b;1E3<=s_iCntTime&&(s_iCurFps=s_iCntFps,s_iCntTime-=1E3,s_iCntFps=0);d===STATE_GAME&&k.update();s_oStage.update(a)};s_oMain=this;c=a;this.initContainer()}var s_iCntTime=0,s_iTimeElaps=0,s_iPrevTime=0,s_iCntFps=0,s_iCurFps=0,s_bMobile,s_bAudioActive=!0,s_oSoundTrackSnd,s_oDrawLayer,s_oStage,s_oMain,s_oSpriteLibrary;TEXT_GAMEOVER="GAME OVER";TEXT_SCORE="SCORE";TEXT_LEVEL="LEVEL";TEXT_PLAY="PLAY";TEXT_HELP="MATCH ALL THE\nWEIRD SYMBOLS TO\nCLEAR THE LEVEL!!!";
function CInterface(a,b){var f,d,c,e,k,n,h,m,l,g;this._init=function(a,b){var r=s_oSpriteLibrary.getSprite("but_exit");f=new CGfxButton(CANVAS_WIDTH-r.width/2-100,40,r,!0);f.addEventListener(ON_MOUSE_UP,this._onExit,this);if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)d=new CToggle(CANVAS_WIDTH-60,40,s_oSpriteLibrary.getSprite("audio_icon")),d.addEventListener(ON_MOUSE_UP,this._onAudioToggle,this);c=new createjs.Text(TEXT_SCORE+": 0","40px spookymagicregular","#000000");c.x=CANVAS_WIDTH/2+2;c.y=CANVAS_HEIGHT-
53;c.textAlign="center";s_oStage.addChild(c);e=new createjs.Text(TEXT_SCORE+": 0","40px spookymagicregular","#f1e10b");e.x=CANVAS_WIDTH/2;e.y=CANVAS_HEIGHT-55;e.textAlign="center";s_oStage.addChild(e);r=s_oSpriteLibrary.getSprite("life");n=new createjs.Bitmap(r);n.x=14;n.y=10;s_oStage.addChild(n);h=new createjs.Text("X"+b,"40px spookymagicregular","#000000");h.x=n.x+r.width+7;h.y=20;s_oStage.addChild(h);m=new createjs.Text("X"+b,"40px spookymagicregular","#f1e10b");m.x=n.x+r.width+5;m.y=18;s_oStage.addChild(m);
l=new createjs.Text(TEXT_LEVEL+" "+a,"40px spookymagicregular","#000000");l.x=CANVAS_WIDTH/2+2;l.y=92;l.textAlign="center";s_oStage.addChild(l);g=new createjs.Text(TEXT_LEVEL+" "+a,"40px spookymagicregular","#f1e10b");g.x=CANVAS_WIDTH/2;g.y=90;g.textAlign="center";s_oStage.addChild(g);k=new CEndPanel(s_oSpriteLibrary.getSprite("msg_box"))};this.unload=function(){f.unload();f=null;if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)d.unload(),d=null;s_oStage.removeChild(g);s_oStage.removeChild(h);s_oStage.removeChild(m);
s_oStage.removeChild(n);s_oStage.removeChild(e);s_oStage.removeChild(c);k.unload()};this.refreshScore=function(a){e.text=TEXT_SCORE+": "+a;c.text=TEXT_SCORE+": "+a};this.refreshLives=function(a){m.text="X"+a;h.text="X"+a};this.refreshLevel=function(a){g.text=TEXT_LEVEL+" "+a;l.text=TEXT_LEVEL+" "+a};this.gameOver=function(a){k.show(a)};this._onExit=function(){s_oGame.onExit()};this._onAudioToggle=function(){createjs.Sound.setMute(!s_bAudioActive)};this._init(a,b);return this}
function CHelpPanel(a){var b,f,d,c;this._init=function(a){d=new createjs.Bitmap(a);f=new createjs.Text(TEXT_HELP,"40px spookymagicregular","#000");f.textAlign="center";f.x=CANVAS_WIDTH/2+2;f.y=352;b=new createjs.Text(TEXT_HELP,"40px spookymagicregular","#f1e10b");b.textAlign="center";b.x=CANVAS_WIDTH/2;b.y=350;c=new createjs.Container;c.addChild(d,f,b);s_oStage.addChild(c);var k=this;c.on("pressup",function(){k._onExitHelp()})};this.unload=function(){s_oStage.removeChild(c);var a=this;c.off("pressup",
function(){a._onExitHelp()})};this._onExitHelp=function(){this.unload()};this._init(a)}
function CGfxButton(a,b,f,d){var c,e,k;this._init=function(a,b,f,d){c=[];e=[];k=new createjs.Bitmap(f);k.x=a;k.y=b;k.regX=f.width/2;k.regY=f.height/2;d&&s_oStage.addChild(k);this._initListener()};this.unload=function(){k.off("mousedown",this.buttonDown);k.off("pressup",this.buttonRelease);s_oStage.removeChild(k)};this.setVisible=function(a){k.visible=a};this._initListener=function(){k.on("mousedown",this.buttonDown);k.on("pressup",this.buttonRelease)};this.addEventListener=function(a,b,f){c[a]=b;
e[a]=f};this.buttonRelease=function(){k.scaleX=1;k.scaleY=1;c[ON_MOUSE_UP]&&c[ON_MOUSE_UP].call(e[ON_MOUSE_UP])};this.buttonDown=function(){k.scaleX=.9;k.scaleY=.9;c[ON_MOUSE_DOWN]&&c[ON_MOUSE_DOWN].call(e[ON_MOUSE_DOWN])};this.setPosition=function(a,b){k.x=a;k.y=b};this.setX=function(a){k.x=a};this.setY=function(a){k.y=a};this.getButtonImage=function(){return k};this.getX=function(){return k.x};this.getY=function(){return k.y};this._init(a,b,f,d);return this}
function CGame(a){var b,f,d=0,c,e,k,n,h,m,l,g,q=[],u,r,v,s,x,t;this._init=function(){this.createBoard()};this.unload=function(){s_oStage.removeChild(v);for(var a=0;a<BOARD_ROWS;a++)for(var b=0;b<BOARD_COLS;b++)h[a][b].unload()};this.createBoard=function(){h=[];var a=BOARD_OFFSET_X,d=BOARD_OFFSET_Y;b=GAME_STATE_NO_MOVE;f=0;k=1;e=BOARD_ROWS*BOARD_COLS;n=2;c=NUM_LIVES;v=new createjs.Bitmap(s_oSpriteLibrary.getSprite("game_bg"));s_oStage.addChild(v);var p,g={};for(p=0;p<NUM_COLORS;p++)g["elem_"+p]=[p,
p+1];g.invisible=[NUM_COLORS,NUM_COLORS+1];p={images:[s_oSpriteLibrary.getSprite("elems")],frames:{width:ELEM_SIZE,height:ELEM_SIZE,regX:0,regY:0},animations:g};u=new createjs.SpriteSheet(p);for(p=0;p<BOARD_ROWS;p++){h[p]=[];for(g=0;g<BOARD_COLS;g++){var l=Math.floor(Math.random()*n);h[p][g]=new CBoardElem(p,g,a,d,l,u);a+=ELEM_SIZE}a=BOARD_OFFSET_X;d+=ELEM_SIZE}t=new CInterface(k,NUM_LIVES);s=new createjs.Shape;s.graphics.beginFill("red").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);s.alpha=0;s_oStage.addChild(s);
new CHelpPanel(s_oSpriteLibrary.getSprite("bg_help"))};this.initNextLevel=function(){b=GAME_STATE_NO_MOVE;e=BOARD_ROWS*BOARD_COLS;n<NUM_COLORS&&n++;for(var a=0;a<BOARD_ROWS;a++)for(var c=0;c<BOARD_COLS;c++){var p=Math.floor(Math.random()*n);h[a][c].reset(p)}t.refreshLevel(k)};this._findSimilarAdjacent=function(a,b,c,e,f){var d=a,g=b;do{switch(c){case 0:d=a-1;c++;if(0>d)continue;break;case 1:d=a+1;c++;if(d>=BOARD_ROWS)continue;break;case 2:d=a;g=b-1;c++;if(0>g)continue;break;case 3:if(d=a,g=b+1,c++,
g>=BOARD_COLS)continue}h[d][g].getType()===e&&!1===this.findElemInArray(h[d][g],f)&&(f.push(h[d][g]),this._findSimilarAdjacent(d,g,0,e,f))}while(4>c)};this.elemClicked=function(a,d,g){if(b===GAME_STATE_NO_MOVE){!1===s_bMobile&&this.elemOut();m=[];this._findSimilarAdjacent(a,d,0,g,m);if(1<m.length)f+=SCORE_PER_ELEM*m.length*m.length,t.refreshScore(f),!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("matching");else{c--;t.refreshLives(c);if(0===c){this.gameOver();return}this.showHurt();
m.push(h[a][d])}for(a=0;a<m.length;a++)m[a].remove(),e--;this.compactGridVertically();this.moveElemsDown()}};this.elemOver=function(a,c,d){if(b===GAME_STATE_NO_MOVE)for(l=[],this._findSimilarAdjacent(a,c,0,d,l),a=0;a<l.length;a++)l[a].highlight(!0)};this.elemOut=function(){for(var a=0;a<l.length;a++)l[a].highlight(!1)};this.findElemInArray=function(a,b){for(var c=0;c<b.length;c++)if(b[c]===a)return!0;return!1};this.compactGridVertically=function(){var a=[];g=[];q=[];for(var b=BOARD_ROWS-1;-1<b;b--)for(var c=
0;c<BOARD_COLS;c++)-1===h[b][c].getType()&&!1===this.findElemInArray(c,a)&&(this.findElemsToMoveVertically(b,c),a.push(c))};this.findElemsToMoveVertically=function(a,b){for(var c=a,d=0;-1<c;)-1!==h[c][b].getType()?g.push({row:c,col:b,type:h[c][b].getType(),dist:d}):d+=ELEM_SIZE,c--};this.moveElemsDown=function(){if(0<g.length){b=GAME_STATE_MOVE_VERTICAL;d=g.length;for(var a=0;a<g.length;a++){var c=BOARD_OFFSET_Y+g[a].row*ELEM_SIZE,e=new CMovingElem(BOARD_OFFSET_X+g[a].col*ELEM_SIZE,c,g[a].type,u);
q.push(e);c+=g[a].dist;h[g[a].row][g[a].col].hide();e.moveDown(c,Math.floor((c-BOARD_OFFSET_Y)/ELEM_SIZE),g[a].col)}}else b=GAME_STATE_NO_MOVE,q=[],this.compactGridHorizontally(),this.moveElemRight()};this.compactGridHorizontally=function(){g=[];for(var a=BOARD_COLS-1;-1<a;a--){for(var c=!0,d=0;d<BOARD_ROWS;d++)if(-1!==h[d][a].getType()){c=!1;break}c&&(b=GAME_STATE_MOVE_HORIZONTAL,this.findElemsToMoveHorizontally(a))}};this.findElemsToMoveHorizontally=function(a){for(var b=0;b<BOARD_ROWS;b++)for(var c=
0;c<a;c++)if(-1!==h[b][c].getType()){var d=this.checkElemToMove(b,c);-1<d?g[d].dist+=ELEM_SIZE:g.push({row:b,col:c,type:h[b][c].getType(),dist:ELEM_SIZE})}};this.checkElemToMove=function(a,b){for(var c=0;c<g.length;c++)if(g[c].row===a&&g[c].col===b)return c;return-1};this.moveElemRight=function(){if(0===g.length)b=GAME_STATE_NO_MOVE,q=[],0===e&&this.showNextLevel();else{d=g.length;for(var a=0;a<g.length;a++){var c=BOARD_OFFSET_X+g[a].col*ELEM_SIZE,f=new CMovingElem(c,BOARD_OFFSET_Y+g[a].row*ELEM_SIZE,
g[a].type,u);q.push(f);c+=g[a].dist;h[g[a].row][g[a].col].hide();f.moveSide(c,g[a].row,Math.floor((c-BOARD_OFFSET_X)/ELEM_SIZE))}}};this.updateElemValue=function(a,c,g,f){h[a][c].updateType(g);s_oStage.removeChild(f);d--;0===d&&(q=[],b===GAME_STATE_MOVE_VERTICAL?(b=GAME_STATE_NO_MOVE,this.compactGridHorizontally(),this.moveElemRight()):b===GAME_STATE_MOVE_HORIZONTAL&&(b=GAME_STATE_NO_MOVE,0===e&&this.showNextLevel()))};this.gameOver=function(){r=CEndPanel(s_oSpriteLibrary.getSprite("msg_box"));r.show(f)};
this.showNextLevel=function(){k++;x=new CNextLevelPanel(s_oSpriteLibrary.getSprite("msg_box"));x.show(k)};this.showHurt=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||createjs.Sound.play("life_lost");createjs.Tween.get(s).to({alpha:.5},300).call(function(){this.alpha=0})};this.onExit=function(){t.unload();this.unload();s_oMain.gotoMenu();$(s_oMain).trigger("restart")};this.update=function(){for(var a=0;a<q.length;a++)q[a].update(SPEED_MOVE)};s_oGame=this;BOARD_COLS=a.col;BOARD_ROWS=a.row;ELEM_SIZE=
a.elem_size;NUM_COLORS=a.num_colors;SCORE_PER_ELEM=a.score_per_elem;SPEED_MOVE=a.speed_move;NUM_LIVES=a.num_lives;this._init()}var s_oGame;
function CEndPanel(a){var b,f,d,c,e,k;this._init=function(a){b=new createjs.Bitmap(a);b.x=0;b.y=0;e=new createjs.Text("","70px spookymagicregular","#000");e.x=CANVAS_WIDTH/2+2;e.y=CANVAS_HEIGHT/2-78;e.textAlign="center";c=new createjs.Text("","70px spookymagicregular","#f1e10b");c.x=CANVAS_WIDTH/2;c.y=CANVAS_HEIGHT/2-80;c.textAlign="center";f=new createjs.Text("","44px spookymagicregular","#000");f.x=CANVAS_WIDTH/2+1;f.y=CANVAS_HEIGHT/2+32;f.textAlign="center";d=new createjs.Text("","44px spookymagicregular",
"#f1e10b");d.x=CANVAS_WIDTH/2;d.y=CANVAS_HEIGHT/2+30;d.textAlign="center";k=new createjs.Container;k.alpha=0;k.visible=!1;k.addChild(b,f,d,e,c);s_oStage.addChild(k)};this.unload=function(){k.off("mousedown",this._onExit);s_oStage.removeChild(k)};this._initListener=function(){k.on("mousedown",this._onExit)};this.show=function(a){if(!1===DISABLE_SOUND_MOBILE||!1===s_bMobile)s_oSoundTrackSnd.volume=0,createjs.Sound.play("gameover").addEventListener("complete",createjs.proxy(function(){s_oSoundTrackSnd.volume=
.5},this));e.text=TEXT_GAMEOVER;c.text=TEXT_GAMEOVER;f.text=TEXT_SCORE+": "+a;d.text=TEXT_SCORE+": "+a;k.visible=!0;var b=this;createjs.Tween.get(k).to({alpha:1},500).call(function(){b._initListener()});$(s_oMain).trigger("save_score",a)};this._onExit=function(){k.off("mousedown");s_oGame.onExit()};this._init(a);return this}
function CBoardElem(a,b,f,d,c,e){var k,n,h,m,l,g;this._init=function(a,b,c,d,e,f){h=e;k=a;n=b;m=new createjs.Sprite(f,"elem_"+e);m.stop();m.x=c;m.y=d;l=new createjs.Bitmap(s_oSpriteLibrary.getSprite("highlight"));l.x=c;l.y=d;l.visible=!1;g=new createjs.Container;g.addChild(m,l);s_oStage.addChild(g);g.on("pressup",this._onElemClick);!1===s_bMobile&&(g.on("mouseover",this._onElemOver),g.on("mouseout",this._onElemOut))};this.unload=function(){g.off("pressup",this._onElemClick);!1===s_bMobile&&(g.off("mouseover",
this._onElemOver),g.off("mouseout",this._onElemOut));s_oStage.removeChild(g)};this.reset=function(a){h=a;m.gotoAndStop("elem_"+a);m.alpha=1;m.visible=!0};this.hide=function(){m.visible=!1;h=-1};this.remove=function(){m.alpha=0;h=-1};this.highlight=function(a){l.visible=a};this.updateType=function(a){h=a;m.gotoAndStop("elem_"+a);m.alpha=1;m.visible=!0};this._onElemClick=function(){s_oGame.elemClicked(k,n,h)};this._onElemOver=function(){s_oGame.elemOver(k,n,h)};this._onElemOut=function(){s_oGame.elemOut(k,
n,h)};this.getPos=function(){return{row:k,col:n}};this.getRow=function(){return k};this.getCol=function(){return n};this.getType=function(){return h};this._init(a,b,f,d,c,e);return this};