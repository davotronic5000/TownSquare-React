import { ComponentType } from "react";
import { TokenProps } from "./types";
import { Circle, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const Token: ComponentType<TokenProps> = ({ name, url, color, size }) => {
    return (
        <Circle bg="gray" size={size} bgImage={url.href} bgSize={size}>
            <Heading>{name}</Heading>
        </Circle>
    );
};

export default Token;
