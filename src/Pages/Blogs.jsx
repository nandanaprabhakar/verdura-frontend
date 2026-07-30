import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box, Button, Card, CardContent, CardActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import BlogAnimation from '../Components/BlogAnimation';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Blogs() {

    const [hover, setHover] = useState(null);

    const itemData = [
        {
            img: 'https://hortology.co.uk/cdn/shop/files/Monstera-deliciosa-Swiss-Cheese-Plant-21x70cm-Ryan-Plant-Pot-Blue-Gold-31x28cm_1600x.jpg?v=1767350800',
            // title: 'Breakfast',
        },
        {
            img: 'https://cdn.apartmenttherapy.info/image/upload/v1738605680/at/art/photo/2025/2025-01/2025-01-houseplants-start-here-guide/beginner-houseplants/houseplants-start-here-055-beginner-plants-1.jpg',
            title: 'Top 10 \n Low-Maintenance \n Indoor Plants',
            hoverText: 'In today’s fast-paced urban life, everyone wants a slice of nature in their home—without the added stress of daily plant care.  Low-maintenance indoor plants are the perfect solution. They thrive in typical indoor conditions, need little watering or sunlight, and add unmatched beauty and health benefits to your living space. \n Here’s our list of the top 10 low-maintenance indoor plants perfect for beginners, frequent travelers, or anyone looking for fuss-free greenery.',
             details: [
      {
        title: "Snake Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/Sansevieria_Golden_Long_-_Snake_Plant.jpg?v=1746087730",
        desc: "A hardy plant that tolerates low light and erratic watering, the Snake Plant is ideal for bedrooms and living rooms. Its upright leaves with variegated patterns add a modern, sculptural look.",
        care: "Water only when soil is dry."
      },
      {
        title: "ZZ Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-zz-plant-black-with-round-ceramic-pot-round_30806cdb-c40d-46da-96e6-e46314e81613.jpg?v=1736914236",
        desc: "Known for its waxy leaves and upright structure, the ZZ Plant can handle low light, dry air, and forgetful owners.",
        care: "Needs watering only once every two weeks."
      },
      {
        title: "Money Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/Money-Plant-Marble-Queen-Photoroom.webp?v=1735616800",
        desc: "Trailing vines and decorative foliage make the Money Plant Marble Queen a charming addition to any home.",
        care: "Grows well in water or soil. Just keep it near indirect light."
      },
      {
        title: "Areca Palm",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/areca-palm-main.jpg?v=1735664236",
        desc: "The Areca Palm adds tropical vibes with minimal effort. It helps purify indoor air and flourishes in diffused sunlight.",
        care: "Water when the topsoil feels dry."
      },
      {
        title: "Golden Money Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/Money_Plant_Green_-_Good_Luck_Plant.jpg?v=1744915169",
        desc: "With cascading vines and heart-shaped leaves, Pothos is easy to propagate and tolerates various light conditions.",
        care: " Trim regularly to encourage fuller growth."
      },
      {
        title: "Peace Lily",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/peace-lily-on-table.jpg?v=1735305718",
        desc: "With occasional white blooms, Peace Lily purifies air and thrives in low light.",
        care: "Mist regularly and avoid overwatering."
      },
      {
        title: "Aloe Vera",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-aloevera_1a6537c2-ffed-4e2d-8921-ec841771ac25.jpg?v=1735618431",
        desc: "This healing plant is not just great for burns and skincare—it’s also one of the lowest-maintenance succulents around.",
        care: "Needs bright, indirect light and sparse watering."
      },
      {
        title: "Spider Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-flowering-plants-variegated-spider-lily.jpg?v=1735617519",
        desc: "A resilient hanging plant, the Spider Plant can thrive in neglect. It also produces baby plantlets easily.",
        care: "Allow soil to dry between watering."
      },
      {
        title: "Arrowhead Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-syngonium-lemon-with-ceramic-pot.jpg?v=1735616551",
        desc: "This beautiful vining plant is great for desks or shelf displays. Comes in several color variations.",
        care: "Thrives in humid corners and partial shade."
      },
       {
        title: "Rubber Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-baby-rubber-plant-variegated.jpg?v=1735617758",
        desc: "Bold, glossy leaves make the Rubber Plant a popular interior decor choice.",
        care: "Wipe leaves occasionally and avoid direct sun."
      },
    ]
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbd3YmhCJvReCJN7gina4oTQ8_vLeQ-2VmPIPEDdqvw&s=10',
            // title: 'Camera',
        },
        {
            img: 'https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1610074066643-OP8HDJUWUH8T5MHN879K/Snake+Plant.jpg?format=1000w',
            title: '10 Best \n Indoor Summer \n Plants',
            hoverText: 'Rising summer heat creates a challenge for you to keep your home cool and fresh. Even though you may be using air conditioning, room coolers and fans, having indoor summer plants is an organic, natural way to cool down. \n the temperature in your home and add aesthetic appeal while doing it. Indoor summer plants improve the air quality and enhance home decor.',
             details: [
      {
        title: "Snake Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/Sansevieria_Golden_Long_-_Snake_Plant.jpg?v=1746087730",
        desc: "A hardy plant that tolerates low light and erratic watering, the Snake Plant is ideal for bedrooms and living rooms. Its upright leaves with variegated patterns add a modern, sculptural look.",
        care: "Water only when soil is dry."
      },
      {
        title: "ZZ Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-zz-plant-black-with-round-ceramic-pot-round_30806cdb-c40d-46da-96e6-e46314e81613.jpg?v=1736914236",
        desc: "Known for its waxy leaves and upright structure, the ZZ Plant can handle low light, dry air, and forgetful owners.",
        care: "Needs watering only once every two weeks."
      },
      {
        title: "Money Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/Money-Plant-Marble-Queen-Photoroom.webp?v=1735616800",
        desc: "Trailing vines and decorative foliage make the Money Plant Marble Queen a charming addition to any home.",
        care: "Grows well in water or soil. Just keep it near indirect light."
      },
      {
        title: "Areca Palm",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/areca-palm-main.jpg?v=1735664236",
        desc: "The Areca Palm adds tropical vibes with minimal effort. It helps purify indoor air and flourishes in diffused sunlight.",
        care: "Water when the topsoil feels dry."
      },
      {
        title: "Chinese Evergreen",
        img: "https://m.media-amazon.com/images/I/61ccMntr9ZL._AC_UF1000,1000_QL80_.jpg",
        desc: "One of the best summer house plants to own if you have air-conditioning. Chinese Evergreen improves air quality and maintains humidity levels in the room. ",
        care: "Watering once a week is enough."
      },
      {
        title: "Peace Lily",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/peace-lily-on-table.jpg?v=1735305718",
        desc: "With occasional white blooms, Peace Lily purifies air and thrives in low light.",
        care: "Mist regularly and avoid overwatering."
      },
      {
        title: "Aloe Vera",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-aloevera_1a6537c2-ffed-4e2d-8921-ec841771ac25.jpg?v=1735618431",
        desc: "This healing plant is not just great for burns and skincare—it’s also one of the lowest-maintenance succulents around.",
        care: "Needs bright, indirect light and sparse watering."
      },
      {
        title: "Spider Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-flowering-plants-variegated-spider-lily.jpg?v=1735617519",
        desc: "A resilient hanging plant, the Spider Plant can thrive in neglect. It also produces baby plantlets easily.",
        care: "Allow soil to dry between watering."
      },
      {
        title: "Boston Fern Plant",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4_YS9lAZWOGQtVzUkbj9a20rFCAnjeEzSdz_2jqgX1PUC4y5GQF2CKUJE2CFjcIW-xbi_4uF7in1yR0BVv72h5rYFjO7846UFKpHUGBqP&s=10",
        desc: "Boston Fern is another one of the best indoor plants for summer in India. Its bright green fronds increase moisture levels in the indoor space. It helps to keep the room air fresh and is very decorative. ",
        care: "Water the ferns to keep the soil moist."
      },
       {
        title: "Rubber Plant",
        img: "https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-baby-rubber-plant-variegated.jpg?v=1735617758",
        desc: "Bold, glossy leaves make the Rubber Plant a popular interior decor choice.",
        care: "Wipe leaves occasionally and avoid direct sun."
      },
    ]
        },
        {
            img: 'https://i.pinimg.com/736x/04/60/25/046025adbbcb97132bba4e120950e941.jpg',
            // title: 'Hats',
        },
        {
            img: 'https://i.pinimg.com/564x/39/1f/a4/391fa42a413a29c1f426c19da32b848e.jpg',
            title: 'How to Choose \n the Perfect \n Indoor Plant \n for Your Space',
        },
        {
            img: 'https://cdn.mos.cms.futurecdn.net/2GX46LfZeFT8V4WnmQxeJo-1200-80.jpg',
            // title: 'Basketball',
        },
        {
            img: 'https://cdn11.bigcommerce.com/s-er6we2l3gw/images/stencil/2000x2000/products/26914/160995/220106_5__11524.1762870039.jpg?c=1',
            title: '10 Best \n Flowering Plants \n for Your\n Pollinator Gardens',
            hoverText: `Want to turn your garden into the hottest hangout spot for bees, butterflies, and all things buzzy? You’re in the right place!Whether you’ve got a sunny balcony or a backyard bursting with potential, planting a pollinator-friendly garden is the easiest way to add colour, charm, and life to your green space.
                        We’ve rounded up the top 10 flowering plants that will have pollinators swarming in `,
                         details: [
      {
        title: "Vincas Plant",
        img: "data:image/jpeg;base64,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",
        desc: "Vinca is like the cool, low-maintenance friend every garden needs! With its vibrant blooms and nectar-rich centres, it’s a total hit with bees and butterflies. Plus, it thrives in heat and keeps blooming nonstop, attracting pollinators 24/7!",
      },
      {
        title: "Petunias",
        img: "data:image/jpeg;base64,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",
        desc: "Petunias are the life of the garden party with their bright, trumpet-shaped blooms! Their sweet fragrance and vivid colours make them the perfect pollinator-attracting flowers. The best part? They bloom like crazy all season long!",
      },
      {
        title: "Salvia Plant",
        img: "https://goldenhillsfarm.in/media/product_images/hdgd_Tdn2vuI.jpg",
        desc: "Looking for flowers that attract pollinators and look stunning while doing it? Well, you've found it! Salvia is basically a five-star buffet for pollinators! Its tall, nectar-rich spikes are a favourite for bees, butterflies, and even hummingbirds.",
      },
      {
        title: "Marigold",
        img: "https://mybageecha.com/cdn/shop/products/Marigold_Garland_Orange.jpg?v=1746637192",
        desc: "Marigolds are the golden charmers of any garden! The sunny blooms of these timeless pollinator-attracting flowers not only attract bees and butterflies but also help repel unwanted pests.",
      },
      {
        title: "Snapdragons ",
        img: "https://hips.hearstapps.com/hmg-prod/images/snapdragon-flowers-in-a-garden-royalty-free-image-1714227096.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*",
        desc: "Snapdragons are pure garden magic with their dragon-shaped blooms and irresistible colours! Pollinators, especially bumblebees, love squeezing into those quirky flowers for a nectar treat.",
      },
      {
        title: "Cosmos",
        img: "https://nanthavanathil.in/wp-content/uploads/2022/06/images-2022-06-27T091918.537.jpeg",
        desc: "Cosmos are the free-spirited wildflowers your pollinator garden dreams of! With their daisy-like blooms and swaying stems, they’re a butterfly favourite. ",
      },
      {
        title: "Dahlia Plant",
        img: "https://www.allthatgrows.in/cdn/shop/files/DahliaLargeSemiPink.jpg?v=1719398846",
        desc: "Dahlias are like floral fireworks—big, bold, and bursting with colour! Their layered petals and sweet nectar make them a pollinator magnet, especially for bees. ",
      },
      {
        title: "Poppy Plant",
        img: "https://www.seedbasket.in/image/cache/catalog/Products/Flowers/Indian-Poppy-550x550.jpg",
        desc: "Poppies bring the drama with their delicate, tissue-like petals and bold colours! These eye-catching blooms are packed with pollen, making them a buzzing hotspot for bees.",
      },
      {
        title: "Aster Plant",
        img: "https://manbhawannursery.in/cdn/shop/files/aster.webp?v=1760430436",
        desc: "Asters are the late bloomers that keep the party going when others wind down! Their star-shaped flowers are a magnet for butterflies and bees craving nectar in the cooler months. The perfect pollinator flowers to extend your garden’s bee season!",
      },
       {
        title: "Lupins Plant",
        img: "https://organicbazar.net/cdn/shop/products/Untitled-design-2022-06-03T182714.042.jpg?v=1761472717&width=1445",
        desc: "Lupins are the garden’s vertical showstoppers, with tall, colourful spikes that attract bees like magic! Packed with nectar, they’re a favourite pit stop for pollinators. ",
      },
    ]
        },
        {
            img: 'https://i.pinimg.com/1200x/8b/c5/d3/8bc5d35722347841ab31e10cb2bb0d3f.jpg',
            // title: 'Mushrooms',
        },
        {
            img: 'https://www.satyamkraft.in/cdn/shop/files/hanging1_425x425.jpg?v=1745213823',
            title: '10 Large \n Decorative Pots \n For Indoor Plants',
            hoverText: `Large decorative pots for indoor plants enhance the beauty of the interior space to a great extent. They serve as the elegant house for the plants and also transform the entire look of any area. Many pots are available in various shapes, materials, designs, and sizes in Kyari. An appropriate selection of pots can make one's indoor garden easy, fun, and full of life. \nHere’s a compiled list of ten large indoor planters that will change the outlook of your indoor garden.`,
              details: [
      {
        title: "Exotic LED Planter- 7",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Exotic_LED_Planter_480x480.webp?v=1733380861",
        desc: "The wonderful Exotic LED planter combines functionality and modernity. This 7” rattan pot not only acts as an attractive vessel for your plants but also has additional embedded LED lights for a magnificent glow. ",
      },
      {
        title: "Exotic LED Planter- 8",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Exotic_LED_Planter_8_480x480.webp?v=1733380933",
        desc: `Another striking option is the Exotic LED Planter 8", that can easily carry a small bushy plant. This vibrant pot adds a playful touch to any room with its bright, textured, and fun design. The built-in LED feature not only illuminates your plants but also creates an inviting atmosphere. `,
      },
      {
        title: "Black-Grey Planters",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Black-Grey_Planters_with_Stand_480x480.webp?v=1733381004",
        desc: "For a modern and sophisticated approach, you can opt for the Black-Grey Planters with Stand. These large indoor planters are built to elevate the plants. It makes them the focus of decor in any particular room.",
      },
      {
        title: "Metallic Gold Planters",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Metallic_Gold_Planters_with_Stand_480x480.webp?v=1733381083",
        desc: "If you want to add an elaborate, stylish element to your indoor space, you can’t go wrong with the Metallic Gold Planters with Stand. These large decorative pots for indoor plants come with stands, which not only increase their height.",
      },
      {
        title: "Baby Pink Cylinder Planters",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Baby_Pink_Cylinder_Planters_with_Stand_480x480.webp?v=1733381157",
        desc: "If you are someone who loves posh design, these Baby Pink Cylinder Planters with Stand will do a great job. These large indoor planters can be used with different types of plants, such as lilies",
      },
      {
        title: "Semi Oval Amber Gold Planter",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Semi_Oval_Amber_Gold_Planter_with_Stand_480x480.webp?v=1733381221",
        desc: "The Semi Oval Amber Gold Planter with Stand has a strikingly uncommon shape that is sure to be an eye-catcher wherever it is placed. You can also gift these long pots for decoration from Kyari on special occasions.",
      },
      {
        title: "Honey Gold Metal Pot",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Honey_Gold_Metal_Pot_with_Stand_480x480.webp?v=1733381279",
        desc: "The Honey Gold Metal Pot with Stand is a surprising mix of beauty and strength. This planter is built so well that it can hold heavy plants and contributes to the beauty of your house decor without being an eyesore. ",
      },
      {
        title: "Midnight Black Metal Pot",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Midnight_Black_Metal_Pot_with_Stand_480x480.webp?v=1733381346https://cdn.shopify.com/s/files/1/0872/9457/4870/files/pg-flowering-plants-variegated-spider-lily.jpg?v=1735617519",
        desc: "The Midnight Black Metal Pot with Stand is an option that offers a classic appeal. These large decorative pots for indoor plants serve as an ornamental exhibit in any room because of their simple yet solid support structure.",
      },
      {
        title: "Story Planters",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/2_Story_Planters_480x480.webp?v=1733381404",
        desc: "If you want a fantastic indoor garden design, two-story planters are the ones for you. The planters can be used for any type of plant.",
      },
       {
        title: "Metallic Golden Pot",
        img: "https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Metallic_Golden_Pot_With_Stand_480x480.webp?v=1733381460",
        desc: "For those who are confident and willing to make a statement in their home decor, the Metallic Golden Pot With Stand is the one to consider. It has a shining decorative element with its acute shape and expert design. ",
      },
    ]
        },
        {
            img: 'https://i.pinimg.com/736x/39/5e/67/395e67215b60a04a003e2b3214b8f482.jpg',
            // title: 'Sea star',
        },
        {
            img: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:240,cw:1440,ch:1080,q:80,w:1440/CtdMpL87kVinsu5bAMLshn.jpeg',
            title: 'Bike',
        },
    ];

    const [open, setOpen] = React.useState(false);
    const [selectedBlog,setSelectedBlog]=useState(null)
    const handleClickOpen = (item) => {
        setSelectedBlog(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const [textOpen,setTextOpen]=useState(null)
    const [textClose,setTextClose]=useState(false)
    return (
        <div>
            <Header color="#051F20"/>
            <Container className='text-center mt-5 mb-4'>
                <Typography variant='h3' sx={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: '500', color: '#051F20' }}>
                    The Blog
                </Typography>
                <Typography variant='body1' sx={{ fontFamily: '"Inter", sans-serif', fontWeight: '700', color: '#235347', textAlign: 'center', mb: 2 }}>
                    Discover expert tips and practical guides for thriving indoor plants.
                </Typography>
                <Row className=''>
                    <Col>
                        <ImageList cols={3} gap={16} rowHeight={350}>
                            {itemData.map((item, index) => (
                                <ImageListItem
                                    key={item.img}
                                    onMouseEnter={() => {
                                        if (item.title || item.hoverText) {
                                            setHover(index);
                                        }
                                    }
                                    }
                                    onMouseLeave={() => setHover(null)}
                                    sx={{ overflow: "hidden", }}>
                                    <Box sx={{
                                        height: { xs: 220, md: 350 }, backgroundImage: hover === index ? "none" : `url(${item.img})`,
                                        backgroundColor: hover === index ? "#235347" : "transparent", backgroundSize: "cover", backgroundPosition: "center", position: "relative", display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        p: 2,
                                    }}
                                    >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                inset: 0,//for reduce brightnes
                                                background: "rgba(0,0,0,0.35)",
                                            }}
                                        />

                                        <Box sx={{ position: "absolute", display: 'flex', justifyContent: 'center', textAlign: 'center', color: "#DAF1DE", whiteSpace: 'pre-line', background: hover == index ? 'none' : 'rgba(225,225,225,0.08)', backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(15px)', }}>
                                            {hover == index ? <p className='mx-3' style={{ textAlign: 'start' }}>{item.hoverText} </p> : <h1 className='text-center'> {item.title}</h1>}

                                        </Box>
                                        {hover == index ? <Box sx={{ position: 'absolute', bottom: 20 }}>
                                            <Button onClick={()=>handleClickOpen(item)} variant='contained' sx={{ backgroundColor: '#8EB69B' }}>Step Inside</Button>
                                        </Box> : ''}
                                    </Box>
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Col>
                </Row>
            </Container>

            <Dialog 
            slotProps={{
                paper:{
                    sx:{backgroundColor: '#DAF1DE', display: 'flex', flexDirection: 'column', alignItems: 'center'}
                }
            }}
                fullScreen
                open={open}
                onClose={handleClose}
                slots={{
                    transition: Transition,
                }}
            >
               
               {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <Box sx={{ width: '90%', maxWidth: '1200px', mt: 5, border: '2px solid #8EB69B' }}>
             <AppBar sx={{ position: 'static', background :'transparent', boxShadow: 'none' }}>
                    <Toolbar>
                        <IconButton
                            // edge="start"
                           sx={{ color:"#051F20"}}
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1, color: '#051F20', textAlign: 'center', fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }} variant="h3" component="div">
                            {selectedBlog?.title}
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button> */}
                    </Toolbar>
                </AppBar>
            <DialogContent >
          <DialogContentText sx={{fontFamily: '"Inter", sans-serif', fontWeight: 400, color: '#235347', mb: 5}}>{selectedBlog?.hoverText}</DialogContentText>
          <div className="blogAnimation-row">
                  <div className="blogAnimation-col">
                   
                 {[...(selectedBlog?.details || []), ...(selectedBlog?.details || [])]?.map((item,index)=>(
                   
                    <Card sx={{ width: 260, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: '#FFFFFF' }}>
                <CardContent>
                   <Box component='img' src={item?.img} sx={{ width: '100%', objectFit: 'cover'}}/>
                </CardContent>
                <CardActions>
                  {textOpen==index?<div className='px-3' style={{color: '#235347',  width: '100%', position: 'absolute', bottom: 0, left: 0, backgroundColor: '#FFFFFF' }}>
                    <p className='text-start mb-0'>{item?.desc}<br/>{item.care ? (<><b>Care Tip:</b> {item.care}</>) :''}</p>
                    <Button sx={{ mx: '35%' }} variant='text' onClick={()=>setTextOpen(null)}><KeyboardDoubleArrowDownIcon sx={{fontSize: '34px', color: '#8EB69B'}}/></Button>
                  </div>:<Button onClick={()=>setTextOpen(index)} size="small" sx={{ mx: '28%', color: '#051F20' }}>{item?.title}</Button>}
                </CardActions>
                </Card>
              ))}
                  </div>
                </div>
                <DialogTitle id="scroll-dialog-title" sx={{color: '#051F20'}}>Final Thoughts</DialogTitle>
                          <DialogContentText sx={{fontFamily: '"Inter", sans-serif', fontWeight: 400, color: '#235347' }}>You don’t need to be a plant expert to enjoy a vibrant, green indoor space. These low-maintenance indoor plants are perfect for every lifestyle—from beginners to busy professionals.</DialogContentText>
          <DialogContentText sx={{fontFamily: '"Inter", sans-serif', fontWeight: 400, color: '#235347' }}>Discover more options in our Indoor Plants Collection and bring effortless greenery to your home today!</DialogContentText>

        </DialogContent>
            
        </Box>
        </Dialog>
        </div>
    )
}

export default Blogs