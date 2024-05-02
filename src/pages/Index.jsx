import { Box, Grid, GridItem, Text, VStack, HStack, Button, useColorModeValue, Image, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaBell, FaTools, FaServer, FaPlusCircle } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <VStack spacing={4} p={5}>
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          Network Automation Dashboard
        </Text>
        <IconButton icon={<FaBell />} isRound="true" />
      </HStack>
      <Grid templateColumns="repeat(3, 1fr)" gap={6} w="full">
        <GridItem colSpan={2}>
          <Box bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
            <Text fontSize="lg" fontWeight="bold">
              Main Dashboard Area
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <Box bg="green.300" p={3} borderRadius="md">
                Bandwidth Usage
              </Box>
              <Box bg="yellow.300" p={3} borderRadius="md">
                Device Status
              </Box>
              <Box bg="red.300" p={3} borderRadius="md">
                Alerts
              </Box>
            </Grid>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
            <Text fontSize="lg" fontWeight="bold">
              Quick Access Toolbar
            </Text>
            <VStack spacing={2}>
              <Button leftIcon={<FaTools />} variant="solid">
                Automation Tasks
              </Button>
              <Button leftIcon={<FaServer />} variant="solid">
                API Status
              </Button>
            </VStack>
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
            <Text fontSize="lg" fontWeight="bold">
              Graphs and Analytics
            </Text>
            <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwYW5hbHl0aWNzJTIwZ3JhcGh8ZW58MHx8fHwxNzE0NjYzNTc0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Analytics Graph" />
          </Box>
        </GridItem>
        <GridItem colSpan={3}>
          <Box bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
            <Text fontSize="lg" fontWeight="bold">
              Vendor-Specific Section
            </Text>
            <HStack spacing={4}>
              <Button leftIcon={<FaPlusCircle />} variant="outline">
                Add Vendor
              </Button>
              <Button leftIcon={<FaChartLine />} variant="outline">
                View Metrics
              </Button>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
      <Box w="full" bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
        <Text fontSize="lg" fontWeight="bold">
          Alerts and Notifications Panel
        </Text>
        <Text>Real-time alerts and notifications about network events.</Text>
      </Box>
      <Box w="full" bg={bg} color={color} p={4} borderRadius="lg" boxShadow="md">
        <Text fontSize="lg" fontWeight="bold">
          Footer
        </Text>
        <Text>© 2023 Network Automation Dashboard. All rights reserved.</Text>
      </Box>
    </VStack>
  );
};

export default Index;
