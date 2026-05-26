import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { Phase, Lesson, LessonProgress } from '../types/lesson';
import { LessonCard } from './LessonCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface RoadmapCardProps {
  phase: Phase;
  lessonsList: Lesson[];
  progressMap: { [lessonId: string]: LessonProgress };
  defaultExpanded?: boolean;
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  phase,
  lessonsList,
  progressMap,
  defaultExpanded = false,
}) => {
  const phaseLessons = lessonsList.filter((l) => phase.lessonIds.includes(l.id));
  const completedCount = phaseLessons.filter((l) => progressMap[l.id]?.status === 'completed').length;
  const totalCount = phaseLessons.length;
  const isFinished = completedCount === totalCount && totalCount > 0;

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{
        mb: 2.5,
        borderRadius: '12px !important',
        border: '1px solid',
        borderColor: isFinished ? 'success.light' : 'divider',
        boxShadow: 'none',
        '&::before': { display: 'none' }, // Loại bỏ viền trên mặc định của MUI
        backgroundColor: isFinished ? 'rgba(16, 185, 129, 0.02)' : 'background.paper',
        overflow: 'hidden',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          px: 3,
          py: 1.5,
          backgroundColor: isFinished ? 'rgba(16, 185, 129, 0.04)' : 'rgba(248, 250, 252, 0.8)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mr: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {isFinished ? (
              <CheckCircleIcon color="success" />
            ) : (
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: 'primary.main',
                }}
              />
            )}
            <Typography variant="h6" component="h2" sx={{ fontWeight: 700, fontSize: '1.125rem' }}>
              {phase.title}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              backgroundColor: isFinished ? 'success.main' : 'grey.200',
              color: isFinished ? 'white' : 'text.primary',
              px: 1.5,
              py: 0.5,
              borderRadius: 20,
              fontSize: '0.75rem',
            }}
          >
            Đã xong {completedCount}/{totalCount}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 3 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {phase.description}
        </Typography>

        <Grid container spacing={2.5}>
          {phaseLessons.map((lesson) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={lesson.id}>
              <LessonCard
                lesson={lesson}
                status={progressMap[lesson.id]?.status || 'not-started'}
              />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
