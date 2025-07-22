const coin = document.getElementById('coin');
const coinImg = document.getElementById('coinImg'); 
const resultText = document.getElementById('resultText');
const flipBtn = document.getElementById('flipBtn');
const coinContainer = document.getElementById('coinContainer');
const coinShadow = document.querySelector('.coin-shadow');


function flipCoin() {

  flipBtn.disabled = true;
  flipBtn.classList.add('disabled'); 
  

  coinShadow.style.animation = 'shadow-pulse 0.6s ease-in-out';
  

  coin.style.transform = 'rotateY(180deg)';
  
  setTimeout(() => {
    const isHeads = Math.random() < 0.5;
    

    coinImg.src = isHeads ? 'resources/heads.svg' : 'resources/tails.svg';
    resultText.textContent = isHeads ? 'Heads' : 'Tails';
    
    coin.style.transform = 'rotateY(0deg)';
    

    coinShadow.style.animation = 'none';
    
    // 启用按钮
    setTimeout(() => {
      flipBtn.disabled = false;
      flipBtn.classList.remove('disabled'); 
    }, 300);
  }, 600); 
}


flipBtn.addEventListener('click', flipCoin);

coinContainer.addEventListener('click', flipCoin);