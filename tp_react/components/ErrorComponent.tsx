import {useAppSelector} from "../hooks/redux-hook";
import {Modal, Text} from "react-native";
import {useState} from "react";


export default function ErrorComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    const error = useAppSelector(state => state.errorReducer.error);

    return (
        <>
            {(error != null) ? <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <Text>{error}</Text>
            </Modal> : <></>}
        </>
    )
}