import React from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../shared/animations/framerAnimations';
import {
  useColorModeValue,
  IconButton,
  Flex,
  Box,
  ListItem,
  AspectRatio,
  Image,
  Skeleton,
  Link as ChakraLink,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineGithub } from 'react-icons/ai';
import { MotionBox, MotionFlex, MotionList, MotionText } from 'components/shared/animations/motion';

// --------------------------------------------------
// ProjectLayoutMed Component
// --------------------------------------------------
const ProjectLayoutMed = ({ project }) => {
  return (
    <Flex
      display={['flex', 'flex', 'none']}
      rounded="xl"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.600', 'gray.700')}
      w="full"
      h="20rem"
      textAlign="left"
      align="start"
      shadow="md"
      _hover={{ border: 'md', shadow: 'lg' }}
      overflow="hidden"
      position="relative"
    >
      {/* Image and Overlay Link */}
      <NextLink href={project.site || '#'} passHref>
        <ChakraLink
          target="_blank"
          rel="noopener noreferrer"
          display="block"
          w="100%"
          h="100%"
          aria-label={`Visit project site: ${project.title}`}
        >
          <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
            <Image
              src={project.imageLight}
              fallback={<Skeleton />}
              width="full"
              height="full"
              position="absolute"
              rounded="xl"
              objectFit="cover"
              opacity={0.5}
              _hover={{ opacity: 1 }}
            />
          </AspectRatio>
          <Box
            width="full"
            height="full"
            position="absolute"
            bg={useColorModeValue('gray.100', 'gray.900')}
            opacity={useColorModeValue('0.5', '1')}
          />
        </ChakraLink>
      </NextLink>

      {/* Info Section */}
      <MotionBox
        initial="initial"
        animate="animate"
        width={['full', '70%']}
        rounded="lg"
        my="auto"
        px="6"
        py="3"
        position="relative"
        zIndex="10"
      >
        <MotionBox variants={stagger}>
          {/* Title and Description Link */}
          <NextLink href={project.site || '#'} passHref>
            <ChakraLink
              target="_blank"
              rel="noopener noreferrer"
              display="block"
              aria-label={`View project: ${project.title}`}
            >
              <MotionText
                variants={fadeInUp}
                fontSize="2xl"
                fontWeight="bold"
                color={useColorModeValue('gray.900', 'gray.100')}
              >
                {project.title}
              </MotionText>
              <Box width="full">
                <MotionText
                  variants={fadeInUp}
                  bg={useColorModeValue('gray.200', 'gray.700')}
                  rounded="lg"
                  align="left"
                  p="4"
                  fontSize="sm"
                >
                  {project.description}
                </MotionText>
                {project.techStack && (
                  <MotionList
                    variants={fadeInUp}
                    display="flex"
                    fontSize="xs"
                    justifyContent="start"
                    mt="3"
                    color={useColorModeValue('gray.900', 'gray.100')}
                    fontWeight="bold"
                  >
                    {project.techStack.map((s, index) => (
                      <ListItem key={index} mr="2">
                        <i>{s}</i>
                      </ListItem>
                    ))}
                  </MotionList>
                )}
              </Box>
            </ChakraLink>
          </NextLink>

          {/* Icon Buttons */}
          <MotionFlex variants={fadeInUp} pt={2} mt={1} justifyContent="start">
            {project.gitHub && (
              <ChakraLink
                mr={2}
                href={project.gitHub}
                isExternal
                aria-label="View GitHub repository"
              >
                <IconButton
                  colorScheme="gray"
                  rounded="full"
                  size="md"
                  aria-label="View GitHub"
                  icon={<AiOutlineGithub />}
                />
              </ChakraLink>
            )}
            {project.site && (
              <ChakraLink
                href={project.site}
                isExternal
                aria-label="Visit project site"
              >
                <IconButton
                  colorScheme="gray"
                  rounded="full"
                  size="md"
                  aria-label="Visit Site"
                  icon={<HiOutlineExternalLink />}
                />
              </ChakraLink>
            )}
          </MotionFlex>
        </MotionBox>
      </MotionBox>
    </Flex>
  );
};

// --------------------------------------------------
// LeftProjectLayoutLarge Component
// --------------------------------------------------
const LeftProjectLayoutLarge = ({ project }) => {
  return (
    <Flex width="full" display={['none', 'none', 'flex']}>
      {/* Image Box */}
      <MotionBox
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ x: 500, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.600', 'gray.700')}
        w="80%"
        h="24rem"
        textAlign="left"
        align="start"
        shadow="md"
        _hover={{ border: 'md', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        <NextLink href={project.site || '#'} passHref>
          <ChakraLink
            target="_blank"
            rel="noopener noreferrer"
            display="block"
            w="100%"
            h="100%"
            aria-label={`Visit project site: ${project.title}`}
          >
            <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
              <Image
                src={project.imageLight}
                fallback={<Skeleton />}
                width="full"
                height="full"
                position="absolute"
                rounded="xl"
                objectFit="cover"
                opacity={0.5}
                _hover={{ opacity: 1 }}
              />
            </AspectRatio>
          </ChakraLink>
        </NextLink>
      </MotionBox>

      {/* Info Box */}
      <MotionBox
        initial="initial"
        animate="animate"
        width="40%"
        rounded="lg"
        my="auto"
        zIndex="10"
        ml="-6rem"
        align="right"
      >
        <motion.div variants={stagger}>
          {/* Title Link */}
          <NextLink href={project.site || '#'} passHref>
            <ChakraLink
              target="_blank"
              rel="noopener noreferrer"
              display="block"
              aria-label={`View project: ${project.title}`}
            >
              <MotionText
                variants={fadeInUp}
                fontSize="3xl"
                fontWeight="bold"
                color={useColorModeValue('gray.900', 'gray.100')}
              >
                {project.title}
              </MotionText>
              <Box width="full">
                <MotionText
                  variants={fadeInUp}
                  bg={useColorModeValue('gray.200', 'gray.700')}
                  rounded="lg"
                  align="right"
                  p="4"
                  fontSize="md"
                >
                  {project.description}
                </MotionText>
                {project.techStack && (
                  <MotionList
                    variants={fadeInUp}
                    display="flex"
                    fontSize="sm"
                    justifyContent="end"
                    mt="3"
                    color={useColorModeValue('gray.900', 'gray.100')}
                    fontWeight="bold"
                  >
                    {project.techStack.map((s, index) => (
                      <ListItem key={index} mr="3">
                        <i>{s}</i>
                      </ListItem>
                    ))}
                  </MotionList>
                )}
              </Box>
            </ChakraLink>
          </NextLink>

          {/* Icon Buttons */}
          <MotionFlex variants={fadeInUp} pt={2} mt={1} justifyContent="end">
            {project.gitHub && (
              <ChakraLink
                mr={2}
                href={project.gitHub}
                isExternal
                aria-label="View GitHub repository"
              >
                <IconButton
                  colorScheme="gray"
                  rounded="full"
                  size="md"
                  aria-label="View GitHub"
                  icon={<AiOutlineGithub />}
                />
              </ChakraLink>
            )}
            {project.site && (
              <ChakraLink
                href={project.site}
                isExternal
                aria-label="Visit project site"
              >
                <IconButton
                  colorScheme="gray"
                  rounded="full"
                  size="md"
                  aria-label="Visit Site"
                  icon={<HiOutlineExternalLink />}
                />
              </ChakraLink>
            )}
          </MotionFlex>
        </motion.div>
      </MotionBox>
    </Flex>
  );
};

// --------------------------------------------------
// RightProjectLayoutLarge Component
// --------------------------------------------------
const RightProjectLayoutLarge = ({ project }) => {
  return (
    <Flex width="full" display={['none', 'none', 'flex']}>
      {/* Info Box */}
      <MotionBox
        initial="initial"
        animate="animate"
        width="40%"
        rounded="lg"
        my="auto"
        zIndex="10"
        mr="-6rem"
        align="left"
      >
        <motion.div variants={stagger}>
          {/* Title Link */}
          <NextLink href={project.site || '#'} passHref>
            <ChakraLink
              target="_blank"
              rel="noopener noreferrer"
              display="block"
              aria-label={`View project: ${project.title}`}
            >
              <MotionText
                variants={fadeInUp}
                fontSize="3xl"
                fontWeight="bold"
                color={useColorModeValue('gray.900', 'gray.100')}
              >
                {project.title}
              </MotionText>
              <Box width="full">
                <MotionText
                  variants={fadeInUp}
                  bg={useColorModeValue('gray.200', 'gray.700')}
                  rounded="lg"
                  align="left"
                  p="4"
                  fontSize="md"
                >
                  {project.description}
                </MotionText>
                {project.techStack && (
                  <MotionList
                    variants={fadeInUp}
                    display="flex"
                    fontSize="sm"
                    justifyContent="start"
                    mt="3"
                    color={useColorModeValue('gray.900', 'gray.100')}
                    fontWeight="bold"
                  >
                    {project.techStack.map((s, index) => (
                      <ListItem key={index} mr="3">
                        <i>{s}</i>
                      </ListItem>
                    ))}
                  </MotionList>
                )}
              </Box>
            </ChakraLink>
          </NextLink>

          {/* Icon Buttons */}
          <MotionFlex variants={fadeInUp} pt={2} mt={1} justifyContent="start">
            {project.gitHub && (
              <ChakraLink
                mr={2}
                href={project.gitHub}
                isExternal
                aria-label="View GitHub repository"
              >
                <IconButton
                  colorScheme="gray"
                  rounded="full"
                  size="md"
                  aria-label="View GitHub"
                  icon={<AiOutlineGithub />}
                />
              </ChakraLink>
            )}
            {project.site && (
              <ChakraLink
                href={project.site}
                isExternal
                aria-label="Visit project site"
              >
                <IconButton
                  colorScheme="gray"
                  rounded="full"
                  size="md"
                  aria-label="Visit Site"
                  icon={<HiOutlineExternalLink />}
                />
              </ChakraLink>
            )}
          </MotionFlex>
        </motion.div>
      </MotionBox>

      {/* Image Box */}
      <MotionBox
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ x: 500, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.600', 'gray.700')}
        w="80%"
        h="24rem"
        textAlign="left"
        align="start"
        shadow="md"
        _hover={{ border: 'md', shadow: 'lg' }}
        overflow="hidden"
        position="relative"
      >
        <NextLink href={project.site || '#'} passHref>
          <ChakraLink
            target="_blank"
            rel="noopener noreferrer"
            display="block"
            w="100%"
            h="100%"
            aria-label={`Visit project site: ${project.title}`}
          >
            <AspectRatio ratio={1.85 / 1} w="100%" h="100%" rounded="xl">
              <Image
                src={project.imageLight}
                fallback={<Skeleton />}
                width="full"
                height="full"
                position="absolute"
                rounded="xl"
                objectFit="cover"
                opacity={0.5}
                _hover={{ opacity: 1 }}
              />
            </AspectRatio>
          </ChakraLink>
        </NextLink>
      </MotionBox>
    </Flex>
  );
};

// --------------------------------------------------
// Export all three components
// --------------------------------------------------
export {
  LeftProjectLayoutLarge,
  RightProjectLayoutLarge,
  ProjectLayoutMed,
};
