import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { Lesson, LessonStatus } from '../types/lesson';
import { StatusBadge } from './StatusBadge';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface LessonCardProps {
  lesson: Lesson;
  status: LessonStatus;
}

export const LessonCard: React.FC<LessonCardProps> = ({ lesson, status }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.2s, box-shadow 0.2s',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) => theme.shadows[4],
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 700,
              color: 'text.secondary',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Bài {lesson.lessonNumber}
          </Typography>
          <StatusBadge status={status} />
        </Box>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            mb: 1.5,
            color: 'text.primary',
          }}
        >
          {lesson.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineClamp: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {lesson.description}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {lesson.concepts.map((concept) => (
            <Chip
              key={concept}
              label={concept}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.75rem',
                backgroundColor: 'grey.50',
                color: 'grey.700',
              }}
            />
          ))}
        </Box>
      </CardContent>

      <Box
        sx={{
          p: 2,
          pt: 0,
          borderTop: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {lesson.estimatedMinutes && (
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
            <AccessTimeIcon fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="caption">{lesson.estimatedMinutes} phút</Typography>
          </Box>
        )}
        <Button
          size="small"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate(`/lesson/${lesson.id}`)}
          sx={{ fontWeight: 600 }}
        >
          Học ngay
        </Button>
      </Box>
    </Card>
  );
};
