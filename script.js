const coin = document.getElementById('coin');
const coinImg = document.getElementById('coinImg'); 
const resultText = document.getElementById('resultText');
const flipBtn = document.getElementById('flipBtn');
const coinContainer = document.getElementById('coinContainer');
const coinShadow = document.querySelector('.coin-shadow');

// 模拟硬币翻转逻辑
function flipCoin() {
  // 禁用按钮防止重复点击
  flipBtn.disabled = true;
  
  // 添加阴影动画
  coinShadow.style.animation = 'shadow-pulse 0.6s ease-in-out';
  
  // 执行翻转动画
  coin.style.transform = 'rotateY(180deg)';
  
  // 延迟更新结果（配合动画时长）
  setTimeout(() => {
    const isHeads = Math.random() < 0.5; // 50%概率
    
    // 切换图片（与第一部分相同逻辑）
    coinImg.src = isHeads ? 'resources/heads.svg' : 'resources/tails.svg';
    resultText.textContent = isHeads ? 'Heads' : 'Tails';
    
    // 重置硬币角度
    coin.style.transform = 'rotateY(0deg)';
    
    // 重置阴影动画
    coinShadow.style.animation = 'none';
    
    // 启用按钮
    setTimeout(() => {
      flipBtn.disabled = false;
    }, 300);
  }, 600); // 动画时长
}

// 按钮点击事件
flipBtn.addEventListener('click', flipCoin);
// 硬币点击事件
coinContainer.addEventListener('click', flipCoin);

// 添加按钮禁用状态样式
const style = document.createElement('style');
style.textContent = `
  #flipBtn.disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
document.head.appendChild(style);