const parentBox = document.querySelector('[data-element="parent-box"');
const heightLabel = document.querySelector('[data-element="height-label"]')
const widthLabel = document.querySelector('[data-element="width-label"]') 
const intrinsicSwitch = document.querySelector("#intrinsic-switch")

const observer = new ResizeObserver((observedItems) => {
    const {borderBoxsize} = observedItems[0];

    widthLabel.innerText = `${Math.round(borderBoxsize[0].inlineSize)}px`
    heightLabel.innerText = `${Math.round(borderBoxsize[0].blockSize)}px`
});

observer.observe(parentBox);

intrinsicSwitch.addEventListener("change", () => {
    parentBox.setAttribute(
        "data-sizing",
        intrinsicSwitch.checked ?  "intrinsic" : "extrinsic"
    );
}); 