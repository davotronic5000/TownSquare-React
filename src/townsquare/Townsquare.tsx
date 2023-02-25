import { ComponentType, useState } from "react";

enum TownsquareStatus {
    Player = "PLAYER",
    Storyteller = "STORYTELLER",
    Lost = "LOST",
}

const Townsquare: ComponentType = () => {
    const townsquareStatus = useState<TownsquareStatus>(TownsquareStatus.Lost);
    return <div>Townsquare</div>;
};

export default Townsquare;
