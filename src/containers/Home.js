import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { fetchYelpData } from '../redux/actions';
import SummaryRow from '../components/SummaryRow';
import ListRow from '../components/ListRow';
import getTotalPtWithRatings from '../utils/getTotalPtWithRatings';
import getAverageRating from '../utils/getAverageRating';
import getTotalNumberOfReviews from '../utils/getTotalNumberOfReviews';
import getBizByDesc from '../utils/getBizByDesc';

class Home extends Component {
  state = {
    location: '',
    savedSearch: '',
    totalPtInArea: null,
    totalPtWithRating: null,
    averageRating: null,
    totalNumberOfReviews: null,
    bizByDesc: null,
  };

  onSearchPress = () => {
    this.props.fetchYelpData(this.state.location).then(() => {
      this.setState({
        savedSearch: this.state.location,
        totalPtInArea: this.props.results.total,
        totalPtWithRating: getTotalPtWithRatings(this.props.results.businesses),
        averageRating: getAverageRating(this.props.results.businesses),
        totalNumberOfReviews: getTotalNumberOfReviews(
          this.props.results.businesses
        ),
        bizByDesc: getBizByDesc(this.props.results.businesses),
      });

      Keyboard.dismiss();
    });
  };

  renderSummary = () => {
    if (this.props.results) {
      return (
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryHeader}>Summary</Text>
          <Text style={styles.summarySubHeader}>
            {this.state.savedSearch} (1 mile radius)
          </Text>
          <View>
            <SummaryRow
              label={'Total Number'}
              data={this.state.totalPtInArea}
            />
            <SummaryRow
              label="Total with Ratings"
              data={this.state.totalPtWithRating}
            />
            <SummaryRow
              label="Average Rating"
              data={this.state.averageRating}
            />
            <SummaryRow
              label="Total Number of Reviews"
              data={this.state.totalNumberOfReviews}
            />
          </View>
        </View>
      );
    }

    return null;
  };

  renderList = () => {
    if (this.state.bizByDesc) {
      return (
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.bizByDesc}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItemContainerStyle}>
                <ListRow
                  imageUrl={item.image_url}
                  name={item.name}
                  rating={item.rating}
                  reviewCount={item.review_count}
                  address={item.location.address1}
                  city={item.location.city}
                  state={item.location.state}
                />
              </View>
            )}
          />
        </View>
      );
    }

    return;
  };

  render() {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
          <Spinner
            visible={this.props.isLoading}
            textContent={'Searching...'}
            textStyle={styles.spinnerText}
          />
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Physical Therapy Yelp Finder</Text>
          </View>
          <View style={styles.locationContainer}>
            <TextInput
              style={styles.locationInput}
              placeholder="Enter a city location"
              autoCorrect={false}
              autoCapitalize="none"
              underlineColorAndroid={'transparent'}
              onChangeText={location => this.setState({ location })}
              value={this.state.text}
            />
          </View>
          <View style={styles.searchButtonContainer}>
            {this.state.location ? (
              <TouchableOpacity
                style={styles.searchButton}
                onPress={this.onSearchPress}
              >
                <Text style={styles.searchBtnText}>Search</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.searchButtonEmpty} disabled>
                <Text style={styles.searchBtnText}>Search</Text>
              </TouchableOpacity>
            )}
          </View>
          {this.renderSummary()}
          {this.renderList()}
        </View>
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  results: PropTypes.shape({
    businesses: PropTypes.array,
    total: PropTypes.number,
    region: PropTypes.object,
  }),
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

Home.defaultProps = {
  results: [],
  error: '',
  isLoading: false,
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 30,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  spinnerText: {
    color: '#FFF',
  },
  headerContainer: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationContainer: {
    width: '100%',
  },
  locationInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  searchButtonContainer: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  searchButton: {
    backgroundColor: '#428bca',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  searchButtonEmpty: {
    backgroundColor: '#A0A0A0',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  searchBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
  summaryContainer: {
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    padding: 7,
  },
  summaryHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summarySubHeader: {
    fontSize: 14,
    fontStyle: 'italic',
    paddingBottom: 10,
  },
  listContainer: {
    flex: 1,
    paddingTop: 10,
  },
  listItemContainerStyle: {
    padding: 5,
    borderTopWidth: 0.4,
    borderTopColor: '#ccc',
    flexDirection: 'row',
  },
});

function mapStateToProps(state) {
  return { results: state.results, isLoading: state.isLoading };
}

export default connect(mapStateToProps, { fetchYelpData })(Home);
