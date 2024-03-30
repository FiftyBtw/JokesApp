import React, { useEffect, useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {useAppDispatch, useAppSelector} from "../hooks/redux-hook";
import {clearError} from "../redux/actions/errorActions";
import {DarkTheme, LightTheme, theme} from "../assets/Theme";

export default function ErrorComponent() {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.errorReducer.error);
    const styles = useDynamicStyles();

    useEffect(() => {
        if (error) {
            setModalVisible(true);
        }
    }, [dispatch]);

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
                    onRequestClose={handleClose}
                    testID="error-modal">
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.errorMessage} testID="error-message">{error}</Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={handleClose}
                                testID="close-button">
                                <Text style={styles.closeButtonText}>Fermer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

            )}
        </>
    );
}

const useDynamicStyles = () => {
    const appTheme = useAppSelector(state => state.themeReducer.theme);
    const currentTheme = appTheme ? DarkTheme : LightTheme;
    return StyleSheet.create({
        modalBackground: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        modalContainer: {
            width: '80%',
            backgroundColor: currentTheme.dark ? currentTheme.colors.indigoColor : currentTheme.colors.whiteColor,
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderRadius: 20,
            borderColor: currentTheme.colors.border,
            borderWidth: 1,
        },
        closeButton: {
            marginTop: 10,
            backgroundColor: theme.colors.darksalmonColor,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: currentTheme.colors.border,
            alignItems: 'center',
        },
        closeButtonText: {
            color: theme.colors.whiteColor,
            fontSize: 18,
            fontWeight: 'bold',
        },
        errorMessage: {
            color: currentTheme.colors.textSecondary,
            fontSize: 18,
            textAlign: 'center',
            marginBottom: 15,
        },
    })
}
