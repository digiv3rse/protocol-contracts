# Read $CALLDATA from calldata.txt
CALLDATA=$(cat script/calldata.txt)

DIGIHUB="0x22bB26d8f92998Cf85Aad76b391D15EAE97af0aC"
GOVERNANCE="0x5583Bc9b1FF49C268A1808c72Aca7da26D934EA1" # Governance contract
#GOVOWNER="0x532BbA5445e306cB83cF26Ef89842d4701330A45" # Governance contract's owner

# cast send --rpc-url mumbai --unlocked --from $GOVOWNER $GOVERNANCE "executeAsGovernance(address,bytes)" $DIGIHUB $CALLDATA
cast send --rpc-url sepolia --mnemonic-path mnemonic.txt --mnemonic-index 1 $GOVERNANCE "executeAsGovernance(address,bytes)" $DIGIHUB $CALLDATA
