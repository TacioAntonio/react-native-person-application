import * as ImagePicker from 'expo-image-picker';

export const handleChooseAvatar = async (setAvatar) => {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.cancelled) {
        setAvatar(result.assets[0].uri);
    }
}