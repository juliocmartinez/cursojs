import { HiCalendar } from "react-icons/hi";
import { Box,  Text, Flex, Spacer, Tag } from '@chakra-ui/react'

import dayjs from "dayjs";
import "dayjs/locale/es"
export function LaunchItem(launch){
    return(
        <Box  bg="gray.100" p={4} m={4} borderRadius="lg">
              <Flex>
                <Text fontSize="2xl">
                  Mission <strong>{launch.name}</strong> {(launch.date_local).split('').splice(0, 4)}
                </Text>
                <Spacer />
                <Tag p={4} colorScheme={launch.success ? "green" : "red"} >
                  {launch.success ? "Success" : "Failured"}
                </Tag>
              </Flex>
              <Flex align="center">
                <HiCalendar/>
                <Text fontSize="sm" ml={1}>
                  {/* {format(new Date(launch.date_local), 'PPPP')} */}
                  {dayjs(launch.date_local)
                  .locale('es')
                  .format('D MMMM, YYYY')}
                 
             
                </Text>
              </Flex>
            
          </Box>
    )
}