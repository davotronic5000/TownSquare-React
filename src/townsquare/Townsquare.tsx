import {
    Box,
    CardHeader,
    Card,
    Heading,
    CardBody,
    Text,
    ButtonGroup,
    Button,
} from "@chakra-ui/react";
import { ComponentType, useState } from "react";

enum TownsquareStatus {
    Player = "PLAYER",
    Storyteller = "STORYTELLER",
    Lost = "LOST",
}

const Townsquare: ComponentType = () => {
    const [townsquareStatus, updateStatus] = useState<TownsquareStatus>(
        TownsquareStatus.Lost
    );
    return (
        <Box>
            <Card>
                <CardHeader>
                    <Heading>Welcome to the Townsquare Tool</Heading>
                </CardHeader>
                <CardBody>
                    {townsquareStatus === TownsquareStatus.Lost && (
                        <Box>
                            <Text>
                                Would you like to host a session as a
                                storyteller? Or are you a player?
                            </Text>
                            <ButtonGroup>
                                <Button
                                    onClick={() =>
                                        updateStatus(
                                            TownsquareStatus.Storyteller
                                        )
                                    }
                                >
                                    Storyteller
                                </Button>
                                <Button
                                    onClick={() =>
                                        updateStatus(TownsquareStatus.Player)
                                    }
                                >
                                    Player
                                </Button>
                            </ButtonGroup>
                        </Box>
                    )}
                    {townsquareStatus === TownsquareStatus.Storyteller && (
                        <Box>
                            <Text>Add some players to set up a game?</Text>
                            <Button
                                onClick={() =>
                                    updateStatus(TownsquareStatus.Lost)
                                }
                            >
                                Back
                            </Button>
                        </Box>
                    )}
                    {townsquareStatus === TownsquareStatus.Player && (
                        <Box>
                            <Text>Please select a seat! Have fun!</Text>
                            <Button
                                onClick={() =>
                                    updateStatus(TownsquareStatus.Lost)
                                }
                            >
                                Back
                            </Button>
                        </Box>
                    )}
                </CardBody>
            </Card>
        </Box>
    );
};

export default Townsquare;
