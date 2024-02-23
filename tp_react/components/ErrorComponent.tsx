import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/redux-hook";
import {clearError} from "../redux/actions/errorActions";
import {theme} from "../assets/Theme";

export default function ErrorComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    const error = useAppSelector(state => state.errorReducer.error);

-    useEffect(() => {
        if (error != null) {
            setModalVisible(true);
        }
    }, [error]);

    const handleClose = () => {
        setModalVisible(false);
        dispatch(clearError());
    }

    return (
        <>
            {error && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={handleClose}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.errorMessage}>{error}</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={handleClose}>
                                <Text style={styles.closeButtonText}>Fermer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
        </>
    );
}


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: theme.colors.indigoColor,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        borderColor: theme.colors.whiteColor,
        borderWidth: 1,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: theme.colors.darksalmonColor,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.whiteColor,
        alignItems: 'center',
    },
    closeButtonText: {
        color: theme.colors.whiteColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorMessage: {
        color: theme.colors.greyColor,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15,
    },
});
