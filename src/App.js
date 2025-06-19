// Add a todo item using a text input and button.
// Display the list of todos with the ability to:
// Mark as completed
// Delete a todo
// Persist data using AsyncStorage.
// Add a filter (All, Active, Completed) using buttons.
// (Bonus) Animate list changes using LayoutAnimation or Reanimated

import React from "react";
import { View, Pressable, InputText } from "react-native";
import TodoList from "./TodoList";
const App = () => {
  const [inputText, setInputText] = React.useState("");
  const [id, setId] = React.useState(0);
  const handleInput = (event) => {
    if (event?.target?.value) setInputText(event.target.value);
  };
  const handleClick = () => {
    if (inputText.trim() !== "") {
      setListItem((prev) => [
        ...prev,
        {
          id: id,
          text: inputText,
          completed: false,
        },
      ]);
      setInputText("");
      setId(id + 1);
    }
  };

  const handleCheck = (index) => {
    const listItemCopy = listItem;
    listItemCopy[index] = {
      ...listItemCopy[index],
      completed: !listItemCopy[index].completed,
    };
    setListItem(listItemCopy);
  };
  const [listItem, setListItem] = React.useState([]);
  return (
    <View>
      <InputText onChangeText={handleInput}></InputText>
      <Pressable onPress={handleClick}>
        <Text>Add Todo</Text>
      </Pressable>
      <TodoList data={listItem} handleCheck={handleCheck} />
    </View>
  );
};

export default React.memo(App);
