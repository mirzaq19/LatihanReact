import React from 'react';
import { View, Text, Button } from 'react-native';

class PageTwo extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text style={{ marginBottom: 16 }}>Page Two</Text>
        <Button
          title={"Ke Page Bottom Bar"}
          onPress={() => navigation.navigate("BottomBarContainer")} />
        <View style={{ marginVertical: 8 }}></View>
        <Button
          title={"Ke Page Teknologi"}
          onPress={() => navigation.navigate("PageTech")} />
        <View style={{ marginVertical: 8 }}></View>
        <Button
          title={"Ke Page One"}
          onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default PageTwo;