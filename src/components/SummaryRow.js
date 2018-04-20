import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default function SummaryRow(props) {
  const { label, data } = props;

  return (
    <Text style={styles.label}>
      {label}: <Text style={styles.data}>{data}</Text>
    </Text>
  );
}

SummaryRow.propTypes = {
  label: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SummaryRow.defaultProps = {
  label: '',
  data: '',
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: '700',
  },
  data: {
    fontWeight: 'normal',
  },
});
