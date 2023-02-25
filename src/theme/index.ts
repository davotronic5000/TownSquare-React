import { ThemeConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/theme-utils";

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
};

const overrides = {
    config,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode("white", "gray.800")(props),
                bgGradient: mode(
                    "linear(to-b, gray.300, orange.200)",
                    "linear(to-b, teal.600, gray.800)"
                )(props),
            },
        }),
    },
};

export default extendTheme(overrides);
