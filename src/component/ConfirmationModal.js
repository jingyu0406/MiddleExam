import React from "react";
import {Text} from "@gluestack-ui/themed";
import { View, StyleSheet, TouchableOpacity, Modal } from "react-native";

const ConfirmationModal = ({ isVisible, onConfirm, onCancel, MarkerId, borrowed }) => { // 將 Modal 改為 ConfirmationModal
    const confirmText = borrowed ? "還傘" : "借傘";
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onCancel}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>要於此地{confirmText}嗎?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={() => onConfirm(MarkerId)} style={styles.button}>
                            <Text style={styles.buttonText}>確定</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onCancel} style={styles.button}>
                            <Text style={styles.buttonText}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明背景色
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginHorizontal: 20
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
}
);
export default ConfirmationModal