import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import document from "document";

let mybutton1 = document.getElementById("T");
let mybutton2 = document.getElementById("P");
let mybutton3 = document.getElementById("R");
let back = document.getElementById("back");
let foreground = document.getElementById("foreground");
let hundredsCeil = document.getElementById("hundreds_ceil");
let hundredsTop = document.getElementById("hundreds_top");
let hundreds = document.getElementById("hundreds");
let hundredsBot = document.getElementById("hundreds_bot");
let hundredsBase = document.getElementById("hundreds_base");
let tensCeil = document.getElementById("tens_ceil");
let tensTop = document.getElementById("tens_top");
let tens = document.getElementById("tens");
let tensBot = document.getElementById("tens_bot");
let tensBase = document.getElementById("tens_base");
let onesCeil = document.getElementById("ones_ceil");
let onesTop = document.getElementById("ones_top");
let ones = document.getElementById("ones");
let onesBot = document.getElementById("ones_bot");
let onesBase = document.getElementById("ones_base");
let tenthsCeil = document.getElementById("tenths_ceil");
let tenthsTop = document.getElementById("tenths_top");
let tenths = document.getElementById("tenths");
let tenthsBot = document.getElementById("tenths_bot");
let tenthsBase = document.getElementById("tenths_base");
let rect1 = document.getElementById("rect1");
let rect2 = document.getElementById("rect2");
let rect3 = document.getElementById("rect3");
let decShade = document.getElementById("dec_shade");
let decimal = document.getElementById("decimal");
let buffer; //tells back button which mode was currently being set
let y = 0;
let x = 0;

function reset(ceil, top, mid, bot, base){
  ceil.y = 30;
  top.y = 85;
  mid.y = 175;
  bot.y = 240;
  base.y = 280;
}//reset

function set(ceil, top, mid, bot, base, val1, val2, val3, val4, val5){
  ceil.text = val1;
  top.text = val2;
  mid.text = val3;
  bot.text = val4;
  base.text = val5;
}//set

function moveX(ceil, top, mid, bot, base, val1){
  ceil.x = val1;
  top.x = val1;
  mid.x = val1;
  bot.x = val1;
  base.x = val1;
}//set

function visibility(vis){
  tenthsCeil.style.display = vis;
  tenthsTop.style.display = vis;
  tenths.style.display = vis;
  tenthsBot.style.display = vis;
  tenthsBase.style.display = vis;
}//set

function moveup(ceil, top, mid, bot, base){
  ceil.text = util.getNextInt(ceil.text);
  top.text = util.getNextInt(top.text);
  mid.text = util.getNextInt(mid.text);
  bot.text = util.getNextInt(bot.text);
  base.text = util.getNextInt(base.text);
}//moveup

function movedown(ceil, top, mid, bot, base){
  ceil.text = util.getPrevInt(ceil.text);
  top.text = util.getPrevInt(top.text);
  mid.text = util.getPrevInt(mid.text);
  bot.text = util.getPrevInt(bot.text);
  base.text = util.getPrevInt(base.text);
}//movedown

foreground.onmousedown = function(evt){
  x = evt.screenX;
  y = evt.screenY;
}//onmousedown

foreground.onmouseup = function(evt){
  reset(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase);
  reset(tensCeil, tensTop, tens, tensBot, tensBase);
  reset(onesCeil, onesTop, ones, onesBot, onesBase);
  reset(tenthsCeil, tenthsTop, tenths, tenthsBot, tenthsBase);

}//onmousedown

foreground.onmousemove = function(evt){
  if((buffer != 0 && x < 100) || (buffer == 0 && x < 75)){
    if((evt.screenY - y) > 30){
      reset(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase);
      y = evt.screenY;
      moveup(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase);
    }//if
    else if((evt.screenY - y) < -30){
      reset(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase);
      y = evt.screenY;
      movedown(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase);
    }//else if
    
    hundredsCeil.y = 30 + (evt.screenY - y);
    hundredsTop.y = 85 + (evt.screenY - y);
    hundreds.y = 175 + (evt.screenY - y);
    hundredsBot.y = 240 + (evt.screenY - y);
    hundredsBase.y = 280 + (evt.screenY - y);
   
  }//if
  else if((buffer != 0 && x > 99 && x < 200) || (buffer == 0 && x > 74 && x < 150)){
    if((evt.screenY - y) > 30){
      reset(tensCeil, tensTop, tens, tensBot, tensBase);
      y = evt.screenY;
      moveup(tensCeil, tensTop, tens, tensBot, tensBase);
    }//if
    else if((evt.screenY - y) < -30){
      reset(tensCeil, tensTop, tens, tensBot, tensBase);
      y = evt.screenY;
      movedown(tensCeil, tensTop, tens, tensBot, tensBase);
    }//else if
    
    tensCeil.y = 30 + (evt.screenY - y);
    tensTop.y = 85 + (evt.screenY - y);
    tens.y = 175 + (evt.screenY - y);
    tensBot.y = 240 + (evt.screenY - y);
    tensBase.y = 280 + (evt.screenY - y);
   
  }//else if
  else if((buffer != 0 && x > 199) || (buffer == 0 && x > 149 && x < 225)){
    if((evt.screenY - y) > 30){
      reset(onesCeil, onesTop, ones, onesBot, onesBase);
      y = evt.screenY;
      moveup(onesCeil, onesTop, ones, onesBot, onesBase);
    }//if
    else if((evt.screenY - y) < -30) {
      reset(onesCeil, onesTop, ones, onesBot, onesBase);
      y = evt.screenY;
      movedown(onesCeil, onesTop, ones, onesBot, onesBase);
    }//else if
    
    onesCeil.y = 30 + (evt.screenY - y);
    onesTop.y = 85 + (evt.screenY - y);
    ones.y = 175 + (evt.screenY - y);
    onesBot.y = 240 + (evt.screenY - y);
    onesBase.y = 280 + (evt.screenY - y);
   
  }//else if
  else if(x > 224 && buffer == 0){
    if((evt.screenY - y) > 30){
      reset(tenthsCeil, tenthsTop, tenths, tenthsBot, tenthsBase);
      y = evt.screenY;
      moveup(tenthsCeil, tenthsTop, tenths, tenthsBot, tenthsBase);
    }//if
    else if((evt.screenY - y) < -30){
      reset(tenthsCeil, tenthsTop, tenths, tenthsBot, tenthsBase);
      y = evt.screenY;
      movedown(tenthsCeil, tenthsTop, tenths, tenthsBot, tenthsBase);
    }//else if
    
    tenthsCeil.y = 30 + (evt.screenY - y);
    tenthsTop.y = 85 + (evt.screenY - y);
    tenths.y = 175 + (evt.screenY - y);
    tenthsBot.y = 240 + (evt.screenY - y);
    tenthsBase.y = 280 + (evt.screenY - y);
   
  }//else if
  else{
      reset(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase);
      reset(tensCeil, tensTop, tens, tensBot, tensBase);
      reset(onesCeil, onesTop, ones, onesBot, onesBase);
      reset(tenthsCeil, tenthsTop, tenths, tenthsBot, tenthsBase);
  }//else
  
}//function

back.onactivate = function(evt) {
  if(hundreds.text == 0){
    hundreds.text = "";
    if(tens.text == 0) tens.text = "";
  }//if
  
  if(buffer == 0) mybutton1.text = "T: " + hundreds.text + tens.text + ones.text + "." + tenths.text + "º";
  else if(buffer == 1) mybutton2.text = "P: " + hundreds.text + tens.text + ones.text + " bpm";
  else mybutton3.text = "R: " + hundreds.text + tens.text + ones.text + " bpm";
  mybutton1.style.display = "inline";
  mybutton2.style.display = "inline";
  mybutton3.style.display = "inline";
}//onactivate

mybutton1.onactivate = function(evt) {
  buffer = 0;
  rect3.style.display = "inline";
  rect1.x = 75;
  rect2.x = 150;
  rect3.x = 225;
  visibility("inline");
  
  decShade.style.display = "inline";
  decimal.style.display = "inline";
  
  moveX(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase, 37);
  moveX(tensCeil, tensTop, tens, tensBot, tensBase, 112);
  moveX(onesCeil, onesTop, ones, onesBot, onesBase, 187);
  
  set(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase, 3, 2, 1, 0, 9);
  set(tensCeil, tensTop, tens, tensBot, tensBase, 2, 1, 0, 9, 8);
  set(onesCeil, onesTop, ones, onesBot, onesBase, 3, 2, 1, 0, 9);
  
  mybutton1.style.display = "none";
  mybutton2.style.display = "none";
  mybutton3.style.display = "none";
}//onactivate

mybutton2.onactivate = function(evt) {
  buffer = 1;
  rect3.style.display = "none";
  rect1.x = 99;
  rect2.x = 198;
  visibility("none");
  
  decShade.style.display = "none";
  decimal.style.display = "none";
  
  moveX(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase, 54);
  moveX(tensCeil, tensTop, tens, tensBot, tensBase, 150);
  moveX(onesCeil, onesTop, ones, onesBot, onesBase, 249);
  
  set(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase, 3, 2, 1, 0, 9);
  set(tensCeil, tensTop, tens, tensBot, tensBase, 2, 1, 0, 9, 8);
  set(onesCeil, onesTop, ones, onesBot, onesBase, 2, 1, 0, 9, 8);
  
  mybutton1.style.display = "none";
  mybutton2.style.display = "none";
  mybutton3.style.display = "none";  
}//onactivate

mybutton3.onactivate = function(evt) {
  buffer = 2;
  rect3.style.display = "none";
  rect1.x = 99;
  rect2.x = 198;
  visibility("none");
  
  decShade.style.display = "none";
  decimal.style.display = "none";
  
  moveX(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase, 54);
  moveX(tensCeil, tensTop, tens, tensBot, tensBase, 150);
  moveX(onesCeil, onesTop, ones, onesBot, onesBase, 249);
  
  set(hundredsCeil, hundredsTop, hundreds, hundredsBot, hundredsBase, 2, 1, 0, 9, 8);
  set(tensCeil, tensTop, tens, tensBot, tensBase, 5, 4, 3, 2, 1);
  set(onesCeil, onesTop, ones, onesBot, onesBase, 2, 1, 0, 9, 8);
  
  mybutton1.style.display = "none";
  mybutton2.style.display = "none";
  mybutton3.style.display = "none";
}//onactivate