// TypeText generator v1.21 by VoidUnknown
// Please report bugs to @thevoidunknown via discord
let prefabName = "TypeText Sample" // The name of the prefab
let legacy = true // Whether to make a prefab for Legacy or Alpha editor. Default is Alpha.
let text = "Sample Text" // Text to "type" out
let letter_delay = 2 // How long it takes to finish "typing" the text, in seconds
let letter_space = 1.75 // Spacing between letters, 1.75 is best for default font.
let line_space = 3 // Spacing between lines when <br> is used
let obj_interval = 0.05 // How much to increment parent offset per letter. Not yet supported in Legacy.
let obj_depth = 20 // Render depth of all the objects
let obj_color = 0 // Color of the objects, 0 is the leftmost color of the theme
let obj_bin = 1 // Starting bin for each letter
let lifetime = 5 // How many seconds to live after text is done
let obj_startPos = 0 // When the object spawns relative to the prefab. Not very useful to mess with.
let obj_layer = 1 // Doesn't matter, is only used for filler.
let font = ["Inconsolata", "MajorMonoDisplay", "Hellovetica", "PoorStory"][0] // Font to use, 0 is default font. Disabled on legacy.
let extraTags = "" // Extra HTML tags to use on the text, such as <b> or <i>
let cursor = "" //"█" // Optional, is placed in front of each letter to sell the illusion of typing in a terminal
let colorEase = 3 // The color to ease from when the letter spawns
let easeTime = 0.4 // The time it takes each letter to ease
let easeType = "smooth" // The "fashion" in which letters appear
/*
  "flutter" - Letters will scale from left to right with outelastic
  "flutter-stack" - Letters will scale from left to right with outcirc, as well as spawn stacked on the last letter then move to its position
  "terminal" - Letters will spawn instantly with no easing
  "popup" - Letters will scale from bottom to top with outcirc
  "zipper" - Popup, but letters will swap between popping up and down
  "smooth" - No funny tricks, just a smooth transition

  custom easings will be implemented later
*/

let parentOffset = 0 // Starting parent offset
let objects = [] // Empty array to start
let obj_line = 0
let letters = text.split("") // The letters the text consists of
// TODO: migrate to regex
let id // Define "id" in global scope for later use
let prefab_padding_start // Define prefab padding in global scope for later use
let ii = 0

function shuffle(array) { // Totally not stolen from StackOverflow
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

let parent_id = shuffle("#▆¾hR:W:✿p<<%n¾@".split("")).join("") // dont even think about complaining.

function makeBlankObject(pid,char,pos,color,depth,startPos,offset,letterfont) {
  let id = shuffle(pid.split("")).join("") // Create a new ID, pray to RNJesus that it doesnt make a duplicate ID
  if (legacy) {
    return `{"id":"${id}","p":"${pid}","d":"${depth}","ot":2,"st":"${startPos}","text":"${extraTags}${char}","name":"Text ${char}","shape":"4","akt":2,"ako":${lifetime},"o":{"x":"0","y":"0"},"ed":{"shrink":"True","bin":"${obj_bin}","layer":"${obj_layer}"},"events":{"pos":[{"t":"0","x":"${pos}","y":"0"}],"sca":[{"t":"0","x":"2","y":"2"}],"rot":[{"t":"0","x":"0"}],"col":[{"t":"0","x":"${color}"}]}},`
  } else {
    return `{"id":"${id}","p_id":"${pid}","ak_t":2,"ak_o":${lifetime},"ot":2,"n":"Text ${char}","text":"<font=${letterfont}>${extraTags}${char}","o":{"x":-0.5,"y":0.0},"s":4,"ed":{"b":${obj_bin},"co":true,"l":5},"e":[{"k":[{"ct":"Linear","ev":[0,0]}]},{"k":[{"ct":"Linear","ev":[1.0,1.0]}]},{"k":[{"ct":"Linear","ev":[0]}]},{"k":[{"ct":"Linear","ev":[${color}]}]}],"p_t":"111","p_o": [${offset}, ${offset}, ${offset}],"d":${depth},"st":${startPos}}`
  }
}

function makeObject(pid,char,pos,color,depth,startPos,offset,letterfont,line) { // Function to fill out the template with relevant info
  let id = shuffle(pid.split("")).join("") // Create a new ID, pray to RNJesus that it doesnt make a duplicate ID
  let keyframes = {"move":[],"scale":[],"rotation":[],"color":[]}
  let startKeyframes = {"move":[],"scale":[],"rotation":[],"color":[]}
  let pos_y = 0-(line*line_space)

    if (easeType == "flutter") {
      startKeyframes["scale"].push(makeDoubleStartKeyframe(0,2.0,"Linear"))
      keyframes["scale"].push(makeDoubleKeyframe(`${easeTime}`,2.0,2.0,"OutElastic"))
      keyframes["color"].push(makeSingleKeyframe(`${easeTime}`,color,"OutSine"))
    }

    if (easeType == "flutter-stack") {
      startKeyframes["move"].push(makeDoubleStartKeyframe((pos-letter_space),pos_y,"Linear"))
      startKeyframes["scale"].push(makeDoubleStartKeyframe(0,2.0,"Linear"))
      keyframes["scale"].push(makeDoubleKeyframe(`${easeTime}`,2.0,2.0,"OutElastic"))
      keyframes["move"].push(makeDoubleKeyframe(`${easeTime}`,pos,pos_y,"OutCirc"))
      keyframes["color"].push(makeSingleKeyframe(`${easeTime}`,color,"OutSine"))
    }

    if (easeType == "popup") {
      startKeyframes["move"].push(makeDoubleStartKeyframe(pos,pos_y-2.0,"Linear"))
      startKeyframes["scale"].push(makeDoubleStartKeyframe(2.0,0,"Linear"))
      keyframes["move"].push(makeDoubleKeyframe(`${easeTime}`,pos,pos_y,"OutCirc"))
      keyframes["scale"].push(makeDoubleKeyframe(`${easeTime}`,2.0,2.0,"OutCirc"))
      keyframes["color"].push(makeSingleKeyframe(`${easeTime}`,color,"OutSine"))
    }

    if (easeType == "zipper") {
      if (ii % 2 == 0) {
        startKeyframes["move"].push(makeDoubleStartKeyframe(pos,pos_y-2.0,"Linear"))
      } else {
        startKeyframes["move"].push(makeDoubleStartKeyframe(pos,pos_y+2.0,"Linear"))
      }
      startKeyframes["scale"].push(makeDoubleStartKeyframe(2.0,0,"Linear"))
      keyframes["move"].push(makeDoubleKeyframe(`${easeTime}`,pos,pos_y,"OutCirc"))
      keyframes["scale"].push(makeDoubleKeyframe(`${easeTime}`,2.0,2.0,"OutCirc"))
      keyframes["color"].push(makeSingleKeyframe(`${easeTime}`,color,"OutSine"))
    }

    if (easeType == "smooth") {
      startKeyframes["scale"].push(makeDoubleStartKeyframe(0,2.0,"Linear"))
      keyframes["scale"].push(makeDoubleKeyframe(`${easeTime}`,2.0,2.0,"OutCirc"))
      keyframes["color"].push(makeSingleKeyframe(`${easeTime}`,color,"OutSine"))
    }

    if (easeType == "custom") {
      // Please only use this if you know what you're doing
    }

  // Fill missing keyframes with defaults, to prevent invalid objects
  // I know it could be more efficient i dont care
  if (startKeyframes["move"].length == 0) {startKeyframes["move"].push(makeDoubleStartKeyframe(pos,0,"Linear"))}
  if (startKeyframes["scale"].length == 0) {startKeyframes["scale"].push(makeDoubleStartKeyframe(2.0,2.0,"Linear"))}
  if (startKeyframes["rotation"].length == 0) {startKeyframes["rotation"].push(makeSingleStartKeyframe(0,"Linear"))}
  if (startKeyframes["color"].length == 0) {startKeyframes["color"].push(makeSingleStartKeyframe(colorEase,"Linear"))}
  if (keyframes["move"].length == 0) {keyframes["move"].push(makeDoubleKeyframe(`${easeTime}`,pos,0,"Instant"))}
  if (keyframes["scale"].length == 0) {keyframes["scale"].push(makeDoubleKeyframe(`${easeTime}`,2.0,2.0,"Instant"))}
  if (keyframes["rotation"].length == 0) {keyframes["rotation"].push(makeSingleKeyframe(`${easeTime}`,0,"Instant"))}
  if (keyframes["color"].length == 0) {keyframes["color"].push(makeSingleKeyframe(`${easeTime}`,color,"OutSine"))}

  if (legacy) {
    return `{"id":"${id}","p":"${pid}","d":"${depth}","ot":2,"st":"${startPos}","text":"${extraTags}${char}","name":"Text ${char}","shape":"4","akt":2,"ako":${lifetime},"o":{"x":"0","y":"0"},"ed":{"shrink":"True","bin":"${obj_bin}","layer":"${obj_layer}"},"events":{"pos":[${startKeyframes["move"]},${keyframes["move"]}],"sca":[${startKeyframes["scale"]},${keyframes["scale"]}],"rot":[${startKeyframes["rotation"]},${keyframes["rotation"]}],"col":[${startKeyframes["color"]},${keyframes["color"]}]}}`
  } else {
    return `{"id":"${id}","p_id":"${pid}","ak_t":2,"ak_o":${lifetime},"ot":2,"n":"Text ${char}","text":"<font=${letterfont}>${extraTags}${char}","o":{"x":-0.5,"y":0.0},"s":4,"ed":{"b":${obj_bin},"co":true,"l":5},"e":[{"k":[${startKeyframes["move"]},${keyframes["move"]}]},{"k":[${startKeyframes["scale"]},${keyframes["scale"]}]},{"k":[${startKeyframes["rotation"]},${keyframes["rotation"]}]},{"k":[${startKeyframes["color"]},${keyframes["color"]}]}],"p_t":"111","p_o": [${offset}, ${offset}, ${offset}],"d":${depth},"st":${startPos}}`
  }
} // Object template

function makeDoubleStartKeyframe(x,y,ease) {
  if (legacy) {
    return `{"x":"${x}","y":"${y}","ct":"${ease}"}`
  } else {
    return `{"ct":"${ease}","ev":[${x},${y}]}`
  }
}

function makeDoubleKeyframe(time,x,y,ease) {
  if (legacy) {
    return `{"t":"${time}","x":"${x}","y":"${y}","ct":"${ease}"}`
  } else {
    return `{"ct":"${ease}","t":${time},"ev":[${x},${y}]}`
  }
}

function makeSingleStartKeyframe(x,ease) {
  if (legacy) {
    return `{"x":"${x}","ct":"${ease}"}`
  } else {
    return `{"ct":"${ease}","ev":[${x}]}`
  }
}

function makeSingleKeyframe(time,x,ease) {
  if (legacy) {
    return `{"t":"${time}","x":"${x}","ct":"${ease}"}`
  } else {
    return `{"ct":"${ease}","t":${time},"ev":[${x}]}`
  }
}

function makeCursor(pid,pos,color,depth,startPos,cursorChar) {
  let keyframes = []
  cursorTime = 0
  cursorX = 0
  for (i=0; i<(text.length+1); i++) {
    keyframes.push(makeDoubleKeyframe(cursorTime,cursorX,0,"Instant"))
    cursorTime += (letter_delay/text.length)
    cursorX += letter_space
  }
  keyframes.join("")
  id = shuffle(pid.split("")).join("")
  if (legacy) {
    return `{"id":"${id}","p":"${pid}","d":"${depth}","ot":2,"st":"${startPos}","text":"${cursorChar}","name":"Text Cursor","shape":"4","akt":2,"ako":${letter_delay},"o":{"x":"0","y":"0"},"ed":{"shrink":"True","bin":"${obj_bin-1}","layer":"${obj_layer}"},"events":{"pos":[{"t":"0","x":"${pos}","y":"0"},${keyframes}],"sca":[{"t":"0","x":"2","y":"2"},{"t":${cursorTime+(letter_delay/text.length)},"x":"0","y":"0","ct":"Instant"}],"rot":[{"t":"0","x":"0"}],"col":[{"t":"0","x":"${color}"}]}}`
  } else {
    return `{"id":"${id}","p_id":"${pid}","ak_t":2,"ak_o":${lifetime},"ot":2,"n":"Text Cursor","text":"${cursorChar}","o":{"x":-0.5,"y":0.0},"s":4,"ed":{"b":${obj_bin+1},"co":true,"l":5},"e":[{"k":[{"ct":"Linear","ev":[0.0,0.0]},${keyframes}]},{"k":[{"ct":"Linear","ev":[1.0,2.0]},{"ct":"Instant","t":${cursorTime+(letter_delay/text.length)},"ev":[0.0,0.0]}]},{"k":[{"ct":"Linear","ev":[0.0]}]},{"k":[{"ct":"Linear","ev":[${color}]}]}],"p_t":"111","p_o": [0,0,0],"d":${depth},"st":${startPos}},`
  }
} // Known bug, does not work well when the text is actively moving


let obj_pos = 0 // Start text 0 units away from parent
let spawnPos = 0 // Start 0 seconds away from prefab spawn
for (i=0; i<text.length; i++) { // For 0 to n letters
  let letter = letters[i]
  ii = ii + 1
  if (letters[i] == "<" && letters[i+1] == "b" && letters[i+2] == "r" && letters[i+3] == ">") {
    obj_pos = 0
    obj_line += 1
    i += 4
    letter = letters[i]
  }
  objects.push(makeObject(parent_id,letter,obj_pos,obj_color,obj_depth,spawnPos,parentOffset,font,obj_line)) // Fill out a new template and push it to the array

  obj_pos += letter_space // Move x units from the parent
  spawnPos += (letter_delay/text.length)
  parentOffset += obj_interval

}

let rand = Math.floor(Math.random()*100000)
// Shameless promotion, feel free to customize. Tip: image MUST be in JSON format! Not doing so will make the prefab invalid and prevent prefabs tab from opening!
let preview = "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"
// Define prefab info
if (legacy) {
  prefab_padding_start = `{"name":"${prefabName}","type":"9","offset":"0","objects":[{"id":"${parent_id}","p":"","d":"20","ot":3,"st":"0","name":"Text Parent","akt":2,"ako":5,"o":{"x":"0","y":"0"},"ed":{"bin":"0","layer":"0"},"events":{"pos":[{"t":"0","x":"0","y":"0"}],"sca":[{"t":"0","x":"2","y":"2"}],"rot":[{"t":"0","x":"0"}],"col":[{"t":"0","x":"0"}]}},`
} else {
  prefab_padding_start = `{"n":"${prefabName}","type":11,"preview":"${preview}","o":0.0,"objs":[{"id":"${parent_id}","ak_t":2,"ak_o":1.0,"ot":3,"n":"Text Parent","ed":{"l":5},"e":[{"k":[{"ct":"Linear","ev":[0.0,0.0]}]},{"k":[{"ct":"Linear","ev":[1.0,1.0]}]},{"k":[{"ct":"Linear","ev":[0.0]}]},{"k":[{"ct":"Linear","ev":[0.0]}]}],"p_t":"101","d":20},`
}
// Spit out the prefab in plaintext
console.log(prefab_padding_start + makeCursor(parent_id,0,obj_color,obj_depth,0,cursor) + objects.join() + "]}")
console.log(`Paste to "${prefabName}.${legacy == true ? "lsp" : "vgp"}" in "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Project Arrhythmia\\beatmaps\\prefabs"`)
console.log("Made by VoidUnknown, idea rightfully stolen from MotionIII")
