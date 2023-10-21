import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "../CustomButton/index";
import { styles } from "./styles";

const SwitchAvatar = ({ avatar, setAvatar, errorAvatar, handleChooseAvatar }) => {
  return (
    avatar ? (
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: avatar }} style={styles.avatar} />

        <CustomButton 
          typeButton={'button'}
          actionButton={'delete'}
          textButton={'Remove avatar'}
          onPress={() => { setAvatar('') }}
        />
      </View>
    ) :
      <View style={[styles.avatarWrapper, { marginBottom: errorAvatar ? 12 : 0 }]}>
        <TouchableOpacity style={styles.chooseAvatar} onPress={handleChooseAvatar}>
          <Text style={styles.iconChooseAvatar}>+</Text>
        </TouchableOpacity>
        {!avatar ? <Text style={styles.errorText}>{errorAvatar}</Text> : ''}
      </View>
  )
}

export default SwitchAvatar;
