el = document.querySelector("span.fit");

function fitText(t, a = 86) {
  el.innerText = t;
  let maxWidth = el.offsetWidth; maxWidth = a;
  let actualWidth = el.scrollWidth;

  let scale = maxWidth / actualWidth;
  if (actualWidth <= maxWidth) scale = 1;

  return [t, scale];
}

