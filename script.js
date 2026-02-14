let correctAnswer = 0;
let score = 0;

function generateQuestion() {
    const p = 10000; // เงินต้นคงที่ตามขอบเขตโครงงาน [cite: 20, 175]
    const r = (Math.random() * (0.05 - 0.03) + 0.03).toFixed(2); // สุ่มดอกเบี้ย 3-5% [cite: 20, 175]
    const n = Math.floor(Math.random() * 20) + 1; // สุ่มระยะเวลา 1-20 ปี [cite: 20, 175]
    const mode = document.getElementById('mode').value;

    document.getElementById('principal').value = p;
    document.getElementById('rate').value = r;
    document.getElementById('years').value = n;
    document.getElementById('user-answer').value = '';

    if (mode === "simple") {
        correctAnswer = p * (1 + (n * r)); // สูตรดอกเบี้ยคงต้น [cite: 59, 335]
        document.getElementById('formula-display').innerHTML = `โจทย์คงต้น: หาเงินรวมจากเงินต้น ${p} บาท ดอกเบี้ย ${r*100}% นาน ${n} ปี<br><b>สูตร: A = P(1+nr)</b>`;
    } else {
        correctAnswer = p * Math.pow((1 + parseFloat(r)), n); // สูตรดอกเบี้ยทบต้น [cite: 68, 336]
        document.getElementById('formula-display').innerHTML = `โจทย์ทบต้น: หาเงินรวมจากเงินต้น ${p} บาท ดอกเบี้ย ${r*100}% นาน ${n} ปี<br><b>สูตร: A = P(1+r)ⁿ</b>`;
    }

    correctAnswer = parseFloat(correctAnswer.toFixed(2)); // จัดการจุดทศนิยมให้แม่นยำ 
}

function checkAnswer() {
    const userVal = parseFloat(document.getElementById('user-answer').value);
    const scoreText = document.getElementById('score-val');

    if (userVal === correctAnswer) {
        score += 10;
        alert("ถูกต้อง! พลังของดอกเบี้ยทบต้นสุดยอดไปเลย 🎉");
    } else {
        alert(`คำตอบที่ถูกต้องคือ ${correctAnswer.toLocaleString()} บาท ลองคำนวณใหม่อีกครั้งนะ!`);
    }
    scoreText.innerText = score;
}
