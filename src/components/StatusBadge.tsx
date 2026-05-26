import React from 'react';
import { Chip } from '@mui/material';
import type { LessonStatus } from '../types/lesson';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface StatusBadgeProps {
  status: LessonStatus;
  size?: 'small' | 'medium';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'small' }) => {
  switch (status) {
    case 'completed':
      return (
        <Chip
          icon={<CheckCircleIcon />}
          label="Đã hoàn thành"
          color="success"
          size={size}
          variant="filled"
          sx={{ fontWeight: 500 }}
        />
      );
    case 'learning':
      return (
        <Chip
          icon={<AutorenewIcon className="animate-spin-slow" />}
          label="Đang học"
          color="primary"
          size={size}
          variant="filled"
          sx={{
            fontWeight: 500,
            '& .animate-spin-slow': {
              animation: 'spin 3s linear infinite',
            },
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' },
            }
          }}
        />
      );
    case 'not-started':
    default:
      return (
        <Chip
          icon={<RadioButtonUncheckedIcon />}
          label="Chưa học"
          variant="outlined"
          size={size}
          sx={{ color: 'text.secondary', borderColor: 'divider', fontWeight: 500 }}
        />
      );
  }
};
