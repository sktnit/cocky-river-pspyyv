import React from "react";
import { FlatList, CheckBox } from "react-native";
const TodoList = ({ data, handleCheck }) => {
  const renderItems = ({ item, index }) => (
    <View>
      <CheckBox value={item.checked} onValueChange={() => handleCheck(index)} />
      <Text>{item.text}</Text>
    </View>
  );
  return (
    <View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={({ item }) => item.id.toString()}
          renderItems={renderItems}
        />
      ) : (
        <Text>No Item</Text>
      )}
    </View>
  );
};

export default React.memo(TodoList);
