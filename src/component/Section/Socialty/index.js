import React from 'react'
import { StyleSheet, View, FlatList } from "react-native";
import tailwind from 'tailwind-rn';
import Title from "../../Title";
import CardSocialty from "../../Card/CardSocialty"

const DATA = [
    {
      id: '1',
      title: 'GadedtIn',
      image: 'https://yt3.ggpht.com/ytc/AKedOLT5o5W3kpZY3Y7Jgs6Ln-v23v7Ddhv50Fb87waS=s900-c-k-c0x00ffffff-no-rj',
      name: 'GadedtIn',
      type: 'Technology',
      repotation: '80,7',
      infulnce: '90,3',
      typeInterest: [
        { type: "food", color: '#1C2826' },
        { type: "bike", color: '#D64550' },
        { type: "music", color: '#EA9E8D' },
        { type: "company", color: '#DAEFB3' },
      ],
      nickName: "Glossy Goods",
      level: 999,
      verification: true
    },
    {
        id: '2',
        title: 'Biore',
        image: 'https://kao-h.assetsadobe3.com/is/image/content/dam/sites/kao/www-kao-com/id/id/news/products/biore_logo_news.jpg?fmt=png-alpha&wid=319',
        name: 'Biore',
        type: 'Skincare',
        repotation: '87,0',
        infulnce: '90,1',
        typeInterest: [
            { type: "bike", color: '#D64550' },
            { type: "music", color: '#EA9E8D' },
            { type: "computer", color: '#EEF4D4' },
            { type: "food", color: '#1C2826' },
        ],
        nickName: "Glossy Ajah",
        level: 870,
        verification: false
    },
    {
        id: '3',
        title: 'Nike',
        image: 'https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg',
        name: 'Nike',
        type: 'Sport',
        repotation: '83,7',
        infulnce: '68,2',
        typeInterest: [
            { type: "computer", color: '#EEF4D4' },
            { type: "bike", color: '#D64550' },
            { type: "music", color: '#EA9E8D' },
            { type: "company", color: '#DAEFB3' },
        ],
        nickName: "Glossy Wahh",
        level: 700,
        verification: true
    },
  ];

const SectionSocialty = () => {
    return (
        <View style={[styles.section, tailwind("mt-10 px-4 pt-6 pb-4")]}>
            <Title title={"Meet Socialty"} link={"Learn"} />
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={({ item }) => 
                    <CardSocialty 
                        title={item.title}
                        verification={item.verification}
                        image={item.image} 
                        type={item.type} 
                        repotation={item.repotation}
                        infulnce={item.infulnce}
                        interest={item.typeInterest}
                        nickName={item.nickName}
                        level={item.level}
                    />
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#F2F2F2',
        flex: 1
    }
});

export default SectionSocialty