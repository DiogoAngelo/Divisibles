export default class PrintDivisibles {
  constructor(maxNumber, divisibleA, divisibleB) {
    this.buttonRun = document.querySelector("button");
    this.maxNumber = maxNumber;
    this.divisibleA = divisibleA;
    this.divisibleB = divisibleB;
  }
  replaceDivisibles() {
    let divisOnlyByA;
    let divisOnlyByB;
    let divisByBoth;

    for (let i = 1; i <= this.maxNumber; i++) {
      if (i % this.divisibleA === 0 && i % this.divisibleB !== 0) {
        divisOnlyByA = i;
        console.log((divisOnlyByA = "Visual"));
      } else if (i % this.divisibleB === 0 && i % this.divisibleA !== 0) {
        divisOnlyByB = i;
        console.log((divisOnlyByB = "Nuts"));
      } else if (i % this.divisibleA === 0 && i % this.divisibleB === 0) {
        divisByBoth = i;
        console.log((divisByBoth = "Visual Nuts"));
      } else {
        console.log(i);
      }
    }
  }

  addEvent() {
    this.buttonRun.addEventListener("click", () => {
      this.replaceDivisibles();
    });
  }

  init() {
    this.addEvent();
  }
}
