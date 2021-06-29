import React from 'react'
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import tailwind from 'tailwind-rn';
import Title from "../../Title";
import CardRatings from "../../Card/CardRatings"

const DATA = [
    {
      id: '1',
      image: 'https://icon2.cleanpng.com/20180629/jxy/kisspng-head-shoulders-classic-clean-shampoo-head-shou-head-shoulders-5b35f544e27605.8780971015302628529276.jpg',
      backround: 'https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?size=626&ext=jpg',
      name: 'Shampo Head & Shoulder',
      ratings: '4.8',
      review: '120',
      branch: 'Head & Shoulders',
      date: "Today, 12:30am",
      textline: "Here Goes The Users’ Shoutout Message",
      subtextline: "Shoutout on Rating_Parameter",
      user_ratings: [
          {
            name: 'johan',
            image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
          },
          {
            name: 'johan',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyFOqF-qBToJUCUSiBJxRaawdlpr2sO5vFKQwE_Go8vcvaAdE_l0nlADjqKT9nO3DB2Y&usqp=CAU'
          },
          {
            name: 'johan',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWLfB6wGuMaV1o9QCgiav6umzn73yM-QfM8AUWCaeIRaNnlF8lx4Tscl6mT8Z4fVtzf4&usqp=CAU'
          },
          {
            name: 'johan',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWLfB6wGuMaV1o9QCgiav6umzn73yM-QfM8AUWCaeIRaNnlF8lx4Tscl6mT8Z4fVtzf4&usqp=CAU'
          }
      ],
      scm: '400'
    },
    {
        id: '2',
        image: 'https://www.pngfind.com/pngs/m/11-112842_code-nike-white-cap-png-transparent-png.png',
        backround: 'https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?size=626&ext=jpg',
        name: 'Hat Nike',
        ratings: '4.3',
        review: '120',
        branch: 'Nike',
        date: "Today, 12:30am",
        textline: "Here Goes The Users’ Shoutout Message",
        subtextline: "Shoutout on Rating_Parameter",
        user_ratings: [
            {
              name: 'johan',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyFOqF-qBToJUCUSiBJxRaawdlpr2sO5vFKQwE_Go8vcvaAdE_l0nlADjqKT9nO3DB2Y&usqp=CAU'
            },
            {
              name: 'Amar',
              image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIWLfB6wGuMaV1o9QCgiav6umzn73yM-QfM8AUWCaeIRaNnlF8lx4Tscl6mT8Z4fVtzf4&usqp=CAU'
            },
            {
              name: 'Ayisah',
              image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
              name: 'Umar',
              image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            }
        ],
        scm: '200'
      },
      {
        id: '3',
        image: 'https://e7.pngegg.com/pngimages/541/415/png-clipart-motorcycle-helmets-skull-daytona-helmets-motorcycle-helmets-technic-motorcycle.png',
        backround: 'https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?size=626&ext=jpg',
        name: 'Helm Skull',
        ratings: '4.8',
        review: '120',
        branch: 'KYT',
        date: "Today, 12:30am",
        textline: "Here Goes The Users’ Shoutout Message",
        subtextline: "Shoutout on Rating_Parameter",
        user_ratings: [
            {
                name: 'johan',
                 image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                name: 'Ayisah',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                name: 'Amar',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                name: 'Amar',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                name: 'Amar',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            },
            {
                name: 'Amar',
                image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
            }
        ],
        scm: '300'
      },
  ];

const SectionRatings = () => {
    return (
        <View style={[styles.section, tailwind("px-4 pt-6 pb-4")]}>
            <Title title={"Ratings"} link={"See All"} />
            <ScrollView style={tailwind('mb-4')} horizontal showsHorizontalScrollIndicator={false}>
                <Text style={styles.navLink}>All</Text>
                <Text style={styles.navLink}>SPORTS</Text>
                <Text style={styles.navLink}>SNACKS</Text>
                <Text style={styles.navLink}>AUTOMOTIVE</Text>
                <Text style={styles.navLink}>SKINCARE</Text>
            </ScrollView>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={({ item }) => 
                    <CardRatings 
                        name={item.name} 
                        backround={item.backround}
                        image={item.image}
                        ratings={item.ratings}
                        review={item.review} 
                        branch={item.branch} 
                        date={item.date} 
                        textline={item.textline} 
                        subtextline={item.subtextline}
                        user_ratings={item.user_ratings}
                        scm={item.scm}
                    />
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#E6E6E6',
        flex: 1
    },
    navLink: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 6
    }
});

export default SectionRatings