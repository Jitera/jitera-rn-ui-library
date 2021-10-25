import React, { Fragment, useCallback } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { RneFunctionComponent } from '../../../theme/helpers';
import useStyles from './styles';

type ActionType = {
  key: string;
  title: string;
};
export type ActionsModalProps = {
  actions: Array<ActionType>;
  onSelect?: (value: string) => void;
  onBack?: () => void;
  cancelText?: string;
};

export const ActionsModal: RneFunctionComponent<ActionsModalProps> = (
  props
) => {
  const { cancelText, actions, onSelect, onBack } = props;
  const [t] = useTranslation();

  const styles = useStyles();

  const handleBack = useCallback(() => {
    onBack && onBack();
  }, [onBack]);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.actionModalContainer}
        onPress={handleBack}
      >
        {actions
          ? actions.map((item: ActionType, index: number) => {
              return (
                <Fragment key={`${item.key}`}>
                  <TouchableOpacity
                    key={`${item.key}`}
                    onPress={() => onSelect && onSelect(item.key)}
                    style={[
                      styles.actionItem,
                      index === 0 ? styles.actionItemTop : {},
                      index + 1 === actions.length
                        ? styles.actionItemBottom
                        : {},
                    ]}
                  >
                    <Text style={styles.actionModalItemText}>{item.title}</Text>
                  </TouchableOpacity>
                  {index + 1 < actions.length ? (
                    <View style={styles.divider} />
                  ) : null}
                </Fragment>
              );
            })
          : null}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={onBack}
          style={[styles.actionItem, styles.cancel]}
        >
          <Text style={styles.actionModalCancelText}>
            {cancelText || t('cancel')}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </>
  );
};
