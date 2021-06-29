import React from 'react'
import { StyleSheet, View, Image, Text } from "react-native";
import tailwind from 'tailwind-rn';
import Title from "../../Title";
import Forward from "../../../../assets/forward.svg"

const dataPerks = [
    {
      id: '1',
      title: 'Traveling',
      image: {
          imageFirst: 'https://media.wired.com/photos/5b64db3717c26f0496f4d62d/125:94/w_1976,h_1486,c_limit/Canon-G7XII-SOURCE-Canon.jpg',
          imageSecond: 'https://s0.bukalapak.com/img/05239082531/s-330-330/data.png.webp',
          imageThrid: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXC1mptyNynvOnrd7CB3CEimDAp0EAI1LaQ&usqp=CAU',
          imageFourth: 'https://www.jakartanotebook.com/images/products/101/63/25841/2/tas-ransel-canvas-retro-vintage-black-1.jpg',
          imageFiveth: 'https://www.silverkris.com/wp-content/uploads/2018/05/Nature-and-Adventure-1920x1069-960x530.jpg',
          imageSixth: 'https://cdn.mos.cms.futurecdn.net/UvfE7zdbndm9cf7JxkwJVe.jpg'
      },
      startfrom: 800
    },
    {
        id: '2',
        title: 'Flex Item',
        image: {
            imageFirst: 'https://www.harapanrakyat.com/wp-content/uploads/2020/02/tas-ransel-mini-wanita.jpg',
            imageSecond: 'https://cdn.idntimes.com/content-images/community/2021/02/fromandroid-93a3e9a8a96f9f641463755fca6282be.jpg',
            imageThrid: 'https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg',
            imageFourth: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpm35tmzmyOVw2H7dMMWSB-sH3eRUqWr4fAnhmbvfm6l6G078rFTM2zXGNmpOQgvekec&usqp=CAU',
            imageFiveth: 'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-pro-og-202009?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1601432262000',
            imageSixth: 'https://media2.bulgari.com/f_auto,q_auto/production/dwb54b9a55/images/images/1266331.png'
        },
        startfrom: 999
      },
  ];

const SectionPerks = () => {
    return (
        <View style={[styles.section, tailwind("px-4 pt-6 pb-4")]}>
            <Title title={"Perks"} link={"See All"} />
            {dataPerks.map((item, idx) => {
                const imageData = item.image
                return (
                    <View key={idx} style={tailwind('mb-6')}>
                        <View style={tailwind('flex-row justify-between mb-1')}>
                            <View style={{ width: '25%', paddingRight: 12 }}>
                                <View style={{flex: 1}}>
                                    <Image style={[styles.imageFull, styles.shadow, tailwind('mr-4')]} source={{ uri: imageData.imageFirst }} />
                                </View>
                            </View>
                            <View style={{ width: '25%', paddingRight: 12 }}>
                                <View style={{flex: 1}}>
                                    <Image style={[styles.imageFull, styles.shadow, tailwind('mr-4')]} source={{ uri: imageData.imageSecond }} />
                                </View>
                            </View>
                            <View style={{ width: '25%', paddingRight: 12 }}>
                                <View style={{flex: 1}}>
                                    <Image style={[styles.imageShort, styles.shadow, tailwind('mb-2')]} source={{ uri: imageData.imageThrid }} />
                                    <Image style={[styles.imageHigh, styles.shadow, tailwind('mb-2')]} source={{ uri: imageData.imageFourth }} />
                                </View>
                            </View>
                            <View style={{ width: '25%' }}>
                                <View style={{flex: 1}}>
                                    <Image style={[styles.imageHigh, styles.shadow, tailwind('mb-2')]} source={{ uri: imageData.imageFiveth }} />
                                    <Image style={[styles.imageShort, styles.shadow, tailwind('mb-2')]} source={{ uri: imageData.imageSixth }} />
                                </View>
                            </View>
                        </View>
                        <View style={tailwind('flex-row justify-between')}>
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.startfrom}>Start from SC {item.startfrom}</Text>
                            </View>
                            <Forward style={styles.iconForward} fill={"#000"} />
                        </View>
                    </View>
                )
            })}
            
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#F7F7F7',
        flex: 1
    },
    imageFull: {
        resizeMode: 'cover', 
        width: '100%', 
        height: 150,
        overflow: 'hidden',
        borderRadius: 6,
    },
    imageShort: {
        resizeMode: 'cover', 
        width: '100%', 
        height: 45,
        overflow: 'hidden',
        borderRadius: 6
    },
    imageHigh: {
        resizeMode: 'cover', 
        width: '100%', 
        height: 100,
        overflow: 'hidden',
        borderRadius: 6
    },
    shadow: {
        backgroundColor:'#000',
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Proxima-Bold'
    },
    startfrom: {
        fontSize: 20,
        fontFamily: 'Proxima-Light'
    },
    iconForward: {
        width: 35,
        height: 35
    }
});

export default SectionPerks