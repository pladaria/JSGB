var gbSeconds = 0;
var gbFrames  = 0;

function gb_Resize_LCD() {
  if ($('BX').value=='Size x2') {
    $('BX').value='Size x3';
    $('LCD').style.width='320px';
    $('LCD').style.height='288px';
  }
  else if ($('BX').value=='Size x3') {
    $('BX').value='Size x1';
    $('LCD').style.width='480px';
    $('LCD').style.height='432px';
  }
  else {
    $('BX').value='Size x2';
    $('LCD').style.width='160px';
    $('LCD').style.height='144px';
  }
}

function gb_Show_Fps() {
  gbFrames+=gbFPS;
  gbSeconds++;
  $('STATUS').innerHTML = 
    'Running: '+gbFPS+' '+
    'fps - Average: '+(gbFrames/gbSeconds).toFixed(2)+' - '+
    'Bank switches/s: '+gbBankSwitchCount;
  gbFPS=0;
  gbBankSwitchCount=0;
}

function gb_Toggle_Debugger(show) {
  $('DEBUGGER').style.height=(show)?'auto':'0px';
}

window.onload = function() {
  gb_Insert_Cartridge($('CARTRIDGE').value, false);
  gb_Toggle_Debugger($('TOGGLE_DEBUGGER').checked);
}

