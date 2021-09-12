import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import payment from '../assets/payment.png';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}

`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    flex: 1;
`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
    
`
const Title = styled.h3`
    margin-bottom: 20px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fcf5f5"})}


`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MARK.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. In officiis sed ex aspernatur eligendi exercitationem qui impedit nostrum, perferendis animi! Sequi fuga blanditiis nemo quaerat dignissimos voluptatum vero rem pariatur!</Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man facion</ListItem>
                    <ListItem>Woman facion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Order</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contacts</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>545 Route Path, Moscow 453095
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>+1 765 342 24 44
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>m@bible.com.ua
                </ContactItem>
                <Payment src={payment}/>
            </Right>
        </Container>
    );
};

export default Footer;