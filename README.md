# JSGB

Javascript GameBoy Emulator

# Notes

This code is very old (2009). 

I think this is the world's first Nintendo GameBoy emulator written in JavaScript.

By that time JS engines were not as fast as today so the code has lots of "bad practices" to improve speed like almost everything global, loop unrollings, etc. Things like typed arrays, requestAnimationFrame, file API, etc. did not exist in that time (or were unknown to me).

Includes a simple disassembler and debugger which supports breakpoints, step by step execution, cpu and memory viewer...

I will complete this project... Someday.

# Changelog
```text
 17 jul 2009: Start!

 30 jul 2009: Completed full instruction set. Made a simple debugger.

  1 aug 2009: Some interrupts, timers, memory manager and lots of bugs fixed.

  2 aug 2009: Tons of bugfixes.
              Debugger now supports breakpoints (and saves them into cookies)

  3 aug 2009: Added scrollbars to debugger dumps.

 15 aug 2009: Some CPU bugs. Debugger improved.
              Reading of tile maps and background painting.

 23 aug 2009: Created LCD screen output (scanline drawing).
              Added support for browsers without putImageData (Chromium).
              Dramatic performance gain on tile and background drawing :)
              Dramatic performance loss when adding STAT modes emulation :(

 26 aug 2009: Added *simple* sprite support with transparency.
              The whole interrupt system was wrong. Rewriting.
              Various optimizations.
              
 27 aug 2009: Added RAM ECHO. 
              Bugs on BG display, OAM, Timers and DIV corrected.
              Interrupt handler finished.
              Input buttons seems to work.
              Added 60fps limitation (Chromium is FAST!!!)

 04 sep 2009: Now the framerate is limited by setInterval (one frame is painted
              every 17ms).
 
 05 sep 2009: Input bug solved. Auto-repeated keys caused emulation to freeze.
              DAA instruction (stolen from VisualBoyAdvance).

 08 sep 2009: CPU emulation: using "macros" for similar instructions. This makes
              faster code (and easier to maintain).
              
 09 sep 2009: Window display over background (seems to work in 'Space Invaders'
              or 'Bubble Ghost' intros).
              Renaming functions and variables to keep a "Programming Style".

 13 sep 2009: HALT instruction (the weird-IME-off behavior is not emulated).
              Added a Caller Stack, this makes debugging a lot easier.
              
 17 sep 2009: Rewrited the whole LCD controller emulation. Now it's much more
              accurate (and slower) it has pallete support, X/Y flipping,
              transparency and sprite priority.
              Support for Chrome/Chromium putImageData (weird!).
              Bug corrected on reading color info from tile data.  
               
 20 sep 2009: Partial MBC1 emulation (ROM switch). On bank switching, copies
              the bank into GameBoy memory.

 23 sep 2009: Lots of optimizations.
              MBC1 emulation rewrited. Instead copying, just makes a reference
              some games do more than 1000 bank switchings per second.
              Found a bug in CPU, now more games are playable, like
              "Kirby's Dreamland", "Bomberman" and "Mario Land".
              Joined all timing routines (CPU, LCD, Timer) into a single one.
              
 28 aug 2016: Created github repo :)
```
# Special thanks
- [Marat Fayzullin](http://fms.komkon.org/)
- [Jan Verhoeven](http://www.vedt.nl/)

# Documents
- [Pandocs](http://nocash.emubase.de/pandocs.htm)
- [GameBoy CPU Manual](https://www.google.com/?q=gameboy%20cpu%20manual)
- [Z80 Family CPU User Manual](http://www.zilog.com/docs/z80/um0080.pdf)
