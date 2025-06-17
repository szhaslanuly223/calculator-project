const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const differenceBtn = document.getElementById('difference')
const submitBtn = document.getElementById('submit')
const resultValue = document.getElementById('result')

let value

plusBtn.onclick = () => {
  value = Number(input1.value) + Number(input2.value)
}

minusBtn.onclick = () => {
  value = Number(input1.value) - Number(input2.value)
}

multiplyBtn.onclick = () => {
  value = Number(input1.value) * Number(input2.value)
}

differenceBtn.onclick = () => {
  value = Number(input1.value) / Number(input2.value)
}

submitBtn.onclick = () => {
  printResult(value)
}

const printResult = (result) => {
  if (result > 0) {
    resultValue.style.color = 'green'
  } else if (result === 0) {
    resultValue.style.color = 'gray'
  } else {
    resultValue.style.color = 'red'
  }
  resultValue.textContent = result
}
