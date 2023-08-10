const ethers = require('ethers');
const UniswapV2Router02 = require('@uniswap/v2-periphery/build/UniswapV2Router02.json');
const IERC20 = require('@openzeppelin/contracts/build/contracts/IERC20.json');

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Mainnet Router address for uniswap v2
const routerAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

export async function addLiquidity(tokenAddress1, tokenAddress2, tokenAmount1, tokenAmount2) {
  const token1Contract = new ethers.Contract(
    tokenAddress1,
    IERC20.abi,
    signer
  );
  const token2Contract = new ethers.Contract(
    tokenAddress2,
    IERC20.abi,
    signer
  );

  await token1Contract.approve(
    routerAddress,
    ethers.utils.parseEther(tokenAmount1.toString())
  );

  await token2Contract.approve(
    routerAddress,
    ethers.utils.parseEther(tokenAmount2.toString())
  );

  const router = new ethers.Contract(
    routerAddress,
    UniswapV2Router02.abi,
    signer
  );

  const amountADesired = ethers.utils.parseEther(tokenAmount1.toString());
  const amountBDesired = ethers.utils.parseEther(tokenAmount2.toString());
  const amountAMin = ethers.utils.parseEther('0');
  const amountBMin = ethers.utils.parseEther('0');
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

  const tx = await router.addLiquidity(
    tokenAddress1,
    tokenAddress2,
    amountADesired,
    amountBDesired,
    amountAMin,
    amountBMin,
    await signer.getAddress(),
    deadline,
    {
      gasLimit: 1000000,
    }
  );

  const receipt = await tx.wait();
  return receipt;
}

// addLiquidity('0x6B175474E89094C44Da98b954EedeAC495271d0F', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '1', '1')
//   .then(receipt => console.log(receipt))
//   .catch(error => console.error(error));
