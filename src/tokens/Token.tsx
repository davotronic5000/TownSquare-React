import { ComponentType } from "react";
import { TokenProps } from "./types";
import { Circle, Heading, Image } from "@chakra-ui/react";

const Token: ComponentType<TokenProps> = ({ name, url, color }) => {
    return (
        <Circle bg="gray" size="200px">
            <Image src={url.href} />
            <Heading>{name}</Heading>
        </Circle>
    );
};

export default Token;
