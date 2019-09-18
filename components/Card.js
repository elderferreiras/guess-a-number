import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black', //ios only
        shadowOffset: { //ios only
            width: 0,
            height: 2
        },
        shadowRadius: 6, //ios only
        shadowOpacity: 0.26, //ios only
        backgroundColor: 'white', //ios only
        elevation: 5, //android only
        padding: 20,
        borderRadius: 10
    }
});

export default Card;