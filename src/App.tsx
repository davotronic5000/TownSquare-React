import { Box, ChakraProvider, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import theme from "./theme";
import Townsquare from "./townsquare/Townsquare";

const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end" />
                <Townsquare />
            </Grid>
        </Box>
    </ChakraProvider>
);

export default App;
