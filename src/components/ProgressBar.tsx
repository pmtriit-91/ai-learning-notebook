import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';

interface ProgressBarProps {
  value: number; // Phần trăm hoàn thành (0 - 100)
  completedCount: number;
  totalCount: number;
  showLabels?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  completedCount,
  totalCount,
  showLabels = true,
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      {showLabels && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
            Tiến độ hoàn thành: <span style={{ fontWeight: 700, color: '#10b981' }}>{completedCount}</span>/{totalCount} bài học
          </Typography>
          <Typography variant="body2" color="primary.main" sx={{ fontWeight: 700 }}>
            {value}%
          </Typography>
        </Box>
      )}
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            borderRadius: 5,
            background: 'linear-gradient(90deg, #3b82f6 0%, #10b981 100%)',
          },
        }}
      />
    </Box>
  );
};
