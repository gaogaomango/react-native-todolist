import React, { Component } from "react";
import { View, Text } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
    const setPlace = this.props.places.find(place => {
      return place.key == key;
    });
    console.log(this.props);
    Navigation.push(this.props.componentId, {
      component: {
        name: "awesome-places.PlaceDetailScreen",
        passProps: {
          selectedPlace: setPlace
        },
        options: {
          topBar: {
            title: {
              text: setPlace.name
            }
          },
          bottomTabs: {
            visible: false
          }
        }
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
