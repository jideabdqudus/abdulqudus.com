import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text, Flex, Box } from 'rebass/styled-components';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FontAwesomeIcon from 'react-fontawesome';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';
import ImageSubtitle from '../components/ImageSubtitle';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${(props) => props.theme.colors.primary} 5px solid;
`;

const Tweets = () => {
  return (
    <div>
      <Section.Container id="writing" Background={Background}>
        <Section.Header name="Hire" icon="🤝" label="Hire" />
        <div>
        <Flex flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
          <Fade bottom>
            <form
              method="post"
              action="https://getform.io/{your-unique-getform-endpoint}"
            >
              <label>
                Name<br/>
                <input type="text" name="name" className="row" placeholder="Your name" style={{display:"block", width:"80%", height:"30px"}}/>
              </label>
              <label>
                Email<br/>
                <input type="email" name="email" placeholder="Your Email" style={{display:"block" , width:"80%"}}/>
              </label>
              <label>
                Message<br/>
                <input type="text" name="message" placeholder="Your Message" rows="5" style={{display:"block", width:"80%"}}/>
              </label>
              <button type="submit">Send</button>
            <input type="reset" value="Clear" />
            </form>
          </Fade>
        </Box>
      </Flex>
    

          </div>
      </Section.Container>
    </div>
  );
};

export default Tweets;






// isMediumUserDefined && (
//     <Section.Container id="writing" Background={Background}>
//       <Section.Header name="Writing" icon="✍️" label="writing" />
//       <CardContainer minWidth="300px">

//       </CardContainer>
//     </Section.Container>
//   )

// const Post = ({ title, text, image, url, date, time }) => (
//   <Card onClick={() => window.open(url, '_blank')} pb={4}>
//     <EllipsisHeading m={3} p={1} color="text">
//       {title}
//     </EllipsisHeading>
//     {image && <CoverImage src={image} height="200px" alt={title} />}
//     <Text m={3} color="text">
//       {text}
//     </Text>
//     <ImageSubtitle bg="primary" color="white" x="right" y="bottom" round>
//       {`${date} - ${Math.ceil(time)} min`}
//     </ImageSubtitle>
//   </Card>
// );

// const MorePosts = ({ username, name, number }) => (
//   <Card
//     onClick={() => window.open(`${MEDIUM_URL}/${username}/`, '_blank')}
//     p={4}
//   >
//     <Flex
//       flexDirection="column"
//       justifyContent="space-between"
//       style={{ height: '100%' }}
//     >
//       <Box>
//         <EllipsisHeading fontSize={5} my={2}>
//           Hooray! &nbsp;
//           <span role="img" aria-label="party">
//             🎉
//           </span>
//         </EllipsisHeading>
//         <Heading lineHeight={1.5}>
//           It seems that
//           <Text color="secondary">{name}</Text>
//           {`has published ${number} more posts!`}
//         </Heading>
//       </Box>
//       <Heading color="primary" mt={5} textAlign="right">
//         Go to Medium &nbsp;
//         <FontAwesomeIcon name="arrow-right" aria-label="Go to Medium" />
//       </Heading>
//     </Flex>
//   </Card>
// );
