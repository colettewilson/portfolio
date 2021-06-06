// Author: @Recidvst
// Original: https://codepen.io/Recidvst/pen/ZrjmJj?editors=0010

const randomChar = () => {
  return Math.random().
  toString(36).
  replace(/[^a-z]+/g, "").
  substr(0, 1);
}

const randomTime = () => {
  return 600 + (Math.random() * (1 - 600) + 600);
}

export const scramble = (element) => {
  const domEls = element.childNodes

  domEls.forEach(el => {
    const string = el.innerText

    if (!string) return
    
    const letters = string.split('')
    const newLetters = string.split('')
    let revert = []
  
    const ticker = setInterval(() => {
      letters.map((letter, i) => {
        // break if a space
        if (" \t\n\r\v".indexOf(letter) > -1) return
  
        // set new random letter
        newLetters[i] = randomChar()
  
        // set random timeout to make letters reset at different times
        setTimeout(() => { revert[i] = true }, randomTime())
  
        // reset individual letter if kill switch
        if (revert[i]) newLetters[i] = letters[i]
  
        // set html
        el.innerText = newLetters.join("")
      })
  
      // kill interval after all letters returned to normal to save stack
      let killCheck = newLetters.length === letters.length && newLetters.every((e, j) => e === letters[j])

      if (killCheck) {
        clearInterval(ticker) // stop looping
      }
    }, 100)
  })
}