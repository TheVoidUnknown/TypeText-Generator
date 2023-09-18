// TypeText generator v1.31 by VoidUnknown
// Please report bugs to @thevoidunknown via discord
/* 
  Note:
  <br> tags are supported, and will create an appropriate line break in text.
  <p> tags will create a pause for x seconds, E.G. <p0.5> will pause for 0.5 seconds.

  All other tags such as <b>, <i>, and etc must be put in extraTags.
*/

let settings = {
  "legacy": false, // Whether to make a prefab for Legacy or Alpha editor. Default is Alpha.
  "prefabName": "Epic Monologue", // The name of the prefab
  "text": "I've come to kill you nano!", // Text to "type" out
  "letter_space": 1.75, // Spacing between letters, 1.75 is best for default font.
  "line_space": 3, // Spacing between lines when <br> is used
  "letter_delay": 1, // How long it takes to finish "typing" the text, in seconds. Does not include <p> tags.
  "obj_depth": 20, // Render depth of all the objects
  "obj_color": 0, // Color of the objects, 0 is the leftmost color of the theme
  "colorEase": 3, // The color to ease from when the letter spawns
  "lifetime": 10, // How many seconds to live after text is done
  "obj_layer": 1, // Doesn't matter, is only used for filler.
  "font": ["Inconsolata", "MajorMonoDisplay", "Hellovetica", "PoorStory"][0], // Font to use, 0 is default font. Disabled on legacy.
  "extraTags": "<b>",// Extra HTML tags to use on the text, such as <b> or <i>
  "cursor": "", //"█" // Optional, is placed in front of each letter to sell the illusion of typing in a terminal
  "easeTime": 0.75, // The time it takes each letter to ease
  "easeType": "smooth", // The "fashion" in which letters appear
  /*
        "flutter" - Letters will scale from left to right with outelastic
        "flutter-stack" - Letters will scale from left to right with outcirc, as well as spawn stacked on the last letter then move to its position
        "terminal" - Letters will spawn instantly with no easing
        "popup" - Letters will scale from bottom to top with outcirc
        "zipper" - Popup, but letters will swap between popping up and down
        "smooth" - No funny tricks, just a smooth transition

        custom easings are still experimental.
  */
  


  // Here be dragons! Dont use these settings unless you know what you're doing!
  "customFont": false, // Whether to use experimental Arcade Font
  "textColor": "f0f0f0", // Color when using Arcade Text
  "obj_startPos": 0, // When the object spawns relative to the prefab. Not very useful to mess with.
  "obj_bin": 1, // Starting bin for each letter
  "obj_interval": 0.00, // How much to increment parent offset per letter. Not yet supported in Legacy.
}

let customFontDict = {
  "letter_space": 48,
  "line_space": 48,
  "scaleFactor": 0.1,
  " ": ` `,
  "!": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>██████<#${settings.textColor}ff>██████<#00000000>████<br>██████<#${settings.textColor}ff>██████<#00000000>████<br>██████<#${settings.textColor}ff>██████<#00000000>████<br>██████<#${settings.textColor}ff>██████<#00000000>████<br>██████<#${settings.textColor}ff>██████<#00000000>████<br>██████<#${settings.textColor}ff>██████<#00000000>████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>████████████████<br>████████████████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>████████████████<br>`,
  "?": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>█████<#${settings.textColor}ff>████████<#00000000>███<br>███<#${settings.textColor}ff>███████████<#00000000>██<br>███<#${settings.textColor}ff>███<#00000000>█████<#${settings.textColor}ff>███<#00000000>██<br>███<#${settings.textColor}ff>███<#00000000>█████<#${settings.textColor}ff>███<#00000000>██<br>███████████<#${settings.textColor}ff>███<#00000000>██<br>███████████<#${settings.textColor}ff>███<#00000000>██<br>██████████<#${settings.textColor}ff>███<#00000000>███<br>██████████<#${settings.textColor}ff>███<#00000000>███<br>████████<#${settings.textColor}ff>███<#00000000>█████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>████████████████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>████████████████<br>`,
  ".": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>█████<#${settings.textColor}ff>███<#00000000>████████<br>█████<#${settings.textColor}ff>███<#00000000>████████<br>█████<#${settings.textColor}ff>███<#00000000>████████<br>████████████████<br>`,
  "-": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████<#${settings.textColor}ff>████████<#00000000>████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>`,
  "_": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>████████████████<br>██<#${settings.textColor}ff>███████████<#00000000>███<br>██<#${settings.textColor}ff>███████████<#00000000>███<br>████████████████<br>`,
  "(": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>███████<#${settings.textColor}ff>███<#00000000>██████<br>███████<#${settings.textColor}ff>███<#00000000>██████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>███████<#${settings.textColor}ff>███<#00000000>██████<br>███████<#${settings.textColor}ff>███<#00000000>██████<br>████████████████<br>████████████████<br>`,
  ")": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>████████████████<br>████████████████<br>`,
  "/": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>███████████<#${settings.textColor}ff>██<#00000000>███<br>███████████<#${settings.textColor}ff>██<#00000000>███<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>█████████<#${settings.textColor}ff>██<#00000000>█████<br>███████<#${settings.textColor}ff>██<#00000000>███████<br>███████<#${settings.textColor}ff>██<#00000000>███████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>█████<#${settings.textColor}ff>██<#00000000>█████████<br>███<#${settings.textColor}ff>██<#00000000>███████████<br>███<#${settings.textColor}ff>██<#00000000>███████████<br>████████████████<br>████████████████<br>████████████████<br>`,
  "1": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>████<#${settings.textColor}ff>██████<#00000000>██████<br>████<#${settings.textColor}ff>██████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██<#${settings.textColor}ff>████████████<#00000000>██<br>██<#${settings.textColor}ff>████████████<#00000000>██<br>`,
  "2": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█████████<#${settings.textColor}ff>██████<#00000000>█<br>█████████<#${settings.textColor}ff>██████<#00000000>█<br>█████<#${settings.textColor}ff>████████<#00000000>███<br>█████<#${settings.textColor}ff>████████<#00000000>███<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>█<#${settings.textColor}ff>██████<#00000000>█████████<br>█<#${settings.textColor}ff>██████<#00000000>█████████<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>`,
  "3": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>███<#${settings.textColor}ff>████████████<#00000000>█<br>███<#${settings.textColor}ff>████████████<#00000000>█<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>███████<#${settings.textColor}ff>████<#00000000>█████<br>███████<#${settings.textColor}ff>████<#00000000>█████<br>█████<#${settings.textColor}ff>████████<#00000000>███<br>█████<#${settings.textColor}ff>████████<#00000000>███<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>`,
  "4": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>███████<#${settings.textColor}ff>██████<#00000000>███<br>███████<#${settings.textColor}ff>██████<#00000000>███<br>█████<#${settings.textColor}ff>████████<#00000000>███<br>█████<#${settings.textColor}ff>████████<#00000000>███<br>███<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>████<#00000000>███<br>███<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>███<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>`,
  "5": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████████████<#00000000>███<br>█<#${settings.textColor}ff>████████████<#00000000>███<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>`,
  "6": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█████<#${settings.textColor}ff>██████████<#00000000>█<br>█████<#${settings.textColor}ff>██████████<#00000000>█<br>███<#${settings.textColor}ff>████<#00000000>█████████<br>███<#${settings.textColor}ff>████<#00000000>█████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████████████<#00000000>███<br>█<#${settings.textColor}ff>████████████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>`,
  "7": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>███████<#${settings.textColor}ff>████<#00000000>█████<br>███████<#${settings.textColor}ff>████<#00000000>█████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>`,
  "8": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>██<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>██<#00000000>███<br>█<#${settings.textColor}ff>██████<#00000000>████<#${settings.textColor}ff>██<#00000000>███<br>█<#${settings.textColor}ff>██████<#00000000>████<#${settings.textColor}ff>██<#00000000>███<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>█<#${settings.textColor}ff>██<#00000000>████████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>██<#00000000>████████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>██<#00000000>████████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>██<#00000000>████████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>`,
  "9": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>████████████<#00000000>█<br>███<#${settings.textColor}ff>████████████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>█████████<#${settings.textColor}ff>████<#00000000>███<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>`,
  "0": `<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>███<#${settings.textColor}ff>██<#00000000>████<#${settings.textColor}ff>████<#00000000>███<br>███<#${settings.textColor}ff>██<#00000000>████<#${settings.textColor}ff>████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>██<#00000000>███<br>███<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>██<#00000000>███<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>`,
  "a":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>███<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>████<#00000000>███<br>███<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>`, 
  "b":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████████████<#00000000>███<br>█<#${settings.textColor}ff>████████████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>██████████<#00000000>█████<br>█<#${settings.textColor}ff>██████████<#00000000>█████<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████████████<#00000000>███<br>█<#${settings.textColor}ff>████████████<#00000000>███<br>`, 
  "c":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█████<#${settings.textColor}ff>███████<#00000000>████<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>███<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>██████<#00000000>███<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>███<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>██<br>███<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>██<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>█████<#${settings.textColor}ff>███████<#00000000>████<br>`, 
  "d":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>██████████<#00000000>█████<br>█<#${settings.textColor}ff>██████████<#00000000>█████<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>████<br>█<#${settings.textColor}ff>██████████<#00000000>█████<br>█<#${settings.textColor}ff>██████████<#00000000>█████<br>`, 
  "e":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>`, 
  "f":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>`, 
  "g":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█████<#${settings.textColor}ff>██████████<#00000000>█<br>█████<#${settings.textColor}ff>██████████<#00000000>█<br>███<#${settings.textColor}ff>████<#00000000>█████████<br>███<#${settings.textColor}ff>████<#00000000>█████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>██████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>██████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>█<br>█████<#${settings.textColor}ff>██████████<#00000000>█<br>█████<#${settings.textColor}ff>██████████<#00000000>█<br>`, 
  "h":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>`, 
  "i":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█████<#${settings.textColor}ff>████<#00000000>███████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>`, 
  "j":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>███████████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>`, 
  "k":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>█████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>███<#00000000>██████<br>█<#${settings.textColor}ff>█████████<#00000000>██████<br>█<#${settings.textColor}ff>████████<#00000000>███████<br>█<#${settings.textColor}ff>█████████<#00000000>██████<br>█<#${settings.textColor}ff>█████████<#00000000>██████<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>█████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>█████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>`, 
  "l":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>`, 
  "m":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>██████<#00000000>██<#${settings.textColor}ff>██████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>██<#00000000>██<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>`, 
  "n":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>██████<#00000000>███<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████████<#00000000>█<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████████<#00000000>█<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>███████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>`, 
  "o":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>`, 
  "p":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>██<#${settings.textColor}ff>███████████<#00000000>███<br>██<#${settings.textColor}ff>███████████<#00000000>███<br>██<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>█<br>██<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>█<br>██<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>█<br>██<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>█<br>██<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>█<br>██<#${settings.textColor}ff>███████████<#00000000>███<br>██<#${settings.textColor}ff>███████████<#00000000>███<br>██<#${settings.textColor}ff>████<#00000000>██████████<br>██<#${settings.textColor}ff>████<#00000000>██████████<br>██<#${settings.textColor}ff>████<#00000000>██████████<br>██<#${settings.textColor}ff>████<#00000000>██████████<br>██<#${settings.textColor}ff>████<#00000000>██████████<br>`, 
  "q":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>████████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>████████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>███<br>█<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>███<br>███<#${settings.textColor}ff>████████<#00000000>██<#${settings.textColor}ff>██<#00000000>█<br>███<#${settings.textColor}ff>████████<#00000000>██<#${settings.textColor}ff>██<#00000000>█<br>`, 
  "r":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>██████████<#00000000>█████<br>█<#${settings.textColor}ff>████<#00000000>█<#${settings.textColor}ff>██████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>█<#${settings.textColor}ff>██████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>██████<#00000000>██<br>`, 
  "s":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>███<#${settings.textColor}ff>████████<#00000000>█████<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>███<#${settings.textColor}ff>████<#00000000>████<br>█<#${settings.textColor}ff>████<#00000000>███████████<br>█<#${settings.textColor}ff>███████████<#00000000>████<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>██████████<#${settings.textColor}ff>████<#00000000>██<br>██████████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>`, 
  "t":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>█<#${settings.textColor}ff>█████████████<#00000000>██<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>`, 
  "u":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>█<#${settings.textColor}ff>████<#00000000>█████<#${settings.textColor}ff>████<#00000000>██<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>███<#${settings.textColor}ff>█████████<#00000000>████<br>`, 
  "v":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br><#${settings.textColor}ff>████<#00000000>███████<#${settings.textColor}ff>████<#00000000>█<br><#${settings.textColor}ff>████<#00000000>███████<#${settings.textColor}ff>████<#00000000>█<br><#${settings.textColor}ff>████<#00000000>███████<#${settings.textColor}ff>████<#00000000>█<br><#${settings.textColor}ff>████<#00000000>███████<#${settings.textColor}ff>████<#00000000>█<br><#${settings.textColor}ff>████<#00000000>███████<#${settings.textColor}ff>████<#00000000>█<br><#${settings.textColor}ff>████<#00000000>███████<#${settings.textColor}ff>████<#00000000>█<br><#${settings.textColor}ff>██████<#00000000>███<#${settings.textColor}ff>██████<#00000000>█<br><#${settings.textColor}ff>██████<#00000000>███<#${settings.textColor}ff>██████<#00000000>█<br>██<#${settings.textColor}ff>███████████<#00000000>███<br>██<#${settings.textColor}ff>███████████<#00000000>███<br>████<#${settings.textColor}ff>███████<#00000000>█████<br>████<#${settings.textColor}ff>███████<#00000000>█████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>██████<#${settings.textColor}ff>███<#00000000>███████<br>`, 
  "w":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>██<#00000000>██<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██<#${settings.textColor}ff>██<#00000000>██<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████<#00000000>██<#${settings.textColor}ff>██████<#00000000>█<br>█<#${settings.textColor}ff>██████<#00000000>██<#${settings.textColor}ff>██████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>`, 
  "x":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>██████<#00000000>██<#${settings.textColor}ff>██████<#00000000>█<br>█<#${settings.textColor}ff>██████<#00000000>██<#${settings.textColor}ff>██████<#00000000>█<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>███<#${settings.textColor}ff>██████████<#00000000>███<br>█<#${settings.textColor}ff>██████<#00000000>██<#${settings.textColor}ff>██████<#00000000>█<br>█<#${settings.textColor}ff>██████<#00000000>██<#${settings.textColor}ff>██████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>█<#${settings.textColor}ff>████<#00000000>██████<#${settings.textColor}ff>████<#00000000>█<br>`, 
  "y":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>██<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>██<br>██<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>██<br>██<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>██<br>██<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>██<br>██<#${settings.textColor}ff>████<#00000000>████<#${settings.textColor}ff>████<#00000000>██<br>██<#${settings.textColor}ff>████████████<#00000000>██<br>████<#${settings.textColor}ff>████████<#00000000>████<br>████<#${settings.textColor}ff>████████<#00000000>████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>██████<#${settings.textColor}ff>████<#00000000>██████<br>`, 
  "z":`<line-height=14.5><cspace=-0.65><#00000000>████████████████<br>████████████████<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█████████<#${settings.textColor}ff>██████<#00000000>█<br>█████████<#${settings.textColor}ff>██████<#00000000>█<br>███████<#${settings.textColor}ff>██████<#00000000>███<br>███████<#${settings.textColor}ff>██████<#00000000>███<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>█████<#${settings.textColor}ff>██████<#00000000>█████<br>███<#${settings.textColor}ff>██████<#00000000>███████<br>███<#${settings.textColor}ff>██████<#00000000>███████<br>█<#${settings.textColor}ff>██████<#00000000>█████████<br>█<#${settings.textColor}ff>██████<#00000000>█████████<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>█<#${settings.textColor}ff>██████████████<#00000000>█<br>`
}

if (settings.customFont) {
  settings.letter_space = customFontDict.letter_space
  settings.line_space = customFontDict.line_space
  console.log(`Replaced letter/line spacing with ${customFontDict.letter_space}/${customFontDict.line_space}\nFont Color: ${settings.textColor}`)
}



// Define a bunch of stuff in global scope

// TODO 
// Text Alignment
let parentOffset = 0
let objects = []
let obj_line = 0
let letters = settings.text.split("")
// TODO: migrate to regex
let id
let prefab_padding_start
let ii = 0
let skipObjectPush = false
let parsedTimerTag


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
  if (settings.legacy) {
    return `{"id":"${id}","p":"${pid}","d":"${depth}","ot":2,"st":"${startPos}","text":"${settings.extraTags}${char}","name":"Text ${char}","shape":"4","akt":2,"ako":${settings.lifetime},"o":{"x":"0","y":"0"},"ed":{"shrink":"True","bin":"${settings.obj_bin}","layer":"${settings.obj_layer}"},"events":{"pos":[{"t":"0","x":"${pos}","y":"0"}],"sca":[{"t":"0","x":"2","y":"2"}],"rot":[{"t":"0","x":"0"}],"col":[{"t":"0","x":"${color}"}]}}`
  } else {
    return `{"id":"${id}","p_id":"${pid}","ak_t":2,"ak_o":${settings.lifetime},"ot":2,"n":"Text ${char}","text":"<font=${letterfont}>${settings.extraTags}${char}","o":{"x":-0.5,"y":0.0},"s":4,"ed":{"b":${settings.obj_bin},"co":true,"l":5},"e":[{"k":[{"ct":"Linear","ev":[0,0]}]},{"k":[{"ct":"Linear","ev":[1.0,1.0]}]},{"k":[{"ct":"Linear","ev":[0]}]},{"k":[{"ct":"Linear","ev":[${color}]}]}],"p_t":"111","p_o": [${offset}, ${offset}, ${offset}],"d":${depth},"st":${startPos}}`
  }
}

function makeObject(pid,char,pos,color,depth,startPos,offset,letterfont,line) { // Function to fill out the template with relevant info
  let id = shuffle(pid.split("")).join("") // Create a new ID, pray to RNJesus that it doesnt make a duplicate ID
  let keyframes = {"move":[],"scale":[],"rotation":[],"color":[]}
  let startKeyframes = {"move":[],"scale":[],"rotation":[],"color":[]}
  let pos_y = 0-(line*settings.line_space)

    if (settings.easeType == "flutter") {
      startKeyframes["scale"].push(makeDoubleStartKeyframe(0,2.0,"Linear"))
      keyframes["scale"].push(makeDoubleKeyframe(`${settings.easeTime}`,2.0,2.0,"OutElastic"))
      keyframes["color"].push(makeSingleKeyframe(`${settings.easeTime}`,color,"OutSine"))
    }

    if (settings.easeType == "flutter-stack") {
      startKeyframes["move"].push(makeDoubleStartKeyframe((pos-settings.letter_space),pos_y,"Linear"))
      startKeyframes["scale"].push(makeDoubleStartKeyframe(0,2.0,"Linear"))
      keyframes["scale"].push(makeDoubleKeyframe(`${settings.easeTime}`,2.0,2.0,"OutElastic"))
      keyframes["move"].push(makeDoubleKeyframe(`${settings.easeTime}`,pos,pos_y,"OutCirc"))
      keyframes["color"].push(makeSingleKeyframe(`${settings.easeTime}`,color,"OutSine"))
    }

    if (settings.easeType == "popup") {
      startKeyframes["move"].push(makeDoubleStartKeyframe(pos,pos_y-(settings.line_space/2),"Linear"))
      startKeyframes["scale"].push(makeDoubleStartKeyframe(2.0,0,"Linear"))
      keyframes["move"].push(makeDoubleKeyframe(`${settings.easeTime}`,pos,pos_y,"OutCirc"))
      keyframes["scale"].push(makeDoubleKeyframe(`${settings.easeTime}`,2.0,2.0,"OutCirc"))
      keyframes["color"].push(makeSingleKeyframe(`${settings.easeTime}`,color,"OutSine"))
    }

    if (settings.easeType == "zipper") {
      if (ii % 2 == 0) {
        startKeyframes["move"].push(makeDoubleStartKeyframe(pos,pos_y-(settings.line_space/2),"Linear"))
      } else {
        startKeyframes["move"].push(makeDoubleStartKeyframe(pos,pos_y+(settings.line_space/2),"Linear"))
      }
      startKeyframes["scale"].push(makeDoubleStartKeyframe(2.0,0,"Linear"))
      keyframes["move"].push(makeDoubleKeyframe(`${settings.easeTime}`,pos,pos_y,"OutCirc"))
      keyframes["scale"].push(makeDoubleKeyframe(`${settings.easeTime}`,2.0,2.0,"OutCirc"))
      keyframes["color"].push(makeSingleKeyframe(`${settings.easeTime}`,color,"OutSine"))
    }

    if (settings.easeType == "smooth") {
      startKeyframes["scale"].push(makeDoubleStartKeyframe(0,2.0,"Linear"))
      keyframes["scale"].push(makeDoubleKeyframe(`${settings.easeTime}`,2.0,2.0,"OutCirc"))
      keyframes["color"].push(makeSingleKeyframe(`${settings.easeTime}`,color,"OutSine"))
    }

    if (settings.easeType == "custom") {
      // Please only use this if you know what you're doing

      // Example ease type
      startKeyframes["color"].push(makeSingleStartKeyframe(settings.colorEase,"Linear"))
      startKeyframes["scale"].push(makeDoubleStartKeyframe(2.0,2.0,"Linear"))
      keyframes["color"].push(makeSingleKeyframe(`${settings.easeTime}`,color,"InElastic"))
    }

  // Fill missing keyframes with defaults, to prevent invalid objects
  // I know it could be more efficient i dont care
  if (startKeyframes["move"].length == 0) {startKeyframes["move"].push(makeDoubleStartKeyframe(pos,pos_y,"Linear"))}
  if (startKeyframes["scale"].length == 0) {startKeyframes["scale"].push(makeDoubleStartKeyframe(2.0,2.0,"Linear"))}
  if (startKeyframes["rotation"].length == 0) {startKeyframes["rotation"].push(makeSingleStartKeyframe(0,"Linear"))}
  if (startKeyframes["color"].length == 0) {startKeyframes["color"].push(makeSingleStartKeyframe(settings.colorEase,"Linear"))}
  if (keyframes["move"].length == 0) {keyframes["move"].push(makeDoubleKeyframe(`${settings.easeTime}`,pos,pos_y,"Instant"))}
  if (keyframes["scale"].length == 0) {keyframes["scale"].push(makeDoubleKeyframe(`${settings.easeTime}`,2.0,2.0,"Instant"))}
  if (keyframes["rotation"].length == 0) {keyframes["rotation"].push(makeSingleKeyframe(`${settings.easeTime}`,0,"Instant"))}
  if (keyframes["color"].length == 0) {keyframes["color"].push(makeSingleKeyframe(`${settings.easeTime}`,color,"OutSine"))}

  if (settings.legacy) {
    return `{"id":"${id}","p":"${pid}","d":"${depth}","ot":2,"st":"${startPos}","text":"${settings.extraTags}${char}","name":"Text ${char}","shape":"4","akt":2,"ako":${settings.lifetime},"o":{"x":"0","y":"0"},"ed":{"shrink":"True","bin":"${settings.obj_bin}","layer":"${settings.obj_layer}"},"events":{"pos":[${startKeyframes["move"]},${keyframes["move"]}],"sca":[${startKeyframes["scale"]},${keyframes["scale"]}],"rot":[${startKeyframes["rotation"]},${keyframes["rotation"]}],"col":[${startKeyframes["color"]},${keyframes["color"]}]}}`
  } else if (settings.customFont) {
    return `{"id":"${id}","p_id":"${pid}","ak_t":2,"ak_o":${settings.lifetime},"ot":2,"n":"Text ${char}","text":"${customFontDict[char]}","o":{"x":-0.5,"y":0.0},"s":4,"ed":{"b":${settings.obj_bin},"co":true,"l":5},"e":[{"k":[${startKeyframes["move"]},${keyframes["move"]}]},{"k":[${startKeyframes["scale"]},${keyframes["scale"]}]},{"k":[${startKeyframes["rotation"]},${keyframes["rotation"]}]},{"k":[${startKeyframes["color"]},${keyframes["color"]}]}],"p_t":"111","p_o": [${offset}, ${offset}, ${offset}],"d":${depth},"st":${startPos}}`
  } else {
    return `{"id":"${id}","p_id":"${pid}","ak_t":2,"ak_o":${settings.lifetime},"ot":2,"n":"Text ${char}","text":"${settings.extraTags}<font=${letterfont}>${char}","o":{"x":-0.5,"y":0.0},"s":4,"ed":{"b":${settings.obj_bin},"co":true,"l":5},"e":[{"k":[${startKeyframes["move"]},${keyframes["move"]}]},{"k":[${startKeyframes["scale"]},${keyframes["scale"]}]},{"k":[${startKeyframes["rotation"]},${keyframes["rotation"]}]},{"k":[${startKeyframes["color"]},${keyframes["color"]}]}],"p_t":"111","p_o": [${offset}, ${offset}, ${offset}],"d":${depth},"st":${startPos}}`
  }
} // Object templates



function makeDoubleStartKeyframe(x,y,ease) { // Return keyframe with two values and no start time
  if (settings.legacy) {
    return `{"x":"${x}","y":"${y}","ct":"${ease}"}`
  } else {
    return `{"ct":"${ease}","ev":[${x},${y}]}`
  }
}

function makeDoubleKeyframe(time,x,y,ease) { // Return keyframe with two values
  if (settings.legacy) {
    return `{"t":"${time}","x":"${x}","y":"${y}","ct":"${ease}"}`
  } else {
    return `{"ct":"${ease}","t":${time},"ev":[${x},${y}]}`
  }
}

function makeSingleStartKeyframe(x,ease) { // Return keyframe with a single value and no start time
  if (settings.legacy) {
    return `{"x":"${x}","ct":"${ease}"}`
  } else {
    return `{"ct":"${ease}","ev":[${x}]}`
  }
}

function makeSingleKeyframe(time,x,ease) { // Return keyframe with a single value 
  if (settings.legacy) {
    return `{"t":"${time}","x":"${x}","ct":"${ease}"}`
  } else {
    return `{"ct":"${ease}","t":${time},"ev":[${x}]}`
  }
}

function makeCursor(pid,pos,color,depth,startPos,cursorChar) { // Define function to generate "cursor"
  let keyframes = []
  cursorTime = 0
  cursorX = 0
  for (i=0; i<(settings.text.length+1); i++) {
    keyframes.push(makeDoubleKeyframe(cursorTime,cursorX,0,"Instant"))
    cursorTime += (settings.letter_delay/settings.text.length)
    cursorX += settings.letter_space
  }
  keyframes.join("")
  id = shuffle(pid.split("")).join("")
  if (settings.legacy) {
    return `{"id":"${id}","p":"${pid}","d":"${depth}","ot":2,"st":"${startPos}","text":"${cursorChar}","name":"Text Cursor","shape":"4","akt":2,"ako":${settings.letter_delay},"o":{"x":"0","y":"0"},"ed":{"shrink":"True","bin":"${settings.obj_bin+1}","layer":"${settings.obj_layer}"},"events":{"pos":[{"t":"0","x":"${pos}","y":"0"},${keyframes}],"sca":[{"t":"0","x":"2","y":"2"},{"t":${cursorTime+(settings.letter_delay/settings.text.length)},"x":"0","y":"0","ct":"Instant"}],"rot":[{"t":"0","x":"0"}],"col":[{"t":"0","x":"${color}"}]}}`
  } else {
    return `{"id":"${id}","p_id":"${pid}","ak_t":2,"ak_o":${settings.lifetime},"ot":2,"n":"Text Cursor","text":"${cursorChar}","o":{"x":-0.5,"y":0.0},"s":4,"ed":{"b":${settings.obj_bin+1},"co":true,"l":5},"e":[{"k":[{"ct":"Linear","ev":[0.0,0.0]},${keyframes}]},{"k":[{"ct":"Linear","ev":[${settings.letter_space/2},${settings.line_space/2}]},{"ct":"Instant","t":${cursorTime+(settings.letter_delay/settings.text.length)},"ev":[0.0,0.0]}]},{"k":[{"ct":"Linear","ev":[0.0]}]},{"k":[{"ct":"Linear","ev":[${color}]}]}],"p_t":"111","p_o": [0,0,0],"d":${depth},"st":${startPos}},`
  }
} // Known bug, does not work well when the text is actively moving


function generatePrefab() {
let obj_pos = 0 // Start text 0 units away from parent
let spawnPos = 0 // Start 0 seconds away from prefab spawn

for (i=0; i<settings.text.length; i++) { // For 0 to n letters
console.log(settings.text)

  let letter = letters[i]
  console.info(`Letter ${i+1} of ${settings.text.length} parsing. Current Char: ${letters[i]}`)
  ii = ii + 1


  if (letters[i] == "<" && letters[i+1] == "b" && letters[i+2] == "r" && letters[i+3] == ">") { // Detect line breaks

    obj_pos = 0
    obj_line += 1
    i += 4
    letter = letters[i]

  }

  if (letters[i] == "<" && letters[i+1] == "p") { // Detect <p> tags

    parsedTimerTag = ""
    i += 2

    for (i=i; letters[i] != ">"; i++) {

      if (i>999) {console.error("Pause tag loop detected!");break}
      parsedTimerTag = parsedTimerTag + letters[i] // Grab the timer delay from text 

    }

      spawnPos += parseFloat(parsedTimerTag) // Parse string as float and add it to spawnPos
      skipObjectPush = true // Skip object push to prevent duplicate characters
      letter = letters[i] // Update latest character

  }

  if (skipObjectPush) { // If statement to skip pushing an object

    skipObjectPush=false
    console.log("Push Skipped")

  } else {

    if (settings.customFont) {
      objects.push(makeObject(parent_id,letter,obj_pos,settings.obj_color,settings.obj_depth,spawnPos,parentOffset,customFontDict,obj_line)) // Fill out a new template and push it to the array
    } else {
      objects.push(makeObject(parent_id,letter,obj_pos,settings.obj_color,settings.obj_depth,spawnPos,parentOffset,settings.font,obj_line))
    }
    obj_pos += settings.letter_space
    spawnPos += (settings.letter_delay/settings.text.length)
    parentOffset += settings.obj_interval

  }

}

let rand = Math.floor(Math.random()*100000) // Generate some random number to avoid duplicate filenames

// Shameless promotion, feel free to customize. Tip: image MUST be in JSON format! Not doing so will make the prefab invalid and prevent prefabs tab from opening!
let preview = "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"

// Define prefab padding
if (settings.legacy) {
  prefab_padding_start = `{"name":"${settings.prefabName}","type":"9","offset":"0","objects":[{"id":"${parent_id}","p":"","d":"20","ot":3,"st":"0","name":"Text Parent","akt":2,"ako":5,"o":{"x":"0","y":"0"},"ed":{"bin":"0","layer":"0"},"events":{"pos":[{"t":"0","x":"0","y":"0"}],"sca":[{"t":"0","x":"2","y":"2"}],"rot":[{"t":"0","x":"0"}],"col":[{"t":"0","x":"0"}]}},`
} else {
  prefab_padding_start = `{"n":"${settings.prefabName}","type":11,"preview":"${preview}","o":0.0,"objs":[{"id":"${parent_id}","ak_t":2,"ak_o":1.0,"ot":3,"n":"Text Parent","ed":{"l":5},"e":[{"k":[{"ct":"Linear","ev":[0.0,0.0]}]},{"k":[{"ct":"Linear","ev":[1.0,1.0]}]},{"k":[{"ct":"Linear","ev":[0.0]}]},{"k":[{"ct":"Linear","ev":[0.0]}]}],"p_t":"101","d":20},`
}

// Spit out the prefab in plaintext
if (settings.cursor != ""){
  objects.push(makeCursor(parent_id,0,settings.obj_color,settings.obj_depth,0,settings.cursor))
}
return prefab_padding_start + objects.join() + "]}"
console.log(`Paste to "TypeText_${rand}.${settings.legacy == false ? "vgp" : "lsp"}" in "C:\\Program Files (x86)\\Steam\\steamapps\\common\\Project Arrhythmia\\beatmaps\\prefabs"`)
console.log("Made by VoidUnknown, idea rightfully stolen from MotionIII")
}
