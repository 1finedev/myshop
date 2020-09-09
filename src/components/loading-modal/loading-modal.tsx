import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';

import styles from './loading-modal.styles';
import {useGetLoadingState} from '../../redux/loadingSlice/loadingSlice.selectors';

const LoadingModal: React.FC = () => {
  const {isLoading} = useGetLoadingState();
  return (
    <Modal visible={isLoading} transparent animationType="fade">
      <View style={styles.container}>
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModal;
