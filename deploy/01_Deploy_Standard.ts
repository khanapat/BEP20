import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy, log } = hre.deployments;

    log("Deploying the contracts with the account: ", deployer);
    log("Account Balance: ", (await hre.ethers.provider.getBalance(deployer)).toString());

    const standard = await deploy("Standard", {
        from: deployer,
        args: [
            "USDC TEST",
            "USDC",
            hre.ethers.utils.parseEther("1000000"),
        ],
        log: true,
    });

    log("Standard Token address: ", standard.address, " network: ", hre.network.name);
    log("----------------------------------------------------")
}

export default func;
func.id = "deploy_standard";
func.tags = ["all", "standard"];