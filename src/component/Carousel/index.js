import React, { useState, useCallback, useRef } from 'react'
import { StyleSheet, View, Text, Image, Dimensions  } from "react-native";
import Carousel from 'react-native-snap-carousel';
import tailwind from 'tailwind-rn';
  
const horizontalMargin = 20;
const slideWidth = 280;
const win = Dimensions.get('window')
const sliderWidth = win.width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;

const Carousels = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselItems, setCarouselItems] = useState([
        {
            image: 'https://gadgetren.com/wp-content/uploads/2020/10/iPhone-12-Mini-Water-ressist.jpg',
        },
        {
            image: 'https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/11/04/3911688500.jpg',
        },
        {
            image: 'https://id.stylekorean.com/data/promotion/promo_mobile_banner_121.jpg',
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAxb6XSfYoXIKP6ZMjlLaR2bRjicLwYhI_Q&usqp=CAU',
        },
        {
            image: 'https://ik.imagekit.io/tvlk/blog/2020/01/shutterstock_1117372664-1024x726.jpg?tr=dpr-1,w-675',
        },
      ]);
    const ref = useRef(null);

    const renderItem = useCallback(({ item, index }) => (
        <View style={styles.slide}>
            <View style={styles.slideInnerContainer, styles.boxWithShadow}>
                <Image 
                    source={{ uri: item.image }}
                    style={styles.imageSlider}
                />
            </View>
        </View>
    ), []);

    return (
        <View>
            <Carousel
                loop
                layout="default"
                ref={ref}
                data={carouselItems}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                layoutCardOffset={18}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    slide: {
      height: itemHeight,
    },
    slideInnerContainer: {
        overflow: "hidden",
        width: '100%'
    },
    imageSlider: {
        borderRadius: 16 / 2,
        width: '100%',
        resizeMode: "cover",
        height: '100%',
        
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,  
        elevation: 5
    },
  });

export default Carousels