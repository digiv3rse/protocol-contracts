set -e

TARGET=$1
CATAPULTA=$2

# If $CATAPULTA is defined, but it's not 'catapulta' then we exit with error
if [[ "$CATAPULTA" != "" && "$CATAPULTA" != "catapulta" ]]
    then
        echo "To deploy use catapulta add 'catapulta' to params. Terminating"
        exit 1
fi

echo "Running Full DiGi V2 Deployment on $TARGET environment"

echo "Deploying DiGi V2 Implementation and upgrade contracts..."
bash script/run.sh S01_DeployDiGiV2Upgrade $TARGET _ $CATAPULTA

read -p "Continue?" CONFIRMATION

echo "Deploying DiGi V2 Periphery..."
bash script/run.sh S02_DeployDiGiV2Periphery $TARGET _ $CATAPULTA

read -p "Continue?" CONFIRMATION

# Run addBalance script if the following fails:

echo "Changing DiGi V1 Admins..."
bash script/run.sh S03_ChangeDiGiV1Admins $TARGET s

read -p "Continue?" CONFIRMATION

echo "Performing DiGi V2 Upgrade..."
bash script/run.sh S04_PerformV2Upgrade $TARGET

read -p "Continue?" CONFIRMATION

echo "Running Governance Actions (whitelisting profile creator, registering currencies and modules)..."
bash script/run.sh S05_GovernanceActions $TARGET

read -p "Continue?" CONFIRMATION

echo "Interacting with DiGi V2..."
bash script/run.sh S06_InteractWithDiGiV2 $TARGET
