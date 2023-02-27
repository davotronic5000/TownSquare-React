import { ComponentType } from "react";
import { TokenProps } from "./types";
import { Box, Image, Text } from "@chakra-ui/react";

const Token: ComponentType<TokenProps> = ({ name, url, color }) => {
    return (
        <Box
            borderRadius="50%"
            bgImage="url('https://clocktower.online/img/token.d0b9dbdf.png')"
            width="100%"
            bgSize="100%"
            boxShadow="dark-lg"
            cursor="pointer"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Image
                src={url.href}
                width="100%"
                height="100%"
                marginTop="3%"
                position="absolute"
            />
            <svg
                viewBox="0 0 150 150"
                width="100%"
                height="100%"
                fontSize="24px"
            >
                <path
                    d="M 13 75 C 13 160, 138 160, 138 75"
                    id="curve"
                    fill="transparent"
                />
                <text
                    width={150}
                    x="66.6%"
                    textAnchor="middle"
                    fontFamily="papyrus"
                >
                    <textPath xlinkHref="#curve">{name}</textPath>
                </text>
            </svg>
        </Box>
    );
};

export default Token;
