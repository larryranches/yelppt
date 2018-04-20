import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

export default function ListRow(props) {
  const { imageUrl, name, rating, reviewCount, address, city, state } = props;

  return (
    <View style={styles.container}>
      <View style={styles.imageConatiner}>
        {imageUrl ? (
          <Image style={styles.image} source={{ uri: imageUrl }} />
        ) : (
          <View style={styles.imageEmpty} />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.infoLabelText}>
          Rating: <Text style={styles.infoText}>{rating}</Text>
        </Text>
        <Text style={styles.infoLabelText}>
          Review Count: <Text style={styles.infoText}>{reviewCount}</Text>
        </Text>
        <Text style={styles.infoLabelText}>
          Address: <Text style={styles.infoText}>{address}</Text>
        </Text>
        <Text style={styles.infoLabelText}>
          City: <Text style={styles.infoText}>{city}</Text>
        </Text>
        <Text style={styles.infoLabelText}>
          State: <Text style={styles.infoText}>{state}</Text>
        </Text>
      </View>
    </View>
  );
}

ListRow.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  rating: PropTypes.number,
  reviewCount: PropTypes.number,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
};

ListRow.defaultProps = {
  imageUrl: '',
  name: '',
  reviewCount: 0,
  address: '',
  city: '',
  state: '',
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
  },
  imageConatiner: {
    justifyContent: 'center',
    paddingRight: 5,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageEmpty: {
    width: 100,
    height: 100,
    backgroundColor: '#CCC',
  },
  infoContainer: {
    flex: 2,
  },
  nameText: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  infoLabelText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  infoText: {
    fontWeight: 'normal',
  },
});
