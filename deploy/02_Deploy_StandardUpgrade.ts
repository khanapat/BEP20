import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy, log, get } = hre.deployments;
    const chainId = await hre.getChainId();

    log("Deploying the contracts with the account: ", deployer);
    log("Account Balance: ", (await hre.ethers.provider.getBalance(deployer)).toString());

    const standardUpgrade = await deploy("StandardUpgrade", {
        from: deployer,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            execute: {
                init: {
                    methodName: "initialize",
                    args: [
                        "USDC TEST",
                        "USDC",
                        hre.ethers.utils.parseEther("1000000"),
                    ],
                }
            }
        },
        log: true
    });

    log("StandardUpgrade address: ", standardUpgrade.address, " network: ", hre.network.name);
    log("----------------------------------------------------")
}

export default func;

func.id = "deploy_standard_upgrade";
func.tags = ["all", "standardUpgrade"];